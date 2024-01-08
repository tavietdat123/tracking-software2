import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CONSTANTS = [
    {
        img: 'https://i.pinimg.com/564x/c5/8f/c4/c58fc4ddbf014442f6d0bc2abd03ed4a.jpg',
        name: 'Nguyễn Hoàng Nam',
        time: '9:38 AM',
        message: 'mai t chuyển cho',
        seen: true,
        new: false,
        toMe: true
    },

    {
        img: 'https://i.pinimg.com/564x/fd/22/27/fd22270b02ab43eaffc61b72e3dd4010.jpg',
        name: 'Nguyễn Đình Phong',
        time: '9:38 AM',
        message: 'm đang rủ con Hồng đây',
        seen: true,
        new: true,
        toMe: false


    },
    {
        img: 'https://i.pinimg.com/736x/b2/31/ad/b231ad21eeaa8b37fe0f2eeee193cc4a.jpg',
        name: 'Hồng Nguyễn',
        time: '9:38 AM',
        message: 'mai rảnh khum bro',
        seen: false,
        new: false,
        toMe: false


    },
    {
        img: 'https://i.pinimg.com/564x/c6/01/5f/c6015f6e7e69c511e35ea60b613949dc.jpg',
        name: 'Nguyễn Mig',
        time: '9:38 AM',
        message: 'mai chị lấy giùm em i',
        seen: true,
        new: true,
        toMe: false


    },
    {
        img: 'https://i.pinimg.com/236x/31/49/fb/3149fb7a405cc52283fa99d4d408058a.jpg',
        name: 'Hoàng hải',
        time: '9:38 AM',
        message: 'mai t chỉ cho ngu vl',
        seen: true,
        new: false,
        toMe: false

    },
    {
        img: 'https://i.pinimg.com/236x/50/83/97/508397eac45ef963dfd0701ce94194b2.jpg',
        name: 'Đình Hoàng',
        time: '9:38 AM',
        message: 'Em biết đâu trời',
        seen: true,
        new: false,
        toMe: true

    },
    {
        img: 'https://i.pinimg.com/236x/ed/c8/12/edc812832ff235531a1ea66a60995ac7.jpg',
        name: 'Loan Nguyễn',
        time: '9:38 AM',
        message: 'cái này xinh wa m xinh quá',
        seen: true,
        new: true,
        toMe: true

    },
    {
        img: 'https://i.pinimg.com/236x/1a/7b/c3/1a7bc3ceddb2dede73b77979511f5517.jpg',
        name: 'Nguyễn Hùng',
        time: '9:38 AM',
        message: 'cho anh làm wen bé với',
        seen: true,
        new: true,
        toMe: true

    },
    {
        img: 'https://i.pinimg.com/236x/51/4a/75/514a758984cd8262ecafeb2c23f01548.jpg',
        name: 'Nguyễn Đức',
        time: '9:38 AM',
        message: 'oke mai t kêu nó cho',
        seen: true,
        new: false,
        toMe: false

    },
    {
        img: 'https://i.pinimg.com/236x/a8/b2/33/a8b2332011472f8a82356b3c1b8da722.jpg',
        name: 'saki',
        time: '9:38 AM',
        message: 'mai ra tập mới hay sao ý',
        seen: true,
        new: false,
        toMe: true

    },
    {
        img: 'https://i.pinimg.com/236x/10/e8/1a/10e81ad3a2805001ea5233c488fc98a4.jpg',
        name: 'Loan baby',
        time: '9:38 AM',
        message: 'eeey m ơi t nghĩ lại rồi mai mình đi xem phim i',
        seen: true,
        new: false,
        toMe: false

    },


]
function SmsPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        if (link) {
            const address = JSON.parse(link)
            if (address.link !== '/message') {
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
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Box sx={{ marginTop: '10px', overflowY: 'auto', maxHeight: '100%', paddingBottom: '20px' }}>
                    {CONSTANTS.map((el, index) => {
                        return <Box key={index} sx={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                            <Box sx={{ minWidth: { md: '15%', sm: '12%', xs: '16%' }, maxWidth: { md: '15%', sm: '12%', xs: '16%' }, margin: { sm: '0 15px 0 0', xs: ' 0 10px 0 0' } }}>
                                <img src={el.img} style={{ borderRadius: '50%' }} className="w-100" alt='avatar' />
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flex: 1 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <Typography variant="h5" sx={{ fontSize: { sm: '18px', xs: '16px' }, fontWeight: '700' }}>{el.name}</Typography>
                                    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', color: '#7b7b7b' }}>
                                        <Typography className="message" sx={{ fontSize: { sm: '16px', xs: '14px' }, flex: 1, color: el.new ? '#333' : '#7b7b7b', fontWeight: el.new ? '700' : '500' }}>{el.message}</Typography>
                                        <Typography sx={{ display: 'flex', alignItems: 'center', margin: '0 5px', fontSize: { sm: '16px', xs: '14px' } }}>{el.time} </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ width: '20px', height: '20px', margin: { sm: '0 10px', xs: '0 6px' }, marginBottom: '7px' }}>


                                        {!el.new && (!el.toMe && (el.seen ?
                                            <CheckCircleIcon sx={{ width: '20px', height: '20px', color: '#c8c6ce' }} /> :
                                            <img src={el.img} style={{ borderRadius: '50%' }} className="w-100" alt='avatar' />))}

                                    </Box>
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