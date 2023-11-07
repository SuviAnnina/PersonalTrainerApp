import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Customer from './Customer';
import Training from './Training';

function TabApp() {

    const [value, setValue] = useState("customer");

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="customer" label="Customer" />
                <Tab value="training" label="Training" />
            </Tabs>
            {value === "customer" && <Customer />}
            {value === "training" && <Training />}
        </div>
    )
}

export default TabApp