import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import dayjs from 'dayjs'

function Training() {

    const [trainings, setTrainings] = useState([]);

    /* kalenteri komponenttia varten eti ja käytä react-big-calendar */

    useEffect(() => {
        fetchTrainings();
    }, []);

    const [columnDefs] = useState([
        /* { field: "id", sortable: true, filter: true }, */
        { headerName: "Date", field: "date", sortable: true, filter: true, valueGetter: (params) => formatTrainingDate(params.data.date), },
        { field: "duration", sortable: true, filter: true },
        { field: "activity", sortable: true, filter: true },
        { headerName: "Customer", field: "customer.firstname", valueGetter: (params) => `${params.data.customer.firstname} ${params.data.customer.lastname}`, sortable: true, filter: true }
    ]);

    const fetchTrainings = () => {
        fetch("https://traineeapp.azurewebsites.net/gettrainings")
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error("Error in fetch: " + response.statusText);
            })
            .then(data => setTrainings(data))
            .catch(err => console.error(err))
    }

    const formatTrainingDate = (date) => {
        return dayjs(date).format("DD.MM.YYYY HH:mm");
    };

    return (
        <div className="ag-theme-material" style={{ width: "95%", height: 800 }}>
            <AgGridReact
                rowData={trainings}
                columnDefs={columnDefs}
                pagination={true}
                paginationAutoPageSize={true}
                animateRows={true}
            />

        </div>

    )
}

export default Training