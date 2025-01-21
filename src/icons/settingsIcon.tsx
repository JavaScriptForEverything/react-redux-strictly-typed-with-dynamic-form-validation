
type Props = {
	className?: React.ComponentProps<'svg'>['className']
	fontSize?: React.ComponentProps<'svg'>['fontSize']
}
export const SettingsIcon = ({ className, fontSize }: Props) => {

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
				d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
			/>
		</svg>
	)
}