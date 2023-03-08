import React, { useCallback, useEffect, useState } from 'react';
import {
	MapControls, MapMoreButton, MapPageWrapper, MapPath, MapSvg,
	MapWrapper,
} from '@src/pages/MapPage/style';
import { Button } from '@components/UI/Button/Button';
import { REGION_COORDS } from '@constants/regionCoords';
import { SelectedRegion } from '@src/pages/MapPage/SelectedRegion/SelectedRegion';

export const MapPage: React.FC = () => {
	const [active, setActive] = useState(null);
	const [region, setRegion] = useState({ x: 0, y: 0 });
	
	const setActiveHandler = useCallback((e) => {
		setActive(e.target.id);
	}, []);
	
	return (
		<MapPageWrapper>
			<MapControls>
				<MapMoreButton>?</MapMoreButton>
				<Button
					onClick={() => null}
					title='Додати спогад'
					height='40px'
				/>
			</MapControls>
			<MapWrapper>
				{!active && (
					<MapSvg viewBox='0 0 1200 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_1_31)'>
							{REGION_COORDS.map((item) => {
								return (
									<MapPath
										key={item.id}
										isSet={active === null}
										isActive={active === item.id}
										id={item.id}
										onClick={(e) => setActiveHandler(e)}
										d={item.d}
										fill='#484848'
										fillOpacity='0.2'
										stroke='white'
										strokeWidth='2'
									/>
								);
							})}
						</g>
						<defs>
							<clipPath id='clip0_1_31'>
								<rect width='1200' height='799.421' fill='white'/>
							</clipPath>
						</defs>
					</MapSvg>
				)}
				{active && <SelectedRegion target={active}/>}
			</MapWrapper>
		</MapPageWrapper>
	);
};
