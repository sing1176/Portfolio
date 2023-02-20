import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
	return (
		<>
			<div className="min-h-screen w-full bg-background bg-repeat-round ">
				<BrowserRouter>
					<NavigationBar />
					<Routes>
						<Route exact path="/Portfolio" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
	
}
export default App;
