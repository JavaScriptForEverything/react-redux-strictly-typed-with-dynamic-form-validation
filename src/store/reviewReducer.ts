import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import type { InitialState } from '../types/review'
import type { CreateReview, ReviewDocument, UpdateProduct } from '../types/common'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '../lib/utils'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	review: null,
	reviews: [],
}

export const { reducer, actions } = createSlice({
  name: 'review',
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

    setReview: (state: InitialState, action: PayloadAction<ReviewDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			review: action.payload
    }),
    setReviews: (state: InitialState, action: PayloadAction<ReviewDocument[]>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			reviews: action.payload
    }),
    addReview: (state: InitialState, action: PayloadAction<ReviewDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			reviews: [ ...state.reviews, action.payload ]
    }),
    removeReview: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			reviews: state.reviews.filter(review => review.id !== action.payload)
    }),
    updateReview: (state: InitialState, { payload }: PayloadAction<ReviewDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			reviews: state.reviews.map(review => review.id === payload.id ? { ...review, ...payload} : review)
    }),

  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.failed(''))
}





export const getReviews = () => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/reviews`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.setReviews(data))

}, actions.failed)


export const getReview = (id: string) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/reviews/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.setReview(data))

}, actions.failed)



export const addReview = (body: CreateReview) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/reviews`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.addReview(data))

}, actions.failed)


export const updateReviewById = (id: string, body: UpdateProduct) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/reviews/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	})

	const { status, message, data } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.updateReview(data))

}, actions.failed)


export const deleteReviewById = (id: string) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${origin}/api/reviews/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.removeReview(id))

}, actions.failed)



