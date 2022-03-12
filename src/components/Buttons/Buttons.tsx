import React from 'react'

const Buttons = () => {
    const handlePrevious = () => {

    }
            
    const handleNext = () => {

    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link mr-3" onClick={handlePrevious}>Previous</button>
                </li>

                <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

export default Buttons