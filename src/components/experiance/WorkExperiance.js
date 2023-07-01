import React from 'react'

export default function WorkExperiance(props) {
  return (
    <div key={props.index}  >
       <b> {props.data.companyName}</b>  {props.data.time}       <br/>
        <i>{props.data.position}</i>
        <p>{props.data.description}</p>

    </div>
  )
}
