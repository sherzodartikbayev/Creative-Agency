import { testomonialCard } from '../../utils/constants'
import { styles } from '../../utils/style'

const Testimonial = () => {
	return (
		<section className={`${styles.paddingX}`}>
			<div className='w-full mx-auto max-w-[1440px] pb-48 max-md:pb-20'>
				<div className='text-center mb-14'>
					{/* Section Title  */}
					<p className={`${styles.sectionTitle} mb-5`}>Testimonial</p>
					{/* Title */}
					<h1 className={`${styles.title}`}>People Talk about us</h1>
				</div>

				<div className={`${styles.flexCenter} flex-wrap gap-12`}>
					{testomonialCard.map(card => (
						<div
							className='w-[350px] h-[336px] rounded-2xl pl-10 pr-10 pt-12 bg-darkBlue max-xs:w-[300px] max-xs:h-[300px]'
							key={card.id}
						>
							<div
								className={`flex items-center gap-8 mb-6 max-xs:flex-col  max-xs:gap-2`}
							>
								<div className='w-[70px] h-[70px] rounded-3xl cursor-pointer'>
									<img
										src={card.userLogo}
										alt='user logo image'
										loading='lazy'
										className='size-full'
									/>
								</div>
								<div className='max-xs:text-center'>
									{/* User Name */}
									<h1 className='font-quicksand font-semibold text-xl leading-9 text-lightWhite tracking-[1%] cursor-pointer max-xs:text-base'>
										{card.userName}
									</h1>
									{/* User Job */}
									<p className='font-quicksand font-normal text-xs text-gray max-xs:text-xs max-xs:leading-3'>
										{card.userJob}
									</p>
								</div>
							</div>
							{/* Description */}
							<p className='font-quicksand text-lg leading-7 tracking-[1%] text-lightWhite max-xs:text-xs max-xs:text-center'>
								{card.userDescription}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial
