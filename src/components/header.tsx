
type Props = React.ComponentProps<'div'> & {
	children?: React.ReactNode
}
export const Header = ({ children }: Props) => {

	return (
		<>
			<p>Header Component</p>	
		</>
	)
}
