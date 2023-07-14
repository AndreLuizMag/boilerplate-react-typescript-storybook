import styles from './Styles.module.scss'

interface ButtonProps {
	primary?: boolean
	backgroundColor?: string
	size?: 'small' | 'medium' | 'large'
	label: string
	onClick?: () => void
}

export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? 'Primary' : 'Secondary'
	return (
		<button
			type='button'
			className={`${styles.Button} ${styles[size]} ${styles[mode]}`}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	)
}
