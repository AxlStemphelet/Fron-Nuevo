import React from 'react'
const RecItem = ({id,img,category,title,location,description}) => {
    return (
        <div className="recItem" >
            <div className='rec-img-ctn'>
                <img className='rec-img' src={img} alt={title} />
            </div>
            <div className='rec-info'>
                <h5 className='rec-category'>{category}</h5>
                <h4 className='rec-title'>{title}</h4>
                <p className='rec-location'>{location}</p>
                <p className='rec-description'>{description}</p>
                <button className='rec-btn'>Ver detalle</button>
            </div>
        </div>
    )
}

export default RecItem