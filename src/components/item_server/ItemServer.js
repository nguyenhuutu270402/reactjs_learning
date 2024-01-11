import React from 'react'

function ItemServer({ item, isActive }) {
    return (
        <div className={`boxItemServer ${isActive === true ? 'active' : ''}`}>
            <div className='boxInforItemServer'>
                <img className='imageItemServer' src={require(`../../assets/images/ic_flag_usa.png`)} alt='flag' />
                <div className='textItemServer'>USA</div>
            </div>
            <div className='boxStatusItemServer'>Started</div>
        </div>
    )
}

export default ItemServer