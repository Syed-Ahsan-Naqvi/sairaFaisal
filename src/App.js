import { Helmet } from "react-helmet";
import favicon from './img/title-bg.jpeg';
import './App.css';
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor"
import Cloud from "./components/Cloud"
// import { AiFillHtml5 } from "react-icons/ai";



function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Saira Faisal</title>
        <link rel="icon" type="image/png/jpeg" href={favicon} sizes="16x16" />
      </Helmet>

      <AnimatedCursor
        innerSize={20}
        outerSize={15}
        color='121,121,121'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={4}
        trailingSpeed={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Main />
      <About />
      <Skills />
      <Cloud />
      {/* <Education /> */}
      {/* <Accomplishments /> */}
      {/* <Experience /> */}
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
