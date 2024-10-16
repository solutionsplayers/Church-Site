import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/AppBar/Header";
import Footer from "../../layouts/Landing/Footer";
const popularPost = [
  {
    img: "/img9.png",
    title: "Faith Journeys",
  },
  {
    img: "/img9.png",
    title: "Faith Journeys",
  },
  {
    img: "/img9.png",
    title: "Faith Journeys",
  },
  {
    img: "/img9.png",
    title: "Faith Journeys",
  },
  {
    img: "/img9.png",
    title: "Faith Journeys",
  },
];
const content = [
  {
    title: " Ministry of Human Rights",
    description:
      "At Shekinah Haitian SDA Church, our Ministry of Human Rights is committed to promoting justice, equality, and compassion both  within our community and beyond.Guided by the principles of faith, we strive to make a positive impact on the lives of individuals,advocating for the dignity and rights of all.",
  },
  {
    title: " Our Mission",
    description:
      "To actively engage in initiatives that foster human rights, social justice, and community welfare. We believe in creating an environment where everyone is treated with respect and compassion. ",
  },
  {
    title: "Core Values",
    description:
      "Justice: Advocating for fair and equitable treatment for all. Compassion: Demonstrating empathy and care for those facing challenges. Compassion: Demonstrating empathy and care for those facing challenges.",
  },
  {
    title: "Activities and Initiatives",
    description:
      "Explore our ongoing projects, events, and collaborations aimed at making a meaningful difference in the lives of those who may be may be marginalized or vulnerable. From community outreach programs to awareness campaigns, our Ministry of Human Rights is dedicated to being a catalyst for positive change.",
  },
  {
    title: "Get Involved",
    description:
      "Join us in our mission to be a voice for those who may not have one. Whether through volunteering, participating in events, or supporting our advocacy efforts, your involvement can contribute to building a more just and compassionate world. ",
  },
];
const MinistryHuman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Box
        sx={{
          position: "relative",
          minHeight: "400px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -70,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/img16.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
          position: "relative",
          display: "flex",
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
            backgroundColor: "rgba(0, 0, 0, 0.70)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            padding: "0px 200px",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
            {" "}
            Ministry of Human Rights
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, textAlign: "center" }}
          >
            {" "}
            At Shekinah Haitian SDA Church, our Ministry of Human Rights
            advocates for justice and compassion. Through initiatives, outreach,
            and awareness campaigns, we work to uphold the dignity and rights of
            all individuals. Join us in creating positive change. For more
            details, contact us Info@shekinahsda.org.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "50px" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, textAlign: "start" }}
        >
          Popular Post
        </Typography>
        <Grid container spacing={5}>
          {popularPost.map((val, ind) => (
            <Grid item lg={2}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img src={val.img} alt="" style={{ borderRadius: "8px" }} />
                <Typography
                  sx={{ fontSize: "18px", fontWeight: 600, textAlign: "start" }}
                >
                  {val.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: "50px 100px" }}>
        <Box>
          <img
            src="img6.png"
            style={{ width: "auto", height: "70vh", objectFit: "contain" }}
            alt=""
          />
        </Box>
        {content.map((val, ind) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                textAlign: "start",
                marginTop: "10px",
              }}
            >
              {val.title}
            </Typography>
            <Typography sx={{ textAlign: "start" }}>
              {val.description}
            </Typography>
          </Box>
        ))}
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ textAlign: "start", fontWeight: 600 }}>
            For more information or to join our Ministry of Human Rights
            initiatives, please contact{" "}
            <span style={{ color: "blue" }}> Info@shekinahsda.org.</span>
          </Typography>
          <br />
          <Typography sx={{ textAlign: "start", fontWeight: 600 }}>
            Feel free to customize the above information to better align with
            the specific activities and goals of the Ministry of Human Rights at
            Shekinah Haitian SDA Church.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MinistryHuman;
