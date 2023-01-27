import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body, #root{
    height:100%;
    background: black;

    } 

  html{
    font-size: 62.5%;
  }

  *, button, input{
    border:0;
    outline:0;
    font-family: sans-serif;
  }
  button{
    cursor:pointer;
  }
`;
