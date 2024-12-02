import { useState } from 'react'
import { close, logo, menu } from '../../assets'
import { navbarLinks } from '../../utils/constants'
import { styles } from '../../utils/style'

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)
	const toggleHandler = () => setToggleNav(prev => !prev)

	return (
		<header className='mb-[68px]'>
			<div
				className={`${styles.flexBetween} w-full h-32 mx-auto max-w-[1240px] z-10 top-0 left-0 max-sm:fixed max-sm:px-8 max-xs:h-24 bg-black`}
			>
				{/* Logo  */}
				<div
					className={`${styles.flexCenter} w-[136px] h-[50px] max-xs:w-[91px] max-xs:h-[33[px]]`}
				>
					<a href='#'>
						<img src={logo} alt='logo' className='w-full' />
					</a>
				</div>

				{/* Navbar Links */}
				<ul className={`${styles.flexCenter} gap-12 max-lg:hidden`}>
					{navbarLinks.map(nav => (
						<li key={nav.id}>
							<a
								className='font-quicksand font-normal text-lg leading-6 text-lightWhite duration-300 hover:text-white hover:font-semibold'
								href={`#${nav.id}`}
							>
								{nav.text}
							</a>
						</li>
					))}
				</ul>

				{/* NavbarLinks mobile */}
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggleNav ? close : menu}
						alt='nav'
						className='w-[30px] h-[30px] object-contain cursor-pointer'
						onClick={toggleHandler}
					/>
				</div>
				<div
					className={`${styles.flexCenter} ${
						!toggleNav ? 'hidden' : 'flex'
					} flex-col bg-gradient p-6 absolute top-24 right-0 left-0 w-full h-[100vh] z-[99] bg-black`}
				>
					<ul
						className={`${styles.flexCenter} flex-col list-none flex-1 gap-4 top-[-50px] relative`}
					>
						{navbarLinks.map(nav => (
							<li
								key={nav.id}
								className={`text-lightWhite hover:text-white hover:font-semibold text-4xl
                  cursor-pointer duration-500 max-xs:text-2xl`}
							>
								<a href={`#${nav.id}`} onClick={() => setToggleNav(false)}>
									{nav.text}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Buttons */}
				<a
					href='#'
					className={`${styles.flexCenter} w-[185px] h-[48px] border-[1px] border-lightWhite rounded-3xl font-quicksand font-semibold text-base leading-6 text-lightWhite hover:bg-lightWhite duration-500 hover:text-black hover:shadow-2xl max-sm:hidden`}
				>
					Contact Us
				</a>
			</div>
		</header>
	)
}

export default Navbar
