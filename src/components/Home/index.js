import Header from '../Header'
import About from '../About'
import ProjectForm from '../ProjectForm'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <About />
    <ProjectForm />
    <img
      className="footer"
      src="https://res.cloudinary.com/dvvxmuf11/image/upload/v1704566430/xudmah6w6yexbulhuhzx.png"
      alt="Footer"
    />
  </div>
)

export default Home
