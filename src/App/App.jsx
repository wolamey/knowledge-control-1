import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import formData from '../data/data.json'
import Create from '../Pages/Create/Create'
import Info from '../Pages/Info/Info'
function App() {
  const [data, setData] = useState(formData);
  return (
    <>
      <Router>
        <header>
          <NavLink to="/">Create</NavLink>
          <NavLink to="/info">Information</NavLink>
        </header>
        <main>
          <Routes>
          <Route path="/" element={<Create data = {data} setData = {setData} />} />
          <Route path="/info" element={<Info data = {data}/>} />

          </Routes>
        </main>
        </Router>
    </>
  )
}

export default App
