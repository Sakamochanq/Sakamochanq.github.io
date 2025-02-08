import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Work from './components/Work/Work';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Profile />
      <Work />
      <Skill />
    </div>
  );
}

export default App;
