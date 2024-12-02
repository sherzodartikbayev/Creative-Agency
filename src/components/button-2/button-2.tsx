import { playCircle } from '../../assets'
import { ButtonProps } from '../../types'
import { styles } from '../../utils/style'

const Button2 = ({ text }: ButtonProps) => {
	return (
		<button
			className={`${styles.flexCenter} w-[210px] h-[48px] gap-3 border-[1px] rounded-3xl font-quicksand font-semibold text-base text-lightWhite leading-6 max-xs:w-[150px] max-xs:h-[38px] max-xs:text-[12px]`}
		>
			<img
				src={playCircle}
				alt='play circle'
			/>
			{text}
		</button>
	)
}

export default Button2
