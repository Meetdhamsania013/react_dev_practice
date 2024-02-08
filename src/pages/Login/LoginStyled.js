import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  word-wrap: break-word;
  overflow-x: hidden;
  .container {
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      max-width: 750px;
    }
  }
  @media only screen and (min-width: 992px) {
    height: 100vh;
    overflow: hidden;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 0.5rem 2rem;
  }
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .login_form {
    @media only screen and (max-width: 767px) {
      padding: 3rem 0;
    }
    max-width: 400px;
    display: inline-block;

    @media only screen and (min-width: 481px) and (max-width: 767px) {
      max-width: 100%;
      display: block;
    }

    @media only screen and (min-width: 992px) and (max-width: 1499px) {
      padding-left: 2rem;
    }

    @media only screen and (min-width: 1400px) and (max-width: 1499px) {
      max-width: 440px;
      margin-left: 3rem;
    }

    .title_block {
      @media only screen and (min-width: 1400px) {
        margin-bottom: 2.875rem;
      }
      @media only screen and (max-width: 1399px) {
        margin-bottom: 1.5rem;
      }

      .title {
        @media only screen and (min-width: 1400px) {
          margin-bottom: 1.6875rem;
        }

        @media only screen and (max-width: 1399px) {
          margin-bottom: 0.9375rem;
        }

        h2 {
          color: #000;
          font-weight: 600;
          @media only screen and (min-width: 992px) and (max-width: 1399px) {
            font-size: 1.7rem;
          }
          @media only screen and (min-width: 1400px) {
            font-size: 2.1875rem;
          }
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            font-size: 1.7rem;
          }
        }
      }
      .desc {
        p {
          @media only screen and (min-width: 1400px) {
            font-size: 1rem;
          }
          @media only screen and (min-width: 992px) and (max-width: 1399px) {
            font-size: 0.9375rem;
          }
          line-height: 1.25rem;
          color: #b9b8b8;
        }
      }
    }

    &_fields {
      .form-group {
        &:not(:last-child) {
          @media only screen and (min-width: 1400px) {
            margin-bottom: 2.6875rem;
          }
          @media only screen and (max-width: 1399px) {
            margin-bottom: 1.8rem;
          }
        }
        label {
          font-weight: 600;
          @media only screen and (min-width: 1400px) {
            font-size: 1.25rem;
            margin-bottom: 1.125rem;
          }
          @media only screen and (min-width: 992px) and (max-width: 1399px) {
            font-size: 1.125rem;
            margin-bottom: 0.75rem;
          }

          @media only screen and (max-width: 991px) {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }
          color: #263a43;
        }
        input {
          display: block;
          width: 100%;
        }
        .username {
          input {
            border: 1px solid #b1b1b1;
            border-radius: 10px;
            @media only screen and (min-width: 1400px) {
              height: 70px;
            }
            @media only screen and (min-width: 1400px) {
              font-size: 1rem;
            }
            @media only screen and (max-width: 1399px) {
              font-size: 0.9375rem;
              height: 55px;
            }
            padding: 1rem;
            border-radius: 10px;
            color: #000;
            &::placeholder {
              color: #8e8e8e;
            }
          }
        }
        .view_password {
          background-color: #fff;
          border: 1px solid #b1b1b1;
          display: flex;
          align-items: center;
          border-radius: 10px;
          overflow: hidden;
          padding-right: 1.5rem;
          input {
            border: none;
            @media only screen and (min-width: 1400px) {
              height: 70px;
            }
            @media only screen and (max-width: 1399px) {
              height: 55px;
              font-size: 0.9375rem;
            }
            padding: 1rem;
            @media only screen and (min-width: 1400px) {
              font-size: 1rem;
            }

            &::placeholder {
              color: #8e8e8e;
            }
          }
          .icon {
            cursor: pointer;
          }
        }
      }
    }
    .remember_forget {
      margin-top: 1.375rem;
      .remember_me {
        .form-check {
          min-height: auto;
          .form-check-input {
            background-color: #c4c4c4;
            border-color: #c4c4c4;
            border-radius: 2px;
            &:focus {
              box-shadow: none;
            }
            &:checked {
              background-color: ${(props) => props?.theme?.general?.teal};
              border-color: ${(props) => props?.theme?.general?.teal};
            }
          }
          .form-check-label {
            color: #8e8e8e;
            font-size: 0.875rem;
          }
        }
      }
      .forget_pass {
        a {
          color: #8e8e8e;
          @media only screen and (min-width: 1400px) {
            font-size: 1rem;
          }
          @media only screen and (max-width: 1399px) {
            font-size: 0.9375rem;
          }
          text-decoration: none;
          &:hover {
            color: inherit;
          }
        }
      }
    }
    .login_button {
      @media only screen and (min-width: 1400px) {
        margin-top: 2.875rem;
      }
      @media only screen and (max-width: 1399px) {
        margin-top: 1.7rem;
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        margin-top: 1.3rem;
      }
      button {
        width: 100%;
        border-radius: 10px;
        @media only screen and (min-width: 1400px) {
          height: 70px;
          font-size: 1.25rem;
        }
        @media only screen and (max-width: 1399px) {
          height: 55px;
          font-size: 1.125rem;
        }
        color: #fff;

        font-weight: 700;
        background-color: ${(props) => props?.theme?.general?.teal};
        border-color: ${(props) => props?.theme?.general?.teal};
      }
    }
  }
  .login_col {
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 55%;
    }
    .login-image {
      @media only screen and (min-width: 1400px) {
        padding: 10vh 0;
      }
      @media only screen and (min-width: 992px) and (max-width: 1399px) {
        padding: 5vh 0;
      }
      @media only screen and (min-width: 768px) {
        height: 100vh;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 100vw;
        background: ${(props) => props?.theme?.general?.teal};
        z-index: -1;
        transform: translateX(225px);
        @media only screen and (max-width: 767px) {
          display: none;
        }
      }

      .image {
        z-index: 99;
        img {
          z-index: 9;
          border-radius: 1.25rem;
          @media only screen and (min-width: 1400px) {
            max-height: 80vh;
          }
          @media only screen and (min-width: 992px) and (max-width: 1399px) {
            max-height: 85vh;
          }
        }
        .circle_designs {
          .circle {
            position: absolute;
            z-index: -1;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.5);
            &1 {
              width: 27px;
              height: 27px;
              top: -35px;
              right: -25px;
            }

            &2 {
              width: 39px;
              height: 39px;
              top: -18px;
              left: 50%;
              transform: translateX(-50%);
            }

            &3 {
              width: 63px;
              height: 63px;
              bottom: 221px;
              right: -15px;
            }

            &4 {
              width: 14px;
              height: 14px;
              bottom: -27px;
              left: 45%;
              transform: translateX(-50%);
            }

            &5 {
              width: 27px;
              height: 27px;
              bottom: -60px;
              right: 160px;
            }

            &6 {
              width: 45px;
              height: 45px;
              bottom: -19%;
              right: 0;
            }
          }
        }
      }
    }
  }
  .error{
    color: red;
    margin-top: 10px;
    font-weight: bold;
  }
  .form-col {
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 45%;
    }
  }
`;
