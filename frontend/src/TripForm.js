import axios from 'axios'
import React, { useState } from 'react'
import './TripForm.css'

const TripForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        days: 1,
        activities: [],
        weather: [],
        tempHigh: 75,
        tempLow: 32
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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

            {/* Activities section */}
            <div className='att-cont cont'>
            <h2 className='section-label'>Activities:</h2>
            <div className="checkbox-cont">
                {[
                { group: "Outdoors", activities: ["Sightseeing", "Photography", "Road Trip", "Hiking", "Camping", "Backpacking"] },
                { group: "Water Activities", activities: ["Swimming", "Snorkeling", "Scuba Diving", "Fishing", "Kayaking", "Surfing"] },
                { group: "Mountain Activities", activities: ["Rock Climbing", "Skiing", "Snowboarding", "Mountain Biking", "Horseback Riding"] },
                { group: "Motorsports", activities: ["Motorcycling", "Off-roading", "ATV Riding"] },
                { group: "Athletic & Fitness", activities: ["Running", "Cycling", "Trail Running", "Yoga"] },
                { group: "Hunting & Wildlife", activities: ["Hunting", "Bird Watching", "Wildlife Tracking"] }
                ].map(category => (
                <div key={category.group} className="checkbox-group">
                    <strong>{category.group}:</strong>
                    {category.activities.map(activity => (
                    <label key={activity}>
                        <input
                        type="checkbox"
                        name="activities"
                        value={activity.toLowerCase().replace(/ /g, '-')}
                        onChange={handleCheckboxChange}
                        />
                        {activity}
                    </label>
                    ))}
                </div>
                ))}
            </div>
            </div>

            {/* Number of days section */}
            <div className='att-cont'>
                <h2 className='section-label'>Number of Days:</h2>
                <input className='input-num' type="number" name="days" value={formData.days} onChange={handleChange} min="1" />
            </div>

            {/* Weather section */}
            <div className='att-cont cont'>
                <h2 className='section-label'>Weather:</h2>
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
                        <input type="checkbox" name="weather" value="windy" onChange={handleCheckboxChange} />
                        Windy
                    </label>

                    {/* Temperature subsection */}
                    <label className='section-label'>Temperature in °F:</label>
                    <div className=''>
                        <span>High: </span>
                        <input className='input-num' type="number" name="tempHigh" value={formData.tempHigh} onChange={handleChange} min="0" />
                        <span>Low: </span>
                        <input className='input-num' type="number" name="tempLow" value={formData.tempLow} onChange={handleChange} min="0" />
                    </div>
                </div>
            </div>

            {/* Special requirements section removed for simplicity for now. Might add it back later */}

            {/* Buttons section */}
            <div id='btn-cont'>
                <button id='reset-btn' type="reset" onClick={() => setFormData({
                        days: 1,
                        activities: [],
                        weather: [],
                        tempHigh: 75,
                        tempLow: 32
                    })}>
                    Reset
                </button>

                <button type="submit" id='submit-btn'>Submit</button>
            </div>
        </form>
    )
}

export default TripForm