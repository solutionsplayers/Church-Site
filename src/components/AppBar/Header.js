import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from "../base";
import { Images } from "../../utils/assets/images";
import { useHeaderStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../utils/helper";

const Header = (props) => {
  const { color, logo } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const styles = useHeaderStyle({ theme });
  const navigate = useNavigate();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [scrolling, setScrolling] = useState(false);
  const [logoImage, setLogoImage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setLogoImage("img36.png");
      } else {
        setScrolling(false);
        // setLogoImage(logo || "img39.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const propsStyles = {
    position: props?.position,
    marginTop: scrolling ? "0px" : props?.mt,
    background: "transparent",
    backgroundColor: scrolling ? "white" : "transparent",
    color: color || (scrolling ? "black" : "white"),
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderDrawerItems = () => (
    <List>
      {menuItems.slice(0, -1).map((menu, index) => (
        <ListItem key={index} onClick={() => navigate(menu.link)}>
          <ListItemText primary={menu.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <AppBar elevation={0} sx={props.position ? propsStyles : styles.appBar}>
        <Toolbar sx={styles.toolbar}>

          {isSmall && (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ color: color || (scrolling ? "black" : "white"), paddingLeft: '10px' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <div
            sx={{
              marginRight: (theme) => theme.spacing(2),
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                color: color || (scrolling ? "black" : "white"),
                cursor: "pointer",
                "&:hover": { color: "#E10B0B" },
              }}
            >
              {scrolling && (
                <img
                  src={logoImage}
                  style={{
                    objectFit: "cover",
                    height: "40px",
                    width: "100%",
                  }}
                  alt="Logo"
                />
              )}
            </Box>
          </div>

          <Box sx={styles.menuBox}>
            {menuItems.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.isButton ? (
                  <button
                    onClick={() => navigate("/donate")}
                    style={{
                      backgroundColor: theme.palette.secondary.main,
                      color: "white",
                      fontSize: "16px",
                      borderRadius: "8px",
                      padding: "8px 10px 8px 10px ",
                      border: "none",
                    }}
                  >
                    Donate
                  </button>
                ) : menu.name === "GO ONLINE" ? (
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      padding: "0px 20px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={() => { }}
                    onMouseLeave={() => { }}
                  >
                    <Text
                      sx={{
                        display: { xs: "none", lg: "flex", alignItems: "center", justifyContent: "center" },
                        cursor: "pointer",
                        color: color || (scrolling ? "black" : "white"),
                        "&:hover": { color: "#" },
                      }}
                      onClick={() => navigate(menu.link)}
                    >
                      {menu.name}
                    </Text>
                  </div>
                ) : (
                  <Text
                    sx={{
                      display: isSmall ? 'none' : 'flex',
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",

                      color: color || (scrolling ? "black" : "white"),
                      "&:hover": { color: "#" },
                    }}
                    onClick={() => navigate(menu.link)}
                  >
                    {menu.name}
                  </Text>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            padding: '30px 0px',
            backgroundColor: theme.palette.primary.main,
            color: 'black',
            fontWeight: 800,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          },
        }}
      >
        <IconButton
          aria-label="close drawer"
          edge="end"
          onClick={handleDrawerClose}
          sx={{ color: 'black', position: 'absolute', top: '10px', right: '10px' }}
        >
          <CloseIcon />
        </IconButton>


        {renderDrawerItems()}

      </Drawer>

      <Toolbar />
    </div>
  );
};

export default Header;
