import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobsListComponent from './components/JobsListComponent';
import JsTreeComponent from './components/JsTreeComponent';
import TreeComponent from './components/TreeComponent';
import JsTreeChat from './components/JsTreeChat';
import ComponentTest from './components/ComponentTest';
import DocumentComponent from './components/DocumentComponent';

function App() {
  return (
    <BrowserRouter>
      <div className='container' style={{marginTop: '50px'}}>
        <Routes>
          <Route path='/' element={<JobsListComponent/>}></Route>
          <Route path='/test' element={<ComponentTest/>}></Route>
          <Route path='/jsTree' element={<JsTreeComponent/>}></Route>
          <Route path='/jsTreeJquery' element={<TreeComponent/>}></Route>
          <Route path='/jsTreeChat' element={<JsTreeChat/>}></Route>
          <Route path='/document' element={<DocumentComponent/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
