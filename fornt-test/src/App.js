import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobsListComponent from './components/JobsListComponent';

function App() {
  return (
    <BrowserRouter>
      <div className='container' style={{marginTop: '50px'}}>
        <Routes>
          <Route path='/' element={<JobsListComponent/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
