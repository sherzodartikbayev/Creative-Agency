import { Button2 } from '../../components'
import { portfolioCard } from '../../utils/constants'
import { styles } from '../../utils/style'

const Portfolio = () => {
	return (
		<section
			id='projects'
			className={`${styles.paddingX}`}
		>
			<div className='w-full mx-auto max-w-[1440px] pb-36'>
				<div className='text-center mb-12'>
					{/* Section Title */}
					<p className={`${styles.sectionTitle} mb-5`}>Our Portfolio</p>

					{/* Title */}
					<h1 className={`${styles.title} mb-7`}>What do we do</h1>

					{/* Description */}
					<p className={`${styles.desc} text-gray dark:text-lightWhite`}>
						all projects that we have already done , proven can help to use more{' '}
						<br />
						comfortable, then can used by client from our business
					</p>
				</div>

				<div className={`${styles.flexCenter} flex-wrap gap-12 mb-8`}>
					{portfolioCard.map(card => (
						<div
							className='w-[350px] h-[350px] relative max-xs:w-[300px]  max-xs:h-[300px]'
							key={card.id}
						>
							<img
								src={card.img}
								alt={card.alt}
								className='size-full cursor-pointer mb-3'
								loading='lazy'
							/>
							<p className='font-quicksand font-bold text-2xl text-lightWhite text-center absolute left-6 bottom-12'>
								{card.title}
							</p>
						</div>
					))}
				</div>
				<div className='flex justify-center items-center'>
					<Button2 text={'See All Portfolio'} />
				</div>
			</div>
		</section>
	)
}

export default Portfolio
