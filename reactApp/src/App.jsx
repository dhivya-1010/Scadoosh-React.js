import './App.css'
import Student from './assets/component/student'
import StudentClass from './assets/component/studentclass'
import Students from './assets/component/student1'
import Jsxx from './assets/jsxconcept/jsx'
import StateExample from './assets/jsxconcept/stateexamples'
import Toggle from './assets/jsxconcept/toggle'
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
    </div>
  )
}

export default App
