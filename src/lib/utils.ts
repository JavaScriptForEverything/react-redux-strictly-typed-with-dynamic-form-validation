import type { AppDispatch, RootState } from '../store'
import type { TempObj } from '../types/common'
import type { FormFields } from '../types/user'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { isEmail } from 'validator'


export const readAsDataURL = (file: File, { type='image' } = {}): Promise<string> => {
	return new Promise((resolve, reject) => {

		if(type === 'image') {
			const isImage = file?.type.match('image/*')
			if(!isImage) return reject(new Error('Please select an image') )
		}

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.addEventListener('load', () => {
			if(reader.readyState === 2) {
				if(typeof reader.result === 'string') resolve(reader.result)
			}
		})
		reader.addEventListener('error', reject)
	})
}



// Method-3: allow getState() function as 2nd arguments
type AsyncThunkFunction = ( dispatch: AppDispatch, getState: () => RootState) => Promise<void>
type SetError = ActionCreatorWithPayload<string>

export const catchAsyncDispatch = ( fn: AsyncThunkFunction, setError: SetError) => async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
  try {
    return await fn(dispatch, getState);
  } catch (err) {
    if (err instanceof Error) dispatch(setError(err.message));
    else if (typeof err === 'string') dispatch(setError(err));
    else dispatch(setError('An unknown error occurred.'));
  }
};




// // Method-2: 
// // export const catchAsyncDispatch = (fn: (dispatch: AppDispatch) => Promise<void>, setError: typeof actions.failed) => (dispatch: AppDispatch): Promise<void> => {
// type SetError = ActionCreatorWithPayload<string>
// export const catchAsyncDispatch = (fn: (dispatch: AppDispatch) => Promise<void>, setError: SetError) => async (dispatch: AppDispatch): Promise<void> => {
// 	try {
// 		return await fn(dispatch)
// 	} catch (err) {
// 		if (err instanceof Error) dispatch(setError(err.message))
// 		if (typeof err === 'string') dispatch(setError(err))
// 		else dispatch(setError('An unknown error occurred.'))
// 	}
// }

// // Method-1: 
// const catchAsyncDispatch = (fn: any, setError: any) => (dispatch: AppDispatch) => {
// 	return fn(dispatch).catch( (err: unknown) => {
// 		if(err instanceof Error) dispatch(setError(err.message))
// 		if(typeof err === 'string') dispatch(setError(err))
// 	})
// }






// export const isFormValid = (fields: FormFields, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>) => {
// 	const tempObj: TempObj = {}
// 	const { email, password, confirmPassword } = fields

// 	if( email && !isEmail(email) ) tempObj.email = 'Invalid Email Address'
// 	if( password.length < 8 ) tempObj.password = 'password must by atleast 8 character long'
// 	if( confirmPassword && confirmPassword !== password ) tempObj.confirmPassword = 'please type currect password'

// 	Object.keys(fields).forEach(field => {
// 		if(!fields[field as keyof FormFields]) tempObj[field] = `'${field}' is emapty`
// 	})
// 	setFieldsError(tempObj)

// 	return Object.values(tempObj).every( item => item == '' )
// }

// Assuming TempObj and FormFields types are defined appropriately
export const isFormValid = ( fields: FormFields, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
  const tempObj: TempObj = {}
  const { email, password, confirmPassword } = fields

  if (email && !isEmail(email)) tempObj.email = 'Invalid Email Address'
  if (password && password.length < 8) tempObj.password = 'Password must be at least 8 characters long'
  if (confirmPassword && confirmPassword !== password) tempObj.confirmPassword = 'Passwords do not match'

  // Validate all fields for emptiness
  Object.keys(fields).forEach(field => {
    if (fields[field as keyof FormFields] === '') {
      tempObj[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    }
  })

  // Set the error state
  setFieldsError(tempObj)

  // Return whether the form is valid (i.e., no error messages)
  return Object.keys(tempObj).length === 0
}





