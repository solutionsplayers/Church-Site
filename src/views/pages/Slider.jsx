import React, { useEffect, useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Box, Typography, CircularProgress, Grid, useTheme, useMediaQuery } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useDispatch } from 'react-redux';
import { getlastEvents } from '../../store/actions/userActions';
import { useNavigate } from 'react-router';

const Slider = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const dispatch = useDispatch();
    const [showEvent, setshowEvent] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllEvents = () => {
        dispatch(getlastEvents())
            .then((result) => {
                console.log("This is result", result);
                const filteredEvents = result.data.data
                    .filter((event) => new Date(event.date_time) > new Date())
                    .sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
                setshowEvent(filteredEvents);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);

    const navigate = useNavigate();

    const handleBtn = (data) => {
        navigate('/eventDetail', { state: data });
    };

    // const testimonialTemplate = (showEvent) => {
    //     return (
    //         <Card>
    //             <Box sx={{ color: 'black', padding: '0px 30px', }}>
    //                 <Box sx={{ display: 'flex', gap: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', height: '100%' }}>
    //                     <RoomOutlinedIcon sx={{ color: '#E10B0B', fontSize: '3rem' }} />
    //                     <Box sx={{ textAlign: "start" }}>
    //                         <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>{showEvent.title}</Typography>
    //                         <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this<span style={{ color: '#E10B0B', fontWeight: 700 }}> {showEvent.date_time} </span > at our <span style={{ color: '#E10B0B', fontWeight: 700 }}> {showEvent.location}</span> </Typography>
    //                         <button onClick={() => handleBtn(showEvent)} style={{ fontSize: '16px', fontWeight: 700, color: '#E10B0B', border: 'none', backgroundColor: 'white', cursor: 'pointer' }}>See Event Detail</button>
    //                     </Box>
    //                 </Box>
    //             </Box>
    //         </Card >
    //     );
    // };

    return (
        // <div style={{ width: '100%', margin: 'auto' }}>
        //     {loading ? (
        //         <CircularProgress sx={{ display: 'block', margin: 'auto', color: "#E10B0B" }} />
        //     ) : (
        //         <Carousel
        //             value={showEvent}
        //             itemTemplate={testimonialTemplate}
        //             numVisible={2}
        //             numScroll={1}
        //             autoplayInterval={3000}
        //             circular
        //             autoplay
        //             indicators={true}
        //         />
        //     )}
        // </div>
        <>
            <Box sx={{ position: 'absolute', bottom: isSmall ? 0 : 30, width: '100%' }}>
                <Grid container spacing={3}>
                    {loading ? (
                        <CircularProgress sx={{ display: 'block', color: theme.palette.secondary.main }} />
                    ) : (
                        showEvent.length > 0 ? (
                            showEvent.slice(0, 2).map((val, ind) => (
                                <Grid item lg={6} md={6} sm={12} xs={12} key={ind}>

                                    <Box sx={{
                                        color: 'black',
                                        padding: isSmall ? '0 15px' : '0px 30px',
                                        zIndex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',  // Make the inner boxes stack vertically
                                        height: '100%',          // Take the full height of the parent
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: isSmall ? '5px' : '30px',
                                            padding: isSmall ? '8px' : '20px',
                                            borderRadius: '8px',
                                            border: '1px solid #DBD5D5',
                                            backgroundColor: 'white',
                                            flexGrow: 1,  // Grow to fill the remaining space
                                        }}>
                                            <RoomOutlinedIcon sx={{ color: theme.palette.secondary.main, fontSize: '3rem' }} />
                                            <Box sx={{ textAlign: "start", flexGrow: 1 }}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>{val.title}</Typography>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this<span style={{ color: theme.palette.secondary.main, fontWeight: 700 }}> {val.date_time} </span > at our <span style={{ color: theme.palette.secondary.main, fontWeight: 700 }}> {val.address}</span> </Typography>
                                                <button className="animated-button" onClick={() => handleBtn(val)} style={{ fontSize: '16px', fontWeight: 700, color: theme.palette.secondary.main, border: 'none', backgroundColor: 'white', cursor: 'pointer' }}>See Event Detail</button>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Grid>
                            ))
                        ) : (
                            <Typography variant="subtitle1">No events available</Typography>
                        )
                    )}
                </Grid>
            </Box>

        </>
        // <>
        //     <Box sx={{ position: 'absolute', bottom: 30 }}>
        //         <Grid container spacing={3}>
        //             {loading ? (
        //                 <CircularProgress sx={{ display: 'block', color: "#E10B0B" }} />
        //             ) : (
        //                 showEvent.slice(0, 2).map((val, ind) => (
        //                     <Grid item lg={6} md={6} sm={12} xs={12} key={ind}>
        //                         <Card>
        //                             <Box sx={{ color: 'black', padding: isSmall ? '0 15px' : '0px 30px', zIndex: 1 }}>
        //                                 <Box sx={{ display: 'flex', gap: isSmall ? '5px' : '30px', padding: isSmall ? '8px' : '20px', borderRadius: '8px', border: '1px solid #DBD5D5', backgroundColor: 'white', height: '100%' }}>
        //                                     <RoomOutlinedIcon sx={{ color: theme.palette.secondary.main, fontSize: '3rem' }} />
        //                                     <Box sx={{ textAlign: "start" }}>
        //                                         <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>{val.title}</Typography>
        //                                         <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Embark on a Heartwarming Journey this<span style={{ color: theme.palette.secondary.main, fontWeight: 700 }}> {val.date_time} </span > at our <span style={{ color: theme.palette.secondary.main, fontWeight: 700 }}> {val.address
        //                                         }</span> </Typography>
        //                                         <button className="animated-button" onClick={() => handleBtn(val)} style={{ fontSize: '16px', fontWeight: 700, color: theme.palette.secondary.main, border: 'none', backgroundColor: 'white', cursor: 'pointer' }}>See Event Detail</button>
        //                                     </Box>
        //                                 </Box>
        //                             </Box>
        //                         </Card>
        //                     </Grid>
        //                 ))
        //             )}
        //         </Grid>
        //     </Box>
        // </>
    );
};

export default Slider;
