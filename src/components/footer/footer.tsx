import { footerLogo } from '../../assets'
import { footerLinks, footerSocialIcons } from '../../utils/constants'
import { styles } from '../../utils/style'

const footer = () => {
	return (
		<footer className={`${styles.paddingX} bg-gray`}>
			<div className='w-full  mx-auto  max-w-[1440px] pt-[112px] pb-16'>
				<div className='flex flex-wrap gap-12 mb-20'>
					{/* Footer Logo  */}
					<div
						className={`${styles.flexCenter} w-[187px] h-[88px] rounded-3xl bg-lightWhite`}
					>
						<a href='#'>
							<img src={footerLogo} alt='footerLogo' loading='lazy' />
						</a>
					</div>

					{/* Footer Links */}
					{footerLinks.map(item => (
						<div className='' key={item.id}>
							{/* Title */}
							<h1 className='font-quicksand font-bold text-2xl leading-7 text-lightWhite mb-4 max-xs:text-lg'>
								{item.title}
							</h1>

							{/* Links */}
							{item.links.split(',').map(text => (
								<a
									href='#'
									className='font-quicksand font-light text-lg leading-6 text-lightWhite flex mb-3 max-xs:text-lg'
								>
									{text}
								</a>
							))}
						</div>
					))}
				</div>

				{/* Footer Social */}
				<div
					className={`${styles.flexCenter} flex-wrap gap-10 pb-4 border-b border-b-lightWhite max-xs:gap-5`}
				>
					{footerSocialIcons.map(social => (
						<div
							className={`${styles.flexCenter} w-10 h-10 rounded-full bg-lightWhite cursor-pointer`}
							key={social.id}
						>
							<a href={social.link} target='_blank'>
								<img src={social.img} alt={social.alt} loading='lazy' />
							</a>
						</div>
					))}
				</div>

				{/* Footer Copyright */}
				<p className='text-center font-quicksand font-normal text-base leading-5 text-lightWhite pt-6'>
					Copyright @ 2022 Agency Creative. All Right Reserved
				</p>
			</div>
		</footer>
	)
}

export default footer
