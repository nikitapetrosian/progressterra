import { useAppDispatch, useAppSelector } from 'common/hooks/useReactRedux';
import { accessTokenSelector, generalInfoSelector } from 'common/selectors';
import { redactorDataTime } from 'common/utils/redactor-data-time/redactor-data-time';
import { getGeneralInformation } from 'features/Bonus/bonus-slice';
import React, { useEffect } from 'react';
import iconFire from '../../../assets/fire.svg'

export const CardBonus = () => {
	const dispatch = useAppDispatch()
	const generalInformation = useAppSelector(generalInfoSelector)
	const accessToken = useAppSelector(accessTokenSelector)
	console.log(generalInformation);

	useEffect(() => {
		if (!accessToken) return
		dispatch(getGeneralInformation(accessToken))
	}, [accessToken]);

	return (
		<div className={'card'}>
			<div className={'card-title'}>
				<h1>{generalInformation.data?.currentQuantity || '~~'} бонусов</h1>
				<div className={'card-info'}>
					<span>{redactorDataTime(generalInformation.data?.dateBurning) || '~~'} сгорит</span>
					<img src={iconFire} alt="" />
					<span>{generalInformation.data?.forBurningQuantity || '~~'} бонусов</span>
				</div>
			</div>
			<button />
		</div>
	);
};

