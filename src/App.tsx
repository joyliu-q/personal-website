import './index.css';

// Routing Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';

import './App.css';
import MyLinks from './pages/MyLinks';
import LinkPage from './pages/LinkPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLinks />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<LinkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
