import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import movies from '../data/movies.json'
import { Movies } from './Movies'

export const MovieFocus = () => {
  const { slug } = useParams()
  const history = useHistory()
  const movieMatch = movies.find((movie) => movie.slug === slug)

  if (!movieMatch) {
    history.push('/movies')
  }
  return (
    <div className="movieFocus">
      <Movies {...movieMatch} />
    </div>
  )
}