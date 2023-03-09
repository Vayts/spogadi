import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegionState } from '@src/store/region/types';
import { IRegion } from '@src/types/region.types';

const initialState: IRegionState = {
	currentRegion: null,
	isLoading: true,
};

export const regionSlice = createSlice({
	name: 'region',
	initialState,
	reducers: {
		regionRequestStart: (state) => {
			state.isLoading = true;
		},
		regionRequestSuccess: (state, action: PayloadAction<IRegion>) => {
			state.isLoading = false;
			state.currentRegion = action.payload;
		},
		regionRequestError: (state) => {
			state.isLoading = false;
		},
	},
});

export const { regionRequestStart, regionRequestSuccess, regionRequestError } = regionSlice.actions;
