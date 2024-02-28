import { Box, Grid, Typography } from "@mui/material";
import image from "../../assets/img";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface Props {
    img: 'img1' | 'img2' | 'img3' | 'img4' | 'img5' | 'img6' | 'img7' | 'img8' | 'img9' | 'img10' | 'img11' | 'img12'
    link?: any
}

const CONSTANTS: Props[] = [
    { img: 'img1' },
    { img: 'img2' },
    { img: 'img3', link: '/zalo' },
    { img: 'img4' },
    { img: 'img5' },
    { img: 'img6', link: '/map' },
    { img: 'img7' },
    { img: 'img8', link: '/message' },
    { img: 'img9', link: '/sms' },
    { img: 'img10', },
    { img: 'img11' },
    { img: 'img12', link: '/history' },
]

function HomePage() {
    const navigate = useNavigate()
    const handleClick = (link: string) => {
        if (!link) {
            toast.error('Tính năng đang cập nhật, vui lòng chọn 1 tính năng khác')
            return
        }
        localStorage.setItem('addressService', JSON.stringify({ link }))
        navigate('/login')

    }
    return (<Box sx={{ backgroundImage: `url('https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=1380&t=st=1704423779~exp=1704424379~hmac=6d7877ed4410a17e8c7fa41ba7b61192ecf77531c2455e860a5a63784e289ad3')`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: '77% 31%', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h2" align="center" sx={{ margin: { sm: '48px', xs: '30px' }, color: '#fff', fontSize: { sm: '32px', xs: '24px' }, fontWeight: 500, textShadow: '0px 1px 2px #ccc' }}>PHẦN MỀM GIÁM SÁT ĐIỆN THOẠI</Typography>
        <Grid container sx={{ width: { sm: '83%', xs: '95%' }, padding: { sm: '24px', xs: '15px' }, backgroundColor: '#5a2d2d6b', borderRadius: '0.25rem', marginBottom: "20px" }}>
            {CONSTANTS.map((el: Props, index: number) => {
                return <Grid key={index} md={3} sm={4} xs={4} item sx={{ padding: '10px', cursor: 'pointer' }} onClick={() => { handleClick(el?.link) }} >
                    <img alt='vn' src={image[el.img]} style={{}} className="w-100" />
                </Grid>
            })}

        </Grid>

    </Box>);
}

export default HomePage;