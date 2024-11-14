import { useState } from "react"
import { ComponentCounter } from "./componets/ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./componets/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./componets/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./componets/FormComponent/FormComponent"
import { AppProduct } from "./componets/AppProduct/AppProduct"

export const App = () => {

  const[enableCounter, setEnableCounter] = useState(false)

  return (
    <div style={{display: 'flex', flexDirection:'column', gap: '2vh' }}>
      {/* <MiPrimerComponent text={"Texto desde propiedades"} color='red' fontSize={5}/>
      <ComponentCounter/>
      <ComponentUseEffect/> */}
      {/* <FormComponent/> */}
      <AppProduct/>
    </div>
  )
}


