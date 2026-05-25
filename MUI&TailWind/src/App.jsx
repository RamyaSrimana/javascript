import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TailwindHTMLController from './STYLES/TailwindHTMLController'
import FormTailwind from './STYLES/FormTailwind'
import TodoApp from './STYLES/TodoApp'
import Counter from './STYLES/Counter'
// import MaterialButton from './STYLES/MATERIAL_UI/MaterialButton'
import TextFieldMUI from './STYLES/MATERIAL_UI/TextFieldMUI'
import Typographyy from './STYLES/MATERIAL_UI/Typographyy'
import MuliBox from './STYLES/MATERIAL_UI/MuliBox'
import MuiCard from './STYLES/MATERIAL_UI/MuiCard'
import LoginForm from './STYLES/MATERIAL_UI/LoginForm'
import MUIswitch from './STYLES/MATERIAL_UI/MUIswitch'
// import TermsCheckbox from './STYLES/MATERIAL_UI/TermsCheckbox'
import MUIRadio from './STYLES/MATERIAL_UI/MUIRadio'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <TailwindHTMLController /> */}
   {/* <FormTailwind/> */}
   {/* <TodoApp/> */}
   {/* <Counter/> */}
   {/* <MaterialButton/> */}
   {/* <MuiCard/>
   <TextFieldMUI/>
   <Typographyy/>
   <MuliBox/> */}
   {/* <LoginForm/> */}
   <MUIswitch/>
   {/* < MUIRadio/> */}
   {/* <TermsCheckbox/> */}
   </>
  )
}

export default App 

// 