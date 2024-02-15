import './App.css'
import { Botoncito } from './components/Botoncito';
import { Panel } from './components/Panel'
import { Tarjetita } from './components/Tarjetita';

function App() {

  return (
    <div>
    <Panel />
    <Tarjetita movie={movie}/>
    <Botoncito />
    </div>
  );
}

export default App
