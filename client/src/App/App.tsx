import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@hoc/Layout/Layout';
import { Intro } from '@src/pages/Intro/Intro';
import { MapPage } from '@src/pages/MapPage/MapPage';
import { RegionPage } from '@src/pages/RegionPage/RegionPage';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='/' element={<Intro/>}/>
					<Route path='/map' element={<MapPage/>}/>
					<Route path='/region/:regionName' element={<RegionPage/>}/>
				</Route>
			</Routes>
		</AppWrapper>
	);
};
