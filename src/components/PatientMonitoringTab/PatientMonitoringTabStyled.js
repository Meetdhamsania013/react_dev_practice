import styled from "styled-components";
import IC_RIGHT_ARROW from "../../assets/images/ic_right_arrow.svg";
export const PatientMonitoringTabStyled = styled.div(({ theme, status }) => ({
  width: "100%",
}));

export const PatientMonitoringBoxStyled = styled.div(({ theme, status }) => ({
  width: "100%",
  background: theme?.general?.white,
  boxShadow: `0 6px 14px ${theme?.general?.shadow}66`,
  borderRadius: "20px",
  padding: "20px",
  marginBottom: "20px",
  border:
    status === "red"
      ? `1px solid ${theme?.status?.red}`
      : status === "amber"
      ? `1px solid ${theme?.status?.amber}`
      : status === "green"
      ? `1px solid ${theme?.status?.green}`
      : `1px solid ${theme?.status?.lightBlue}`,

  ".headerPart": {
    width: "100%",
    marginBottom: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    ".leftSide": {
      display: "flex",
      alignItems: "center",

      ".title": {
        fontSize: "22px",
        fontWeight: "700",
        marginRight: "8px",

        "@media(max-width: 800px)": {
          fontSize: "16px",
        },
      },

      ".statusDot": {
        width: "26px",
        height: "26px",
      },
    },
    ".arrow": {
      width: "5px",
      height: "10px",
      background: `url(${IC_RIGHT_ARROW}) no-repeat  0 0 / 100%`,
    },
  },
  ".ageAndIllness": {
    width: "100%",
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",

    ".age": { display: "flex", marginRight: "40px" },
    ".illness": { display: "flex" },
    ".label": { color: theme?.text?.grey, marginRight: "5px" },

    "@media(max-width: 800px)": {
      fontSize: "13px",
    },
  },
  ".content": {
    width: "100%",
    paddingTop: "30px",

    ".imageAndMeasures": {
      width: "100%",
      marginTop: "-40px",
      display: "flex",
      alignItems: "flex-end",

      "@media(max-width: 1300px)": {
        marginTop: 0,
      },
    },

    ".bodyImage": {
      width: "100%",
      maxWidth: "140px",
      paddingRight: "10px",
      display: "flex",

      img: {
        maxWidth: "100%",
        height: "auto",
      },

      "@media(max-width: 1300px)": {
        maxWidth: "130px",
      },
    },

    ".ecgBox": {
      width: "calc(100% - 140px)",
      marginLeft: "140px",
      padding: "16px",
      borderRadius: "20px",
      border: `1px solid ${theme?.status?.lightBlue}`,
      marginBottom: "30px",

      ".title": {
        width: "100%",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",

        ".label": {
          fontSize: "12px",
          fontWeight: "600",
        },
        ".number": { margin: "0 auto" },
      },

      ".graph": {
        width: "100%",
        height: "80px",
        background: theme?.status?.lightBlue,
      },

      "@media(max-width: 1300px)": {
        width: "100%",
        marginLeft: 0,
      },
    },

    ".bodyMeasures": {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",

      ".bodyMeasure": {
        width: "50%",
        marginBottom: "12px",
        paddingLeft: "10px",
        position: "relative",

        ".statusStripe": {
          width: "3px",
          height: "100%",
          borderRadius: "3px",
          background: theme?.text?.grey,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,

          "&.red": {
            background: theme?.status?.red,
          },
          "&.amber": {
            background: theme?.status?.amber,
          },
          "&.green": {
            background: theme?.status?.green,
          },
        },

        ".label": {
          fontSize: "14px",
          fontWeight: "400",
        },

        ".value": {
          fontSize: "16px",
          fontWeight: "600",

          span: {
            color: theme?.text?.grey,
            fontSize: "14px",
            paddingLeft: "3px",
          },
        },

        "&.full": {
          width: "100%",
        },
      },

      "@media(max-width: 1300px)": {
        ".bodyMeasure": {
          width: "100%",
        },
      },

      "@media(max-width: 900px)": {
        ".bodyMeasure": {
          width: "50%",
        },
      },

      "@media(max-width: 800px)": {
        ".bodyMeasure": {
          width: "100%",
        },
      },
    },
  },
  "@media(max-width: 800px)": {
    padding: "16px",
  },
}));
