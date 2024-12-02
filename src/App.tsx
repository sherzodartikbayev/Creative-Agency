import { Footer, Navbar } from './components'
import {
	About,
	Business,
	Hero,
	Portfolio,
	Services,
	Testimonial,
} from './sections'
import { styles } from './utils/style'

const App = () => {
	return (
		<div className={`${styles.paddingX} bg-black relative`}>
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
