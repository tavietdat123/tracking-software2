import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const CONSTANTS = [
    {
        name: 'BO CONG AN',
        time: '9:38 AM',
        message: '[TB] Để phòng ngừa đuối nước cho trẻ em, Bộ Công an khuyến cáo: Trang bị kỹ năng bơi cho trẻ. Khi trẻ tắm, vui chơi cần có người lớn giám sát; mặc áo phao khi đi phương tiện thủy. Lấp các hố sâu, giếng nước không cần thiết. Khi phát hiện người đuối nước phải hô hoán và dùng các vật dụng (cây sào, phao, dây...) để kịp thời cứu nạn; tuyệt đối không nhảy xuống nước cứu người khi không biết bơi. Người lớn cần chủ động trang bị kiến thức về sơ cứu người bị đuối nước.'
    },
    {
        name: 'TEGO',
        time: '8:12 AM',
        message: 'Ma xac nhan cua ban la 5898'
    },
    {
        name: 'Google',
        time: '6:25 AM',
        message: 'G-943518 là mã xác minh Google của bạn.'
    },
    {
        name: '0932324345',
        time: '1:38 AM',
        message: 'Kham pha sanh WG voi tro choi san ca lon hap dan va hoan tra 3. Truy cap link: https://cutt.ly/F306KO8'
    },
    {
        name: 'Phong',
        time: 'yesterday',
        message: 'anh bảo với em rồi mà mai anh sẽ bảo lại với họ hỗ trợ em nhé em yên tâm'
    },
    {
        name: 'Bố',
        time: 'yesterday',
        message: 'bố kiểm tra lại tin nhắn đi con có nhắn trước đó rồi mà'
    },
    {
        name: '0392942334',
        time: 'Yesterday',
        message: 'ŏČľĥ ŵİŇTBR GąmĖUyTīnSố1,UuDąi ŅguoiMoiDągKy 388(Củ).HòaŋTra-ŋạpĐầu ToiDą4%,NʜɪᴇuPʜanQᴜaSiêuKhủŋg http://azpro.pro/gdjx ŰŵŃĹ'
    },
    {
        name: 'Em<3',
        time: 'Yesterday',
        message: 'anh rảnh khum mai di chơi đi anh'
    },
    {
        name: 'VIETTEL_4G',
        time: 'Yesterday',
        message: '[TB] CHIA SE KHO KHAN - VIETTEL UU DAI: CHI 15K, LEN MANG THA GA.Soan ST15K gui 191: 15.000d/3 ngay co 3GB, het luu luong truy cap theo goi Mobile Internet dang su dung (neu co). DV gia han sau 3 ngay. LH 198 (0d).'
    },
    {
        name: 'VTMONEY_QC',
        time: 'Yesterday',
        message: '[QC] Tặng bạn mã khuyến mại CHAOBANVTM: Giảm giá 35% (tối đa 50.000đ) cho chuyến xe beBike/beCar đầu tiên và thanh toán qua Viettel Money. Chi tiết tại https://viettelmoney.vn/be50 hoặc LH 18009000 (0đ). Từ chối QC, soạn TC3 gửi 199.'
    },
]
function SmsPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        if (link) {
            const address = JSON.parse(link)
            if (address.link !== '/sms') {
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
            <Typography variant="h4" sx={{ fontWeight: '700', marginTop: '15px' }}>Message</Typography>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Box sx={{ marginTop: '10px', overflowY: 'auto', maxHeight: '100%', paddingBottom: '20px' }}>
                    {CONSTANTS.map((el, index) => {
                        return <Box key={index} sx={{ display: 'flex', marginTop: '25px' }}>
                            <Box sx={{ minWidth: { md: '15%', sm: '12%', xs: '16%' }, maxWidth: { md: '15%', sm: '12%', xs: '16%' }, margin: { sm: '0 20px', xs: '0 10px' } }}>
                                <img src='https://api-private.atlassian.com/users/c54239b4afe9759088faf44df67ad45d/avatar' style={{ borderRadius: '50%' }} className="w-100" alt='avatar' />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography variant="h5" sx={{ fontSize: { sm: '18px', xs: '16px' }, fontWeight: '700' }}>{el.name}</Typography>
                                    <Typography sx={{ color: '#b4b4b6', display: 'flex', alignItems: 'center', fontSize: { sm: '16px', xs: '14px' } }}>{el.time} <ArrowForwardIosIcon sx={{ fontSize: '16px', marginLeft: '5px' }} /></Typography>
                                </Box>
                                <Box>
                                    <Typography className="sms" sx={{ fontSize: { sm: '16px', xs: '14px' } }}>{el.message}</Typography>
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