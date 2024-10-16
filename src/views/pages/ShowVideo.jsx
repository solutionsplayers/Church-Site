import React, { useEffect } from 'react';
import Header from '../../components/AppBar/Header';
import Footer from "../../layouts/Landing/Footer";
import { useLocation } from 'react-router';
import { Box } from '@mui/material';
const ShowEventVideo = () => {


    const location = useLocation();
    const { value1, value3 } = location.state;
    console.log(value3, 'sdfd')
    const videoId = extractVideoId(value3);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header color="000" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 0px' }}>
                <iframe
                    width="80%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div>
            <Box sx={{ color: 'black' }}>{value1}</Box>
            <Footer />
        </>
    );
};
const extractVideoId = (videoLink) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = videoLink.match(regExp);
    return match && match[1].length === 11 ? match[1] : '';
};
export default ShowEventVideo;
