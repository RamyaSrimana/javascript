import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link,Routes,Route} from "react-router-dom";
import HomePage from './Router/HomePage'
import AboutPage from './Router/AboutPage'
import ServicesPage from './Router/ServicesPage'
// import Button from './Router/Button'
import StylingDemo from './Router/StylingDemo';
// import TailwindHTMLController from './TODAY/'

function App() {
  return (
    <>
    <TailwindHTMLController/>
    {/* <nav>
      <Link to = {'/'}>Home</Link>  {'|'}
      <Link to = {'/about'}>About</Link>  {'|'}
      <Link to = {'/services'}>ServicesPage</Link> {'|'}
    </nav>
  cd
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/about' element = {<AboutPage/>}/>
      <Route path = '/services' element = {<ServicesPage/>}/>
    </Routes> */}
    </>
  )
} 
export default App

// import Effect from './Effect'
// import WithDependency from './WithDependency'
// import EffectWithApi from '../../EffectWithApi'
// import FormHandling from './Daily Task/FormHandling'
// // import Student from './Student'
// import ParentComponent from './Daily Task/ParentComponent'
// import Product from './Daily Task/Product'



//  const [count, setCount] = useState(0)
//  {/* <Props name="Alice"/>
//  {/* <ParentComponent/>
//  <Product>
//  <h1>Hellooo</h1>
//  <h2></h2>
//  </Product> */}
//  {/*  <Effect/> */}
//  {/* <WithDependency/> */}
//  {/* <EffectWithApi/> */}
//  {/* <Student name = "ALice" age =  "22" gender = "female" function = {Say Hello}      passing function as a value of property  />
//  component => <button onClick = {props.function} >Click Here </button> */}

//   {/* <FormHandling/> */}