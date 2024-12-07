import { ButtonProps } from '../../types'

const Button = ({ text }: ButtonProps) => {
	return (
		<button className='w-52 h-12 rounded-3xl bg-primary dark:bg-lightWhite border-[1px] border-primary dark:border-lightWhite font-quicksand font-semibold text-base text-lightWhite dark:text-black leading-6 tracking-[1%] hover:bg-white dark:hover:bg-black hover:text-primary dark:hover:text-lightWhite duration-500 shadow-lg shadow-blur shadow-blue max-xs:w-36 max-xs:h-10 max-xs:text-xs'>
			{text}
		</button>
	)
}

export default Button
