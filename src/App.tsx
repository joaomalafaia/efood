import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalCss from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'
import RestaurantPage from './pages/Restaurant'
import { store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurant/:id',
    element: <RestaurantPage />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={rotas} />
        <Footer />
      </Provider>
    </>
  )
}

export default App
