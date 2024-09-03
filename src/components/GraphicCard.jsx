import React from 'react';
import { DotsIcon, ExternalLinkIcon } from './Icons';
import ApexChart from './ApexChart';

export default function GraphicCard() {
    return (
        <>

            {/* Graphic Card */}

            <div className="graphicCard w-100 border-gry">
                <div className="px16-py20 border-bottom-gry d-flex justify-content-between align-items-center gap-sm-3">
                    <p className='textLMedium'>Advanced Graphic</p>
                    <button className='dotsBtn'>
                        <DotsIcon />
                    </button>
                </div>

                <div className="graphic-main d-flex flex-column gap16">
                    <div className='graphic-total'>
                        <p className='text-gry textSMedium'>Total Transaction Revenue</p>
                        <h2 className='headlineXSDesktopSemibold'>$135,450</h2>
                    </div>

                    <div className='graphic'>
                        <ApexChart />
                    </div>
                </div>

                <div className="px16-py20 border-top-gry d-flex justify-content-between gap12">
                    <p className='textSSemibold text-gry'>Data graph</p>
                    <button className='btn p-0 textBtnSemibold text-blue d-flex align-items-center gap6'>
                        Open
                        <ExternalLinkIcon />
                    </button>
                </div>
            </div>

        </>
    )
}