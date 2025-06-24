import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid red;

  &:hover {
    background-color: #0fedb9;
  }
  
`;

export default function Header() {
  return <Button>Click me</Button>;
}


