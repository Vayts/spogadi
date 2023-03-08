import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { SvgWrapper } from '@src/pages/MapPage/SelectedRegion/style';

interface ISelectedMap {
	target: string
}

export const SelectedRegion: React.FC<ISelectedMap> = ({ target }) => {
	
	return (
		<SvgWrapper>
			<img src={`./assets/img/${target}.svg`}/>
		</SvgWrapper>
	);
};
