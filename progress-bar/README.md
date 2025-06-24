
# Customizable Progress Bar for React

A customizable progress bar component for React that tracks the scroll progress of a specified DOM element. This component can be used to visually represent the scroll position within any scrollable container.

## Features

- Customizable height and color
- Tracks scroll progress of a specified DOM element
- Callback function when the bottom of the element is reached
- Easy integration with React applications

## Installation

You can include the progress bar in your React project by copying the `ProgressBar.tsx` file into your components directory.

### Using npm

If you haven't already, create a React app using Create React App or any other method. Then, you can install any necessary dependencies:

```bash
npm install
```

## Usage

### Importing the Component

First, import the `ProgressBar` component into your application:

```javascript
import ProgressBar from 'my-custom-progress-bar';
```

### Adding the ProgressBar Component

You can use the `ProgressBar` component in your application by specifying the `domSelector` prop, which should match the ID of the scrollable element.

```javascript
import React from 'react';
import ProgressBar from 'my-custom-progress-bar';
import './App.css';

function App() {
  return (
    <>
      <ProgressBar domSelector="scrollableElement" />
      <div id="scrollableElement" style={{ height: '80vh', overflow: 'auto' }}>
        {/* Content goes here */}
      </div>
    </>
  );
}

export default App;
```

### Props

The `ProgressBar` component accepts the following props:

| Prop        | Type     | Default | Description                                           |
|-------------|----------|---------|-------------------------------------------------------|
| `domSelector` | `string` | -     | The ID of the DOM element to track scroll progress.   |
| `height`    | `number` | `6`     | The height of the progress bar in pixels.            |
| `color`     | `string` | `blue`  | The background color of the progress bar.            |
| `top`       | `number` | `0`     | The top position of the progress bar (in pixels).    |
| `left`      | `number` | `0`     | The left position of the progress bar (in pixels).   |
| `onBottom`  | `function` | -     | Callback function that is called when the bottom is reached. |

### Example

Here’s a complete example of how to use the `ProgressBar` component:

```javascript
import React from 'react';
import ProgressBar from 'my-custom-progress-bar';
import './App.css';

function App() {
  const handleBottomReached = () => {
    console.log('Reached the bottom!');
  };

  return (
    <>
      <ProgressBar domSelector="scrollableElement" onBottom={handleBottomReached} />
      <div id="scrollableElement" style={{ height: '80vh', overflow: 'auto' }}>
        {/* Add enough content here to enable scrolling */}
        <div style={{ height: '200vh', background: 'lightgray' }}>
          Scroll down to see the progress bar in action!
        </div>
      </div>
    </>
  );
}

export default App;
```

## Customization

You can customize the appearance of the progress bar by modifying the `height` and `color` props. The position of the progress bar can also be adjusted using the `top` and `left` props.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bugs.


