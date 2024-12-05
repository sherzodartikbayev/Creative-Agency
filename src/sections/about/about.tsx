import { aboutImg, playCircle } from '../../assets'
import { Button } from '../../components'
import { styles } from '../../utils/style'

const About = () => {
	return (
		<section
			id='about'
			className={`${styles.paddingX}`}
		>
			<div className='w-full mx-auto max-w-[1440px] pb-36'>
				{/* Section Title */}
				<p className={`${styles.sectionTitle} text-center mb-5`}>About Us</p>

				{/* Title */}
				<h1 className={`${styles.title} text-center mb-10`}>Our Teammate</h1>

				<div
					className={`${styles.flexCenter} gap-16 max-lg:flex-wrap  max-sm:flex-wrap-reverse`}
				>
					<div className='w-[565px]'>
						<img
							src={aboutImg}
							alt='About Image'
							loading='lazy'
							className='size-full'
						/>
					</div>

					<div className='w-2/4 max-lg:w-full'>
						<p className={`${styles.desc} text-lightWhite mb-6`}>
							We move with make a Creative Strategy for help your business goal,
							we help to improve your income by a services we have. make your
							content look interesting and make people look for your business
						</p>

						<p className={`${styles.desc} text-lightWhite mb-6 max-ss:mb-9`}>
							We move with make a Creative Strategy for help your business goal,
							we help to improve your income by a services we have. make your
							content look interesting and make people look for your business
						</p>

						<div className='flex gap-6 max-lg:justify-center'>
							<Button text='About Us' />
							<button
								className={`${styles.flexCenter} w-[210px] h-[48px] gap-3 border-[1px] rounded-3xl font-quicksand font-semibold text-base text-lightWhite leading-6 max-xs:w-[150px] max-xs:h-[38px] max-xs:text-[12px]`}
							>
								<img
									src={playCircle}
									alt='play circle'
									className='max-xs:w-4'
								/>
								About Us
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
