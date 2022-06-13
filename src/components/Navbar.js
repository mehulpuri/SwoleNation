import React from 'react'
import {Link} from 'react-router-dom';
import {Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm:'122px' , xs:'40px'} , mt: {sm:'32px' , xs:'20px'}, justifyContent:'none'}} px="20px">
      <Link to="/">
        <img alt='logo' style={{width:'100px', height:'100px', margin:'0 20px'}} src={Logo} />
      </Link>
      <Typography variant="h3" sx={{textAlign:'left' , position:'relative',fontSize:{xs:'40px'}, right:{lg:'100px', xs:'50px'}}} >SwoleNation</Typography>
      <br />
      <Stack direction="row" gap="10px" fontSize="24px" alignItems="flex-end" position="relative" right="40%" top="20px">
        <Link to="/" style={{textDecoration:'none', color:'#3A1212',marginRight:'50px', borderBottom : '3px solid #FF2625' , fontWeight:"600", fontSize:"26px"}}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none' , color: '#3A1212',  fontWeight:"600", fontSize:"26px"}}>Excercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar