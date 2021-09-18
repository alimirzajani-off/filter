import React, { useState, useRef, useEffect } from 'react'
import SelectCard from '../../../Container/SelectCard/SelectCard'
import SelectStatus from '../../../Container/SelectStatus/SelectStatus'
import SelectSuggestion from '../../../Container/SelectSuggestion/SelectSuggestion'
import './Dashboard-sec1.css'



const DashboardSec1 = (props) => {

    const StateMap = props.Data.liststate
    const SuggesMap=props.Data.mrchtype

    return (
        <div className="d-sec1 d-flex">
            <div className="input-groups row">
                <div className="input-groups-first-main col-12 d-flex">
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <SelectCard handleCard={props.handleCard} Card={props.Card}/>
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <label htmlFor="price-from">از مبلغ</label>
                        <input id="price-from" type="text" placeholder={!props.priceFrom ? "از مبلغ" : null} value={props.priceFrom} onChange={e => props.handlePriceFrom(e)} />
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <label htmlFor="price-to">تا مبلغ</label>
                        <input id="price-to" type="text" placeholder={!props.priceTo ? "تا مبلغ" : null} value={props.priceTo} onChange={e => props.handlePriceTo(e)} />
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <label htmlFor="select-date">از تاریخ تا تاریخ</label>
                        <input id="select-date" type="date" placeholder={!props.date ? "تا مبلغ" : null} value={props.date} onChange={e => props.handleDate(e)} />
                    </div>
                </div>
                <div className="input-groups-second-main col-12 d-flex">
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <label htmlFor="sell-num">شماره خرید</label>
                        <input id="sell-num" type="text" placeholder={!props.SellNum ? "شماره خرید" : null} value={props.SellNum} onChange={e => props.handleSellNum(e)} />
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <label htmlFor="store-name">نام فروشگاه</label>
                        <input id="store-name" type="text" placeholder={!props.StoreName ? "نام فروشگاه" : null} value={props.StoreName} onChange={e => props.handleStoreName(e)} />
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <SelectSuggestion handleSuggestion={props.handleSuggestion} SuggesMap={SuggesMap}/>
                    </div>
                    <div className="input-group col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <SelectStatus handleStatus={props.handleStatus} StateMap={StateMap}/>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <button className="btn btn-success ml-3" onClick={()=>props.renderData()}>اعمال فیلتر</button>
                <button className="btn btn-primary" onClick={() => props.handleClear()}>پاکسازی</button>
            </div>
        </div>
    )
}

export default DashboardSec1