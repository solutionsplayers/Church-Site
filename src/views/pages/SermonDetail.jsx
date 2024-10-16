import React, { useEffect } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router'

const SermonDetail = () => {
    const { state } = useLocation()
    console.log(state, 'fdfdf')
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <>
            <Header color='000' />
            <Box sx={{ padding: '50px 100px' }}>
                <Box>
                    <video style={{ width: '100%', height: '70vh', objectFit: 'contain' }} autoPlay controls>
                        <source src={state.vedio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Typography sx={{ fontSize: '28px', fontWeight: 600 }}>{state.title}</Typography>
                    <Typography sx={{ fontSize: '24px' }} > {state.description}</Typography>
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default SermonDetail