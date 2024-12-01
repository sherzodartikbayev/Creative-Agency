import { ButtonProps } from '../../types'

const Button = ({text}: ButtonProps ) => {
	return (
		<button className='w-52 h-12 rounded-3xl bg-lightWhite border-[1px] border-white font-quicksand font-semibold text-base leading-6 tracking-[1%] hover:bg-black hover:text-lightWhite duration-500 shadow-lg shadow-blur shadow-blue  max-xs:w-36 max-xs:h-10 max-xs:text-xs'>
			{text}
		</button>
	)
}

export default Button
