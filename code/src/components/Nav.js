import React from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
      <h1>
        <Link to="/">Title</Link>
      </h1>
      <Route path="/movies/:slug">
        <Link to="/movies">
          Back
        </Link>
      </Route>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}