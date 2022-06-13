import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff3f4">
      <Stack alignItems="center" gap="5px" pb="20px" px="20px">
      <Typography  variant= "h5" mt="15px">
          Powered By 
      </Typography>
      <img  src={Logo} alt="logo" width="200px" height="150px"/>
      <Typography>
      Ⓒ 2022 SwoleNation 
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer