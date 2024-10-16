import { Box, CircularProgress, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../layouts/Landing/Footer';
import Header from '../../components/AppBar/Header';
import { useDispatch } from 'react-redux';
import { getMinistry } from '../../store/actions/userActions';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SideChange from './SideChange';
import Page from '../../components/page/page'
const ministerData = [
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },
    {
        imageSrc: '/img6.png',
        description: 'Our Ministry of Human Rights advocates for fairness,  justice, and dignity for all.Explore our initiatives in the Ministry of Human Rights, committed to upholding rights and well- being of every individual  Discover how our Ministry of Human Rights strives to create a world where everyone is treated with respect and compassion.',
        title: 'MINISTRY OF HUMAN RIGHTS'
    },
    {
        imageSrc: '/img7.png',
        description: 'Our Ministry of Housing & Work strives to provide stablehomes and meaningful employment opportunities. Explore how our Ministry of Housing & Work contributes to community well - being through housing solutions andemployment pathways.Discover the impact of our Ministry of Housing & Work in creating a foundation for growth.',
        title: 'MINISTRY OF HOUSING & WORK'
    },
    {
        imageSrc: '/img8.png',
        title: 'Women Ministry',
        description: 'Join our Women is Ministry for strength, support,and spiritual growth.Discover the unique contributions of women in our vibrant community.Find inspiration and connection in our Women is Ministry.',
    },

];

const Minister = ({ setProgress }) => {
    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(100)
        }, 1000)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [showMinistry, setShowMinistry] = useState([])
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const getMinistries = () => {
        setLoading(true)
        dispatch(getMinistry())
            .then((result) => {
                console.log("========result", result.data.data[0]?.Image.url
                );
                setShowMinistry(result.data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            }).finally(() => {
                setLoading(false); // Set loading state to false when data fetching is complete
            });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getMinistries()
    }, []);
    const handleMinistry = (data) => {

        // console.log(data, ' this is dada')
        navigate('/ministerHousing', { state: data })
    }
    const logo = 'img39.png'
    return (
        <>
            <Page title="Ministry">
                <Header logo={logo} />
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
                            backgroundColor: 'rgba(10, 28, 50, 0.6)',
                            zIndex: 0,
                        }}
                    />


                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'center', padding: isSmall ? '0px 20px' : "0px 200px", gap: '10px', justifyContent: 'center', alignItems: 'center', zIndex: 1, }}>

                        <Typography sx={{ fontSize: isSmall ? '25px' : '32px', fontWeight: 600 }}>
                            Our Ministries
                        </Typography>
                        <Typography sx={{ fontSize: isSmall ? '15px' : '20px', fontWeight: 400, textAlign: 'center', paddingBottom: '50px' }}>Discover purposeful ministries at Shekinah Haitian SDA Church, where faith, community, and service come together.
                            From engaging youth programs to dynamic worship experiences, each ministry reflects our commitment to spiritual
                            growth and making a positive impact. Find your place to thrive, connect, and contribute within our diverse and
                            welcoming church family.
                        </Typography>

                    </Box>
                </Box>
                <Box sx={{ padding: isSmall ? '20px' : "0px 50px 50px 50px" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
                        <Typography sx={{ fontSize: isSmall ? '25PX' : '32px', fontWeight: 700, textAlign: "start" }}>Our Ministries</Typography>

                    </Box>


                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        {/* <Box flex={3} > */}
                        {loading ? (
                            <CircularProgress sx={{ display: 'block', margin: 'auto', color: theme.palette.secondary.main }} />
                        ) : (
                            <Grid container spacing={5} sx={{ padding: '0px 0px 50px 0px' }}>
                                {showMinistry.map((val, ind) => (

                                    <Grid key={ind} item lg={4} md={6} sm={12} xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                // textAlign: 'center',
                                                // alignItems: 'center',
                                                boxShadow: "0px 8px 6px 0px rgba(61, 101, 20, 0.50)",
                                                width: '100%',
                                                overflow: 'hidden',
                                                borderRadius: '16px',
                                                height: '100%',
                                                position: 'relative',

                                            }}
                                        >
                                            <img
                                                src={val.Image.url}
                                                style={{ width: '100%', height: isSmall ? '35vh' : '50vh', objectFit: 'cover' }}
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
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', justifyContent
                                                        : 'center'
                                                }}>
                                                    <button className="animated-button" onClick={() => handleMinistry(val)} style={{ backgroundColor: 'transparent', color: theme.palette.secondary.main, fontSize: '18px', borderRadius: '8px', padding: '10px', fontWeight: 600, border: 'none' }}>Read More</button>
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
                    </Box> */}
                    {/* </Box> */}
                </Box >
                <Footer />
            </Page>
        </>
    )
}
export default Minister