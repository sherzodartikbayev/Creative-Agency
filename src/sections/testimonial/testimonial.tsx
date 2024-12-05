import { testomonialCard } from '../../utils/constants'
import { styles } from '../../utils/style'

const Testimonial = () => {
	return (
		<section className='mb-36'>
			<div className='w-full mx-auto mb-36 max-w-[1240px]'>
				<div className='text-center mb-14'>
					{/* Section Title  */}
					<p className={`${styles.sectionTitle} mb-5`}>Testimonial</p>
					{/* Title */}
					<h1 className={`${styles.title}`}>People Talk about us</h1>
				</div>

				<div className={`${styles.flexCenter} flex-wrap gap-12`}>
					{testomonialCard.map(card => (
						<div
							className='w-[380px] h-[336px] rounded-2xl pl-10 pr-10 pt-12 bg-darkBlue max-xs:h-[280px]'
							key={card.id}
						>
							<div className={`flex items-center gap-8 mb-6`}>
								<div className='w-[70px] h-[70px] rounded-3xl cursor-pointer'>
									<img
										src={card.userLogo}
										alt='user logo image'
										loading='lazy'
										className='size-full'
									/>
								</div>
								<div className=''>
									{/* User Name */}
									<h1 className='font-quicksand font-semibold text-xl leading-9 text-lightWhite tracking-[1%] max-xs:text-base'>
										{card.userName}
									</h1>
									{/* User Job */}
									<p className='font-quicksand font-normal text-xs text-gray max-xs:text-xs max-xs:leading-3'>
										{card.userJob}
									</p>
								</div>
							</div>
							{/* Description */}
							<p className='font-quicksand text-lg leading-7 tracking-[1%] text-lightWhite max-xs:text-xs'>
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
