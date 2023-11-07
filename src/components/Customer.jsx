import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AddCustomer from "./AddCustomer";

function Customer() {

    /* Asiakkaan muokkaus ja poisto */

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const [columnDefs] = useState([
        /* { field: "id", sortable: true, filter: true }, */
        { field: "firstname", sortable: true, filter: true },
        { field: "lastname", sortable: true, filter: true },
        { field: "streetaddress", sortable: true, filter: true },
        { field: "postcode", sortable: true, filter: true },
        { field: "city", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true },
    ]);

    const fetchCustomers = () => {
        fetch("https://traineeapp.azurewebsites.net/api/customers")
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error("Error in fetch: " + response.statusText);
            }

            )
            .then(data => setCustomers(data.content))
            .catch(err => console.error(err))
    }

    return (
        <>
            <AddCustomer fetchCustomers={fetchCustomers} />
            <div className="ag-theme-material" style={{ width: "95%", height: 800 }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationAutoPageSize={true}
                    animateRows={true}
                />

            </div>
        </>
    )
}

export default Customer