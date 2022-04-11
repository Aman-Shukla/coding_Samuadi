import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';





function App() {
  return (
    <div className="App">
      <Header/>

      <div className="app_body">
        <Sidebar/>
        {/* <Feed/>
        <Widgets/> */}
      </div>
     
     
    </div>
  );
}

export default App;
