import { createContext, useContext } from 'react'

type CriticalAssetsLoadingContextType = {
  registerCriticalAsset: (id: string) => void
  markCriticalAssetLoaded: (id: string) => void
  unregisterCriticalAsset: (id: string) => void
}

export const CriticalAssetsLoadingContext = createContext<
  CriticalAssetsLoadingContextType | undefined
>(undefined)

export const useCriticalAssetsActions = () => {
  const context = useContext(CriticalAssetsLoadingContext)

  if (!context) {
    throw new Error(
      'useCriticalAssetsActions must be used within a Layout component that provides CriticalAssetsLoadingContext'
    )
  }

  return context
}
