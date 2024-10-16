import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box, Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { getlastEvents } from '../../store/actions/userActions'

const LastEventDetail = () => {
    const { state } = useLocation()
    const dispatch = useDispatch()
    const [showEvent, setshowEvent] = useState([])
    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                console.log("This is result", result.data.data[0]?.Image.url[0]?.url);
                setshowEvent(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    return (
        <>
            <Header />
            <Box >
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
                            {state.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px', fontWeight: 400, textAlign: 'center', display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            WebkitLineClamp: 3,
                        }}>{state.description}
                        </Typography>

                    </Box>

                </Box>
                <Box sx={{ padding: '20px 70px' }}>

                    <Box sx={{ padding: '20px 0px' }}>
                        <img src={state.Image.url[0]?.url} style={{ width: '100%', height: '80vh', objectFit: 'cover' }} alt="eventImg" />
                    </Box>

                    <Grid container spacing={3}>

                        <Grid item lg={8}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Title</Typography>
                                <Typography>{state.title}</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Description</Typography>
                                <Typography>{state.description}</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 600, color: '#E10B0B' }}>Event Gallery</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: "20px", borderRadius: '10px' }}>

                                    <Grid container spacing={3}>

                                        {state.Image.url.map((url, index) => (
                                            <Grid item lg={4} key={index}>
                                                <img src={url?.url} style={{ height: '30vh', width: '100%', borderRadius: '10px', objectFit: 'cover' }} alt={`eventImg-${index}`} />
                                            </Grid>
                                        ))}


                                    </Grid>


                                </Box>
                            </Box>
                        </Grid>



                    </Grid >


                </Box >
                <Box sx={{ padding: '50px' }}>
                    <img src="img24.png" alt="" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default LastEventDetail