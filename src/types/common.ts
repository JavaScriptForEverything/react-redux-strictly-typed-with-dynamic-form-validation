export type TempObj = {
	[key: string]: string
}



type Image = {
	public_id: string
	secure_url: string
}

//----------[ copied from backend /types/user.ts ]----------

type Location = {
	address1: string
	address2: string
	city: string
	state: string
	postCode: number,
	country: string
}

export type LogedInUser = {
	id: string
	role: string
  name: string
  email: string
  phone: string
	location: Location
  createdAt: Date
  updatedAt: Date
}


type OtherPermissions = {
	isVendor: boolean,
	isCustomer: boolean,
	isCategories: boolean,
	isProducts: boolean,
	isOrders: boolean,
	isReviews: boolean,
	isVouchers: boolean,
	isAdManager: boolean,
	isRoleManager: boolean,
	isMessageCenter: boolean,
	isFinance: boolean,
	isShipment: boolean,
	isSupport: boolean,
	isEventManager: boolean,
	isMessage: boolean,

	isHasDashboard: boolean
	isHasBanner: boolean
	isHasPropUpAdds: boolean
}


export type UserDocument = {
	id: string
	createdAt: Date
	updatedAt: Date

	customId: string
	name: string
	slug: string
	email: string
	password: string
	confirmPassword?: string
	coverPhoto: Image
	avatar: Image
	clientId: string 							// social media login 
	role: string
	isActive: boolean
	isVerified: boolean
	passwordResetToken?: string

	phone: string
	location: Location,
	gender: 'male' | 'female' | 'other' | 'undefined'

	comparePassword: (password: string) => Promise<boolean>
	getPasswordResetToken: () => Promise<string>

	emailResetToken: string | undefined
	emailResetTokenExpires: Date | undefined
	createEmailResetToken: () => Promise<string>
	handleEmailUpdate: (resetToken: string, email: string) => Promise<boolean>

	otherPermissions : OtherPermissions

	likes: string[] 				// wishlist
	carts: string[] 				// cart items
	orders: string[]

	idCardFrontPageImage: Image
	idCardBackPageImage: Image
	bankStatementImage: Image
	idCardNumber: string
	accountHolderName: string
	accountNumber: string
	routingNumber: string
	bankName: string
	bankBranch: string

	status: string
}





//----------[ copied from backend /types/product.ts ]----------


// export type ProductDocument = {
// 	id: string
// 	createdAt: Date
// 	updatedAt: Date

// 	customId: string
// 	user: string
// 	name: string
// 	summary: string
// 	description: string
// 	category: string
// 	brand: string
// 	coverPhoto: Image
// 	images: Image[]
// 	video: Image

// 	slug: string
// 	stock: number
// 	sold: number
// 	revenue: number
// 	numReviews: number
// 	ratings: number

// 	likes: string[]
// 	carts: string[]

// 	subCategory: string
// 	warranty: string
//   discountPrice: string
//   status: string


// 	// discount: string
// 	// price: number
// 	// size: string
// 	// quantity: number,
// }
export type ProductDocument = {
	_id: string
	id: string
	user: string

	name: string
	slug: string
	price: number
	coverPhoto?: Image
}

export type CreateProduct = {
	customId: string
	user: string
	name: string
	slug: string
	price: number
	summary: string
}

export type UpdateProduct = {
	customId: string
	name: string
	slug: string
	price: number
	summary: string
	description: string
	category: string
	brand: string
	size: string
	quantity: number,
	coverPhoto: string
	images: string[]
	video: Image


	discount: string
	subCategory: string
	warranty: string
  discountPrice: string
  status: string

}


//----------[ copied from backend /types/review.ts ]----------

export type ReviewDocument = {
	id: string,
	createdAt: Date
	updatedAt: Date

	user: string
	product: string
	review: string 
	comment: string 
	likes: string[]
	dislikes: string[]
	image: Image
	ratings: number 			

	replyTo: string
}

export type CreateReview = {
	user: string
	product: string
	review: string
	comment: string
	image: Image
	ratings: number 			

	replyTo: string
}
export type UpdateReview = {
	product: string
	review: string
	comment: string
	image: Image
	ratings: number 			

	replyTo: string
}
