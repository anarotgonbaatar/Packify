import './App.css';
import Form from './TripForm';
import List from './PackList';
import { useState } from 'react';

function App() {
    const [packingList, setPackingList] = useState([]);
    const [days, setDays] = useState(1); // Default to 1 day

    // Update both the packing list and the number of days
    const handleFormSubmit = (list, numDays) => {
        setPackingList(list);
        setDays(numDays);
    };

    return (
        <>
        <div className='h_cont cont' id='header'>
            <h1>Packify</h1>
        </div>

        {/* Pass the handleFormSubmit function to the Form component */}
        <Form onSubmit={handleFormSubmit} />

        {/* Pass both packingList and days to the List component */}
        <List packingList={packingList} days={days} />
        </>
    );
}

export default App;
