import React from 'react'
import PropTypes from 'prop-types'
import ChangeCity from './ChangeCity'

function Search ({ cities, city, onChangeCity, onInsertNewCity, onGetNewData }) {
    return (
        <div className = "search">
            <div className = "main-search">
                <h1 className = "search__cityName">{city}</h1>
                <ChangeCity cities = {cities} city = {city} onInsertNewCity = {onInsertNewCity} onGetNewData = {onGetNewData}/>
            </div>
            <div className = "search__cityInfo">
                <span className = "search__changeTown" onClick = {() => onChangeCity()}>Сменить город</span>
                <span className = "search__currentTown">Мое местоположение</span>
            </div>
        </div>
    )
}

Search.propTypes = {
    onChangeCity: PropTypes.func.isRequired,
    onInsertNewCity: PropTypes.func.isRequired,
    onGetNewData: PropTypes.func.isRequired,
}

export default Search 