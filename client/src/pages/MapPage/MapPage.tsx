import React, { useCallback } from 'react';
import {
	MapControls, MapMoreButton, MapPageWrapper, MapPath, MapSvg,
	MapWrapper,
} from '@src/pages/MapPage/style';
import { Button } from '@components/UI/Button/Button';
import { REGION_COORDS } from '@constants/regionCoords';
import { useNavigate } from 'react-router-dom';

export const MapPage: React.FC = () => {
	const navigate = useNavigate();
	
	const navigateToRegion = useCallback((e) => {
		navigate(`/region/${e.target.id}`);
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
				<MapSvg viewBox='0 0 1200 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0_1_31)'>
						{REGION_COORDS.map((item) => {
							return (
								<MapPath
									key={item.id}
									id={item.id}
									onClick={(e) => navigateToRegion(e)}
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
			</MapWrapper>
		</MapPageWrapper>
	);
};
