import './styles/details.css'
import { sexes, weathers, activities, pets } from './attributes.js'
import React, { useState } from 'react'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import itemsData from './items.json'

function Details({ setPackingList }) {
    const [ selectedSex, setSelectedSex ] = useState('')
    const [ selectedWeathers, setSelectedWeathers ] = useState([])
    const [ selectedActs, setSelectedActs ] = useState([])
    // const [ selectedNeeds, setSelectedNeeds ] = useState([])
    const [ selectedPets, setSelectedPets ] = useState('')
    
	const handleSexSelect = ( value ) => setSelectedSex( value )
    const handleWeatherSelect = ( value ) => {
        if ( selectedWeathers.includes( value ) ) {
            setSelectedWeathers( selectedWeathers.filter( ( item ) => item !== value ) )
        } else {
            setSelectedWeathers( [ ...selectedWeathers, value ] )
        }
    }
    const handleActSelect = ( activity ) => {
        setSelectedActs( ( prev ) =>
            prev.includes( activity )
                ? prev.filter( ( item ) => item !== activity )
                : [ ...prev, activity ]
        )
    }
    // const handleNeedsSelect = ( specialNeeds ) => {
    //     setSelectedNeeds( ( prev ) =>
    //         prev.includes( specialNeeds )
    //             ? prev.filter( ( need ) => need !== specialNeeds )
    //             : [ ...prev, specialNeeds ]
    //     )
    // }
	const handlePetsSelect = ( value ) => setSelectedPets( value )

    // Generate Packing List by filtering items based on selected attributes
    const generatePackingList = async () => {
        if ( !itemsData ) {
			console.log( "Error: itemsData is null." )
			return
		}
		
		const filteredItems = {}

		Object.entries( itemsData ).forEach( ([ category, items ]) => {
			const categoryItems = items.filter( ( item ) =>
				( selectedWeathers.some( ( weather ) => item.weather.includes( weather )) || item.weather.length === 0 ) &&
				( selectedActs.some( ( act ) => item.activities.includes( act ) ) || item.activities.length === 0 ) &&
				( item.sex.includes( selectedSex ) || item.sex.length === 0 ) &&
				( item.pets.includes( selectedPets ) || item.pets.length === 0 )
			)

			if ( categoryItems.length > 0 ) {
				filteredItems[ category ] = categoryItems
			}
		})

		console.log( "Success: Filtered items." )
		setPackingList( filteredItems )
    }

    return (
        <div id="details-section" className='section'>
			<span className='header'>Trip Details</span>

			{/* Firs Row */}
			<div id='first-row'>
				<div className='question-box'>
					<span className='question'>What's in your pants?</span>

					<div className='options-box'>
						{ sexes.map( ({ value, icon }) => (
							<div
								key={ value }
								className={ `choice-box ${ selectedSex === value ? 'selected' : ''}` }
								onClick={ () => handleSexSelect( value ) }
							>
								{ icon }
								<span> { value } </span>
							</div>
						))}
					</div>
				</div>

				{/* Pets */}
				<div className='question-box'>
					<span className='question'>Are you bringing pets?</span>

					<div className='options-box'>
						{ pets.map( ({ value, icon }) => (
							<div
								key={ value }
								className={ `choice-box ${ selectedPets === value ? 'selected' : '' }` }
								onClick={ () => handlePetsSelect( value ) }
							>
								{ icon }
								<span> { value } </span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Weather */}
			<div className='question-box'>
				<span className='question'>What's the weather like?</span>

				<div className='options-box'>
					{ weathers.map( ({ value, icon }) => (
						<div
							key={ value }
							// Includes for multiple-choice
							className={ `choice-box ${ selectedWeathers.includes( value ) ? 'selected' : ''}` }
							onClick={ () => handleWeatherSelect( value ) }
						>
							{ icon }
							<span> { value } </span>
						</div>
					)) }
				</div>
			</div>

			{/* Activities */}
			<div className='question-box'>
				<span className='question'>What will you be doing?</span>

				<div className='activities-section'>
					{ activities.map( ( category ) => (
						<div key={ category.group } className="activity-group">
							<strong className='activity-category'> { category.group } </strong>

							<div className='activities-box'>
								{ category.activities.map( ( activity ) => (
									<div
										key={ `${ category.group } - ${ activity }` }
										className={ `activity-bubble ${
											selectedActs.includes( activity ) ? 'selected' : ''
										}` }
										onClick={ () => handleActSelect( activity ) }
									>
										{ activity }
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Special needs: meds or medical equipment */}
			{/* <div className='question-box'>
				<span className='question'>Special needs?</span>

				<div className='options-box'>
					{ specialNeeds.map( ({ value, icon }) => (
						<div
							key={ value }
							// Includes for multiple-choice
							className={ `choice-box ${ selectedWeathers.includes( value ) ? 'selected' : ''}` }
							onClick={ () => handleWeatherSelect( value ) }
						>
							{ icon }
							<span> { value } </span>
						</div>
					)) }
				</div>
			</div> */}
			
			<div className='btn-container'>
				<button className='btn' id='submit-btn'><FaArrowRotateLeft/></button>
				<button className='btn' id='submit-btn' onClick={ generatePackingList }>GENERATE</button>
			</div>

        </div>
    )
}

export default Details