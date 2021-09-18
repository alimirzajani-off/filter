import React from 'react'

const SelectCard = (props) => {
    return (
        <>
            <label htmlFor="select-card">شماره کارت</label>
            <select id="select-card" onChange={e=>props.handleCard(e)}>
                <option value="" selected>همه</option>
                <option value="1">card1</option>
                <option value="2">card1</option>
                <option value="3">card1</option>
                <option value="4">card1</option>
                <option value="5">card1</option>
            </select>
        </>
    )
}

export default SelectCard