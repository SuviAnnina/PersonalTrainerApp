import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TrainingDialog from "./TrainingDialog";
import moment from 'moment';
import { PanoramaSharp } from "@mui/icons-material";
import Training from "./Training";

function AddTraining({ fetchTrainings, fetchCustomers, data }) {

    const [training, setTraining] = useState({
        date: "",
        activity: "",
        duration: "",
        customer: data.links.find(link => link.rel === "self").href
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setTraining({
            ...training,
            [e.target.name]: e.target.value
        });

    }
    //console.log(training);

    const saveTraining = () => {

        const formattedDate = moment(training.date, "DD-MM-YYYYTHH:mm").toISOString();
        const updatedTraining = { ...training, date: formattedDate }

        fetch(import.meta.env.VITE_API_URL + '/api/trainings', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedTraining)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when adding a new training: " + response.statusText);
            })
            .catch(err => console.error(err))
        handleClose();
        //console.log(updatedTraining);

    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add a new training</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Training </DialogTitle>
                <TrainingDialog training={training} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={saveTraining} >Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTraining