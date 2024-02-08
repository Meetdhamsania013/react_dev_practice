import styled from "styled-components";

export const MenuSidebarStyled = styled.div`
  width: 110px;
  min-width: 110px;
  height: 100vh;
  background: ${(props) => props?.theme?.general?.teal};
  padding: 38px 0px;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;

  .logoWrap {
    padding-bottom: 15px;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .menuiconWrap {
    height: calc(100vh - 200px);
    overflow: auto;
    .menuItems {
      padding-top: 26px;
      padding-bottom: 16px;
      min-height: 81px;
      .active {
        .iconItem {
          display: inline-block;
          padding: 0px 3px;
          border-radius: 3px;
          &::after {
            content: "";
            height: 3px;
            background: white;
            width: 100%;
            display: block;
          }
          svg {
            opacity: 1;
            margin-bottom: 4px;
          }
        }
      }
      svg {
        cursor: pointer;
        width: 32px;
        height: 32px;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .profileiconWrap {
    position: absolute;
    bottom: 0;
    padding: 15px 5px 30px 5px;
    width: 100%;
    svg {
      cursor: pointer;
    }
    :before {
      content: "";
      width: 85%;
      display: block;
      height: 1px;
      margin: 10px 0px 30px 10px;
      background-color: ${(props) => props?.theme?.general?.lightBlue};
      opacity: 0.4;
    }
  }
`;

export const PopoverStyled = styled.div`
  .profilePopup {
    background-color: ${(props) => props?.theme?.general?.white};
    color: ${(props) => props?.theme?.text?.black};
    width: 100%;
    padding: 0px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    ul {
      list-style: none;
      padding: 0px;
      margin-bottom: 0;
      li {
        padding: 0px 0px;
        cursor: pointer;
      }
    }
  }
`;
