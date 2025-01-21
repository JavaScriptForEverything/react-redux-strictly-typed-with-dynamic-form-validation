import { DrawerPanel, Footer, Header } from '../components'

type ComponentWithLayoutProps = {
	children: Readonly<React.ReactNode>
}

export const withLayout = <T extends ComponentWithLayoutProps>(Component: React.ComponentType<T>) => {
	
	const WithLayout = (hocProps: T) => {

		return (
			<div className='min-h-screen w-full flex flex-col'>
				<DrawerPanel /> 
				<Header className='bg-slate-50 px-4 py-2' />
      	<div className={`container mx-auto flex-1 px-2 sm:px-0 `} >
					<Component {...hocProps} />
				</div>
				<Footer />
			</div>
		)
	}
	return WithLayout
}