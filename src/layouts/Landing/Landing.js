import { AppBar, Box, Button, Grid, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom/dist";
import Body from "./Body";
import NavBarLinks from "./NavBarLinks";
import Page from "../../components/page/page";
import Nav from "../../components/AppBar/Header";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Footer from "./Footer";
import LandingContent from "./LandingContent";
import { useLandingStyle } from "./styles";
import { Text } from "../../components/base";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Divider } from 'primereact/divider';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from "../../views/pages/Slider";
// const events = [
//   {
//     title: 'Purposeful Living',
//     description:
//       'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
//     time: 'Sunday at 10.00am',
//   },
//   {
//     title: 'Purposeful Living',
//     description:
//       'Embark on a Heartwarming Journey this Sunday at 10.00am at our Magical Christmas Eve.',
//     time: 'Sunday at 10.00am',
//   },

// ];
const Landing = ({ setProgress }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isDsmall = useMediaQuery(theme.breakpoints.down('xs'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  useEffect(() => {
    setProgress(30)
    setTimeout(() => {
      setProgress(100)
    }, 1000)
  }, [])

  return (
    <Page title="Welcome To Website">
      <AppBar elevation={0} sx={{ backgroundColor: 'transparent', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>

          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10px", fontSize: '20px', }}>
            <RoomOutlinedIcon sx={{ fontSize: '20px' }} />
            <Typography> 3700 W. Risinger Rd Fort Worth, TX 76123
            </Typography>
          </Box> */}
          <Box>
            <img
              src="img39.png"
              style={{
                objectFit: "cover",
                height: isSmall ? '40px' : '60px',
                width: '100%'
              }}
              alt="Logo"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: isSmall ? '10px' : "30px", paddingRight: isSmall ? '0px' : '50px', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <a href="https://www.facebook.com/shekinahsda" target="_blank" rel="noopener noreferrer">
              <FacebookOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
            </a>
            <div className={`border-r ${isSmall ? 'mx-0' : 'mx-2'} h-6 text-white`}></div>
            <InstagramIcon sx={{ fontSize: '20px' }} />
            <div className={`border-r ${isSmall ? 'mx-0' : 'mx-2'} h-6 text-white`}></div>
            <TwitterIcon sx={{ fontSize: '20px' }} />
            <div className={`border-r ${isSmall ? 'mx-0' : 'mx-2'} h-6 text-white`}></div>
            <SearchOutlinedIcon sx={{ fontSize: '20px' }} />
          </Box>
        </Toolbar>
      </AppBar>
      {/* <AppBar sx={{ position: 'fixed', mt: 5 }}>
        <Toolbar>
          This is Apppbar
        </Toolbar>
      </AppBar> */}
      <Nav position='fixed' mt={7} />
      <Box
        sx={{
          position: "relative",
          // minHeight: "700px",
          minHeight: "110vh",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -120,
            left: 0,
            width: "100%",
            height: "120vh",
            backgroundImage: `url('/main.png')`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,

          },
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -70,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(10, 28, 50, 0.80)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            // padding: { xs: "5px", sm: "0px 200px" },
            gap: isSmall ? '10px' : "20px",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: '90px',
            // paddingBottom: '70px',
            zIndex: 1,
            mb: isSmall ? '300px' : '100px'

          }}
        >
          <Typography sx={{ color: theme.palette.primary.main, fontSize: isSmall ? '20px' : '24px', fontWeight: 700, }}>Essentially Essential Community!</Typography>
          {/* <Text sx={{ fontSize: isSmall ? '24px' : '32px', fontWeight: 600, padding: '0px 5px' }}>

            A Place of Worship, Community, and Spiritual Growth.
          </Text> */}
          <Text
            sx={{
              fontSize: isSmall ? '16px' : '22px',
              fontWeight: 400,
              textAlign: "center",
              padding: isSmall ? '0 20px' : isMedium ? '0 50px' : '0 60px'
            }}
          >
            {" "}
            {/* Ensure text is on top */}

            Discover the heartwarming fellowship at <span style={{ fontSize: isSmall ? '20px' : '25px', fontWeight: 600, padding: '0px 5px', color: theme.palette.primary.main }}> Shekinah Haitian SDA Church </span> located right in your neighborhood. Welcoming you with open arms and sincere smiles, we foster a sense of belonging. Join us today for a transformative worship experience!
          </Text>
          <button
            onClick={() => navigate('/live-stream')}
            className="animated-button"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: "black",
              fontSize: isSmall ? '17px' : '22px',
              // fontSize: { xs: "20px", sm: "24px", lg: '24px' },
              borderRadius: "8px",
              padding: "10px 12px",
              border: "none",
              fontWeight: 600,
              zIndex: 100000
            }}
          >
            Watch Live Sunday
          </button>
          <Slider />
        </Box>
        {/* <Box sx={{ color: 'black', position: 'absolute', bottom: '20px', padding: '0px 30px' }}>
          <Grid container spacing={5}>
            {events.map((val, ind) => (
              <Grid item lg={6} >
                <Box sx={{ display: 'flex', gap: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', }}>
                  <RoomOutlinedIcon sx={{ color: '#E10B0B', fontSize: '3rem' }} />

                  <Box sx={{ textAlign: "start" }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Purposeful Living</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this <span style={{ color: '#E10B0B', fontWeight: 700 }}> Sunday at 10.00am </span> at our Magical Christmas Eve. </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#E10B0B' }}>See Event Detail</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}


          </Grid>
        </Box> */}


      </Box>

      <LandingContent />
      <Footer />
    </Page >

  );
};

export default Landing;
