import type { UserDocument } from './common'

export type FormFields = {
	name: string
	email: string
	password: string
	confirmPassword: string
	avatar: string
}
export type RegisterData = {
	name: string
	email: string
	password: string
	confirmPassword: string
	avatar: string
}
export type LoginData = {
	email: string
	password: string
}

export type InitialState = {
	loading: boolean
	error: string
	message: string
	user: null | UserDocument
	users: UserDocument[]

	isAuthenticated: boolean
	authToken: string | null
	userId: string | null
}