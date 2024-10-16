import { Box, Grid, Typography, styled, useTheme, } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// const StyledFooter = styled(Box)(({ theme }) => ({
//   minHeight: '30vh',
//   background: theme.palette.primary.main,
//   padding: theme.spacing(3),

// }))
const data1 = [

  {
    heading: "Volunteers",
  },
  {
    heading: "Giving Online",
  },
  {
    heading: "Our Blogs",
  },
  {
    heading: "About us",
  },
  {
    heading: "Contact us",
  },
];
const data2 = [
  {
    heading: "Our Benefits",
  },
  {
    heading: "Mission & Vision",
  },
  {
    heading: "Ministries",
  },
  {
    heading: "Job & Residencies",
  },
  {
    heading: "Wedding & Funerals",
  },
];
const data3 = [
  {
    heading: "Children",
  },
  {
    heading: "Care",
  },
  {
    heading: "Institute",
  },
  {
    heading: "Human Rights",
  },
  {
    heading: "Family",
  },
  {
    heading: "Leadership",
  },
];
const data4 = [
  {
    icon: <FacebookIcon />,
    heading: "Facebook",
  },
  {
    icon: <TwitterIcon />,
    heading: "Twitter",
  },
  {
    icon: <InstagramIcon />,
    heading: "Instagram",
  },
];
const data5 = [
  {
    heading: "+421 233 256 256",
  },
  {
    heading: "+421 233 256 256",
  },
];
const Footer = () => {
  const theme = useTheme()
  return (
    <>

      <Box
        sx={{
          position: 'relative',
          minHeight: '500px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('/img34.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          },
          // position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 28, 50, 0.95)',
            zIndex: 0,
          }}
        />
        <Grid container spacing={10} sx={{ zIndex: 2, padding: '50px 50px' }}>
          <Grid item lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{
                fontSize: "22px",
                fontWeight: 600,
                color: "white",
                textAlign: "start",
              }}>Events</Typography>
              {data1.map((val, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  {val.heading}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "start",
                }}
              >
                Shekinah Haitian SDA Church
              </Typography>
              {data2.map((val, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  {val.heading}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "start",
                }}
              >
                Ministries
              </Typography>
              {data3.map((val, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  {val.heading}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "start",
                }}
              >
                Social Media
              </Typography>
              {data4.map((val, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  {val.icon && (
                    <span style={{ marginRight: "10px", color: "white" }}>
                      {val.icon}
                    </span>
                  )}
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "white",
                      textAlign: "start",
                    }}
                  >
                    {val.heading}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "start",
                }}
              >
                Sales Contact
              </Typography>
              {data5.map((val, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <LocalPhoneIcon sx={{ color: "white" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "white",
                      textAlign: "start",
                    }}
                  >
                    {val.heading}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "start",
                }}
              >
                GET THE NEWSLETTER
              </Typography>
              <Box sx={{ display: "flex", flexWrap: 'wrap', gap: '10px' }}>
                <input
                  style={{
                    border: "none",
                    padding: " 5px 10px",
                    borderRadius: "8px",
                  }}
                  placeholder="Text..."
                  type="text"
                ></input>
                <button
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "5px 10px ",
                    border: "none",
                    borderRadius: "8px",
                    color: 'black',
                    fontWeight: 600
                  }}
                >
                  submit
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
