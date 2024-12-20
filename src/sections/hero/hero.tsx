import { heroImg } from '../../assets'
import { Button } from '../../components'
import { styles } from '../../utils/style'

const Hero = () => {
	return (
		<section id='home' className={`${styles.paddingX}`}>
			<div className='w-full mx-auto max-w-[1440px] pb-36 max-sm:pt-44 pt-16'>
				{/* Content Part */}
				<div className={`${styles.flexCenter} flex-col mb-28`}>
					<h1 className='text-center text-black dark:text-lightWhite font-nunito font-extrabold dark:font-bold text-6xl leading-[87px] tracking-[1%] mb-6 max-sm:text-5xl max-ss:text-3xl'>
						Make your dream <br /> business goal come true
					</h1>
					<p className={`${styles.desc} text-center mb-8 max-ss:text-sm`}>
						when you need us for improve your business, <br /> then come with us
						to help your business have reach it, you just sit and feel that goal
					</p>
					<Button text='Start Project' />
				</div>

				{/* Image Part */}
				<div className='max-w-[739px] mx-auto'>
					<img src={heroImg} alt='hero image' className='size-full' />
				</div>
			</div>
		</section>
	)
}

export default Hero
