import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectCurrentRegion, selectRegionLoading } from '@src/store/region/selectors';
import { getRegionRequest } from '@src/store/region/action';
import { RegionPageWrapper } from '@src/pages/RegionPage/style';
import { Loader } from '@components/Loader/Loader';

export const RegionPage: React.FC = () => {
	const params = useParams();
	const region = useAppSelector(selectCurrentRegion);
	const isLoading = useAppSelector(selectRegionLoading);
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(getRegionRequest(params.regionName));
	}, []);
	
	return (
		<RegionPageWrapper>
			{isLoading && <Loader size={120} color='#fff'/>}
			{region && <h1>{region.ukName}</h1>}
		</RegionPageWrapper>
	);
};
