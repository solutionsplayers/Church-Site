import React, { useEffect, useState } from "react";
import Header from "../../components/AppBar/Header";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { contactUs } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Text } from "../../components/base";
import { usePageStyle } from "../pages/styles";
import Footer from "../../layouts/Landing/Footer";
import Page from '../../components/page/page'

const data = [
  {
    imgSrc: 'main.png',
    icon: <LocationOnOutlinedIcon sx={{ fontSize: '50px', color: '#CA9922', }} />,
    title: 'Our Location',
    location1: 'Shekinah Haitian SDA Church, Fort Worth, Texas',
    // location2: '3700 W. Risinger Rd Fort Worth, TX 76123'
  },
  {
    imgSrc: 'main.png',
    icon: <HeadsetMicOutlinedIcon sx={{ fontSize: '50px', color: '#CA9922', }} />,
    title: 'Phone Number',
    location1: ' (+55) 654 - 545 - 5418',
    location2: ' (+55) 654 - 545 - 5418',
  },
  {
    imgSrc: 'main.png',
    icon: <EmailOutlinedIcon sx={{ fontSize: '50px', color: '#CA9922', }} />,
    title: 'Email Address',
    location1: 'info@shekinahsda.org'
  },
];

const ContactUs = ({ setProgress }) => {
  const [contactUsState, setContactUsState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = usePageStyle({ theme });
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setContactUsState({
      ...contactUsState,
      [event.target.name]: event.target.value,
    });
  };

  const contactUsSubmission = () => {
    if (
      contactUsState.first_name.length &&
      contactUsState.last_name.length &&
      contactUsState.email.length &&
      contactUsState.description.length
    ) {
      setLoading(true); // Start loader

      const formData = new FormData();
      formData.append("first_name", contactUsState.first_name);
      formData.append("last_name", contactUsState.last_name);
      formData.append("email", contactUsState.email);
      formData.append("description", contactUsState.description);

      dispatch(contactUs(formData))
        .then((result) => {
          setContactUsState({
            ...contactUsState,
            first_name: "",
            last_name: "",
            email: "",
            description: "",
          });
          enqueueSnackbar(result.data.message, {
            variant: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false); // Stop loader regardless of success or failure
        });
    } else {
      alert("Fill in all the inputs");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);
  return (
    <>
      <Page title="Contact-Us">
        <Header />
        <Box sx={styles.contactBoxRelative}>
          <Box sx={styles.contactBoxAbsolute} />
          {/* Contact Us Paragraph Start */}
          <Box sx={styles.contactBoxTextParagraph}>
            <Text sx={styles.contactUsText}>Contact Us</Text>
            <Text sx={{
              fontSize: isSmall ? '17px' : '22px',
              fontWeight: 400,
              textAlign: "center",
              padding: isSmall ? '0px  30px' : isMedium ? '0px 50px' : '0px 200px',
              paddingBottom: '50px'
            }}>
              Reach out to Shekinah Haitian SDA Church through our 'Contact Us'
              page. Find our contact details, including address and phone number,
              and use the convenient form for inquiries or prayer requests. We're
              here to connect and support you on your journey of faith.
            </Text>
          </Box>
          {/* Contact Us Paragraph End */}
        </Box>
        {/* Contact Us Box Form Start */}
        <Box sx={{ padding: isSmall ? '20px' : '0px 50px', }}>
          <Grid container spacing={3}>
            {data.map((val, ind) => (
              <Grid item lg={4} sm={12} xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    minHeight: '300px',

                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${val.imgSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: -1,
                      borderRadius: '20px',
                    },

                    position: 'relative',
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
                      borderRadius: '20px',
                    }}
                  />


                  <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, padding: '0px 10px' }}>
                    {val.icon}
                    <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>
                      {val.title}
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 400, textAlign: 'center' }}>{val.location1}
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 400, textAlign: 'center' }}>{val.location2}
                    </Typography>

                  </Box>
                </Box>
              </Grid>
            ))}


          </Grid>
        </Box>
        <Box sx={{ padding: isSmall ? '20px' : "50px" }}>
          <Grid container spacing={5} columns={12}>
            <Grid item xs={12} md={12} lg={6}>
              <Text sx={styles.contactUsFormText}>Contact Us</Text>
              <Box sx={styles.inputsBox}>
                <input
                  type="text"
                  placeholder="Write Your First Name"
                  style={styles.inputStyle}
                  name="first_name"
                  values={contactUsState.first_name}
                  onChange={(event) => handleChange(event)}
                />

                <input
                  type="text"
                  placeholder="Write Your Last Name"
                  style={styles.inputStyle}
                  name="last_name"
                  values={contactUsState.last_name}
                  onChange={(event) => handleChange(event)}
                />
                <input
                  type="email"
                  placeholder="Write Your Email"
                  style={styles.inputStyle}
                  name="email"
                  value={contactUsState.email}
                  onChange={(event) => handleChange(event)}
                />

                <textarea
                  placeholder="Write Your Description"
                  style={styles.inputStyle}
                  name="description"
                  value={contactUsState.description}
                  onChange={(event) => handleChange(event)}
                  rows={7}
                ></textarea>
                <div>
                  <button
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: "black",
                      fontSize: isSmall ? '17px' : "24px",
                      borderRadius: "8px",
                      padding: "10px 40px",
                      border: "none",
                      marginTop: '',
                      position: 'relative',
                      fontWeight: 600
                    }}
                    onClick={contactUsSubmission}
                    disabled={loading}
                  >
                    {loading && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >


                      </div>
                    )}
                    {loading ? 'wait...' : 'Contact Us'}
                  </button>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6} display={isSmall ? 'none' : isMedium ? 'none' : ''}>
              <Box sx={styles.contactUsImageBox}>
                <img src="/img14.png" alt="" style={styles.contactUsImg} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: isSmall ? '20px' : '50px' }}>
          <img src="img24.png" alt="" style={{ height: '100%', width: '100%' }} />
        </Box >
        {/* Contact Us Box Form End */}
        < Footer />
      </Page>
    </>
  );
};

export default ContactUs;
