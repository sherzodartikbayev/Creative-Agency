import {
	About,
	Business,
	Footer,
	Hero,
	Navbar,
	Portfolio,
	Services,
	Testimonial,
} from './components'

const App = () => {
	return (
		<div className='max-w-[1240px] bg-black'>
			{/* Navbar */}
			<Navbar />

			{/* Main */}
			<main>
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
