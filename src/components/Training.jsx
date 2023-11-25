import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import dayjs from 'dayjs'

function Training() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, []);

    const [columnDefs] = useState([
        /* { field: "id", sortable: true, filter: true }, */
        { headerName: "Date", field: "date", sortable: true, filter: true, valueGetter: (params) => formatTrainingDate(params.data.date), },
        { field: "duration", sortable: true, filter: true },
        { field: "activity", sortable: true, filter: true },
        { headerName: "Customer", field: "customer.firstname", valueGetter: (params) => `${params.data.customer.firstname} ${params.data.customer.lastname}`, sortable: true, filter: true },
        {
            cellRenderer: params => <Button size="small" onClick={() => {
                deleteTraining("https://traineeapp.azurewebsites.net/api/trainings/" + params.data.id)
            }} >Delete</Button>,
            width: 120
        }
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

    const deleteTraining = (url) => {
        if (window.confirm("are you sure you want to delete training?")) {
            fetch(url, { method: 'DELETE' })
                .then(response => {
                    if (response.ok)
                        fetchTrainings();
                    else
                        throw new Error("Error in DELETE: " + response.statusText);
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <>
            <div className="ag-theme-material" style={{ width: "95%", height: 800 }}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationAutoPageSize={true}
                    animateRows={true}
                />

            </div>
        </>
    )
}

export default Training 