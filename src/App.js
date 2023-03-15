import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
	return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
	
}
export default App;
