import React from 'react'

const PackList = ({ packingList }) => {
    return (
        <div className='cont'>
            <h2>Items to Pack</h2>
            {packingList.length > 0 ? (
            <ul>
                {packingList.map((item, index) => (
                <li key={index}>
                    {item.quantity} x {item.name}
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