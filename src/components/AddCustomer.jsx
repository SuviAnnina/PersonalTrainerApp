import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CustomerDialog from "./CustomerDialog";

function AddCustomer({ fetchCustomers }) {

    const [customer, setCustomer] = useState({
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: ""
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    }

    const saveCustomer = () => {
        fetch(import.meta.env.VITE_API_URL + '/api/customers', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when adding a new customer: " + response.statusText);

                fetchCustomers();
            })
            .catch(err => console.error(err))

        handleClose();
        setCustomer({
            firstname: "",
            lastname: "",
            streetaddress: "",
            postcode: "",
            city: "",
            email: "",
            phone: ""
        })
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add a new customer</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Customer</DialogTitle>
                <CustomerDialog customer={customer} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCustomer