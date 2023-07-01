import React from 'react'
import WorkExperiance from './experiance/WorkExperiance'
import Skills from './skills/Skills'

import jobHistory from '../data/workexpariance.js';

export default function Resume() {
  return (
    <div className=" resume  card">
      <div className="card-body ">
        {/* Header */}
        <div className="row">
          <div className="col-3 bg-danger " >
            <div className='circle profile-card'>

            </div>
          </div>

          <div className="col-9 bg-warning">
            <h3>Chandan Patel</h3>
            <p>chandanpatel@gmail.com</p>
            <p>122411241</p>
            <p>Noida UP, India, 201302</p>
          </div>
        </div>

        <div className="row mt-2">
          <div className='col-2 bg-black'>
          <h4 className='heading'>Summery</h4>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            voluptate ab deserunt, veritatis quibusdam modi possimus neque sunt
            necessitatibus, suscipit, optio laboriosam asperiores sapiente sed
            id cumque nihil recusandae animi.
          </p>
        </div>

        <hr />

        {/* Worrk experiance */}
        <div className="row mt-2">
          <h4 className='col-4 bg-black'>Work experiance</h4>
          

          {/* {Array.from({ length: 3 }).map((_, i) => (
            <WorkExperiance index={i}/>
          ))} */}

      {

        jobHistory.map((e, i)=>{
            return(  <WorkExperiance index={i} data={e}/>);
        })

      }
          
        </div>

        <hr />

        {/* Skills */}

        <div className="row mt-2">
          <h4>Skills</h4>

          {Array.from({ length: 8 }).map((_, i) => (
            <Skills index={i} />
          ))}

          
        </div>

        <hr />
      </div>
    </div>
  );
}
