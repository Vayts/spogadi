import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@hoc/Layout/Layout';
import { useTranslation } from 'react-i18next';
import { Intro } from '@src/pages/Intro/Intro';
import { MapPage } from '@src/pages/MapPage/MapPage';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='/' element={<Intro/>}/>
					<Route path='/map' element={<MapPage/>}/>
				</Route>
			</Routes>
		</AppWrapper>
	);
};
