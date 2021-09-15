import React from 'react'
import PropTypes from 'prop-types'


function MainInfo ({ temperature, weatherDescription, icon }) {

    let source = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div className = "main-info">
            <div className = "info">
                <img className = "info__photo" src = {source} alt="weather"></img>
                <h1 className = "info__number">{temperature}°</h1>
            </div>
            <p className = "info__description">{weatherDescription}</p>
        </div>
    )
}

MainInfo.propTypes = {

}


export default MainInfo