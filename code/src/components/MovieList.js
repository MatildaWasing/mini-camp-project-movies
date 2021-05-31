import React from 'react'
import { Link } from 'react-router-dom'
import { Movies } from './Movies'
import movies from '../data/movies.json'

export const MovieList = () => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <Link key={movie.title} to={`/movies/${movie.slug}`}>
          <Movies {...movie} />
        </Link>
      ))}
    </section>
  )
}