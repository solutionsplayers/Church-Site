import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer';
import { useLocation } from 'react-router';
import Page from '../../components/page/page'
const popularPost = [
    {
        img: '/img9.png', title: 'Faith Journeys'
    },
    {
        img: '/img9.png', title: 'Faith Journeys'
    },
    {
        img: '/img9.png', title: 'Faith Journeys'
    },
    {
        img: '/img9.png', title: 'Faith Journeys'
    },
    {
        img: '/img9.png', title: 'Faith Journeys'
    },
];
const content = [
    {
        title: 'Ministry of Housing & Work',
        description: 'It appears there might be a confusion or mix-up in the context. The information you provided earlier was related to a church website and the Ministry of Housing & Work seems unrelated to that context.If you could provide more details or clarify the specific information you are seeking for the Ministry of Housing & Work, I would be happy to assist you accordingly.'
    },
    {
        title: ' Our Mission',
        description: 'Empowering lives through sustainable housing solutions and meaningful work opportunities, our Ministry of Housing & Work is committed to fostering a community where individuals experience dignity, stability, and the chance to build a better future.'
    },
    {
        title: 'Core Values',
        description: 'Compassion: We approach housing and work initiatives with empathy, recognizing the unique needs and challenges of individuals.Empowerment: We empower individuals by providing not just shelter and employment but also the tools to create lasting positive change in their lives.Community: Building a sense of belonging and collaboration is at the heart of our efforts,creating a community that supports one another.'
    },
    {
        title: 'Activities and Initiatives',
        description: 'Developing and advocating for affordable housing solutions for individuals and families in need. Offering skills development workshops to enhance employability and job readiness.Connecting individuals with job opportunities and fostering partnerships with local businesses.',
    },
    {
        title: 'Get Involved',
        description: 'Become an active participant in creating positive change within our community. Whether you are passionate about housing advocacy, job training, or community development, there are various ways you can contribute.',
    },
]
const MinistryHousing = ({ setProgress }) => {
    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(100)
        }, 1000)
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))

    const { state } = useLocation()
    // console.log(state.Image.url, 'hi')
    return (
        <>
            <Page title="All-Details">
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
                            backgroundImage: `url('/img19.png')`,
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
                            backgroundColor: 'rgba(10, 28, 50, 0.80)',
                            zIndex: 0,
                        }}
                    />


                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: isSmall ? '50px' : "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                        <Typography sx={{ fontSize: '32px', fontWeight: 600, }}> {state.title}
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
                {/* <Box sx={{ padding: '50px' }}>
                <Typography sx={{ fontSize: '22px', fontWeight: 600, textAlign: 'start' }}>Popular Post</Typography>
                <Grid container spacing={5}>
                    {popularPost.map((val, ind) => (
                        <Grid item lg={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <img src={val.img} alt="" style={{ borderRadius: '8px' }} />
                                <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start' }}>{val.title}</Typography>
                            </Box>
                        </Grid>
                    ))}


                </Grid>
            </Box> */}
                <Box sx={{ padding: isSmall ? '20px' : isMedium ? '40px' : '50px 100px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={state.Image.url} style={{ width: '100%', height: isSmall ? '50vh' : '80vh', objectFit: 'cover' }} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start', marginTop: '10px', }}>{state.title}</Typography>
                        <Typography sx={{ textAlign: 'start' }}>{state.description}</Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{ textAlign: 'start', fontWeight: 600 }}>For more information or to join our Ministry of Human Rights initiatives, please contact <span style={{ color: 'blue' }}> Info@shekinahsda.org.</span></Typography>
                        <br />
                        <Typography sx={{ textAlign: 'start', fontWeight: 600 }}>Feel free to customize the above information to better align with the specific activities and goals of the Ministry of Human Rights at Shekinah Haitian SDA Church.</Typography>
                    </Box>
                </Box>
                <Footer />
            </Page>
        </>
    )
}

export default MinistryHousing