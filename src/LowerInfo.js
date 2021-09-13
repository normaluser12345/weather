import React from 'react'
import PropTypes from 'prop-types'

function LowerInfo ({ wind, pressure, humidity, precipitation }) {
    return (
        <div className = "lower-info">
            <div className = "lower-info__item">
                <p className = "item-name">Ветер</p>
                <p className = "item-info">{wind} м/с</p>
            </div>
            <div className = "lower-info__item">
                <p className = "item-name">Давление</p>
                <p className = "item-info">{Math.round(pressure * 3 / 4)} мм рт. ст.</p>
            </div>
            <div className = "lower-info__item">
                <p className = "item-name">Влажность</p>
                <p className = "item-info">{humidity}%</p>
            </div>
            <div className = "lower-info__item">
                <p className = "item-name">Вероятность дождя</p>
                <p className = "item-info">{precipitation}%</p>
            </div>
        </div>
    )
}

LowerInfo.propTypes = {
    
}


export default LowerInfo