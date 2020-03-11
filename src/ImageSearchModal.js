import React, { useState } from 'react';
import Unsplash from 'unsplash-js';
import styled from 'styled-components'

const unsplash = new Unsplash({ accessKey: "gJaZ6jqSFwAW2Pd4vriru2ycTZd_T4frNG__bI8_bkk" })

const ImageSearchModal = ({ selectImage, closeModal }) => {
    const [imgSearchTerm, setImgSearchTerm] = useState('') // manage search term
    const [imgUrls, setImgUrls] = useState([])  // manage searched image results


    // update imgUrls with array of img urls
    const imageSearch = () => {
        unsplash.search.photos(imgSearchTerm, 1, 10, { orientation: "portrait" })
        .then(res => res.json())
        .then(data => {
            const images = searchImageResults(data.results);
            setImgUrls(images)
        })
    } 



    // helper method: return array of image urls
    const searchImageResults = images => {
        return images.map(i => i.urls.regular)
    }
   
    return (
        <ImageModal>
            <ImageModalForm>
                <input type="text" placeholder="Search..." value={imgSearchTerm} name="featureImage" onChange={e => setImgSearchTerm(e.target.value)} />
                <button type="button" onClick={imageSearch}>Search</button>
                <button onClick={closeModal}>Close</button>
                <ImageListContainer>
                    {imgUrls.map((url, index) => {
                        return <ImageListItem key={index} onClick={selectImage} src={url}/>;
                    })}  
                </ImageListContainer>
            </ImageModalForm>
        </ImageModal>
    
    )
}

export default ImageSearchModal

const ImageModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color:rgba(0, 0, 0, 0.5)
`

const ImageModalForm = styled.div`
  border: black 2px solid;
  max-width: 1000px;
  width: 50%;
  height: 80%;
  margin: auto;
  background: white;
  padding: 25px;
  margin-top: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`

const ImageListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`
const ImageListItem = styled.img`
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
`