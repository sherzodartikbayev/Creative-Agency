import { Footer, Navbar } from './components'
import {
	About,
	Business,
	Hero,
	Portfolio,
	Services,
	Testimonial,
} from './sections'

const App = () => {
	return (
		<div className='relative'>
			{/* Navbar */}
			<Navbar />

			{/* Main */}
			<main className='bg-white dark:bg-black'>
				<Hero />
				<About />
				<Services />
				<Portfolio />
				<Testimonial />
				<Business />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}

export default App
