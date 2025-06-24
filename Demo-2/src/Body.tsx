import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  padding: 10px 20px;
  border: 5px solid green;
  border-radius: 4px;
  cursor: pointer;
 
  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;

function Body() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </>
  );
}

export default Body;
