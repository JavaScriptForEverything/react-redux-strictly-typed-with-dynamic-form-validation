import type { ProductDocument } from './common'


export type InitialState = {
	loading: boolean
	error: string
	message: string
	product: null | ProductDocument
	products: ProductDocument[]
}