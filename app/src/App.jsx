import TaskList from "./TaskList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </Router>
  )
}

export default App
