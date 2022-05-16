import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { About } from './pages/About';
import { Projects } from './pages/Projects';

// Routing Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { BLOGS, Blog, BlogPage } from './pages/Blog';
import './App.css';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFound';

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        {Object.entries(BLOGS).map(([key, value]) => {
          return <Route key={key} path={`/blog/${key}`} element={<BlogPage date={value.date} subtitle={value.subtitle ?? undefined} title={value.title} path={value.path}/>} />
        })}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();