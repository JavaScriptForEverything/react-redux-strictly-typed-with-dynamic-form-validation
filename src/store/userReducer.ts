import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import type { InitialState, LoginData, RegisterData } from '../types/user'
import type { UserDocument } from '../types/common'
import { createSlice } from '@reduxjs/toolkit'
import { catchAsyncDispatch } from '../lib/utils'
import { ORIGIN } from '../lib/config'


const initialState: InitialState = {
	loading: false,
	error: '',
	message: '',
	user: null ,
	users: []
}

export const { reducer, actions } = createSlice({
  name: 'user',
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

    updateSuccessMessage: (state: InitialState, action: PayloadAction<string>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: action.payload
    }),

    setUsers: (state: InitialState, action: PayloadAction<UserDocument[]>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			users: action.payload
    }),
    setUser: (state: InitialState, action: PayloadAction<UserDocument>): InitialState => ({
      ...state,
			loading: false,
			error: '',
			message: '',
			user: action.payload
    }),
  },
})

export const clearError = () => (dispatch: AppDispatch): void => {
	dispatch(actions.failed(''))
}

// export const registerUser = (fields: RegisterData) => async (dispatch: AppDispatch): Promise<void> => {
// 	try {
// 		dispatch(actions.request())

// 		const res = await fetch(`${ORIGIN}/api/auth/register`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(fields)
// 		})

// 		const { status, message } = await res.json()
// 		if(status !=='success') throw dispatch(actions.failed(message))
// 		dispatch(actions.updateSuccessMessage(message))

// 	} catch (err: unknown) {
// 		if(err instanceof Error) dispatch(actions.failed(err.message))
// 		if(typeof err === 'string') dispatch(actions.failed(err))
// 	}
// }




export const registerUser = (fields: RegisterData) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

		const res = await fetch(`${ORIGIN}/api/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(fields)
		})

		const { status, message } = await res.json()
		if(status !=='success') throw dispatch(actions.failed(message))
		dispatch(actions.updateSuccessMessage(message))

}, actions.failed)


export const loginUser = (fields: LoginData) => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(fields),
		credentials: 'include'
	})

	const { status, message } = await res.json()
	if(status !=='success') dispatch(actions.failed(message))
	else dispatch(actions.updateSuccessMessage(message))
	// else dispatch(actions.setUser(data))

}, actions.failed)


export const getAllUsers = () => catchAsyncDispatch( async (dispatch: AppDispatch): Promise<void> => {
	dispatch(actions.request())

	const res = await fetch(`${ORIGIN}/api/users`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	const { status, message, data: users } = await res.json()
	if(status !=='success') throw dispatch(actions.failed(message))

	dispatch(actions.setUsers(users))
	// dispatch(actions.setUsers(data))

}, actions.failed)
