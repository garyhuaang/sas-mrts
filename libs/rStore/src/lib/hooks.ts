import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from './rStore'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
