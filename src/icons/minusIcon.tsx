
type Props = {
	className?: React.ComponentProps<'svg'>['className']
	fontSize?: React.ComponentProps<'svg'>['fontSize']
}
export const MinusIcon = ({ className, fontSize }: Props) => {

	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			width="1em" 
			height="1em" 
			viewBox="0 0 24 24"
			className={className}
			fontSize={fontSize}
		>
			<path 
				fill="currentColor" 
				d="M19 12.998H5v-2h14z"
			/>
		</svg>
	)
}
