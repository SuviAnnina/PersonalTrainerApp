import { useEffect, useState } from "react";
import moment from "moment/moment"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

function CalendarApp() {

    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => {
                const mappedTrainings = data.map(training => ({
                    title: `${training.activity} - ${training.customer.firstname} ${training.customer.lastname}`,
                    start: new Date(training.date),
                    end: moment(training.date).add(training.duration, 'minutes').toDate(),
                    description: `Customer: ${training.customer.firstname} ${training.customer.lastname}\nTraining duration (mins): ${training.duration}\nEmail: ${training.customer.email}\nPhone: ${training.customer.phone}`,
                }));
                setTrainings(mappedTrainings);
            })
            .catch(error => console.error('Error fetching training data:', error));
    }, []);

    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={trainings}
                startAccessor="start"
                endAccessor="end"
                tooltipAccessor="description"
            />
        </div>
    );
}

export default CalendarApp