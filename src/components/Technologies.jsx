import React from 'react'
import "./Technologies.css";
import {Link,Outlet} from "react-router-dom"
const Technologies = () => {
  return (
      <div className='techcontainer'>
          <div className="left-panel">
              <Link to="html">HTML</Link>
              <Link to="css">CSS</Link>
              <Link to="javascript">Javascript</Link>
              <Link to="react">React</Link>
        </div>
          <div className="right-panel">
              <Outlet/>
        </div>
    </div>
  )
}

export default Technologies;