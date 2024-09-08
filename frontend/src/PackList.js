import React from 'react'

const PackList = ({ packingList }) => {
    // Only unique items are displayed
    const uniqueItems = Array.from( new Set( packingList.map( item => item.name ))); 

    return (
        <div className='cont'>
            <h2>Items to Pack</h2>
            {uniqueItems.length > 0 ? (
            <ul>
                {uniqueItems.map((itemName, index) => (
                <li key={index}>
                    {packingList.find( item => item.name === itemName).quantity} x {itemName}
                </li>
                ))}
            </ul>
            ) : (
            <span>Select attributes and press Submit to generate a list.</span>
            )}
            <span>Note: The generated list is only a suggestion and it's up to you to remember our specific needs.</span>
        </div>
    );
};

export default PackList