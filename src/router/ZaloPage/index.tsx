import { Avatar, Box, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../../assets/img";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const NAV = [
    {
        title: 'Tin nhắn',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-comment" ></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-comment"></i>,
        img: image.zalo1
    },
    {
        title: 'Danh bạ',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-address-book"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-address-book"></i>,
        img: image.zalo2
    },
    {
        title: 'Khám phá',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-calendar-days"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-calendar-days"></i>,
        img: image.zalo3
    },
    {
        title: 'Nhật ký',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-clock"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-clock"></i>,
        img: image.zalo4
    },
    {
        title: 'Cá nhân',
        icon: <i style={{ fontSize: '16px' }} className="fa-regular fa-user"></i>,
        iconActive: <i style={{ fontSize: '16px' }} className="fa-solid fa-user"></i>,
        img: image.zalo5
    },
]
function ZaloPage() {
    const navigate = useNavigate()
    const [value, setValue] = useState('Tin nhắn');
    const [infoUser, setInfoUser] = useState({
        fullName: '',
        avatar: ''
    })

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        const info = localStorage.getItem('infoUser')
        if (link && info) {
            const data = JSON.parse(info)
            setInfoUser({ avatar: (data.avatar as string), fullName: (data.fullName as string) })
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
        <Box sx={{ width: '328px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '5px', maxHeight: '100vh' }}>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                {NAV.map((el, index) => {
                    if (value === 'Cá nhân' && el.title === value) {
                        return <Box sx={{ userSelect: 'none' }}><img key={index} style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                            <Box sx={{ height: '63px' }}>
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
                            <img key={index} style={{ width: '100%', userSelect: 'none' }} src={image.zalo6} alt="" />
                        </Box>
                    }
                    if (el.title === value) {
                        return <img key={index} style={{ width: '100%', userSelect: 'none' }} src={el.img} alt="" />
                    }
                    return <></>

                }
                )}
            </Box>
            <Box>
                <Tabs TabIndicatorProps={{ sx: { display: 'none' } }} sx={{ backgroundColor: '#fafbfd', borderTop: '1px solid #ecedee' }} value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
                    {NAV.map(((el, index) => {
                        return <Tab sx={{ padding: ' 12px 0px', minWidth: 'unset' }} label={<><Box>{el.title !== value ? el.icon : el.iconActive}</Box>{el.title === value ? <Typography sx={{ fontSize: '11px', textTransform: 'none' }}>{el.title}</Typography> : ''}</>} key={index} value={el.title} />
                    }))}

                </Tabs>
            </Box>
        </Box>
    </Box >
    );
}

export default ZaloPage;