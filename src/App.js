import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
	return (
		<>
			<div className="min-h-screen w-full bg-background bg-repeat-round ">
				<BrowserRouter>
					<NavigationBar />
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/resume" element={<Resume />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
	
}
export default App;
