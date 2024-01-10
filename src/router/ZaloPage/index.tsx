import { Avatar, Box, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const NAV = [
    {
        title: 'Tin nhắn',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-comment" ></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-comment"></i>,
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803321/z5052713303561_eaa51e992a1a327dd34ffaec353af29f_bbalsb.jpg',
        subImg: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704811844/z5055722825328_3b375cb76437c08eac0959b03f252060_dyaqbu.jpg'
    },
    {
        title: 'Danh bạ',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-address-book"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-address-book"></i>,
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803321/z5052713310552_57bfec604df54310244eec0906fde2b3_yw7tta.jpg'
    },
    {
        title: 'Khám phá',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-calendar-days"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-calendar-days"></i>,
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803321/z5052713306941_0f1a09b5ed81f021512f17e9bcf561ef_dltoq2.jpg'
    },
    {
        title: 'Nhật ký',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-clock"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-clock"></i>,
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803299/z5052713304308_5623b6cb8ff43c0b63adc233b90d39da_p8nsw6.jpg'
    },
    {
        title: 'Cá nhân',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-user"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-user"></i>,
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803299/z5052713304735_5e25957eff1acee97d75c6238c47523a_yzkibj.jpg'
    },
    {
        title: 'setting',
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803300/z5052713304307_e28e9fe44fa900bed13168815754d109_ezfkif.jpg'
    },
    {
        title: 'profile',
        img: 'https://res.cloudinary.com/dqg0k7qab/image/upload/v1704884475/z5058555006559_a5c25ff347c26603344b6a305d618c4dff_wkb5z0.jpg'
    },
]
function ZaloPage() {
    const navigate = useNavigate()
    const [value, setValue] = useState('Tin nhắn');
    const [infoUser, setInfoUser] = useState({
        fullName: '',
        avatar: '',
        phone: '',
        bg: ''
    })

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        const info = localStorage.getItem('infoUser')
        if (link && info) {
            const data = JSON.parse(info)
            setInfoUser({ avatar: (data.avatar as string), fullName: (data.fullName as string), phone: (data.phone as string), bg: (data.bg as string) })
            const address = JSON.parse(link)
            if (address.link !== '/zalo') {
                navigate('/')
                return
            }
        } else {
            navigate('/')
            return
        }
    }, [])
    return (<Box sx={{ backgroundImage: `url('https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=1380&t=st=1704423779~exp=1704424379~hmac=6d7877ed4410a17e8c7fa41ba7b61192ecf77531c2455e860a5a63784e289ad3')`, minHeight: '100vh', maxHeight: { sm: 'unset', xs: '100vh' }, backgroundSize: 'cover', backgroundPosition: '77% 31%', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: { sm: '20px 0', xs: 0 } }}>
        <Box sx={{ width: { xs: '100vw', md: '328px' }, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '5px', maxHeight: '100vh' }}>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                {NAV.map((el, index) => {
                    if (value === 'profile' && el.title === value) {
                        return <>
                            <Box sx={{ height: '200px', background: `url('${infoUser.bg}') `, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', position: 'relative', }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ padding: "10px" }} onClick={() => { setValue('Cá nhân') }}><ArrowBackIosNewIcon sx={{ color: '#fff', filter: 'drop-shadow(0px 3px 4px #333)', fontSize: '24px' }} /></Box>
                                    <Box sx={{ display: 'flex', padding: '10px' }}>
                                        <ManageHistoryIcon sx={{ color: '#fff', filter: 'drop-shadow(0px 3px 4px #333)', fontSize: '30px' }} />
                                        <MoreHorizIcon className="me-1" sx={{ color: '#fff', filter: 'drop-shadow(0px 1px 2px #333)', fontSize: '30px', marginLeft: '15px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ position: 'absolute', width: '100%', bottom: '0', transform: 'translateY(32%)', display: 'flex', justifyContent: 'center' }}>
                                    <Avatar alt="Remy Sharp" sx={{ width: '105px', height: '105px', border: '#f3f4f6 4px solid' }} src={infoUser.avatar} />
                                </Box>
                            </Box>
                            <Box sx={{ height: '40px', backgroundColor: '#f3f4f6' }}>
                            </Box>
                            <Typography sx={{ backgroundColor: '#f3f4f6' }} className="pb-1" variant="h5" align="center">{infoUser.fullName}</Typography>
                            <img className="w-100" src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704884475/z5058555006559_a5c25ff347c26603344b6a305d618c4dff_wkb5z0.jpg" alt="" />
                            <Box sx={{ backgroundColor: '#f3f4f6' }} className="pb-2 pt-1"><Typography align="center" sx={{ fontWeight: "600", maxWidth: '90%' }}>Hôm nay {infoUser.fullName} có gì vui?</Typography></Box>
                            <img className="w-100" src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704884475/z5058555006559_a5c25ff347c266w044b6a305d618c4dff_mnlrmi.jpg" alt="" />
                            <Box sx={{ height: { xs: '1000px', md: '0' }, backgroundColor: '#f3f4f6' }}></Box>
                        </>
                    }
                    if (value === 'Nhật ký' && el.title === value) {
                        return <>
                            <img key={index} style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                            <ListItem className="mt-1">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={infoUser.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Hôm nay bạn thế nào"
                                    primaryTypographyProps={{ sx: { color: '#797b7f' } }}
                                />
                            </ListItem>
                            <img src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704803300/oke123_zwcmqd.jpg" alt="" className="w-100" />
                            <Box sx={{ height: { xs: '1000px', md: '0' } }}></Box>
                        </>
                    }
                    if (value === 'setting' && el.title === value) {
                        return <Fragment key={index}>
                            <Box sx={{ position: 'relative' }}>
                                <img style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                                <Box sx={{ height: '45px', width: '40px', position: 'absolute', top: 0, left: 0 }} onClick={() => { setValue('Cá nhân') }}></Box>
                            </Box>
                            <Box sx={{ border: '1px solid #dbdbdb', borderRadius: '10px', margin: '10px 15px' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={infoUser.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText primary={infoUser.fullName} primaryTypographyProps={{ sx: { fontWeight: '600' } }} secondary="Thông tin cá nhân" />
                                </ListItem>
                            </Box>
                            <Box sx={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ height: { xs: '52%', md: '48%' }, margin: { xs: '0 16px 0 10px', md: '0 11px 0 10px' } }}><img src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704814554/z5052713304307_e28e9fe44fa900bed13168%C6%B0815754d109_zodvju.jpg" alt="" className="h-100" /></Box>
                                <Box sx={{ flex: '1' }}>
                                    <Typography sx={{ fontSize: { xs: '17px', md: '15px' }, color: '#000' }}>Số điện thoại</Typography>
                                    <Typography sx={{ color: '#8d8d8d', fontSize: '15px' }}>(+84) {infoUser?.phone}</Typography>
                                </Box>
                                <Box sx={{ height: { xs: '77%', md: '70%' } }} ><img src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704812843/z5052713304735_5e25957eff1acee97d7533cw6238c47523a_mfecqz.jpg" alt="" className="h-100" /></Box>
                            </Box>
                            <img src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704814554/z5052713304307_e28e9fe44fa900bed131w68815754d109_sfl12y.jpg" alt="" className="w-100" />
                            <Box sx={{ height: { xs: '1000px', md: '0' }, backgroundColor: '#f3f4f6' }}></Box>
                        </Fragment>
                    }
                    if (value === 'Cá nhân' && el.title === value) {
                        return <Box key={index} sx={{ userSelect: 'none' }}><img style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                            <Box sx={{ height: '63px' }} onClick={() => { setValue('profile') }}>
                                <ListItem alignItems="flex-start" sx={{ alignItems: 'center' }}>
                                    <ListItemAvatar sx={{ margin: 0 }}>
                                        <Avatar alt="Remy Sharp" src={infoUser.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={infoUser.fullName}
                                        primaryTypographyProps={{ sx: { fontSize: '14px' } }}
                                        secondary={
                                            <span style={{ fontSize: '12px' }}>
                                                {"Xem trang cá nhân"}
                                            </span>
                                        }
                                    />
                                    <ListItemIcon sx={{ margin: 0, minWidth: 'unset' }}><PersonAddAltIcon sx={{ fontSize: '20px' }} color="primary" /></ListItemIcon>
                                </ListItem>
                                {/* <img src="" /> */}
                            </Box>
                            <img key={index} style={{ width: '100%', userSelect: 'none' }} src='https://res.cloudinary.com/dqg0k7qab/image/upload/v1704812842/z5052713304735_5e25957eff1acee97d75c32w6238c47523a_nupatp.jpg' alt="" />
                            <img src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704813705/z5052713304735_5e25957eff1acee97d75cw6238%C6%B0c47523a_s9hrhv.jpg" alt="" className="w-100" onClick={() => { setValue('setting') }} />
                            <img className="w-100" src="https://res.cloudinary.com/dqg0k7qab/image/upload/v1704812845/z5052713304735_235e25957eff1acee97d75cw6238c47523a_xjzt4j.jpg" alt="" />
                            <Box sx={{ height: { xs: '1000px', md: '0' }, backgroundColor: '#f3f4f6' }}></Box>
                        </Box>
                    }
                    if (el.title === value) {
                        return <>
                            <img key={index} style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                            {el.subImg ? <Box sx={{ display: { xs: 'block', md: 'none' } }}><img key={index} style={{ width: '100%', userSelect: 'none' }} src={el.subImg} alt="" /></Box> : <Box sx={{ height: { xs: '1000px', md: '0' } }}></Box>}
                        </>
                    }
                    return <></>

                }
                )}
            </Box>
            {value !== 'setting' && value !== 'profile' && <Box>
                <Tabs TabIndicatorProps={{ sx: { display: 'none' } }} sx={{ backgroundColor: '#fafbfd', borderTop: '1px solid #ecedee' }} value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
                    {NAV.map(((el, index) => {
                        if (el.title === 'setting' || el.title === "profile") return <></>
                        return <Tab sx={{ padding: ' 12px 0px', minWidth: 'unset' }} label={<><Box>{el.title !== value ? el.icon : el.iconActive}</Box>{el.title === value ? <Typography sx={{ fontSize: '11px', textTransform: 'none' }}>{el.title}</Typography> : ''}</>} key={index} value={el.title} />
                    }))}

                </Tabs>
            </Box>}

        </Box>
    </Box >
    );
}

export default ZaloPage;