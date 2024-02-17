import { create } from 'zustand'

type BrandsImportFormStore = {
  errorMessage: string | undefined
  setErrorMessage: (errorMessage: string) => void
}

export const useBrandsImportFormStore = create<BrandsImportFormStore>(
  (set) => ({
    // csvファイルのエラーレスポンス
    errorMessage: undefined,
    setErrorMessage: (newErrorMessage) => {
      set(() => ({
        errorMessage: newErrorMessage,
      }))
    },
  }),
)
