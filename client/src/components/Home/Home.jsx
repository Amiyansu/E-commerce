//All components
import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'

const Component=styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`

function Home() {
  return (
    <>
        <NavBar/>
        <Component>
            <Banner/>
        </Component>
    </>
  )
}

export default Home