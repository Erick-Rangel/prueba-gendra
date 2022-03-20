import {Route, Routes} from 'react-router-dom';
import { Details } from '../components/Details';
import { Home } from '../components/Home';



export const Pages = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<Details/>} />
            </Routes>
  )
}
