import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import { Box, CircularProgress, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import Footer from '../../layouts/Landing/Footer';
import { useDispatch } from 'react-redux';
import { getlastEvents } from '../../store/actions/userActions';
import { useNavigate } from 'react-router';
import SideChange from './SideChange';
import Page from '../../components/page/page'


const data = [
    {
        imageSrc: "/img1.png",
        title: 'Purposeful Living',
        description:
            "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
        buttonText: "View Event",
    },
    {
        imageSrc: "/img2.png",
        title: 'Rise and Shine',
        description:
            "Step into the enchanting embrace of Christmas magic this Sunday evening at our special celebration! Join us for a unique blend of joy, reflection, and the spirit of community, making this Christmas Eve an unforgettable experience for you and your loved ones.Together, let is create cherished memories, resonate with the beauty of carols, and revel in the warmth of the holiday season.",
        buttonText: "View Event",
    },
    {
        imageSrc: "/img1.png",
        title: 'Purposeful Living',
        description:
            "Embark on a Heartwarming Journey this Sunday at our Magical Christmas Eve Service! Join us for an enchanting celebration filled cherished memories,uplifting carols, and the joyous spirit of community.Bring the whole family and immerse yourselves in the magic of Christmas, creating moments that will be treasured for years to come!.",
        buttonText: "View Event",
    },
    {
        imageSrc: "/img2.png",
        title: 'Rise and Shine',
        description:
            "Step into the enchanting embrace of Christmas magic this Sunday evening at our special celebration! Join us for a unique blend of joy, reflection, and the spirit of community, making this Christmas Eve an unforgettable experience for you and your loved ones.Together, let is create cherished memories, resonate with the beauty of carols, and revel in the warmth of the holiday season.",
        buttonText: "View Event",
    },
];

const LiveStream = ({ setProgress }) => {
    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(100)
        }, 1000)
    }, [])

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [showEvent, setshowEvent] = useState([])
    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                // console.log("This is result", result.data.data[0]?.Image.url[0]?.url);
                const filteredEvents = result.data.data
                    .filter((event) => new Date(event.date_time) < new Date())
                    .sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
                setshowEvent(filteredEvents);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            }).finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    const navigate = useNavigate();
    const handleViewEventClick = (value1, value2, value3) => {
        // const { videoId, title, description } = data;
        // console.log(value3, 'data')
        navigate('/eventVideo', { state: { value1, value2, value3 } });
    };

    // const handleStudy = (data) => {
    //     const { id, title, description } = data;
    //     navigate('/study-intro', { state: { id, title, description } });

    // }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleLastEvent = (data) => {
        navigate('/lastEventDetail', { state: data })
    }
    return (
        <>
            <Page title="live-Stream">
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
                            backgroundImage: `url('/img30.png')`,
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
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            zIndex: 0,
                        }}
                    />


                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: isSmall ? '20px' : isMedium ? '40px' : "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                        <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                            Join Our Worship Online
                        </Typography>
                        <Typography sx={{ fontSize: isSmall ? '15px' : '20px', fontWeight: 400, textAlign: 'center', paddingBottom: isSmall ? '50px' : '' }}>
                            Experience the joy of worship from anywhere with our live streaming services. Join our online community
                            for a spiritually uplifting and immersive worship experience. Connect with us in real-time as we come
                            together to celebrate faith, fellowship, and the transformative power of community.
                        </Typography>

                    </Box>
                </Box>
                <Box sx={{ padding: isSmall ? '20px' : isMedium ? '40px' : "0px 200px", }}>
                    <video width="100%" height="500" controls>
                        <source src="URL_FOR_VIDEO_10" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: isSmall ? '20px' : "40px",

                        gap: "40px",
                    }}
                >
                    <Typography sx={{ fontSize: "32px", fontWeight: 800, textAlign: isSmall ? 'center' : 'start' }}>
                        Our Last Events
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        {/* <Box flex={3}> */}
                        {loading ? (
                            <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
                        ) : (
                            <Grid container spacing={5}>
                                {showEvent.map((val, ind) => (
                                    <Grid key={ind} item lg={4} sm={12} xs={12} md={6}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",

                                                boxShadow: "0px 8px 6px 0px rgba(61, 101, 20, 0.50)",

                                                width: "100%",
                                                overflow: "hidden",
                                                borderRadius: "16px",
                                                height: "100%",
                                                position: "relative",
                                            }}
                                        >
                                            <img
                                                src={val.Image.url[1]?.url}
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    height: "50vh",
                                                    objectFit: "cover",
                                                }}
                                                alt="abc"
                                            />
                                            <Box
                                                sx={{
                                                    padding: "15px",
                                                    flexGrow: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: 600,
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    {showEvent[0]?.title}
                                                </Typography>
                                                <Typography
                                                    sx={{

                                                        fontSize: '16px',
                                                        fontWeight: 400,
                                                        textAlign: 'start',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                        WebkitLineClamp: 3,
                                                    }}
                                                >
                                                    {showEvent[0]?.description}
                                                </Typography>
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', justifyContent
                                                        : 'center'
                                                }}>
                                                    <button onClick={() => handleLastEvent(val)} style={{ backgroundColor: 'transparent', color: theme.palette.secondary.main, fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>
                    {/* <Box flex={1}>
                        <SideChange />
                    </Box>
                </Box> */}


                </Box>
                <Footer />
            </Page>
        </>
    )
}

export default LiveStream