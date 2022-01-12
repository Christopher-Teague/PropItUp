import './App.css';
import PersonCard from'./components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName="Al" lastName="Coholic" age={23} hairColor="n/a"/>
      <PersonCard firstName="Jacques" lastName="Strapp" age={33} hairColor="Blue"/>
      <PersonCard firstName="Amanda" lastName="Hugginkiss" age={18} hairColor="Yellow"/>
      <PersonCard firstName="Anita" lastName="Bath" age={7} hairColor="Yellow"/>
    </div>
  );
}

export default App;
