import './App.css'
import {useState} from 'react'
import Home from './components/Home'
import Footer from './components/Footer'

import Projects from './components/Projects'
import ProjectContext from './context/ProjectContext'

function App() {
  const [projectsList, setProjectsList] = useState([
    {
      id: 1,
      projectName: 'Wikipedia Search Application ',
      projectDescription:
        'Unlock the vast wealth of knowledge on Wikipedia with a custom search application that delivers relevant and curated results. Quick and easy access to information has never been easier.',
      ProjectLink: 'https://vibhinwiki.ccbp.tech/',
      ProjectImg:
        'https://res.cloudinary.com/dvvxmuf11/image/upload/v1704568697/qtss2rzp97wenb9rrnqr.png',
    },
    {
      id: 2,
      projectName: 'Jobby App',
      projectDescription:
        'Developed a comprehensive job search solution, Jobby App.',
      ProjectLink: 'https://vibhinjobbyapp.ccbp.tech/login)',
      ProjectImg:
        'https://res.cloudinary.com/dvvxmuf11/image/upload/v1704568697/zpsd3mx5mkagmlcj2vqg.png',
    },
    {
      id: 3,
      projectName: 'Nxt Watch',
      projectDescription:
        ' Built the Nxt Watch application, modelled after YouTube, enabling users to log in, explore video categories such as Trending and Gaming, access saved videos, and search for specific content while adjusting the interface theme.',
      ProjectLink: 'https://vibhinnxtwatch.ccbp.tech/',
      ProjectImg:
        'https://res.cloudinary.com/dvvxmuf11/image/upload/v1704568696/jjqzwyjfpc7eohjvqqu9.png',
    },
  ])

  const addProject = project => {
    setProjectsList([...projectsList, project])
  }

  return (
    <div className="App">
      <ProjectContext.Provider value={{projectsList, addProject}}>
        <Home />
        <Projects />
        <Footer />
      </ProjectContext.Provider>
    </div>
  )
}

export default App
