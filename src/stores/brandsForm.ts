import { create } from 'zustand'
import {
  type ClientInfomations,
  type BrandMasterEditRequest,
  type ClientSearchRequest,
} from '@/features/brands/types'

type BrandsFormStore = {
  isOpenDialog: boolean
  setIsOpenDialog: (isOpen: boolean) => void
  isSearchable: boolean
  setIsSearchable: (isSearchable: boolean) => void
  pageNumber: number
  setPageNumber: (pageNumber: number) => void
  displayRowNumber: number
  searchConditions: ClientSearchRequest
  setSearchConditions: (searchConditions: ClientSearchRequest) => void
  formValues: BrandMasterEditRequest | undefined
  setFormValues: (formValues: BrandMasterEditRequest) => void
  selectedClients: ClientInfomations | undefined
  setSelectedClients: (clientInfomations: ClientInfomations | undefined) => void
  displayClients: ClientInfomations | undefined
  setDisplayClients: (clientInfomations: ClientInfomations | undefined) => void
}

export const useBrandsFormStore = create<BrandsFormStore>((set) => ({
  // クライアント選択ダイアログ表示状態
  isOpenDialog: false,
  setIsOpenDialog: (isOpen) => {
    set(() => ({
      isOpenDialog: isOpen,
    }))
  },
  // クライアント選択ダイアログ検索可能状態
  isSearchable: false,
  setIsSearchable: (newIsSearchable) => {
    set(() => ({
      isSearchable: newIsSearchable,
    }))
  },
  // ページ番号
  pageNumber: 1,
  setPageNumber: (newPageNumber) => {
    set((state) => ({
      pageNumber: newPageNumber,
      // ここで値を更新しないとPagenatorクリック時にフェッチしない
      searchConditions: {
        ...state.searchConditions,
        limit_start_num:
          newPageNumber * state.displayRowNumber - state.displayRowNumber,
        limit_data_count: state.displayRowNumber,
      },
    }))
  },
  // Paginatorの1ページに表示する件数
  displayRowNumber: 50,
  // クライアント選択管理ダイアログの検索条件
  searchConditions: {
    client_name: '',
    limit_start_num: 0,
    limit_data_count: 50,
  },
  setSearchConditions: (newSearchConditions) => {
    set((state) => ({
      searchConditions: {
        ...newSearchConditions,
        limit_start_num:
          state.pageNumber * state.displayRowNumber - state.displayRowNumber,
        limit_data_count: state.displayRowNumber,
      },
    }))
  },
  // ブランド管理のリクエスト内容
  formValues: undefined,
  setFormValues: (newFormValues) => {
    set(() => ({
      formValues: newFormValues,
    }))
  },
  // クライアント管理ダイアログで選択されたクライアント
  selectedClients: undefined,
  setSelectedClients: (newselectedClients) => {
    set(() => ({
      selectedClients: newselectedClients,
    }))
  },
  // クライアント管理ダイアログで選択され、ブランド管理に表示するクライアント
  displayClients: undefined,
  setDisplayClients: (newDisplayClients) => {
    set(() => ({
      displayClients: newDisplayClients,
    }))
  },
}))
