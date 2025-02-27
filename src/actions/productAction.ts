import { ORIGIN } from '../lib/config'

const getProducts = async () => {
	const res = await fetch(`${ORIGIN}/api/products`, {
		method: 'GET',
		credentials: 'include'
	})

	return await res.json()
}

const GetProducts = async () => {

	const products = await getProducts()
	return products
}
export default GetProducts


// // src/actions/fetchProducts.ts
// import { createServerAction } from 'react/server';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// // Server Action
// export const fetchProducts = createServerAction(async (): Promise<Product[]> => {
//   const response = await fetch('https://your-backend-server.com/api/products');
//   return response.json();
// });
