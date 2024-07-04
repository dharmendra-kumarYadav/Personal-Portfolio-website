import React from 'react';
import project from './data/projects.json';

const Projects = () => {
  return (
    <div className="container projects my-5" id='projects'>
      <h1>PROJECT</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {project.map((data) => (
          <div key={data.id} className="my-4 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card bg-dark text-white"
              style={{
                width: "18rem",
                border: '1px solid yellow',
                boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)'
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="d-flex justify-content-center align-items-center p-3">
                <img src={data.imageSrc} className="card-img-top" alt="project"
                  style={{
                    width: '250px',
                    height: '200px',
                    border: '2px solid yellow',
                    borderRadius: '10px'
                  }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.description}
                </p>
                <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                <a href={data.code} className="btn btn-warning">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
