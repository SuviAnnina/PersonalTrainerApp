import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TrainingDialog from "./TrainingDialog";
import dayjs from 'dayjs';

function AddTraining({ data }) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        date: null,
        activity: "",
        duration: "",
        customer: data.links.find(link => link.rel === "self").href
    });

    const handleClickOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    const handleChange = (e) => {
        setTraining({
            ...training,
            [e.target.name]: e.target.value
        });

    }

    const handleTimeChange = (dateTime) => {
        const newValueDateTime = dayjs(dateTime);
        const formattedDateTime = newValueDateTime.toISOString();

        setTraining({
            ...training,
            date: formattedDateTime
        });
    }

    const saveTraining = () => {
        fetch(import.meta.env.VITE_API_URL + '/api/trainings', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(training)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when adding a new training: " + response.statusText);
            })
            .catch(err => console.error(err))
        handleClose();
        setTraining({
            date: null,
            activity: "",
            duration: "",
            customer: data.links.find(link => link.rel === "self").href
        })
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add training</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Training for {data.firstname} {data.lastname}</DialogTitle>
                <TrainingDialog training={training} handleChange={handleChange} handleTimeChange={handleTimeChange} />
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={saveTraining} >Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTraining