import styled from "@emotion/styled";
import { Box, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoadingPage() {
    const [percent, setPercent] = useState(0)
    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: 40,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 45,
            width: 45,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#52af77',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });
    const navigate = useNavigate()
    useEffect(() => {
        if (percent >= 100) {
            const addressService = localStorage.getItem('addressService')
            if (addressService) {
                const address = JSON.parse(addressService)
                if (!address.link) {
                    navigate('/')
                    return
                } else {
                    navigate(address.link)
                }
            }
        }
        setTimeout(() => { setPercent(prev => prev + 1) }, 50)

    }, [percent])
    return (<Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, margin: 'unset', userSelect: 'none' }}>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={0}
                value={percent}
                sx={{ pointerEvents: 'none' }}
            />
            <Typography variant="h5" align="center" sx={{ marginTop: { md: '20px', sm: '20px', xs: '10px' } }}>Loading {percent}%</Typography>
        </Box>
    </Box >);
}

export default LoadingPage;