import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Nav } from './components/Nav'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { MovieList } from './components/MovieList'
import { MovieFocus } from './components/MovieFocus'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/movies" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:slug" exact>
            <MovieFocus />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
