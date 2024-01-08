import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FilledInput, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller, useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import apiService from "../../service/apiService";
import API_PATHS from "../../config/api";
import { useState } from "react";
import { toast } from "react-toastify";
interface CreateCode {
    code: string
    message: string
    fullName: string
    avatar: File | '';
}
function AddCode({ open, handleClose, handleResetList }: { open: boolean, handleClose: () => void, handleResetList: () => void }) {
    const [loading, setLoading] = useState(false)
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateCode>();
    const onSubmit = (data: CreateCode) => {
        setLoading(true)
        const formData = new FormData()
        formData.append('avatar', data.avatar)
        formData.append('code', data.code)
        formData.append('fullName', data.fullName)
        formData.append('message', data.message)
        apiService('post', API_PATHS.UPLOAD, formData, '', true)
            .then(() => {
                toast.success('Create code success');
                handleClose();
                handleResetList()
                setLoading(false)
                reset()
            })
            .catch(() => {
                toast.error('Create code failed')
                setLoading(false)

            })
    };
    const styleInput = {
        color: '#333', width: '100%', boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px', backgroundColor: '#fff', marginBottom: '5px'
    }
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
    >
        <DialogTitle id="alert-dialog-title">
            {"Create Code"}
        </DialogTitle>
        <DialogContent sx={{ overflow: 'unset', marginTop: '20px' }}>
            <Box sx={{ marginBottom: '15px' }}>

                <Controller
                    name="code"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: any) => (
                        <TextField id="outlined-basic" label="Code" variant="outlined" {...field} size="small" sx={styleInput} />
                    )}
                />
                {errors.code && <Typography sx={{ color: 'red', fontSize: '12px', }}>This field is required</Typography>}
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Controller
                    name="message"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: any) => (
                        <TextField id="outlined-basic" label="Message" variant="outlined" size="small" {...field} sx={styleInput} />
                    )}
                />
                {errors.message && <Typography sx={{ color: 'red', fontSize: '12px', }}>This field is required</Typography>}
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
                <Controller
                    name="fullName"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: any) => (
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" size="small" {...field} sx={styleInput} />
                    )}
                />
                {errors.fullName && <Typography sx={{ color: 'red', fontSize: '12px', }}>This field is required</Typography>}
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
                <Controller
                    name="avatar"
                    control={control}
                    defaultValue={''}
                    rules={{ required: true }}
                    render={({ field }: any) => (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e: any) => {
                                field.onChange(e.target.files[0]);
                            }}
                        />

                    )}
                />
                {errors.avatar && <Typography sx={{ color: 'red', fontSize: '12px', }}>This field is required</Typography>}
            </Box>


        </DialogContent>
        <DialogActions sx={{ padding: '10px' }}>
            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton onClick={handleSubmit(onSubmit)} loading={loading} variant="contained" autoFocus>
                Add
            </LoadingButton>
        </DialogActions>
    </Dialog>);
}

export default AddCode;