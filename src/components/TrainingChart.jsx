import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import _ from 'lodash';


function TrainingChart() {

    const [trainingData, setTrainingData] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/gettrainings')
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error("Error in fetch: " + response.statusText);
            })
            .then(data => setTrainingData(data))
            .catch(err => console.error(err));
    }, []);

    const groupedData = _.chain(trainingData)
        .groupBy('activity')
        .map((activities, activity) => ({
            activity,
            duration: _.sumBy(activities, 'duration'),
        }))
        .value();

    return (
        <ResponsiveContainer width="50%" height={500} >
            <BarChart
                data={groupedData}
                width={150}
                height={40}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="activity"
                    fontFamily={'Roboto, sans-serif'}
                />
                <YAxis
                    label={{
                        value: 'Duration (minutes)',
                        angle: -90,
                        position: 'insideLeft',
                        fontSize: '18px',
                        fontFamily: 'Roboto, sans-serif'
                    }}
                    fontFamily={'Roboto, sans-serif'}
                />
                <Tooltip />
                <Legend content={() => null} />
                <Bar dataKey="duration" fill="#6E766B" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TrainingChart