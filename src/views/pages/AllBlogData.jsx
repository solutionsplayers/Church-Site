import React from 'react'
import { useLocation } from 'react-router'
import Header from '../../components/AppBar/Header'
import Footer from '../../layouts/Landing/Footer'
import { Box } from '@mui/material'

const AllBlogData = () => {
    const { state } = useLocation()
    console.log(state)
    return (
        <>
            <Header color='000' />
            <Box>

            </Box>
            <Footer />
        </>
    )
}

export default AllBlogData