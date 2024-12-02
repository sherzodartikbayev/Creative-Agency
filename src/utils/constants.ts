import { monitorIcon, penToolIcon, settingsIcon, tvIcon } from '../assets'

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
		alt: "monitor icon",
		title: "Social Media Management",
		bgColor: "bg-lightWhite",
	},
	{
		id: 2,
		img: `${settingsIcon}`,
		alt: "settings icon",
		title: "Search Engine Opimization",
		bgColor: "bg-red",
	},
	{
		id: 3,
		img: `${penToolIcon}`,
		alt: "pen-tool icon",
		title: "Design",
		bgColor: "bg-green",
	},
	{
		id: 4,
		img: `${tvIcon}`,
		alt: "tv icon",
		title: "Ads",
		bgColor: "bg-yellow",
	},
]