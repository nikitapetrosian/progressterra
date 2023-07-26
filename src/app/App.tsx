import 'app/App.css';
import { useAppDispatch } from 'common/hooks/useReactRedux';
import { createAccessToken } from 'features/Bonus/bonus-slice';
import { CardBonus } from 'features/Bonus/CardBonus/CardBonus';
import React, { useEffect } from 'react';
import iconInformation from '../assets/information.svg'



function App() {
	let body = {
		'idClient': '2c44d8c2-c89a-472e-aab3-9a8a29142315',
		'accessToken': '',
		'paramName': 'device',
		'paramValue': '7db72635-fd0a-46b9-813b-1627e3aa02ea',
		'latitude': 0,
		'longitude': 0,
		'sourceQuery': 0
	};

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(createAccessToken(body))
	}, [dispatch]);

	return (
		<div className="Wrapper">
			<header className={'header'}>
				<p>логотип</p>
				<img src={iconInformation} alt="" />
			</header>
			<CardBonus />
		</div>
	);
}

export default App;

