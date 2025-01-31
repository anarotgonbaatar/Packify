import React from 'react'
import './styles/pack-list.css'

function PackList({ packingList }) {
	return (
		<div className='section'>
			<span className='header'>Packing List</span>

			{ Object.entries( packingList ).map( ([ category, items ]) => (
				<div key={ category } className='category'>
					<span className='category-name'>{ category }</span>
					<ul>
						{ items.map( ( item ) => (
							<li key={ item.name }>
								<input type='checkbox' id={ item.name }/>
								<label htmlFor={ item.name }>{ item.name }</label>
							</li>
						))}
					</ul>
				</div>
			))}

			<span>Select attributes and press Submit to generate a list.</span>
			<span>Note: The generated list is only a suggestion and it's up to you to remember our specific needs.</span>
		</div>
	)
}

export default PackList