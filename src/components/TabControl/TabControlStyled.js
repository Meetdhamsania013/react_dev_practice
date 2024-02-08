import styled from "styled-components";

export const TabControlStyled = styled.div`
  .customTab {
    .nav-tabs {
      border-bottom: none;
      .nav-link {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: ${(props) => props?.theme?.text?.grey};
        padding: 0px 69px 0px 0px;
        margin-bottom: 30px;
        border: none;
        &.active {
          background: none;
          border: none;
          color: ${(props) => props?.theme?.text?.black};
          ::after {
            content: "";
            display: block;
            width: 56%;
            height: 3px;
            background-color: ${(props) => props?.theme?.general?.teal};
            margin-top: 10px;
          }
        }
        .badge {
          &.bg-primary {
            background-color: ${(props) =>
              props?.theme?.general?.teal} !important;
            padding: 8px 15px;
            margin-left: 10px;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.02em;
            color: ${(props) => props?.theme?.general?.white};
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .customTab {
      .nav-tabs {
        .nav-link {
          font-size: 18px;
        }
      }
    }
  }
`;
