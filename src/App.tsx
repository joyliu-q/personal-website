import './index.css';

import { About } from './pages/About';
import { Projects } from './pages/Projects';

// Routing Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BLOGS, Blog, BlogPage } from './pages/Blog';
import './App.css';
import Footer from './components/Footer';
import { NotFoundPage } from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          {Object.entries(BLOGS).map(([key, value]) => {
            return <Route key={key} path={`/blog/${key}`} element={<BlogPage date={value.date} subtitle={value.subtitle ?? undefined} title={value.title} path={value.path} />} />
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
