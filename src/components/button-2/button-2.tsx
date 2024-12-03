import { ButtonProps } from '../../types'

const Button2 = ({ text }: ButtonProps) => {
	return (
		<button className='w-56 h-12 border-[1px] border-lightWhite rounded-3xl  font-quicksand font-bold text-base leading-6 tracking-[1%] text-lightWhite cursor-pointer max-xs:w-48 max-xs:h-11'>
			{text}
		</button>
	)
}

export default Button2
