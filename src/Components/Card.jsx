import React from 'react';

const Card = (props) => {
    const { img, name } = props;
    return (
        <div className='image'>
            <img src={require(`../img/${img}.png`)} alt="info" />
            <span>{name}</span>
        </div>
    )
}

export default Card;