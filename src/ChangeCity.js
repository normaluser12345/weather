import React from 'react'
import PropTypes from 'prop-types'


function ChangeCity ({ cities, onGetNewData, onInsertNewCity, city }) {

    return (
        <div className = "change-city">
            <div className = "currentCity">
                <h1 className = "currentCityName">{city}</h1>
                <button className = "change-city__button" onClick = {() => onGetNewData()}>OK</button>
            </div>
            <div className = "chooseCity">
                <ul className = "cityList">
                {cities.map(town => {
                    return <li className = "city" key = {town.id} onClick = {() => onInsertNewCity(town.name)}><span>{town.name}</span></li>
                })}
                </ul>
            </div>
        </div>
    )
}

ChangeCity.propTypes = {
    cities: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    onGetNewData: PropTypes.func.isRequired,
    onInsertNewCity: PropTypes.func.isRequired,
}

export default ChangeCity