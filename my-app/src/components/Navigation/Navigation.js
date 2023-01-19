import React from 'react'
import './style.css'

export default function Navigation(props) {
  return (
    <>
    <nav>
    <img src='../cloudbackground.png' alt='purple clouds'/>
    <h2 class="navh2" onClick={() => props.changePage("aboutme")}>About me</h2>
    <h2 class="navh2" onClick={() => props.changePage("project")}>Projects</h2>
    <h2 class="navh2" onClick={() => props.changePage("contact")}>Contact</h2>
    <h2 class="navh2" onClick={() => props.changePage("resume")}>Resume</h2>
    </nav>
    </>
  )
}

