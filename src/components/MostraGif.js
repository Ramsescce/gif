import {useState} from 'react'
import React from 'react'




function MostraGif() {
    const [showGif, setshowGif] = useState(0)
  
function ChangeGif() {
    setshowGif(1)
}
function DelGif() {
    setshowGif(0)
}
    return (
       <>
       <button onClick={ChangeGif}>Mostrar o gif</button>
       <br></br>
        {
           showGif && <img onClick={DelGif} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif"/>
        }
        
        
       

        </>
    )
}


export default MostraGif
