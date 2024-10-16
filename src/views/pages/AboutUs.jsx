import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

import { Carousel } from 'primereact/carousel';
import { useDispatch } from 'react-redux';
import { getPators } from '../../store/actions/userActions';
import Page from '../../components/page/page'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const product = [
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
    {
        name: 'moaz',
        image: 'img6.png',
        price: 'ahmad'
    },
]
const AboutUs = ({ setProgress }) => {
    const [pators, setPastors] = useState([])
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const carouselKey = isSmall ? 'small' : isMedium ? 'medium' : 'large';
    const dispatch = useDispatch()
    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(100)
        }, 1000)
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const getAllPastors = () => {
        dispatch(getPators())
            .then((result) => {
                console.log("========result", result.data.data
                );
                setPastors(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllPastors()
    }, []);
    return (
        <>
            <Page title="About-Us">
                <Header color='000' />
                <Box>
                    <Box sx={{ padding: isSmall ? '20px' : "30px 60px" }}>
                        <Grid container spacing={3}>
                            <Grid item lg={6} sm={12} xs={12} md={12}>
                                <Box
                                    sx={{
                                        maxWidth: "100%",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src="/img4.png"
                                        alt=""
                                        style={{
                                            maxWidth: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item lg={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start",
                                        alignItems: "start",
                                        padding: "20px",
                                        gap: '15px'
                                    }}
                                >
                                    <Typography sx={{ fontSize: "20px", fontWeight: 600, color: theme.palette.secondary.main }}>
                                        About us
                                    </Typography>
                                    <Typography sx={{
                                        textAlign: "start", fontSize: "22px", fontWeight: 800,
                                    }}>

                                        More Than Just a Place
                                    </Typography>
                                    {/* <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 400, fontColor: '#6A6868' }}>
                                        We extend a warm welcome to Shekinah Haitian SDA Church, where we joyfully share the transformative message of Jesus Christ with all who seek to listen.
                                    </Typography> */}
                                    <Typography sx={{ textAlign: "start", fontSize: "16px", fontWeight: 600, fontStyle: 'italic' }}>
                                        Shekinah Haitian SDA Church is more than a place of worship. We aim to create a spiritual home for everyone—an active family involved in impactful ministries and events. Our mission is to touch lives, fill hearts, and strengthen faith.
                                    </Typography>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>What We Offer</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item lg={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <Box sx={{ backgroundColor: theme.palette.secondary.main, height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <LocalLibraryOutlinedIcon sx={{ color: 'white', }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Shared Meals</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                                                    At Shekinah Haitian SDA Church, we believe food also feeds the soul. Part of our tradition is shared meals, where we gather around the table for delightful culinary experiences as a testament to our vibrant community.
                                                </Typography>

                                            </Box>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <Box sx={{ backgroundColor: theme.palette.secondary.main, height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <FavoriteOutlinedIcon sx={{ color: 'white', }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Spiritual Nourishment</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                                                    Experience spiritually-enriching sermons that resonate and inspire. Our dedicated team offers prayers and reflections that leave your soul fulfilled and motivated.
                                                </Typography>

                                            </Box>
                                        </Grid>

                                        <Grid item lg={12}>
                                            <Box>
                                                <Box sx={{ borderRadius: '50%', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <Box sx={{ backgroundColor: theme.palette.secondary.main, height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <EventAvailableIcon sx={{ color: 'white', }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Ministries and Events</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography sx={{ textAlign: 'start', mt: 1, color: '#6A6868' }}>
                                                    Beyond faith practice, we offer various ministries and events to foster a sense of connection and community. Explore opportunities to give back, evolve, and connect deeply with others.
                                                </Typography>

                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box >
                    {/* Slider */}

                    <Box sx={{ padding: isSmall ? '20px' : '30px 40px' }}>
                        <Typography sx={{ fontSize: '18px', color: theme.palette.secondary.main, textAlign: 'center', fontWeight: '550' }}>Our Team</Typography>
                        <Typography sx={{ fontSize: '28px', textAlign: 'center', fontWeight: '600', padding: '10px 0px' }}>Church Pastors</Typography>
                        <Carousel
                            key={carouselKey}
                            value={pators}
                            numVisible={isSmall ? 1 : isMedium ? 2 : 3}
                            autoplayInterval={3000}
                            numScroll={3}
                            itemTemplate={productTemplate}
                            showNavigators
                        />

                    </Box>


                </Box>
                <Footer />
            </Page>
        </>
    )
};
const productTemplate = (pators) => {
    return (

        <Box sx={{
            border: '1px solid #ddd',
            margin: '40px 20px',
            textAlign: 'center',
            transition: 'transform 0.3s',  // Add a smooth transition effect

        }}>
            <Box >
                <img src={pators.image} style={{
                    width: '100%', height: '50vh', objectFit: 'cover',
                }} alt={pators.name} />
            </Box>
            <Box sx={{ padding: '15px 0px', backgroundColor: '#CA9922', color: 'black', fontWeight: 700 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '22px' }}>{pators.name}</Typography>
                <Typography >{pators.title}</Typography>
            </Box>
        </Box>
    );
};


export default AboutUs