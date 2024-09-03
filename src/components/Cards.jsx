import React from 'react';
import { DotsIcon } from './Icons';

// ---------------- Card Datas ----------------
const cardData = [
    {
        title: 'Revenue',
        amount: '$390',
        label: 'New',
        labelClass: 'blue-label',
        labelColor: 'blue',
        chartSrc: '/images/ChartBlue.svg'
    },
    {
        title: 'Expenses',
        amount: '$680',
        label: 'Global',
        labelClass: 'red-label',
        labelColor: 'red',
        chartSrc: '/images/ChartRed.svg'
    },
    {
        title: 'Expenses',
        amount: '$680',
        label: 'Intuitive',
        labelClass: 'green-label',
        labelColor: 'green',
        chartSrc: '/images/ChartGreen.svg'
    }
];

export default function Cards() {
    return (
        <>
            {/* Cards */}

            <div className="cards d-flex flex-wrap justify-content-between gap20">
                {cardData.map((card, index) => (
                    <div key={index} className="card border-gry">
                        <div className="px16-py20 d-flex justify-content-between align-items-center">
                            <p className='textLMedium '>{card.title}</p>
                            <button className='dotsBtn'>
                                <DotsIcon />
                            </button>
                        </div>
                        <div className="py20 pb16 d-flex justify-content-between gap20">
                            <div className='d-flex flex-column gap12'>
                                <h1 className='headlineSDesktopSemibold '>{card.amount}</h1>
                                <div className='d-flex gap-sm-2'>
                                    <label className={`card-label ${card.labelClass}`} htmlFor="">
                                        <p className='textXSMedium'>{card.label}</p>
                                    </label>
                                    <p className='textSMedium text-gry'>monthly growth</p>
                                </div>
                            </div>
                            <div className="chart">
                                <img src={card.chartSrc} alt={`${card.title} chart`} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}