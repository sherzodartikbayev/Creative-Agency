import {
	card1,
	card2,
	card3,
	facebook,
	instagram,
	linkedin,
	mail,
	monitorIcon,
	penToolIcon,
	settingsIcon,
	tvIcon,
	twitter,
	userLogo,
} from '../assets'

// Navbar Component
export const navbarLinks = [
	{
		id: 'home',
		text: 'Home',
	},
	{
		id: 'about',
		text: 'About',
	},
	{
		id: 'services',
		text: 'Services',
	},
	{
		id: 'projects',
		text: 'Projects',
	},
]

// Services Component
export const servicesCards = [
	{
		id: 1,
		img: `${monitorIcon}`,
		alt: 'monitor icon',
		title: 'Social Media Management',
		bgColor: 'bg-lightWhite',
	},
	{
		id: 2,
		img: `${settingsIcon}`,
		alt: 'settings icon',
		title: 'Search Engine Opimization',
		bgColor: 'bg-red',
	},
	{
		id: 3,
		img: `${penToolIcon}`,
		alt: 'pen-tool icon',
		title: 'Design',
		bgColor: 'bg-green',
	},
	{
		id: 4,
		img: `${tvIcon}`,
		alt: 'tv icon',
		title: 'Ads',
		bgColor: 'bg-yellow',
	},
]

// Portfolio Component
export const portfolioCard = [
	{
		id: 1,
		img: `${card1}`,
		alt: 'card 1 img',
		title: 'Design Byte App',
	},
	{
		id: 2,
		img: `${card2}`,
		alt: 'card 2 img',
		title: 'Cloud App',
	},
	{
		id: 3,
		img: `${card3}`,
		alt: 'card 3 img',
		title: 'Design Furniture App',
	},
]

// Testomonial Section
export const testomonialCard = [
	{
		id: 1,
		userLogo: `${userLogo}`,
		userName: 'Angel Rose',
		userJob: 'Creative Manager',
		userDescription:
			"There are many variations passages of Lorem Ipsum majority some by words which don't look.",
	},
	{
		id: 2,
		userLogo: `${userLogo}`,
		userName: 'Angel Rose',
		userJob: 'Creative Manager',
		userDescription:
			"There are many variations passages of Lorem Ipsum majority some by words which don't look.",
	},
	{
		id: 3,
		userLogo: `${userLogo}`,
		userName: 'Angel Rose',
		userJob: 'Creative Manager',
		userDescription:
			"There are many variations passages of Lorem Ipsum majority some by words which don't look.",
	},
]

// Footer Section
export const footerLinks = [
	{
		id: 1,
		title: 'Terms & policies',
		links: 'Terms of Service, Privacy Policy',
	},
	{
		id: 2,
		title: 'Company',
		links: 'Home, About, Us, Contact Us',
	},
	{
		id: 3,
		title: 'Contact',
		links: '(+62) 893912392190, agecnycr@gmail.com',
	},
	{
		id: 4,
		title: 'Location',
		links:
			'PT Osiris Real Estate Internasional, Jl. KH. Wahid Hasyim Kel No.10D, Jakarta. Indonesia, team@OsirisRealEstate.com',
	},
]

export const footerSocialIcons =  [
	{
		id: 1,
		img: `${facebook}`,
		alt: "facebook",
		link: "https://www.facebook.com"
	},
	{
		id: 2,
		img: `${instagram}`,
		alt: "instagram",
		link: "https://www.instagram.com"
	},
	{
		id: 3,
		img: `${linkedin}`,
		alt: "linkedin",
		link: "https://www.linkedin.com"
	},
	{
		id: 4,
		img: `${mail}`,
		alt: "mail",
		link: "https://www.mail.com"
	},
	{
		id: 5,
		img: `${twitter}`,
		alt: "twitter",
		link: "https://www.x.com"
	},
]