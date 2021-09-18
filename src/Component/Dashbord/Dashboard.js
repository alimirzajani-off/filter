import React, { useState, useEffect, useRef } from 'react'
import DashboardSec1 from './sec1/Dashboard-sec1'
import moment from 'jalali-moment'
import server from '../../server'
import DashboardSec2 from './sec2/Dashboard-sec2'
import './Dashboard.css'

const Dashboard = () => {

    const [Data, setData] = useState()
    const [Card, setCard] = useState('')
    const [PriceFrom, setPriceFrom] = useState('')
    const [PriceTo, setPriceTo] = useState('')
    const [date, setDate] = useState('')
    const [SellNum, setSellNum] = useState('')
    const [StoreName, setStoreName] = useState('')
    const [Suggestion, setSuggestion] = useState('')
    const [Status, setStatus] = useState('')

    useEffect(() => {
        funcName();
    }, [])

    var headers = new Headers();
    headers.append('Accept', 'application/json, */*');
    headers.append('Content-Type', 'application/grpc');
    headers.append('Authorization', 'Bearer accesstoken11_12');

    async function funcName() {
        const url = 'https://api.ghesti.cards/purchasecustomer'
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        })
        var data = await response.json()
        setData(data)
    }

    const handleCard = (e) => {
        setCard(e.target.value)
    }

    const handlePriceFrom = (e) => {
        setPriceFrom(e.target.value)
    }

    const handlePriceTo = (e) => {
        setPriceTo(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleSellNum = (e) => {
        setSellNum(e.target.value)
    }

    const handleStoreName = (e) => {
        setStoreName(e.target.value)
    }

    const handleSuggestion = (e) => {
        setSuggestion(e.target.value)
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleClear = () => {
        setCard('')
        setPriceFrom('')
        setPriceTo('')
        setDate('')
        setSellNum('')
        setStoreName('')
        setSuggestion('')
        setStatus('')
    }

    const rendermain = () => {
        if (Data) {
            return (<div className="dashboard container-fluid">
                <DashboardSec1 handleCard={handleCard} handlePriceFrom={handlePriceFrom} handlePriceTo={handlePriceTo} handleDate={handleDate} handleSellNum={handleSellNum} handleStoreName={handleStoreName} handleSuggestion={handleSuggestion} handleStatus={handleStatus} handleClear={handleClear} priceFrom={PriceFrom} priceTo={PriceTo} Card={Card} date={date} SellNum={SellNum} StoreName={StoreName} Suggestion={Suggestion} Status={Status} Data={Data} renderData={renderData} />
                <DashboardSec2 Data={Data} />
            </div>)
        } else {
            return (<div>loading...</div>)
        }

    }

    const renderData = () => {
        // if (PriceFrom) {
            const trueData=Data.list.filter(item => {
                if (item.price>=PriceFrom) {
                    console.log(moment(`${item.date}`, 'YYYY/MM/DD').locale('fa').format('jYYYY/jMM/jDD'));
                }
            });
        // } else {
        //     console.log("bye");
        // }

    }

    return (
        <>
            {rendermain()}
        </>
    )

}

export default Dashboard