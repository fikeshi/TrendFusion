import { configureStore } from '@reduxjs/toolkit'
import trendfusionReducer from './trendfusionSlice'

export const store = configureStore({
  reducer: {
    trendFusion: trendfusionReducer,
  },
}) 