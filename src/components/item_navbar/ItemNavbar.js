import React from 'react'

function ItemNavbar({ icon, iconActive, title, isActive }) {
    return (
        <button className={`itemNavbar ${isActive === true ? 'active' : ''}`}>
            {
                isActive === true && iconActive ?
                    <img className='iconItemNavbar active' alt='icon' src={iconActive} />
                    :
                    <img className='iconItemNavbar' alt='icon' src={icon} />
            }
            <div className={`textItemNavbar ${isActive === true ? 'active' : ''}`}>{title}</div>
        </button>
    )
}

export default ItemNavbar