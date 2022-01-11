import './App.css';
import PersonCard from'./components/PersonCard';

function App() {
  return (
    <div className="App">
      
      <PersonCard firstName="Homer" lastName="Simpson" age={45} hairColor="n/a"/>
      <PersonCard firstName="Marge" lastName="Simpson" age={42} hairColor="Blue"/>
      <PersonCard firstName="Bart" lastName="Man" age={12} hairColor="Yellow"/>
      <PersonCard firstName="Lisa" lastName="Simpson" age={11} hairColor="Yellow"/>
      
      
    </div>
  );
}

export default App;
