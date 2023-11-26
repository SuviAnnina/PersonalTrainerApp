import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CustomerDialog from './CustomerDialog';
import EditIcon from '@mui/icons-material/Edit';

function EditCustomer({ fetchCustomers, data }) {

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
        setCustomer({
            firstname: data.firstname,
            lastname: data.lastname,
            streetaddress: data.streetaddress,
            postcode: data.postcode,
            city: data.city,
            email: data.email,
            phone: data.phone
        })
    }

    const handleClose = () => {
        setOpen(false);
    }

    const saveCustomer = () => {
        fetch(data.links.find(link => link.rel === "self").href, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when adding car: " + response.statusText);

                fetchCustomers();
            })
            .catch(err => console.error(err))

        handleClose();
    }

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Button size="small" onClick={handleClickOpen} ><EditIcon /></Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit customer</DialogTitle>
                <CustomerDialog customer={customer} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCustomer