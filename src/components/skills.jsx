import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return (
    <div className="container skills" id='skills'>
      <h1>SKILLS</h1>
      <div className="items">
      {skills.map((data) => {
        return (
          <>
            <div key={data.id} className="item"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt="skill image" />
              <h3>{data.title}</h3>
            </div>
          </>
        )
      })}
      </div>
    </div>
  )
}

export default Skills
