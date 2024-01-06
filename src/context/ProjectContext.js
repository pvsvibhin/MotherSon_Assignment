import React from 'react'

const ProjectContext = React.createContext({
  projectsList: [],
  addProject: () => {},
})

export default ProjectContext
