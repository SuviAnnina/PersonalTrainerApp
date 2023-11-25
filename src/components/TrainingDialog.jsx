import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import moment from 'moment';

function TrainingDialog({ training, handleChange }) {

    return (
        <DialogContent>
            <TextField
                name="date"
                margin="dense"
                label="date and time (DD.MM.YYYY hh:mm)"
                fullWidth variant="standard"
                value={training.date}
                onChange={handleChange}
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

            {/*             <TextField
                name="customer"
                margin="dense"
                label="customer"
                fullWidth variant="standard"
                value={training.customer}
                onChange={handleChange}
            /> */}

        </DialogContent>
    )
}

export default TrainingDialog