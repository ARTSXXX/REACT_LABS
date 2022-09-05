import logo from './logo.svg';
import './App.css';
import Notes from './Components/Notes';
import StudentInfo from './Components/StudentInfo';
import { GradientBackground } from 'gradient-background';

function App() {
  return (
    <div>
      <GradientBackground color='dark'/>
      <Notes/>
      <br/>  <br/> <br/>  <br/>
      <StudentInfo/>
    </div>
  );
}

export default App;
