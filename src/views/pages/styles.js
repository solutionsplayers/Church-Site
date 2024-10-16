export const usePageStyle = ({ theme }) => {
  const style = {
    contactBoxRelative: {
      position: "relative",
      minHeight: "400px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -70,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('/img13.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contactBoxAbsolute: {
      position: "absolute",
      top: -70,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(10, 28, 50, 0.6)",
      zIndex: 0,
    },
    contactBoxTextParagraph: {
      display: "flex",
      flexDirection: "column",
      color: "white",
      textAlign: "center",
      gap: { sm: '5px', lg: '10px' },
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
    },
    contactUsText: { fontSize: { xs: "28px", sm: "32px" }, fontWeight: 600 },
    contactUsParagraph: {
      fontSize: { xs: "16px", sm: "20px" },
      fontWeight: 400,
      textAlign: "center",

    },
    contactUsFormText: {
      fontSize: "24px",
      fontWeight: 700,
      textAlign: "start",
    },
    inputsBox: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      marginTop: "40px",
      width: "100%",
    },
    inputStyle: {
      border: "none",
      backgroundColor: "#EDE8E8",
      color: "gray",
      padding: " 15px 20px",
      borderRadius: "8px",
    },
    // contactUsButton: {

    // },
    contactUsImageBox: {
      maxWidth: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contactUsImg: { maxWidth: "100%", height: "100%", objectFit: "contain" },
  };
  return style;
};
