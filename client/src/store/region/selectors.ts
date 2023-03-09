import { RootState } from '@src/store';
import { IRegion } from '@src/types/region.types';

export const selectCurrentRegion = (state: RootState): IRegion => state.region.currentRegion;
export const selectRegionLoading = (state: RootState): boolean => state.region.isLoading;
