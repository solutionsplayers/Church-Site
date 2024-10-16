import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../layouts/Landing/Footer';
import { useLocation, useParams } from 'react-router';
import { PostStudy } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
const StudyIntro = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [questions, setQuestions] = useState([]);
    const location = useLocation();
    const { id, title, description } = location.state;
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const dispatch = useDispatch()
    const formData = new FormData()
    formData.append('study_material_id', id)
    useEffect(() => {

        dispatch(PostStudy(formData))
            .then((response) => {
                // console.log(response.data.data[0].video_or_image)
                setQuestions(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching questions:', error);
            });
    }, [id]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                        backgroundImage: `url('/img13.png')`,
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
                        backgroundColor: 'rgba(0, 0, 0, 0.70)',
                        zIndex: 0,
                    }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontSize: '20px', fontWeight: 400, textAlign: 'center', display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 4,
                    }}>
                        {description}
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* <Typography sx={{ fontSize: '26px', fontWeight: 700, textAlign: 'start' }}>Introduction to Bible</Typography> */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {questions.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600 }}>Question:{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails><span style={{ fontWeight: 600 }}>Answer:</span>{item.answer}</AccordionDetails>
                            <AccordionDetails>
                                {item.video_or_image && (
                                    item.video_or_image.endsWith('.mp4') ? (
                                        <video style={{ Width: '100%', height: '40vh', objectFit: 'cover' }} autoPlay controls>
                                            <source src={item.video_or_image} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={item.video_or_image}
                                            alt="Content"
                                            style={{ Width: '100%', height: '40vh', objectFit: 'cover' }}
                                        />
                                    )
                                )}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default StudyIntro