import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'
import { OrgDoc } from './pages/OrgDoc'


function App() {

  return (
    <>
      <Router>
        <section className='full-page'>
          <AppHeader />
          <Routes>
            <Route path='/view-org' Component={OrgDoc} />
            <Route path='/' Component={Home} />
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
