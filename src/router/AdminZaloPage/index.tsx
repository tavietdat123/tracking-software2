import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TextField, Typography } from '@mui/material';
import apiService from '../../service/apiService';
import API_PATHS from '../../config/api';
import { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddCode from './addCode';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
export default function AdminZalo() {
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [loadingPhone, setLoadingPhone] = useState(false)
    const [currentId, setCurrentId] = useState<string>('')
    const [resetList, setResetList] = useState(true)
    const [phone, setPhone] = useState<any>('')
    useEffect(() => {
        apiService('get', API_PATHS.zaloApi, {})
            .then((res) => {
                setData(res)
            })
            .catch(() => { toast.error('Get list data failed') })

    }, [resetList])
    useEffect(() => {
        apiService('get', API_PATHS.GET_PHONE, {})
            .then((res) => {
                setPhone(res?.zaloPhone)
            })
            .catch(() => { toast.error('Get list data failed') })
    }, [])
    const handleResetList = () => {
        setResetList(!resetList)
    }
    const handleClose = useCallback(() => {
        setOpenModal(false)
    }, [])
    const handleDeleteCode = (id: string) => {
        setLoading(true)
        setCurrentId(id)
        apiService('delete', API_PATHS.zaloApi + '/' + id, {})
            .then((res) => {
                toast.success('Delete code success')
                setLoading(false)
                setCurrentId('')
                handleResetList()
            })
            .catch(() => {
                toast.error('Delete code failed')
                setLoading(false)
                setCurrentId('')
            })
    }
    const handleSavePhone = () => {
        const validate = /^0\d{9}$/
        if (!validate.test(phone)) {
            toast.error('input field must be numeric, with leading zero and 10 characters.')
            return
        }
        setLoadingPhone(true)
        apiService('post', API_PATHS.SAVE_PHONE, { zaloPhone: phone })
            .then((res) => {
                setPhone(res?.zaloPhone)
                toast.success('Save phone number success')
                setLoadingPhone(false)
            })
            .catch(() => {
                toast.error('Save phone number failed')
                setLoadingPhone(false)
            })
    }
    return (
        <Box sx={{ padding: { sm: "40px 50px", xs: '5px 5px' } }}>
            <Typography sx={{ margin: '10px 0', }}>Zalo phone:</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField size='small' onChange={(e: any) => { setPhone(e.target.value) }} value={phone} placeholder='Phone number' sx={{ width: { md: '30%', sm: '50%', xs: '100%', marginRight: '10px' } }} />
                <LoadingButton variant='contained' loading={loadingPhone} onClick={handleSavePhone} >Save</LoadingButton>
            </Box>
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Code id</TableCell>
                            <TableCell >Message</TableCell>
                            <TableCell >FullName</TableCell>
                            <TableCell >Avatar</TableCell>
                            <TableCell ><Button onClick={() => {
                                setOpenModal(true)
                            }} color='primary' variant='contained' ><AddIcon /></Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row: any, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
                                    {row?.code}
                                </TableCell >
                                <TableCell sx={{ padding: '10px 5px ' }}>{row?.message}</TableCell>
                                <TableCell sx={{ padding: '10px 5px ' }}>{row?.fullName}</TableCell>
                                <TableCell sx={{ padding: '10px 5px ' }}><img width={50} src={row?.avatar} alt='' /></TableCell>

                                <TableCell ><LoadingButton loading={loading && currentId === row?._id} color='error' onClick={() => handleDeleteCode(row?._id)} variant='contained'><DeleteIcon /></LoadingButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddCode open={openModal} handleResetList={handleResetList} handleClose={handleClose} />
        </Box >
    );
}