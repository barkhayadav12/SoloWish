import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './Register';
import Login from './Login';
import Home from './Home'
import WriteNote from './WriteNote';
import ReadNote from './ReadNote';
import Edit from './Edit';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
function App(){
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/editPost/:id' element={<Edit/>}></Route>
        <Route path='/writenote' element={<WriteNote/>}></Route>
        <Route path='/readnote/:id' element={<ReadNote/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
