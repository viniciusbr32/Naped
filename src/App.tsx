import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
import { SignUp } from './pages/signUp'
import { SignIn } from './pages/signIn'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PageDetails } from './pages/page-details'
import { Footer } from './components/footer'
import { Category } from './pages/category-details'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/posts/:id" element={<PageDetails />} />
          <Route path="/:category" element={<Category />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  )
}
