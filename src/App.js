import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import background from '../src/assets/background.gif';

function App() {
	return (
		<>
			<div className="min-h-screen w-full bg-background bg-repeat-round ">
				<BrowserRouter>
					<NavigationBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
	
}
export default App;
