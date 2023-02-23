import React from 'react'

const CatItem = ({id,title,description,urlImg}) => {
    return (
        <div className="catItem" >
                    <img className='cat-img' src={urlImg} alt={title} />
                <div className='cat-info'>
                    <h4 className='cat-title'>{title}</h4>
                    <p className='cat-description'>{description}</p>
                </div>
        </div>
    )
}

export default CatItem