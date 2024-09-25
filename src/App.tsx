import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { SignUp } from './components/signUp'
import { SignIn } from './components/signIn'

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}
