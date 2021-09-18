import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import moment from 'jalali-moment'
import './Dashboard-sec2.css'
import server from '../../../server'


const DashboardSec2 = (props) => {
    const [Data, setData] = useState([])
    // const test = () => {
    //     const el = document.getElementById("khar")
    //     const ele = document.getElementById("khartar")
    //     const elem = document.getElementById("khartarin")
    //     const bazi = document.getElementById("baz")
    //     // el.classList.add("khariat")
    //     if (el.style.display === "none" && ele.style.display === "block" && elem.style.display === "block") {
    //         el.style.display = "block";
    //         ele.style.display = "none"
    //         elem.style.display = "none"
    //     } else {
    //         el.style.display = "none";
    //         ele.style.display = "block"
    //         elem.style.display = "block"
    //     }
    //     bazi.classList.toggle("bazer")
    // }

    const rendermain = () => {
      
        return props.Data.list.map(item => {
            var i=1;
            return (
                <div class="accordion-item" id="baz">
                    <div class="accordion-header d-flex justify-content-evenly" id={`heading${item.id}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                        <div className="acc-item pr-5"><p>{item.id}</p></div>
                        <div className="acc-item"><i class="far fa-calendar"></i>{moment(`${item.date}`, 'YYYY/MM/DD').locale('fa').format('jYYYY/jMM/jDD')}</div>
                        <div className="acc-item"><i class="fas fa-money-bill" />{`${item.price} ریال`}</div>
                        <div className="acc-item"><input type="text" placeholder={!item.title?"شرح جدید":null} value={item.title} /><i class="fas fa-pencil-alt"></i></div>
                        <div className="acc-item cart-title pr-5">{item.carttitle}</div>
                        <div className="acc-item">{item.signtext}</div>
                    </div>
                    <div id={`collapse${item.id}`} class="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className="acc-body-title">
                                <div className="text-right pt-3">
                                    {`جزئیات:${item.merchantname}`}
                                </div>
                                <div className="d-flex justify-content-evenly pt-4">
                                    <p>{`شماره کارت:${item.cartnumber}`}</p>
                                    <p>{`پرداخت نقدی:${item.cashamount} ریال`}</p>
                                    <p>{`مانده تسویه نشده:${item.payeableamount} ریال`}</p>
                                    <p>{`جمع کل بدهی:${item.remaininstallment} ریال`}</p>
                                </div>
                            </div>
                            {item.listpurchinst.map(item => {
                                return (
                                    <div className="acc-body-body d-flex">
                                        <div className="acc-item pr-5">{i++}</div>
                                        <div className="acc-item"><i class="far fa-calendar"></i>{moment(`${item.date}`, 'YYYY/MM/DD').locale('fa').format('jYYYY/jMM/jDD')}</div>
                                        <div className="acc-item"><i class="fas fa-money-bill" />{`${item.price} ریال`}</div>
                                        <div className="acc-item" style={{ color: "#47C954" }}><i class="fas fa-circle" style={{ color: "#47C954",paddingLeft:'.5rem' }}></i>{item.statetext}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })

    }

    return (
        <div className="d-sec2 d-flex">
            <div class="accordion " id="accordionExample">
                {rendermain()}
            </div>
        </div>
    )
}

export default DashboardSec2