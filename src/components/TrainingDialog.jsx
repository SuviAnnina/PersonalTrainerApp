import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';

function TrainingDialog({ training, handleChange, handleTimeChange }) {

    return (
        <DialogContent>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={4} sx={{ minWidth: 305 }}>

                    <DateTimePicker
                        label="Date and time"
                        value={training.date}
                        onChange={handleTimeChange}
                    />

                    <TextField
                        name="activity"
                        margin="dense"
                        label="activity"
                        fullWidth variant="standard"
                        value={training.activity}
                        onChange={handleChange}
                    />

                    <TextField
                        name="duration"
                        margin="dense"
                        label="duration"
                        fullWidth variant="standard"
                        value={training.duration}
                        onChange={handleChange}
                    />

                </Stack>
            </LocalizationProvider>
        </DialogContent >
    )
}

export default TrainingDialog