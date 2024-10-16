import React, { useEffect, useState } from 'react'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import getStripe from '../../utils/getStripe';
import Page from '../../components/page/page'
const headerColor = '000';
const Donate = ({ setProgress }) => {

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
    const [button1Active, setButton1Active] = useState(true);
    const [button2Active, setButton2Active] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('')
    const handleAmountButtonClick = (amount) => {
        setSelectedAmount(amount);
    };
    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber === 1) {
            setButton1Active(true);
            setButton2Active(false);
        } else if (buttonNumber === 2) {
            setButton2Active(true);
            setButton1Active(false);
        }
    };
    const btnContent = [
        { btn: '$10' },
        { btn: '$25' },
        { btn: '$50' },
        { btn: '$100' },
    ]
    const btnStyle = {
        backgroundColor: 'transparent',
        color: 'black',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '5px',
        width: '115px',
        cursor: 'pointer'
    }

    const placeOrder = async () => {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: 'price_1OWzaqFGLFbgVokAiX6QMJcF',
                    quantity: 1,
                },
            ],
            mode: "subscription",
            successUrl: `http://localhost:5173/payment-success`,
            cancelUrl: `http://localhost:5173/payment-cancel`,
        });

    }

    return (
        <>
            <Page title="Donate">
                <Header color={headerColor} />
                <Box sx={{ padding: isSmall ? '20px' : '50px' }}>
                    <Grid container spacing={5}>
                        <Grid item lg={8}>
                            <Box>
                                <Typography sx={{ fontSize: isSmall ? '27px' : '36px', fontWeight: 600, color: 'black', textAlign: 'start' }}>Donate Online</Typography>
                                <Box>
                                    <img src="img40.png" style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="donateImage" />
                                </Box>
                                <Box>
                                    <Typography sx={{ textAlign: 'start', fontSize: '18px', lineHeight: '32px' }}>
                                        Your support fuels our mission to make a lasting impact in the lives of individuals
                                        seeking spiritual truth and transformation. With your contributions, we can continue to:
                                        <ul style={{ paddingLeft: '20px' }}>
                                            <li> Extend a helping hand to those in need, providing essential resources and assistance.</li>
                                            <li> Foster a welcoming community that uplifts and supports individuals on their faith journey.</li>
                                            <li>Engage in meaningful outreach programs, bringing hope and healing to diverse communities.</li>
                                            <li> Facilitate educational initiatives that empower minds and nurture spiritual growth.</li>
                                        </ul>
                                        Your commitment to our cause goes beyond financial support; it becomes an investment
                                        in building a compassionate and thriving community centered on the love and teachings
                                        of Christ. Together, we can make a positive difference in the world.
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start', mt: 2 }}>
                                        Thank you for partnering with us in this shared mission.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Box sx={{ padding: isSmall ? '20px' : isMedium ? '30px' : '150px 60px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 500, p: '20px 0', }}>
                                    Make a Donation
                                </Typography>
                                <div style={{ display: 'flex', gap: '2px', textAlign: 'center', justifyContent: isSmall ? 'left' : 'center' }}>
                                    <button

                                        onClick={() => handleButtonClick(1)}
                                        style={{
                                            backgroundColor: button1Active ? 'transparent' : theme.palette.primary.main,
                                            color: button1Active ? 'black' : 'black',
                                            padding: '10px 18px',
                                            borderRadius: '5px',
                                            border: button1Active ? '1px solid gray' : 'none',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Give Once
                                    </button>
                                    <button

                                        onClick={() => handleButtonClick(2)}
                                        style={{
                                            backgroundColor: button2Active ? 'transparent' : theme.palette.primary.main,
                                            color: button2Active ? 'black' : 'black',
                                            padding: '10px 26px',
                                            borderRadius: '5px',
                                            border: button2Active ? '1px solid gray' : 'none',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Monthly
                                    </button>
                                </div>
                                <Box>
                                    {button1Active && (
                                        <Typography sx={{ p: '20px 0', fontSize: '14px', fontWeight: 600 }}>Choose an amount to give once</Typography>
                                    )}
                                    {button2Active && (
                                        <Typography sx={{ p: '20px 0', fontSize: '14px', fontWeight: 600 }}>Choose an amount to give monthly</Typography>
                                    )}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap', textAlign: 'center', justifyContent: isSmall ? 'left' : 'center' }}>
                                    {btnContent.map((val, ind) => (
                                        <button onClick={() => handleAmountButtonClick(val.btn)} style={btnStyle}>{val.btn}</button>
                                    ))}
                                </Box>
                                <Box sx={{ padding: '20px 0px' }}>
                                    <TextField
                                        id="outlined-size-normal"
                                        fullWidth
                                        placeholder="$ or other amount"
                                        value={selectedAmount} // Display the selected amount
                                        onChange={(e) => setSelectedAmount(e.target.value)} // Allow manual input as well
                                    />
                                </Box>
                                <div>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" sx={{ color: 'gray', fontSize: '15px' }}>
                                            Choose your free gift of the month
                                        </InputLabel>
                                        <Select
                                            label="Choose your free gift of the month"
                                            id="demo-simple-select"
                                            // value={selectedOption}
                                            // onChange={handleChange}
                                            sx={{ borderColor: 'gray' }}

                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'option1'}>Tithe</MenuItem>
                                            <MenuItem value={'option2'}>Offering</MenuItem>
                                            <MenuItem value={'option3'}>Building Funds</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0px' }}>
                                    <button
                                        style={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: "black",
                                            fontSize: "13px",
                                            borderRadius: "4px",
                                            padding: "10px 20px",
                                            border: "none",
                                            fontWeight: 600

                                        }}
                                        onClick={placeOrder}
                                    >
                                        pay
                                    </button>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Box >
                <Footer />
            </Page>
        </>
    )
}

export default Donate