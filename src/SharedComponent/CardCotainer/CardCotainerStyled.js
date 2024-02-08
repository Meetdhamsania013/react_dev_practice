import styled from "styled-components";

export const CardContainerStyled = styled.div`
  margin-bottom: 32px;
  .card {
    background: #fff;
    border-radius: 12px;
    padding: 16px;
    border: 0;
  }
  .cardHeader {
    display: flex;
    justify-content: space-between;
    color: #001f4f;
    .card-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
    }
    .headerRight {
      text-align: right;
      button {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1fa0bd;
        text-decoration: none;
        &.cardContainerDropdown {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          text-align: right;
          letter-spacing: 0.02em;
          color: #808080;
          border: none;
          &.dropdown-toggle::after {
            display: none;
          }
        }
      }
    }
    + .card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &.cardTheme1 {
    .cardHeader {
      .card-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.01em;
      }
    }
  }
  &.cardTheme2 {
    .cardHeader {
      .card-title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0.02em;
      }
      .headerRight {
        button.cardContainerDropdown {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.02em;
          img {
            width: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
    .cardHeader {
      .card-title {
        font-size: 16px;
      }
      .headerRight {
        button {
          font-size: 13px;
        }
      }
    }
    .itemTitle {
      font-size: 16px;

      .itemSubTitle {
        font-size: 13px;
      }
    }
  }
`;
