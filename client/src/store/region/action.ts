import { createAction } from '@reduxjs/toolkit';

export const getRegionRequest = createAction('GET_REGION', (name) => ({ payload: { name } }));
