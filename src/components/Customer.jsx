import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import AddTraining from "./AddTraining";

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
        { field: "postcode", sortable: true, filter: true },
        { field: "city", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true },

        {
            cellRenderer: params => <EditCustomer fetchCustomers={fetchCustomers} data={params.data} />,
            width: 120
        },

        {
            cellRenderer: params => <Button size="small" onClick={() => {
                //console.log(params.data);
                deleteCustomer(params.data.links.find(link => link.rel === "self").href)
            }} >Delete</Button>,
            width: 120
        },

        {
            cellRenderer: params => <AddTraining data={params.data} fetchCustomers={fetchCustomers} />,
            width: 120
        }


    ]);

    const fetchCustomers = () => {
        /* fetch("https://traineeapp.azurewebsites.net/api/customers") */
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