import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDispatch } from 'react-redux';
import { getlastEvents } from '../../store/actions/userActions';
const popular = [
    {
        imgSrc: 'img6.png',
        title: 'Purposeful Living',
        description: 'Embark on a Heartwarming ......',
        time: '25 Jan 2024'
    },
    {
        imgSrc: 'img6.png',
        title: 'Purposeful Living',
        description: 'Embark on a Heartwarming ......',
        time: '25 Jan 2024'
    },
    {
        imgSrc: 'img6.png',
        title: 'Purposeful Living',
        description: 'Embark on a Heartwarming ......',
        time: '25 Jan 2024'
    },
    {
        imgSrc: 'img6.png',
        title: 'Purposeful Living',
        description: 'Embark on a Heartwarming ......',
        time: '25 Jan 2024'
    },
    {
        imgSrc: 'img6.png',
        title: 'Purposeful Living',
        description: 'Embark on a Heartwarming ......',
        time: '25 Jan 2024'
    },
]

const SideChange = () => {
    const [showEvent, setshowEvent] = useState([])
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const getAllEvents = () => {
        setLoading(true)
        dispatch(getlastEvents())
            .then((result) => {
                console.log("This is result", result.data.data);
                setshowEvent(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            }).finally(() => {
                setLoading(false); // Set loading state to false when data fetching is complete
            });
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    return (
        <>
            <Grid container sx={{ padding: '50px 0px' }}>
                <Grid item lg={12} md={6} sm={12} xs={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                        <Box sx={{ position: 'relative', border: '1px solid #ADA7A7', padding: '30px', width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Search...."
                                style={{
                                    backgroundColor: '#fff',
                                    color: 'gray',
                                    borderRadius: '8px',
                                    border: '1px solid gray',
                                    padding: '10px 12px',
                                    paddingRight: '60px',
                                }}
                            />
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '9%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: '#E10B0B',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    color: 'white',
                                    padding: '10px 18px',


                                }}
                            >
                                <ArrowForwardIcon />
                            </button>
                        </Box>
                        <Box sx={{ border: '1px solid #ADA7A7', padding: '30px 40px', width: '100%' }}>
                            <Typography sx={{ fontSize: '21px', fontWeight: 600 }}>Categories</Typography>
                            <ul style={{ listStyle: 'circle' }}>
                                <li>Faith Journey</li>
                                <li>Community Spotlight</li>
                                <li>Rise and Shine</li>
                                <li>Sermons</li>
                                <li>Request a Prayer</li>
                            </ul>

                        </Box>
                        <Box sx={{ border: '1px solid #ADA7A7', width: '100%', padding: '30px 20px' }}>
                            <Typography sx={{ fontSize: '21px', fontWeight: 600 }}>Popular Post</Typography>
                            {showEvent.map((val, ind) => (
                                <Box sx={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                                    <img src={val.Image.url[0].url} style={{ height: '15vh', width: '40%', borderRadius: '10px', objectFit: 'cover' }} alt="" />
                                    <Box >
                                        <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>{val.title}</Typography>
                                        <Typography sx={{
                                            fontSize: '13px', display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            WebkitLineClamp: 2,
                                        }}>{val.description}</Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#807C7C', display: 'flex', alignItems: 'center', gap: '10px' }} ><AccessTimeIcon sx={{ fontSize: '17px', color: '#B10303' }} />{val.date_time}</Typography>

                                    </Box>
                                </Box>
                            ))}

                        </Box>
                        <Box sx={{ border: '1px solid #ADA7A7', padding: '30px 40px', width: '100%' }}>
                            <Typography sx={{ fontSize: '21px', fontWeight: 600 }}>Tag List</Typography>
                            <ul style={{ listStyle: 'circle' }}>
                                <li>Faith Journey</li>
                                <li>Community Spotlight</li>
                                <li>Rise and Shine</li>
                                <li>Sermons</li>
                                <li>Request a Prayer</li>
                            </ul>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SideChange