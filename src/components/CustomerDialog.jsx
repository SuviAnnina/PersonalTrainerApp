import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

function CustomerDialog({ customer, handleChange }) {

    return (
        <DialogContent>
            <TextField
                name="firstname"
                margin="dense"
                label="firstname"
                fullWidth variant="standard"
                value={customer.firstname}
                onChange={handleChange}
            />
            <TextField
                name="lastname"
                margin="dense"
                label="lastname"
                fullWidth variant="standard"
                value={customer.lastname}
                onChange={handleChange}
            />
            <TextField
                name="streetaddress"
                margin="dense"
                label="streetaddress"
                fullWidth variant="standard"
                value={customer.streetaddress}
                onChange={handleChange}
            />
            <TextField
                name="postcode"
                margin="dense"
                label="postcode"
                fullWidth variant="standard"
                value={customer.postcode}
                onChange={handleChange}
            />
            <TextField
                name="city"
                margin="dense"
                label="city"
                fullWidth variant="standard"
                value={customer.city}
                onChange={handleChange}
            />
            <TextField
                name="email"
                margin="dense"
                label="email"
                fullWidth variant="standard"
                value={customer.email}
                onChange={handleChange}
            />
            <TextField
                name="phone"
                margin="dense"
                label="phone"
                fullWidth variant="standard"
                value={customer.phone}
                onChange={handleChange}
            />
        </DialogContent>
    )
}

export default CustomerDialog