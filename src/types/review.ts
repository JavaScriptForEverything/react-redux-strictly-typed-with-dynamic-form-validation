import type { ReviewDocument } from './common'


export type InitialState = {
	loading: boolean
	error: string
	message: string
	review: null | ReviewDocument
	reviews: ReviewDocument[]
}