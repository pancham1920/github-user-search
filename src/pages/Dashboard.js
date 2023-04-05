import React from 'react';
import {Info, Navbar, Search, Repos, User} from '../components';
import { GithubContext } from '../context/context'

function Dashboard() {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard;