export const useBlogStyle = ({ theme }) => {
  const style = {
    blogRelativeBox: {
      position: "relative",
      minHeight: "400px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -70,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('/main.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    blogAbsoluteBox: {
      position: "absolute",
      top: -70,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.70)",
      zIndex: 0,
    },
    // blogTextBox: {
    //   display: "flex",
    //   flexDirection: "column",
    //   color: "white",
    //   textAlign: "center",
    //   padding: "0px 200px",
    //   gap: "10px",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   zIndex: 1,
    // },
    blogGridContainer: { padding: "50px 0px" },
    blogGridItemImageBox: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 8px 6px 0px rgba(225, 11, 11, 0.50)",
      width: "100%",
      overflow: "hidden",
      borderRadius: "16px",
      height: "75vh",
      position: "relative",
      backgroundColor: "red",
    },
    blogGridItemImg: { width: "100%", height: "100%", objectFit: "cover" },
    blogGridItemTextBox: {
      height: "50%",
      padding: "15px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    blogGridItemTitleText: {
      fontSize: "18px",
      fontWeight: 600,
      textAlign: "start",
    },
    blogGridItemDescriptionText: {
      fontSize: "16px",
      fontWeight: 400,
      textAlign: "start",
    },
    blogGirdItemReadMoreLink: {
      backgroundColor: "transparent",
      color: "#E10B0B",
      fontSize: "18px",
      borderRadius: "8px",
      padding: "10px",
      fontWeight: 600,
      border: "none",
      textDecoration: "underline",
      cursor: "pointer",
    },
    inspirationalGridItemStack: {
      width: "100%",
      border: "1px solid #000000",
      borderRadius: "8px",
      py: 2,
    },
    inspirationalGridItemTextItalic: {
      width: "50%",
      fontWeight: 800,
      fontSize: "16px",
      fontStyle: "italic",
    },
    inspirationalGridAuthor: { fontWeight: 500, fontSize: "14px" },
    cardStyle: {
      width: "100%",
      boxShadow: "0px 8px 6px 0px rgba(225, 11, 11, 0.50)",
      pb: 3,
    },
    cardAreaStyle: {
      ".MuiCardActionArea-focusHighlight": {
        background: "transparent",
      },
      cardMediaStyle: { objectFit: "cover" },
    },
  };
  return style;
};
