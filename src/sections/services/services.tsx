import { blueArrowRight } from '../../assets'
import { servicesCards } from '../../utils/constants'
import { styles } from '../../utils/style'

const Services = () => {
	return (
		<section
			id='services'
			className={`${styles.paddingX}`}
		>
			<div
				className={`${styles.flexBetween} max-md:flex-col w-full mx-auto  max-w-[1440px] pb-36`}
			>
				<div className='w-[40%] max-md:w-full max-md:text-center mb-10'>
					<p className={`${styles.sectionTitle} mb-8`}>Our Services</p>

					<h1 className={`${styles.title} mb-4`}>Perfect and Fast Movement</h1>

					<p className={`${styles.desc} mb-8`}>
						We move with make a Creative Strategy for help your business goal,
						we help to improve your income by a services we have. make your
						content look interesting and make people look for your business
					</p>

					<a
						href='#'
						className='font-quicksand font-bold text-xl text-black dark:text-lightWhite flex justify-end items-center gap-3 max-md:justify-start max-md:pl-5 max-ss:pl-2 max-xs:text-xs'
					>
						Read more
						<img
							src={blueArrowRight}
							alt='arrow right icon'
							loading='lazy'
							className='w-6 h-6 max-xs:w-3 max-xs:h-3'
						/>
					</a>
				</div>

				<div className='w-2/4'>
					<div className={`${styles.flexCenter} flex-wrap gap-10`}>
						{servicesCards.map(card => (
							<div
								className={`${styles.flexCenter} flex-col w-[262px] h-[269px] rounded-[30px] bg-white dark:bg-darkBlue shadow-black drop-shadow-2xl cursor-pointer`}
								key={card.id}
							>
								<div
									className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full ${card.bgColor} mb-8 max-xs:w-20 max-xs:h-20`}
								>
									<img
										src={card.img}
										alt={card.alt}
										className='max-xs:w-9'
										loading='lazy'
									/>
								</div>
								<p className='font-quicksand font-bold text-2xl leading-8 text-black dark:text-lightWhite text-center max-sm:text-base'>
									{card.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
