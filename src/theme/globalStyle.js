import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto !important;
  }

  body {
    font-family: 'Mulish', 'Arial', Segoe UI, helvetica, verdana, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props?.theme?.text?.black};
    background: #f8fcfd;
  }
  a{
    text-decoration: none;
    color: ${(props) => props?.theme?.text?.black};
    :hover{
      color: ${(props) => props?.theme?.text?.black};
    }
  }
  .appWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .noPadding{
    padding: 0px;
  }

  .popover-arrow{
    display: none !important; //Remove this styled to showcase arrow in appointment table
  }

  .popoverCustomStyle{
    border: 1.5px solid #1FA0BD;
    border-radius:  0 16px 16px 16px;
    margin-left: 10px;
    margin-top: -10px;
  }
  .btn-primary {
    background-color: ${(props) =>
      props?.theme?.general?.teal} !important;
      border: 1px solid ${(props) =>
        props?.theme?.general?.teal} !important;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: ${(props) => props?.theme?.general?.white};
    &:hover,
    &:active{
      background-color: ${(props) =>
        props?.theme?.general?.darkteal} !important;
        border: 1px solid ${(props) =>
          props?.theme?.general?.darkteal} !important;
    }
  }
`;
