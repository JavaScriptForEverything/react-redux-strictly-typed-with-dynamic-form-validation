
import type { FormFields } from '../types/user'
import type { TempObj } from '../types/common'
import { useState, useEffect } from 'react'
import { HomeIcon, LoadingIcon } from '../icons'
import { isFormValid, readAsDataURL } from '../lib/utils'
import * as userReducer from '../store/userReducer'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
// import { useRouter } from 'next/navigation'


const formFields = {
	name: { label: 'Full Name', placeholder: 'Riajul Islam', type: 'text' },
	email: { label: 'Your Email', placeholder: 'abc@gmail.com', type: 'email'  },
	password: { label: 'Your Password', placeholder: '********', type: 'password' },
	confirmPassword: { label: 'Confirm Password', placeholder: '********', type: 'password', },
	avatar: { label: '', placeholder: '', type: 'file', },
}


// // Method-1: Set wrong fields, then add fields
// const initialFields = {} as FormFields 								// set miss value
// Object.keys(formFields).forEach(field => { 						// then set fields
// 	initialFields[field as keyof FormFields] = ''
// })


// Method-2: Set fields, then cast as desigred object: (better than method-1)
const initialFields = Object.keys(formFields).reduce((acc, key) => {
  acc[key as keyof FormFields] = '' 
  return acc;
}, {} as FormFields)
 

export const Register = () => {
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<FormFields>(initialFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFields)
	const { loading, error, message } = useAppSelector(state => state.user)
	// const fileInputRef = useRef<HTMLInputElement|null>(null)
	// const navigation = useRouter()

	// to solve 'state always one step behind' problem
	useEffect(() => {
		isFormValid(fields, setFieldsError)  			// Step-1: used error state, so don't put same value as dependencies: which create infinite loop
	},[fields]) 																// Step-2: use different field, to re-render without creating infinite loop

	useEffect(() => {
		
		clearForm()
		// setTimeout(() => {
		// 	if(message) navigation.push('/login')
		// }, 2000)

	},[message])


	const changeHandler = (name: string) => async (evt: React.ChangeEvent<HTMLInputElement>) => {
		if(name === 'avatar') {
			const file = evt.target.files?.[0] 
			if(!file) return

			const avatar = await readAsDataURL(file)
			setFields({ ...fields, avatar })

		} else {
			setFields({ ...fields, [name]: evt.target.value })
		}
	}

	const clearForm = () => {
		setFields(initialFields)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if(!isFormValid(fields, setFieldsError)) return console.log(fieldsError)

		dispatch(userReducer.registerUser(fields))
		// console.log(fields)
	}



	return (
		<main>
			<HomeIcon />

			{error &&  (
				<p>Error: {error}</p>
			)}

			{message && ( 
				<p> Message: {message}</p>
			)}  


			<form noValidate onSubmit={submitHandler} >
				{Object.entries(formFields).map(([key, obj]) => (
					<div className="container" key={key}>
						<label htmlFor={obj.label}>{obj.label}</label>

						<input id={obj.label}
							{...obj} 																															// => set label + type + placeholder + helperText
							value={obj.type === 'file' ? '' : fields[key as keyof FormFields]} 		// Don't set value on files, which throw error
							onChange={changeHandler(key)}
							style={{
								width: '100vw',
								margin: '0 0 1rem 0'
							}}
						/>
					</div>
				))}

				<button type='submit' disabled={loading} >
					<span > {loading ? <LoadingIcon /> : 'Register'} </span> 
				</button>

				{ fields.avatar && ( <img 
					src={fields.avatar} 
					alt='avatar is missing' 
					width={200}
					height={200}
					style={{
						// width: '100vw',
						margin: '0 0 1rem 0'
					}}
				/>)}

			</form>
		</main>
	)
}
