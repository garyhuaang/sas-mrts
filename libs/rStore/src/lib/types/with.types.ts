import type { AppDispatch, RootState } from '../rStore'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>()
