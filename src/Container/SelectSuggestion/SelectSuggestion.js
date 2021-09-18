import React from 'react'

const SelectSuggestion = (props) => {
    
    const renderOption = () => {
        const listsuggesob = Object.keys(props.SuggesMap)
        return listsuggesob.map(key => {
            return (
                <>
                    <option value={`${props.SuggesMap[key].value}`}>{props.SuggesMap[key].value}</option>
                </>
            )
        })
    }

    return (
        <>
            <label htmlFor="suggestion">پیشنهاد ها</label>
            <select id="suggestion" onChange={e=>props.handleSuggestion(e)}>
                <option value="" selected>همه</option>
                {renderOption()}
            </select>
        </>
    )
}

export default SelectSuggestion