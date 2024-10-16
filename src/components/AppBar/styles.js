import { useEffect, useState } from "react";

export const useHeaderStyle = ({ theme }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    appBar: { backgroundColor: scrolling ? 'white' : 'transparent', },
    toolbar: {
      display: "flex",
      padding: '10px',
      justifyContent: "space-between",
      // backgroundColor: "transparent",
      color: "black",

    },
    menuBox: {
      display: 'flex',
      gap: "30px",
      "& >*": { fontSize: "16px", fontWeight: 600 },
    },
    // menuItem: ,
    // menuIcon: {
    //   display: { xs: "block", lg: "none" },
    //   cursor: "pointer",
    //   transform: () => "scaleY(1)",
    //   transition: "transform 0.3s ease-in-out",
    //   "&:hover": {
    //     transform: () => "scaleY(1.2)",
    //   },
    // },
  };

  return style;
};
