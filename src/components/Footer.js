import React from 'react'
import '../css/footer.css';

function Footer ({links}) {
  const linkList = links.map(({url, icon}) =>{
    return <a href = {url} target="_blank" rel="noopener noreferrer"><i className={icon}></i></a>
  })
  return (
    <div className = "social-icons fadeIn-icons" > {linkList} </div>
  )
  }
export default Footer
