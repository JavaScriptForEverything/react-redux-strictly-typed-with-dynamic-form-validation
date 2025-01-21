import { useAppDispatch, useAppSelector } from '../hooks/redux'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../store'
import { useEffect } from 'react'
import * as productReducer from '../store/productReducer'
import * as userReducer from '../store/userReducer'


export const Home = () => {
	// const { loading } = useSelector((state: RootState) => state.product) 			// method-1: Require types 
	const { loading, products } = useAppSelector(state => state.product) 					// method-2: get types from hooks
	const { users } = useAppSelector(state => state.user ) 					// method-2: get types from hooks

	// const dispatch = useDispatch<AppDispatch>() 																// method-1: Require types
	const dispatch = useAppDispatch() 																						// method-2: Get types from hooks

	useEffect(() => {
		dispatch(userReducer.getAllUsers())
		dispatch(productReducer.getProducts())
	}, [dispatch])



	if(loading) return <p>Loading ...</p>
	return (
		<>
			<p>Home page</p>		

			<pre>
				{JSON.stringify(users, null, 2)}
			</pre>

			<hr />

			<pre>
				{JSON.stringify(products, null, 2)}
			</pre>
		</>
	)
}
