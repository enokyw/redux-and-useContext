import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import { StyleProvider } from './context/styleContext';
import { Home } from './components/router/home';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home/>} />
))


function App() {
    return (
        <StyleProvider>
            <RouterProvider router={router}/>
        </StyleProvider>
  )
}

export default App
