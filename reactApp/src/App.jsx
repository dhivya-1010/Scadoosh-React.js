import './App.css'
import Student from './assets/component/student'
import StudentClass from './assets/component/studentclass'
import Students from './assets/component/student1'
import Jsxx from './assets/jsxconcept/jsx'
import StateExample from './assets/jsxconcept/stateexamples'
import Toggle from './assets/jsxconcept/toggle'
import TestPass from './assets/jsxconcept/testpassword'
import Dark from './assets/jsxconcept/dark'
import Change from './assets/jsxconcept/change'
function App() {
  
  return (
    <div>
      <Student title="Dhivya" course="java" duration={12}/>
      <StudentClass />
      <Students title="Props class"/>
      <Students />
      <Jsxx />
      <StateExample />
      <Toggle />
      <TestPass />
      <Dark />
      <Change />
    </div>
  )
}

export default App
