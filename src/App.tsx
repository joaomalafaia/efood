import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import GlobalCss from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'
import RestaurantPage from './pages/Restaurant'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ladolcevita',
    element: <RestaurantPage />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
