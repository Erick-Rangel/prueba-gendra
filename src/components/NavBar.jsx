import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <h1>Rick and Morty Fan page</h1>


        <Link   to="/">Home</Link>
        <Link to="/episodes">Episodes</Link>


    </nav>
  )
}
