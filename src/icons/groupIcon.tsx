
type Props = {
	className?: React.ComponentProps<'svg'>['className']
	fontSize?: React.ComponentProps<'svg'>['fontSize']
}
export const GroupIcon = ({ className, fontSize }: Props) => {

	return (
		<svg xmlns="http://www.w3.org/2000/svg" 
			width="1em" 
			height="1em" 
			viewBox="0 0 24 24"
			className={className}
			fontSize={fontSize}
		>
			<g fill="none">
				<path 
					d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M9.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M21 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9.5 13c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m8.5 0c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143c0-.99-.423-1.85-.91-2.5c-.486-.649-1.13-1.22-1.849-1.691A6.06 6.06 0 0 1 18 13"
				/>
			</g>
		</svg>
	)
}