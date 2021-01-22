import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  heigth:100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;


`;

export const Button = styled.button`
color:white;
background: linear-gradient(-75deg,#db80ff,#ca45ff,#716fff,#43baff,#43f2ff);
width: 250px;
height: 40px;
font-size: 20px;
border-radius: 20px;
border: none;
`;

export default GlobalStyle;
