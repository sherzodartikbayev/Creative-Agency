import { aboutImg } from '../../assets'
import { Button, Button2 } from '../../components'
import { styles } from '../../utils/style'

const About = () => {
	return (
		<section id='about'>
			<div className='w-full mx-auto bg-black mb-36 max-w-[1240px]'>
				{/* Section Title */}
				<p className={`${styles.sectionTitle} text-center mb-5`}>About Us</p>

				{/* Title */}
				<h1 className={`${styles.title} text-center mb-10`}>Our Teammate</h1>

				<div className={`${styles.flexCenter} gap-16 max-lg:flex-wrap  max-sm:flex-wrap-reverse`}>
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
							<Button2 text='Our Story' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
