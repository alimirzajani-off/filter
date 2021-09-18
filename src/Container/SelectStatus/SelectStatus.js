import React from 'react'

const SelectStatus = (props) => {

    const renderOption = () => {
        const liststateob = Object.keys(props.StateMap)
        return liststateob.map(key => {
            return (
                <>
                    <option value={`${props.StateMap[key].value}`}>{props.StateMap[key].value}</option>
                </>
            )
        })
    }

    return (
        <>
            <label htmlFor="status">وضعیت</label>
            <select id="status" onChange={e => props.handleStatus(e)}>
                <option value="" selected>همه</option>
                {renderOption()}
            </select>
        </>
    )
}

export default SelectStatus