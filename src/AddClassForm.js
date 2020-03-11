import React, { useState } from 'react'
import styled from 'styled-components'
import ImageSearchModal from './ImageSearchModal'

const AddClassForm = ({addClass, showAddClassForm}) => {
    const newClass = {title: '', instructor: '', description: '', duration: '', featureImage: '', classType: ''}
    
    const [values, setValues] = useState(newClass) // manage classes
    const [modalOpen, setModalOpen] = useState(false) // manage modal search for images
  
    // submit new class form
    const handleSubmit = e => {
        e.preventDefault();
        if(!values.title && !values.instructor && values.description && values.duration && values.featureImage && values.classType) return;
        // if all values are filled => add class to class list, reset form, collapse form
        addClass(values)
        setValues(newClass)
        showAddClassForm()
    }

    // handle all form values (except image)
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    // handle image url selected by user & close image search modal
    const selectImage = (e) => {
        setValues({...values, featureImage: e.target.src})
        setModalOpen(false)
    }

    // close image search modal
    const closeModal = () => {
        setModalOpen(!modalOpen)
    }

    return (   
        <NewClassForm onSubmit={handleSubmit}>
            <h2>Add a New Class!</h2>
            <FormButtonClose type="button" onClick={showAddClassForm}>Close</FormButtonClose>
            <FormContainer>
                
                <FormLabel>Title</FormLabel>
                <FormInput type="text" value={values.title} name="title" onChange={handleChange} />
                
                <FormLabel>Instructor</FormLabel>
                <FormInput type="text" value={values.instructor} name="instructor" onChange={handleChange} />
                
                <FormLabel>Description</FormLabel>
                <FormTextArea type="text" value={values.description} name="description" onChange={handleChange} />
                
                <FormLabel>Duration</FormLabel>
                <FormInput type="number" value={values.duration} name="duration" onChange={handleChange} />
                
                <FormLabel>Search and Select Image</FormLabel>
                <FormButton type="button" onClick={() => setModalOpen(!modalOpen)}>
                    { values.featureImage ? "image selected" : "search" }
                </FormButton>
                { modalOpen ? <ImageSearchModal selectImage={selectImage} closeModal={closeModal}/> : null }
                
                <FormLabel>Class Type</FormLabel>      
                <FormInput type="text" value={values.classType} name="classType" onChange={handleChange} />
                
                <FormSubmit type="submit" value="Submit" />
            </FormContainer>
            
        </NewClassForm>
    )
}

export default AddClassForm

const NewClassForm = styled.form`
    width: 60%;
    margin: auto;
`

const FormContainer = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    flex-direction: column;
    align-items: flex-start;
`

const FormLabel = styled.label`
    margin-top: 10px;
`

const FormInput = styled.input`
    margin-top: 5px;
    width: 100%;
`

const FormTextArea = styled.textarea`
    margin-top: 5px;
    width: 100%;
    min-width: 100%;
    min-height: 100px;
`

const FormButton = styled.button`
    margin-top: 5px;
    width: 150px;
    height: 30px;
`
const FormButtonClose = styled.button`
    margin: 20px;
`

const FormSubmit = styled.input`
    background: #BEBEBE;
    margin: 10px 0;
    padding: 5px;
    width: 100%;
`