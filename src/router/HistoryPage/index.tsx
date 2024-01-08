import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const CONSTANTS = [
    {
        name: 'Bố',
        time: '16:38',
        device: 'Mobile',
        icon: 'audio',
        quantity: 2,
        missed: true
    },
    {
        name: '0921487642',
        time: '14:38',
        device: 'Việt Nam',
        icon: 'audio',
        quantity: 1,
        missed: false
    },
    {
        name: 'hoàng',
        time: '10:53',
        device: 'Điện thoại',
        quantity: 2,
        missed: false
    },
    {
        name: '0938429242',
        time: 'Yesterday',
        device: 'Mobile',
        quantity: 1,
        missed: false
    },
    {
        name: 'hoa do',
        time: 'Yesterday',
        device: 'Zalo video',

        icon: 'video',

        quantity: 1,
    },
    {
        name: 'Phúc Tiến',
        time: 'Yesterday',
        device: 'Messager âm thanh',
        quantity: 1,
        missed: false
    },
    {
        name: 'Đức long',
        time: 'Thứ 2',
        device: 'Messager âm thanh',
        quantity: 2,
        missed: false
    },
    {
        name: 'Tài Long',
        time: 'Thứ 2',
        device: 'Zalo video',
        icon: 'video',
        quantity: 1,
        missed: false
    },
    {
        name: 'Nguyễn Đình Phong',
        time: 'Thứ 2',
        device: 'Zalo Video',
        icon: 'video',

        quantity: 1,
        missed: true
    },
    {
        name: 'Nguyễn Đình Phong',
        time: 'Thứ 3',
        device: 'Việt Nam',
        icon: 'audio',
        quantity: 1,
        missed: false
    },


]
function SmsPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        if (link) {
            const address = JSON.parse(link)
            if (address.link !== '/history') {
                navigate('/')
                return
            }
        } else {
            navigate('/')
            return
        }
    }, [])
    return (<Box sx={{ backgroundImage: `url('https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=1380&t=st=1704423779~exp=1704424379~hmac=6d7877ed4410a17e8c7fa41ba7b61192ecf77531c2455e860a5a63784e289ad3')`, minHeight: '100vh', maxHeight: { sm: 'unset', xs: '100vh' }, backgroundSize: 'cover', backgroundPosition: '77% 31%', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: { sm: '20px 0', xs: 0 } }}>
        <Box sx={{ width: { md: '40%', sm: '80%', xs: '100%' }, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', padding: { sm: '30px', xs: '15px' }, borderRadius: '5px', maxHeight: '100vh', height: '100vh' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0075ff', margin: { sm: '0 -15px', xs: '0 -5px' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}><ArrowBackIosNewIcon /> <Typography sx={{ fontSize: '18px', marginLeft: '5px' }}>Filters</Typography></Box>
                <Box><MoreHorizIcon /> <BorderColorIcon sx={{ marginLeft: '15px' }} /></Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: '700', marginTop: '15px' }}>Recent</Typography>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Box sx={{ marginTop: '10px', overflowY: 'auto', maxHeight: '100%', paddingBottom: '20px' }}>
                    {CONSTANTS.map((el, index) => {
                        return <Box key={index} sx={{ display: 'flex', marginTop: '20px' }}>
                            <Box sx={{ width: '22px', height: '22px', marginRight: '10px', display: 'flex' }}>{el.icon ? el.icon === 'video' ? < MissedVideoCallIcon sx={{ color: '#c0c0c0', fontSize: '22px', marginTop: '-1px' }} /> : < PhoneForwardedIcon sx={{ color: '#c0c0c0', fontSize: '22px', marginTop: '3px' }} /> : ''}</Box>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', borderBottom: CONSTANTS?.length - 1 === index ? '' : '1px solid #ededed', paddingBottom: '7px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <Typography variant="h5" sx={{ fontSize: { sm: '18px', xs: '16px' }, fontWeight: '700', color: el.missed ? '#ff392d' : '' }}>{el.name} {el?.quantity > 1 ? `(${el?.quantity})` : ''}</Typography>
                                    <Typography sx={{ fontSize: { sm: '16px', xs: '14px' }, color: '#88888a' }}>{el.device}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#b4b4b6', display: 'flex', alignItems: 'center', fontSize: { sm: '16px', xs: '14px', whiteSpace: 'nowrap' } }}>{el.time}</Typography>
                                </Box>
                                <Box sx={{ marginLeft: '8px' }}>
                                    <ErrorOutlineIcon sx={{ fontSize: '26px', transform: 'rotate(180deg)', color: '#2372fc' }} />
                                </Box>
                            </Box>
                        </Box>
                    })}
                </Box>
            </Box>
        </Box>

    </Box >
    );
}

export default SmsPage;