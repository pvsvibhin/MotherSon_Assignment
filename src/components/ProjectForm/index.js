import {useState} from 'react'

import ProjectContext from '../../context/ProjectContext'

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('')
  const [projectDesc, setProjectDesc] = useState('')

  return (
    <ProjectContext.Consumer>
      {value => {
        const {projectsList, addProject} = value
        const projectSubmitted = e => {
          e.preventDefault()
          const id = projectsList.length
          const project = {
            id,
            projectName,
            projectDescription: projectDesc,
            ProjectLink: 'Project Link',
            ProjectImg:
              'https://res.cloudinary.com/dvvxmuf11/image/upload/v1704568697/zpsd3mx5mkagmlcj2vqg.png',
          }
          addProject(project)
        }
        return (
          <div className="box2">
            <h2 className="formTitle">Add Project</h2>
            <hr className="text_underline" />
            <div className="formBox">
              <form onSubmit={projectSubmitted}>
                <label htmlFor="projectName">Project Name</label>
                <br />
                <input
                  value={projectName}
                  id="projectName"
                  type="text"
                  onChange={e => setProjectName(e.target.value)}
                />
                <br />
                <label htmlFor="projectLink">Project Link</label>
                <br />
                <input id="projectLink" type="text" />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <textArea
                  value={projectDesc}
                  id="description"
                  type="text"
                  onChange={e => setProjectDesc(e.target.value)}
                />
                <button type="submit" className="addBtn">
                  Add
                </button>
              </form>
            </div>
          </div>
        )
      }}
    </ProjectContext.Consumer>
  )
}

export default ProjectForm
