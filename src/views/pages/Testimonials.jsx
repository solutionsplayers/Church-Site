import React from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

import { Avatar } from 'primereact/avatar';
import { Box, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Testimonials = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const testimonials = [
        {
            author: 'John Doe',
            description: '"The Shekinah Haitian SDA Church is my sanctuary— a place where I feel uplifted and loved. The sermons inspire me, and the shared meals make me feel part of a warm, welcoming community. I am grateful to have found this place!"',
            rating: 5
        },
        {
            author: 'Jane Smith',
            description: '"From the minute I stepped into Shekinah Haitian SDA Church, I knew I found my spiritual home. The energy of the community is palpable, and the sense of belonging I feel here is unmatched."',
            rating: 4
        },
        {
            author: 'Patrick Stewart',
            description: '"Exploring your faith is a beautiful journey. Having the Shekinah Haitian SDA Church as my compass makes the journey even better!"',
            rating: 4.5
        },
    ];

    const testimonialTemplate = (testimonial) => (
        <Box
            sx={{
                margin: isSmall ? '5px' : '10px 20px',
                padding: '50px',
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                position: 'relative',
                borderRadius: '20px 20px 20px 20px',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',



            }}
        >
            {/* Testimonial Icon at the top of the card */}
            <FormatQuoteIcon
                sx={{ position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)', fontSize: '3rem' }}
            />

            <Typography sx={{ fontSize: '16px', flex: '1' }}>
                {testimonial.description}
            </Typography>

            <Rating size="small" defaultValue={5} />
            <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
                {testimonial.author}
            </Typography>
        </Box>
    );

    return (
        <>
            <Typography sx={{ fontSize: '26px', color: theme.palette.secondary.main, fontWeight: 700, textAlign: 'center', paddingTop: '30px' }}>Voices of Shekinah Family</Typography>
            {isSmall ? (
                <Carousel
                    style={{ margin: theme.spacing(1) }}
                    value={testimonials}
                    itemTemplate={testimonialTemplate}
                    numVisible={1}
                    numScroll={1}
                    circular={true}
                    autoplayInterval={3000}
                />
            ) : (
                <Carousel
                    style={{ margin: theme.spacing(4) }}
                    value={testimonials}
                    itemTemplate={testimonialTemplate}
                    numVisible={2}
                    numScroll={1}
                    circular={true}
                    autoplayInterval={3000}
                />
            )}
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '300px',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url('/img41.jpg')`,
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
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(10, 28, 50, 0.80)',
                        zIndex: 0,
                    }}
                />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}>

                    <Typography sx={{ fontSize: isSmall ? '24px' : '32px', fontWeight: 600, position: 'relative' }}>
                        <FormatQuoteIcon
                            sx={{ display: isSmall ? 'none' : '', position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', fontSize: isSmall ? '1rem' : '3rem', color: 'rgba(255, 255, 255, 0.8)' }}
                        />
                        You are not just invited; you're welcome!
                    </Typography>

                    <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        We wait with open hearts to welcome you! Come and be a part of Shekinah Haitian SDA Church—a home that strengthens faith and inspires love. Let's connect our hearts and hands to serve God and our community better. See you there!
                    </Typography>

                </Box>
            </Box>
        </>
    );
}

export default Testimonials;
