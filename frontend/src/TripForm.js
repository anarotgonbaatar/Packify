import axios from 'axios'
import React, { useState } from 'react'
import './TripForm.css'

const TripForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        tripName: '',
        tripType: [],
        days: 1,
        activities: [],
        weather: [],
        specialRequirements: [],
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prev) => {
            if (checked) {
                return { ...prev, [name]: [...prev[name], value] };
            } else {
                return { ...prev, [name]: prev[name].filter((item) => item !== value) };
            }
        });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/generate-list', formData);
            onSubmit(response.data.packingList);
        } catch (error) {
            console.error('Error generating packing list:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='cont'>
            <div className='att-cont'>
                <label className='att-label'>Trip Name:</label>
                <input type="text" name="tripName" value={formData.tripName} onChange={handleChange} />
            </div>
            <div className='att-cont cont'>
                <label className='att-label'>Type of Trip:</label>
                <div className='checkbox-cont'>
                    <label>
                        <input type="checkbox" name="tripType" value="vacation" onChange={handleCheckboxChange} />
                        Vacation
                    </label>
                    <label>
                        <input type="checkbox" name="tripType" value="business" onChange={handleCheckboxChange} />
                        Business
                    </label>
                    <label>
                        <input type="checkbox" name="tripType" value="business" onChange={handleCheckboxChange} />
                        Road Trip
                    </label>
                </div>
            </div>
            <div className='att-cont'>
                <label className='att-label'>Number of Days:</label>
                <input type="number" name="days" value={formData.days} onChange={handleChange} min="1" />
            </div>
            <div className='att-cont cont'>
                <label className='att-label'>Activities:</label>
                <div className="checkbox-cont">
                    {[
                        "Sightseeing",
                        "Photography",
                        "Hiking",
                        "Running",
                        "Rock Climbing",
                        "Cycling",
                        "Motorcycling",
                        "Off-roading",
                        "Camping",
                        "Backpacking",
                        "Swimming",
                        "Snorkeling",
                        "Scuba Diving",
                        "Fishing",
                        "Kayaking",
                        "Skiing",
                        "Surfing",
                        "Snowboarding",
                        "Mountain Biking",
                        "Horseback Riding",
                        "Hunting"
                    ].map(activity => (
                        <label key={activity}>
                            <input type="checkbox" name="activities" value={activity.toLowerCase().replace(/ /g, '-')} onChange={handleCheckboxChange} />
                            {activity}
                        </label>
                    ))}
                </div>
            </div>
            <div className='att-cont cont'>
                <label className='att-label'>Weather:</label>
                <div className='checkbox-cont'>
                    <label>
                        <input type="checkbox" name="weather" value="sunny" onChange={handleCheckboxChange} />
                        Sunny
                    </label>
                    <label>
                        <input type="checkbox" name="weather" value="rainy" onChange={handleCheckboxChange} />
                        Rainy
                    </label>
                    <label>
                        <input type="checkbox" name="weather" value="snowy" onChange={handleCheckboxChange} />
                        Snowy
                    </label>
                    <label>
                        <input type="checkbox" name="weather" value="snowy" onChange={handleCheckboxChange} />
                        Windy
                    </label>
                </div>
            </div>
            <div className='att-cont cont'>
                <label className='att-label'>Special Requirements:</label>
                <div className='checkbox-cont'>
                    <label>
                        <input type="checkbox" name="specialRequirements" value="medications" onChange={handleCheckboxChange} />
                        Medications
                    </label>
                    <label>
                        <input type="checkbox" name="specialRequirements" value="specificEquipment" onChange={handleCheckboxChange} />
                        Specific Equipment
                    </label>
                    {/* Add more special requirements as needed */}
                </div>
            </div>

            <div id='btn-cont'>
                <button id='reset-btn' type="reset" onClick={() => setFormData({
                        tripName: '',
                        tripType: [],
                        days: 1,
                        activities: [],
                        weather: [],
                        specialRequirements: [],
                    })}>
                    Reset
                </button>

                <button type="submit" id='submit-btn'>Submit</button>
            </div>
        </form>
    )
}

export default TripForm