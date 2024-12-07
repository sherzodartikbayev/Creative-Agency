import { Button2Props } from '../../types'
import { styles } from '../../utils/style'

const Button2 = ({ text, img }: Button2Props) => {
	return (
		<button
			className={`${styles.flexCenter} gap-2 w-56 h-12 border-[1px] border-primary dark:border-lightWhite rounded-3xl  font-quicksand font-bold text-base leading-6 tracking-[1%] text-primary dark:text-lightWhite cursor-pointer max-xs:w-48 max-xs:h-11`}
		>
			{img ? (
				<img
					src={img}
					alt='button icon'
					loading='lazy'
					className='bg-primary rounded-full dark:bg-black'
				/>
			) : null}
			{text}
		</button>
	)
}

export default Button2
