import { useState, useEffect } from 'react'
import {
	close,
	darkMode,
	footerLogo,
	lightMode,
	logo,
	menu,
} from '../../assets'
import { navbarLinks } from '../../utils/constants'
import { styles } from '../../utils/style'

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	// Save Theme and Loading
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light'
		const initialTheme = savedTheme || systemTheme
		setTheme(initialTheme)
		document.documentElement.classList.add(initialTheme)
	}, [])

	// Change Theme Function
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		document.documentElement.classList.remove(theme)
		document.documentElement.classList.add(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	const toggleHandler = () => setToggleNav(prev => !prev)

	return (
		<header className={`${styles.paddingX} bg-white dark:bg-black`}>
			<div
				className={`${styles.flexBetween} w-full h-32 mx-auto max-w-[1440px] z-10 top-0 left-0 max-sm:fixed max-sm:px-8 max-xs:h-24 bg-white dark:bg-black`}
			>
				{/* Logo */}
				<div
					className={`${styles.flexCenter} w-[136px] h-[50px] max-xs:w-[91px] max-xs:h-[33[px]]`}
				>
					<a href='#'>
						{theme == 'dark' ? (
							<img src={logo} alt='logo' className='w-full' />
						) : (
							<img src={footerLogo} alt='logo' className='w-full' />
						)}
					</a>
				</div>

				{/* Navbar Links */}
				<ul className={`${styles.flexCenter} gap-12 max-lg:hidden`}>
					{navbarLinks.map(nav => (
						<li key={nav.id}>
							<a
								className={`font-quicksand font-normal text-lg text-black dark:text-lightWhite leading-6  duration-300 dark:hover:text-white hover:font-bold dark:hover:font-semibold`}
								href={`#${nav.id}`}
							>
								{nav.text}
							</a>
						</li>
					))}
				</ul>

				{/* Toggle Theme Button */}
				<button
					className='max-sm:hidden w-11 h-11 p-2 border-[1px] border-black rounded-3xl dark:bg-white'
					onClick={toggleTheme}
				>
					{theme == 'dark' ? (
						<img src={lightMode} alt='dark mode icon' className='' />
					) : (
						<img src={darkMode} alt='light mode icon' className='' />
					)}
				</button>

				{/* NavbarLinks mobile */}
				<div className='sm:hidden flex gap-5 flex-1 justify-end items-center'>
					<button
						className='w-8 h-8 p-1 border-[1px] border-black rounded-3xl dark:bg-white'
						onClick={toggleTheme}
					>
						{theme == 'dark' ? (
							<img src={lightMode} alt='dark mode icon' className='' />
						) : (
							<img src={darkMode} alt='light mode icon' className='' />
						)}
					</button>

					<img
						src={toggleNav ? close : menu}
						alt='nav'
						className='w-6 object-contain cursor-pointer'
						onClick={toggleHandler}
					/>
				</div>

				<div
					className={`${styles.flexCenter} ${
						!toggleNav ? 'hidden' : 'flex'
					} flex-col p-6 absolute top-24 right-0 w-4/5 h-[100vh] z-[99] bg-white dark:bg-black`}
				>
					<ul
						className={`${styles.flexCenter} flex-col list-none flex-1 gap-4 top-[-50px] relative`}
					>
						{navbarLinks.map(nav => (
							<li
								key={nav.id}
								className={`${
									theme === 'dark' ? 'text-lightWhite' : 'text-black'
								} hover:text-white hover:font-semibold text-4xl cursor-pointer duration-500 max-xs:text-2xl`}
							>
								<a href={`#${nav.id}`} onClick={() => setToggleNav(false)}>
									{nav.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Navbar
