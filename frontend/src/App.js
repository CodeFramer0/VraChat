
import Header from './components/Header'
import History from './components/History'
import Chat from './components/Chat'



function App() {
  return (
    <div className="App">
     <Header/>
     <div className="d-flex">
      <History/>
      <Chat/>
    </div>
    </div>
  );
}

export default App;