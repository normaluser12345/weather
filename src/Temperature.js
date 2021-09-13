import React from 'react'
import PropTypes from 'prop-types'

function Temperature ({ onChangeMeasure, measure }) {

    const celsiusClasses = ['temperature__celsius temperature__chosen'];
    const fahrenheitClasses = ['temperature__fahrenheit']
    
    function defineMeasure(event) {
        const celsius = document.querySelector('.temperature__celsius')
        const fahrenheit = document.querySelector('.temperature__fahrenheit')
        
        if (event.target === fahrenheit && measure !== 'imperial') {
            onChangeMeasure(fahrenheit)
            celsius.classList.remove('temperature__chosen')
            event.target.classList.add('temperature__chosen')
        } else if (event.target === celsius && measure !== 'metric') {
            onChangeMeasure(celsius)
            fahrenheit.classList.remove('temperature__chosen')
            event.target.classList.add('temperature__chosen')
        }
    }


    return (
        <div className = "temperature">
            <div className = {celsiusClasses.join(' ')} onClick = {(event) => defineMeasure(event)}>C</div>
            <div className = {fahrenheitClasses.join(' ')} onClick = {(event) => defineMeasure(event)}>F</div>
        </div>
    )
}

Temperature.propTypes = {
    onChangeMeasure: PropTypes.func.isRequired,
}

export default Temperature
