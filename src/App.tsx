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
import { styles } from './utils/style'

const App = () => {
	return (
		<div className={`${styles.paddingX} bg-black`}>
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
