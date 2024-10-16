import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useBlogStyle } from "../styles";
import {
  Box,
  Grid,
  useTheme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { Text } from "../../../../components/base";
import { getAllBlogs } from "../../../../store/actions/blogActions";
import { useNavigate } from "react-router";
import Header from "../../../../components/AppBar/Header";
import Footer from "../../../../layouts/Landing/Footer";
import Page from '../../../../components/page/page'
const BlogData = ({ setProgress }) => {

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 1000)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  const [blogData, setBlogData] = useState([]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const styles = useBlogStyle({ theme });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllBlogs())
      .then((result) => {
        // console.log("========blog Array", result);
        setBlogData(result?.data?.data);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      }).finally(() => {
        setLoading(false);
      });
  }, [setBlogData, dispatch]);

  // console.log("blog data======", blogData);
  const handleBlogDetail = (data) => {
    navigate('/ministerHousing', { state: data })
  }
  return (
    <>
      <Page title="Our-Blogs">
        <Header />
        <Box
          sx={{
            position: 'relative',
            minHeight: '400px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -70,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('/img15.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
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
              top: -70,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(10, 28, 50, 0.9)',
              zIndex: 0,
            }}
          />


          <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: isSmall ? '20px' : "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

            <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
              BLOGS
            </Typography>
            <Typography sx={{ fontSize: isSmall ? '15px' : '20px', fontWeight: 400, textAlign: 'center' }}>Explore our thought-provoking blogs, where we share inspirational stories, reflections
              on faith, and updates on community events. Dive into a rich tapestry of content that
              aims to uplift, inspire, and foster a sense of connection within our church family.
            </Typography>

          </Box>
        </Box>
        <Box sx={{ padding: isSmall ? '20px' : '0px 50px 50px 50px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: "start", padding: '0px 0px 20px 0px' }}>Our Latest Blogs</Typography>

          </Box>
          {loading ? (
            <CircularProgress sx={{ display: 'block', margin: 'auto', color: theme.palette.secondary.main }} />
          ) : (

            <Grid container spacing={5} >

              {blogData.map((val, ind) => (
                <Grid key={ind} item lg={4} md={6} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // textAlign: 'center',
                      // alignItems: 'center',
                      boxShadow: "0px 8px 6px 0px rgba(61, 101, 20, 0.50)",

                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      height: '100%',
                      position: 'relative',

                    }}
                  >
                    <img
                      src={val.Image.url}
                      style={{ width: '100%', height: isSmall ? '35vh' : '50vh', objectFit: 'cover' }}
                      alt="abc"
                    />
                    <Box sx={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start' }}>{val.title}</Typography>
                        <Typography sx={{
                          fontSize: '16px',
                          fontWeight: 400,
                          textAlign: 'start',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          WebkitLineClamp: 3,
                        }}>{val.description}</Typography>
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent
                          : 'center'
                      }}>
                        <button onClick={() => handleBlogDetail(val)} style={{ backgroundColor: 'transparent', color: theme.palette.secondary.main, fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                      </div>
                    </Box>
                  </Box>


                </Grid>
              ))}

            </Grid>
          )}
        </Box>
        <Footer />
      </Page>
    </>
  );
};

export default BlogData;

//   <Box sx={styles.blogGridItemImageBox}>
//     <Box sx={{ width: "100%", height: "50%" }}>
//       <img
//         src={val?.Image?.url}
//         style={styles.blogGridItemImg}
//         alt="abc"
//       />
//     </Box>
//     <Box sx={styles.blogGridItemTextBox}>
//       <Stack>
//         <Text sx={styles.blogGridItemTitleText}>{val.title}</Text>
//         <Text sx={styles.blogGridItemDescriptionText}>
//           {val.description}
//         </Text>
//       </Stack>
//       <div>
//         <button style={styles.blogGirdItemReadMoreLink}>
//           Read More
//         </button>
//       </div>
//     </Box>
//   </Box>
