import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
import { SignUp } from './pages/signUp'
import { SignIn } from './pages/signIn'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PageDetails } from './pages/page-details'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts/:id" element={<PageDetails />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
