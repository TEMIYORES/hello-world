import React from 'react'
import './myStyle.css'
function Stylesheet({primary}) {
    const className = primary ? 'primary': ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>CSS Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
