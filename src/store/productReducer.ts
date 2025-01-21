import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import type { InitialState } from '../types/product'
import type { CreateProduct, ProductDocument, UpdateProduct } from '../types/common'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '../lib/utils'
import { ORIGIN } from '../lib/config'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	product: null,
	products: [],
}

export const { reducer, actions } = createSlice({
  name: 'product',
  initialState,
  reducers: {
		request: (state: InitialState): InitialState => ({
			...state,
			loading: true,
			error: '',
			message: '',
		}),
		failed: (state: InitialState, action: PayloadAction<string>): InitialState => ({
			...state,
			loading: false,
			message: '',
			error: action.payload
		}),

    setProduct: (state: InitialState, action: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			product: action.payload
    }),
    setProducts: (state: InitialState, action: PayloadAction<ProductDocument[]>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			products: action.payload
    }),
    addProduct: (state: InitialState, action: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			products: [ ...state.products, action.payload ]
    }),
    removeProduct: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			products: state.products.filter(product => product.id !== action.payload)
    }),
    updateProduct: (state: InitialState, { payload }: PayloadAction<ProductDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			products: state.products.map(product => product.id === payload.id ? { ...product, ...payload} : product)
    }),

  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.failed(''))
}

export const getProducts = () => async (dispatch: AppDispatch): Promise<void> => {
	try {
		dispatch(actions.request())

		const res = await fetch(`${ORIGIN}/api/products`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})

		const { status, message, data } = await res.json()
		if(status !=='success') dispatch(actions.failed(message))
		else dispatch(actions.setProducts(data))

	} catch (err: unknown) {
		if(err instanceof Error) dispatch(actions.failed(err.message))
		if(typeof err === 'string') dispatch(actions.failed(err))
	}
}




// export const getProducts = () => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
// 	dispatch(actions.request())

// 	const res = await fetch(`${ORIGIN}/api/products`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		credentials: 'include'
// 	})

// 	const { status, message, data } = await res.json()
// 	if(status !=='success') dispatch(actions.failed(message))
// 	else dispatch(actions.setProducts(data))

// }, actions.failed)


export const getProduct = (idOrSlug: string) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/products/${idOrSlug}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.setProduct(data))

}, actions.failed)



export const addProduct = (body: CreateProduct) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/products`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.addProduct(data))

}, actions.failed)


export const updateProductByIdOrSlug = (idOrSlug: string, body: UpdateProduct) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/products/${idOrSlug}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.updateProduct(data))

}, actions.failed)


export const deleteProductById = (id: string) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/products/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.removeProduct(id))

}, actions.failed)



