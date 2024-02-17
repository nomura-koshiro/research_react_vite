import { create } from 'zustand'
import { type BrandMasterSearchRequest } from '@/features/brands/types'

type UseBrandsSearchStore = {
  isSearchable: boolean
  setIsSearchable: (isSearchable: boolean) => void
  pageNumber: number
  setPageNumber: (pageNumber: number) => void
  displayRowNumber: number
  searchConditions: BrandMasterSearchRequest
  setSearchConditions: (searchConditions: BrandMasterSearchRequest) => void
}

export const useBrandsSearchStore = create<UseBrandsSearchStore>((set) => ({
  // 検索可能状態
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
  // ブランド管理の検索条件
  searchConditions: {
    brand_name: '',
    update_operator_name: '',
    client_name: '',
    update_date_time_from: '',
    update_date_time_end: '',
    brand_valid_flag: '',
    client_valid_flag: '',
    limit_start_num: 0,
    limit_data_count: 15,
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
}))
