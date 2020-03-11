import React from 'react';
import styled from 'styled-components'

const ClassCard = ( {content, removeClass} ) => {
    
    // limit length of desc if exceeds intended length and return updated desc
    const maxDescLength = (description) => {
        if (description.length > 100) {
          return description.substring(0, 100) + '...';
        }
        return description;
    }

    return (
        <ClassCardWrapper>
            <CardImage src={content.featureImage} alt='' />
            <h4>{content.title}</h4>
            <h5>{content.instructor}</h5>
            <h5>{maxDescLength(content.description)}</h5>
            <h5>{content.duration} min</h5>
            <button onClick={() => removeClass(content.id)}>Remove</button>
      </ClassCardWrapper>   
    )
}

export default ClassCard

const ClassCardWrapper = styled.div`
    height: 510px;
    width: 250px;
    border-radius: 5px;
    border: solid 1px black;
    overflow: hidden;
`

const CardImage = styled.img`
    width: 100%;
    height: 50%;
`