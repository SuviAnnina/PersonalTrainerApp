import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Customer from './Customer';
import Training from './Training';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import CalendarApp from './Calendar';

function TabApp() {

    const [value, setValue] = useState("customer");

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <Container maxWidth="x2">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Personal Training App</Typography>
                </Toolbar>
            </AppBar>

            <Tabs value={value} onChange={handleChange}>
                <Tab value="customer" label="Customer" />
                <Tab value="training" label="Training" />
                <Tab value="calendar" label="Calendar" />
            </Tabs>
            {value === "customer" && <Customer />}
            {value === "training" && <Training />}
            {value === "calendar" && <CalendarApp />}
        </Container>
    )
}

export default TabApp