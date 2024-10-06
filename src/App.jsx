import "./App.css";
import Footer1 from "./components/Footer1";
import Navbar1 from "./components/Navbar1";
import Service from "./components/Service";
import Hero from './components/Hero'
import FeedbackSlider from "./components/FeedbackSlider";
import FeedbackCard from "./components/FeedbackCard";
import About from './components/About'

const feedback3 = {
  feedback: "I got my tax consultancy done through them. Efficient and prompt service!",
  name: "Michael Brown",
  designation: "Freelancer",
};

function App() {
  return (
    <>
      <Navbar1 />
      <Hero />
      <About />
      <Service /> 
      <FeedbackSlider />
      <Footer1 />
    </>
  )
}

export default App;
