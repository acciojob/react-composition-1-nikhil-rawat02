import React from 'react'

function Tabs(props) {
    // props is [{title : , content : }, {title : , content : }]
    const {tabs, setOutput} = props;

  return (
    <div>
      {
        tabs.map((element) =>(
            <ul key = {element.title} onClick={()=>{setOutput(`${element.content}`)}}>
                <li>{element.title}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default Tabs
