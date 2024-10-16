import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import Footer from '../../layouts/Landing/Footer';
import { useDispatch } from 'react-redux';
import { getlastEvents } from '../../store/actions/userActions';
import SideChange from './SideChange';
import { useNavigate } from 'react-router';

const materialData = [
    {
        imageSrc: '/img2.png',
        description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
        title: 'Introduction to the Bible'
    },
    {
        imageSrc: '/img2.png',
        description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
        title: 'Family and Marriage'
    },
    {
        imageSrc: '/img2.png',
        title: 'Sermon on the Mount',
        description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
    },
    {
        imageSrc: '/img2.png',
        description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
        title: 'Introduction to the Bible'
    },
    {
        imageSrc: '/img2.png',
        description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
        title: 'Family and Marriage'
    },
    {
        imageSrc: '/img2.png',
        title: 'Sermon on the Mount',
        description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
    },
    {
        imageSrc: '/img2.png',
        description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
        title: 'Introduction to the Bible'
    },
    {
        imageSrc: '/img2.png',
        description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
        title: 'Family and Marriage'
    },
    {
        imageSrc: '/img2.png',
        title: 'Sermon on the Mount',
        description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
    },

];
const AllEvents = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showEvent, setshowEvent] = useState([])
    const [loading, setLoading] = useState(true);
    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                // console.log("This is result", result.data.data[0]?.Image.url[0]?.url);
                const filteredEvents = result.data.data
                    .filter((event) => new Date(event.date_time) > new Date())
                    .sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
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
    const handleEventClick = (data) => {
        navigate('/eventDetail', { state: data })
    };

    return (
        <>
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
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        zIndex: 0,
                    }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                        Upcoming Events
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>upcoming Events
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: "50px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: "start" }}>Upcomings Events</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Box flex={3} > */}
                {loading ? (
                    <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
                ) : (
                    <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
                        {showEvent.map((val, ind) => (
                            <Grid key={ind} item lg={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",

                                        boxShadow: "0px 8px 6px 0px rgba(225, 11, 11, 0.50)",
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
                                            <div style={{
                                                display: 'flex', alignItems: 'center', justifyContent
                                                    : 'center'
                                            }}>
                                                <button onClick={() => handleEventClick(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                )}
                {/* </Box>
                    <Box flex={1}>
                        <SideChange />
                    </Box>
                </Box> */}

            </Box>
            <Footer />
        </>
    )
}

export default AllEvents