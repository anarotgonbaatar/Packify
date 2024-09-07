import './App.css';
import Form from './TripForm';
import List from './PackList';
import { useState } from 'react';

function App() {
    const [packingList, setPackingList] = useState([]);

    const handleFormSubmit = (list) => {
        setPackingList(list);
    };

    return (
        <>
        <div className='h_cont cont' id='header'>
            <h1>Packify</h1>
        </div>

        <Form onSubmit={handleFormSubmit} />

        <List packingList={packingList} />
        </>
    );
}

export default App;