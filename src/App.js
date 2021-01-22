import React, { useState } from 'react'
import MostraGif from './componente/MostraGif'

function App() {
  const [contador, mudarImg] = useState(0)

  const gif = () => {
    mudarImg(contador + 1)
  }

  return (
    <div className="App">
      <button onClick={gif}><b>Clique Aqui!</b> </button>
      {contador > 0 ?
        <MostraGif /> :
        <p></p>
      }
    </div >
  );
}

export default App;
