import { img1, img2 } from '../../assets'
import { Button } from '../../components'
import { styles } from '../../utils/style'

const Business = () => {
	return (
		<section id='business'>
			<div className='w-full mx-auto mb-36 max-w-[1240px]'>
				<div className={`${styles.flexCenter} flex-wrap max-sm:gap-20`}>
					<div className='w-1/2 max-sm:w-full max-sm:text-center'>
						{/* Title */}
						<h1 className='font-nunito font-bold text-[55px] leading-[75px] tracking-[0.3%] text-lightWhite max-sm:text-5xl max-xs:text-3xl'>
							Interesting Collaboration With Us?
						</h1>

						{/* Description  */}
						<p className='font-quicksand font-normal text-[14px] leading-9 text-gray mb-6'>
							Help you to reach your business goal
						</p>

						{/* Button */}
						<Button text='Get Started' />
					</div>

					<div className='w-1/2 max-sm:w-full'>
						<div className={`flex justify-center items-center relative`}>
							<img
								src={img1}
								alt='image 1'
								className='absolute z-10 max-md:relative'
							/>
							<img
								src={img2}
								alt='image 2'
								className='absolute right-0 bottom-[-30px] max-md:hidden'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Business
