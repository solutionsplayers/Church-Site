import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../../components/AppBar/Header";
import Footer from "../../../layouts/Landing/Footer";

import { Text } from "../../../components/base";
import CategoriesTabs from "./molecules/CategoriesTabs";
import { useBlogStyle } from "./styles";
import BlogData from "./molecules/BlogData";

// const blogData = [
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
//   {
//     imageSrc: "/img9.png",
//     description:
//       "Explore personal stories of faith, challenges,and triumphs within our community.",
//     title: "Faith Journeys",
//   },
//   {
//     imageSrc: "/img10.png",
//     description:
//       "Shine a light on the diverse and inspiring members of our church family.",
//     title: "Community Spotlight",
//   },
//   {
//     imageSrc: "/img11.png",
//     title: "Sunday Sermons",
//     description:
//       "Access summaries or key takeaways from our impactful Sunday sermons.",
//   },
// ];

const Blog = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const styles = useBlogStyle({ theme });

  return (
    <>
      <Header />
      <Box>
        <Box sx={styles.blogRelativeBox}>
          <Box sx={styles.blogAbsoluteBox} />

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            padding: isSmall ? '30px' : isMedium ? '50px' : "0px 200px",
            marginBottom: '50px',
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
              BLOGS
            </Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>Explore our thought-provoking blogs, where we share inspirational stories, reflections
              on faith, and updates on community events. Dive into a rich tapestry of content that
              aims to uplift, inspire, and foster a sense of connection within our church family.
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ padding: "50px" }}>
          <CategoriesTabs />
        </Box> */}
        <BlogData />
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
