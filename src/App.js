import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router,Routes,Route,Navigate} from 'react-router-dom'
import Signup from '../src/pages/Signup';
import Signin from '../src/pages/Signin';
import Todo from '../src/pages/To_do';
import ProtectedRoute from './services/ProtectedRoute';
 
 


function App() {
  return (
     <BrowserRouter>
   
    <Routes>
     <Route path='/' element={<Navigate to='login'/>}/> 
    <Route path='signup' element={< Signup/>}/>
    <Route path='login' element={< Signin/>}/>
    <Route path='/' element={<ProtectedRoute/>}>
    <Route path='todo' element={< Todo/>}/>
      
    </Route>
    </Routes>
    
    </BrowserRouter>
     

  );
}

export default App;
