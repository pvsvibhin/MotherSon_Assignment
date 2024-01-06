import './index.css'
import ProjectCard from '../ProjectCard'
import ProjectContext from '../../context/ProjectContext'

const Projects = () => (
  <ProjectContext.Consumer>
    {value => {
      const {projectsList} = value
      return (
        <div className="route2" id="projects">
          <div className="responsive">
            <h2 className="projectsPageTitle">Projects</h2>
            <hr className="text_underline" />

            {projectsList.map(eachItem => (
              <ProjectCard projectDetails={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
      )
    }}
  </ProjectContext.Consumer>
)
export default Projects
