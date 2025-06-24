import Header from './Header'
import './App.css'
import Body from './Body';
import Footer from './Footer';
// cascading, specificity, naming selectors, enforcing naming conventions, 
function App() {

  return (
    <>
      <h1>CSS in JS</h1>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App;

//Advantages--->
// Everything is component
// Dynamic styling
// Maintainable at scale

//Disadvantages-->
// Lack of portability
//Steep learning curve
// Unreadable class names



// --------->
// css-modules
// styled-components
// emotion


// import { css } from '@emotion/react';

// const buttonStyle = css`
//   background: palevioletred;
//   border-radius: 3px;
//   color: white
// `;

// const App = () => (
//   <button css={buttonStyle}>Click Me</button>
// );

// export default App;





// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//   button: {
//     background: 'palevioletred',
//     borderRadius: 3,
//   },
// });

// const App = () => {
//   // const classes = useStyles(); hook factory function from react-jss
//   return <button className={classes.button}>Click Me</button>;
// };

// export default App;