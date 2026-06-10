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
import Dice from './assets/jsxconcept/dice'
import Event from './assets/eventHandling/eventhandling'
import Handle from './assets/eventHandling/eventtarget'
import Form from './assets/eventHandling/formsubmit'
import List from './assets/eventHandling/list'
import ToDo from './assets/component/toDoList/todolist'
import UseState from './assets/hooks/useStateExample'

function App() {
  
  return (
    <div>
      <ToDo />
      <UseState />
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
      <Dice />
      <Event />
      <Handle />
      <Form />
      <List />
      
    </div>
  )
}

export default App
