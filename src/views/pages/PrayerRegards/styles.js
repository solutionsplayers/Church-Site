export const usePrayerRegardsStyle = ({ theme }) => {
  const style = {
    paragraphStack: {
      paddingTop: 8,
      paddingBottom: 15,
      width: "80%",
      marginX: "auto",
    },
    successText: {
      fontWeight: 800,
      fontSize: { xs: "28px", sm: "34px", lg: "40px" },
      lineHeight: "46.88px",
    },
    textStack: { fontWeight: 400, fontSize: "22px", textAlign: "start" },
    hyperLinkText: {
      textDecoration: "underline",
      color: "#0578FF",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "25.78px",
    },
  };
  return style;
};
