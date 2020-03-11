import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'
import AddClassForm from './AddClassForm'
import ClassCard from './ClassCard'

const App = () => {
  const [classes, setClasses] = useState([]) // manage list of classes displayed
  const [newClassOpen, setNewClassOpen] = useState(false) // manage is new class form is displayed

  useEffect(() => {
    setClasses(classList)
  }, [])

  // add new class to classes
  const addClass = text => {
    const newClass = [...classes, text]
    setClasses(newClass)
  }

  // remove class from class list
  const removeClass = (classId) => {
    const updatedClasses = classes.filter(c => c.id !== classId)
    setClasses(updatedClasses)
  }
  
  // display form to add new class
  const showAddClassForm = () => {
    setNewClassOpen(!newClassOpen)
  }

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      { newClassOpen ? 
        <AddClassForm addClass={addClass} showAddClassForm={showAddClassForm } /> 
      : 
        <AddClassButton onClick={showAddClassForm}>Add Class</AddClassButton> 
      }
      <CardContainer>
        {classes.map((klass, index) => <ClassCard key={index} content={klass} removeClass={removeClass}/>)}
      </CardContainer>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  text-align: center;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`

const AddClassButton = styled.button`
  padding: 15px;
  margin: 10px;
`