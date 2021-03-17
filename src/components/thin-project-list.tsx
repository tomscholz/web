import React from 'react'
import { projects } from '../config'
import ThinProject from './thin-project'

const ThinProjectList = () => (
  <div>
    {projects.map(({ id, descriptiveTitle, description, path, visual }) => (
      <ThinProject
        key={id}
        href={path}
        theme={id}
        title={descriptiveTitle}
        description={description}
        learn={`Explore ${id}`}
        visual={visual}
        openInNewWindow={false}
      />
    ))}
  </div>
)

export default ThinProjectList
