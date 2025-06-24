import styled, { ThemeProvider } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        primary: string;
        secondary: string;
      };
    }
}

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid red;

  &:hover {
    background-color: #0056b3;
  }
`;


function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary Themed Button</Button>
    
    </ThemeProvider>
  );
}

export default Footer;
