import { IRegion } from '@src/types/region.types';

export interface IRegionState {
	currentRegion: null | IRegion;
	isLoading: boolean;
}
