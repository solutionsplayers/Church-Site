import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import Footer from '../../layouts/Landing/Footer';
import { useDispatch } from 'react-redux';
import { getSermons } from '../../store/actions/userActions';
import SideChange from './SideChange';
import { useNavigate } from 'react-router';

//     {
//         imageSrc: '/img5.png',
//         description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
//         title: 'Introduction to the Bible'
//     },
//     {
//         imageSrc: '/img5.png',
//         description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
//         title: 'Family and Marriage'
//     },
//     {
//         imageSrc: '/img5.png',
//         title: 'Sermon on the Mount',
//         description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
//     },
//     {
//         imageSrc: '/img5.png',
//         description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
//         title: 'Introduction to the Bible'
//     },
//     {
//         imageSrc: '/img5.png',
//         description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
//         title: 'Family and Marriage'
//     },
//     {
//         imageSrc: '/img5.png',
//         title: 'Sermon on the Mount',
//         description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
//     },
//     {
//         imageSrc: '/img5.png',
//         description: 'The Bible is a sacred text in Christianity, divided into the Old and New Testaments.It is considered the inspired word of God, offering guidance, wisdom, and spiritual insight to believers.',
//         title: 'Introduction to the Bible'
//     },
//     {
//         imageSrc: '/img5.png',
//         description: 'Biblical teachings emphasize the sacred nature of family and marriage, rooted in love, commitment, and mutual respect.The covenant of marriage reflects the profound connection between Christ and His Church, guiding us to build strong, God centered families for a life of faith and shared purpose.',
//         title: 'Family and Marriage'
//     },
//     {
//         imageSrc: '/img5.png',
//         title: 'Sermon on the Mount',
//         description: 'Delve into the Sermon on the Mount, a powerful collection of teachings by Jesus found in Matthew is Gospel.These timeless lessons illuminate the path to true happiness emphasizing compassion and humility.',
//     },

// ];
const Sermons = () => {
    const [showSermon, setShowSermon] = useState([])
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const getSermon = () => {
        dispatch(getSermons()).then((result) => {
            // console.log(result.data.data[2]?.vedio
            //     , 'video')
            setShowSermon(result.data.data)
        }).catch((err) => {
            console.log("Error fetching categories:", err);
        }).finally(() => {
            setLoading(false);
        });
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        getSermon()
    }, []);
    const navigate = useNavigate()
    const handleSermon = (data) => {
        const { title, description, video } = data
        navigate('/sermonDetail', { state: data })
        console.log(data, 'abc')
    }
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
                        Sermons
                    </Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>Explore our thought-provoking blogs, where we share inspirational stories, reflections
                        on faith, and updates on community events. Dive into a rich tapestry of content that
                        aims to uplift, inspire, and foster a sense of connection within our church family.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: "50px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, textAlign: "start" }}>All Sermons</Typography>

                </Box>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    {/* <Box flex={3}> */}
                    {loading ? (
                        <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
                    ) : (
                        <Grid container spacing={5} sx={{ padding: '50px 0px' }}>
                            {showSermon.map((val, ind) => (
                                <Grid key={ind} item lg={4} md={6} sm={12} xs={12}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            textAlign: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 8px 6px 0px rgba(225, 11, 11, 0.50)',
                                            width: '100%',
                                            overflow: 'hidden',
                                            borderRadius: '16px',
                                            height: '100%',
                                            position: 'relative',

                                        }}
                                    >
                                        <img
                                            onClick={() => handleSermon(val)}
                                            src={val.tumbnail
                                            }
                                            style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
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
                                            <div>
                                                <button onClick={() => handleSermon(val)} style={{ backgroundColor: 'transparent', color: '#E10B0B', fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
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
                    </Box> */}
                </Box>

            </Box>
            <Footer />
        </>
    )
}

export default Sermons