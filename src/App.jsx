import { Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03/index';
import Exemplo04 from './pages/exemplos/ex-04';
import Exemplo05 from './pages/exemplos/ex-05';
import Exemplo06 from './pages/exemplos/ex-06';

import Atividade01 from './pages/atividades/atividade-01/index';
import Atividade02 from './pages/atividades/atividade-02/index';
import Atividade03 from './pages/atividades/atividade-03';
import Atividade04 from './pages/atividades/atividade-04';
import Atividade05 from './pages/atividades/atividade-05';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exemplo/1" element={<Exemplo01 />}/>
      <Route path="/exemplo/2" element={<Exemplo02 />}/>
      <Route path="/exemplo/3" element={<Exemplo03 />}/>
      <Route path="/exemplo/4" element={<Exemplo04 />}/>
      <Route path="/exemplo/5" element={<Exemplo05 />}/>
      <Route path="/exemplo/6" element={<Exemplo06 />}/>

      <Route path="/atividade/1" element={<Atividade01 />}/>
      <Route path="/atividade/2" element={<Atividade02 />}/>
      <Route path="/atividade/3" element={<Atividade03 />}/>
      <Route path="/atividade/4" element={<Atividade04 />}/>
      <Route path="/atividade/5" element={<Atividade05 />}/>
    </Routes>
  )
}

export default App;