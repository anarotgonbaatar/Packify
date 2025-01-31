import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Details from './Details';
import PackList from './PackList';

const App = () => {
	const [ packingList, setPackingList ] =useState({})

	return (
		<div id='index'>
			<div id='title'>Packify</div>
			<div id='app'>
				<Details setPackingList={ setPackingList }/>
				<PackList packingList={ packingList }/>
			</div>
			<div id='footer'>Developed by Anar Otgonbaatar.</div>
		</div>
	)
}

const root = ReactDOM.createRoot( document.getElementById( 'root' ) )
root.render( <App/> )