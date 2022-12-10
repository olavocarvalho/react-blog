import { globalCss, styled } from "../stitches.config"
import { HeroBanner } from "./components/HeroBanner";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Layout } from "./layouts/Default";
import { Blog } from "./pages/Blog";

const Box = styled('div', {
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 20px -4px',
  borderRadius: '12px',
  minHeight: '136px',
  display: 'flex',
  flexDirection: 'column',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '300px',
  height: '300px',
  margin: '10rem'
})

const globalStyles = globalCss({

  '*': {
    boxSizing: 'border-box',
  },

  html: {
    overflowX: 'hidden',
  },

  'html, body': {
    scrollBehavior: 'smooth'
  },

  body: {
    margin: 0,
    backgroundColor: '#fcfdff',
    backgroundImage: 'radial-gradient(#e5e7eb 1px, #fff 1px) !important',
    backgroundSize: '20px 20px !important',
  },

  'body, button': {
    fontFamily: '$graphik',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$pink40',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit'
  }
});




function App() {

  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
