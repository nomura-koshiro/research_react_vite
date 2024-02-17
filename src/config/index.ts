export const API_URL = import.meta.env.VITE_API_URL as string
export const API_MOCKING = import.meta.env.VITE_API_MOCKING === 'true'

export const IS_DEVELOPMENT = import.meta.env.VITE_NODE_ENV === 'development'
export const IS_STAGING = import.meta.env.VITE_NODE_ENV === 'staging'
export const IS_PRODUCTION = import.meta.env.VITE_NODE_ENV === 'production'
