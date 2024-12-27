import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [quoteData, changeQuoteData] = useState(
        {
            "quotes": [],
            "total": 1454,
            "skip": 0,
            "limit": 30
        }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuoteData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Quotes</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {quoteData.quotes.map(
                                    (value,index)=>{
                                        return  <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.author}</td>
                                        <td>{value.quote}</td>
                                      </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
