import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import AddTraining from "./AddTraining";
import DeleteIcon from '@mui/icons-material/Delete';


function Customer() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const [columnDefs] = useState([
        /* { field: "id", sortable: true, filter: true }, */
        { field: "firstname", sortable: true, filter: true },
        { field: "lastname", sortable: true, filter: true },
        { field: "streetaddress", sortable: true, filter: true },
        { field: "postcode", sortable: true, filter: true, width: 140 },
        { field: "city", sortable: true, filter: true, width: 140 },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true, width: 130 },
        {
            cellRenderer: params => <EditCustomer fetchCustomers={fetchCustomers} data={params.data} />,
            width: 90
        },
        {
            cellRenderer: params => <Button size="small" onClick={() => {
                deleteCustomer(params.data.links.find(link => link.rel === "self").href)
            }} ><DeleteIcon /></Button>,
            width: 90
        },
        { cellRenderer: params => <AddTraining data={params.data} /> }
    ]);

    const fetchCustomers = () => {
        fetch(import.meta.env.VITE_API_URL + '/api/customers')
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

    const deleteCustomer = (url) => {
        if (window.confirm("are you sure you want to delete customer?")) {
            fetch(url, { method: 'DELETE' })
                .then(response => {
                    if (response.ok)
                        fetchCustomers();
                    else
                        throw new Error("Error in DELETE: " + response.statusText);
                })
                .catch(err => console.error(err))
        }
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