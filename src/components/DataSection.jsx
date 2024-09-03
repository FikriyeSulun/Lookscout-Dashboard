import React from 'react';
import { ChevronRightBlackIcon, DotsIcon, DownloadIcon, ExternalLinkIcon, HexagonIcon, } from './Icons';

// ---------------- Card Main Rows ----------------
const CardRow = ({ imgSrc, name, description, statusLabel, statusColor, hasChevron, gapClass = 'gap10', imgClass = 'avatarPhoto', hasDownload, hasHexagon }) => (
    <div className="border-bottom-gry py-3 d-flex justify-content-between">
        <div className={`d-flex align-items-center ${gapClass}`}>
            <div className={`${imgClass}`}>
                <img src={imgSrc} alt={name} />
            </div>
            <div className="d-flex flex-column">
                <p className='profileName textMMedium'>{name}</p>
                <p className='profileName textSMedium text-gry'>{description}</p>
            </div>
        </div>
        <div className="d-flex gap10 align-items-center">
            {statusLabel && (
                <label className={`card-label ${statusColor}-label`}>
                    <p className='textXSMedium'>{statusLabel}</p>
                </label>
            )}
            {hasChevron && (
                <button className='chevronRight p-0 d-flex justify-content-center align-items-center'>
                    <ChevronRightBlackIcon />
                </button>
            )}
            {hasDownload && (
                <button className='btn downloadBtn color-fill p-0 d-flex justify-content-center align-items-center'>
                    <DownloadIcon />
                </button>
            )}
            {hasHexagon && (
                <button className='btn hexagonBtn p-0 d-flex justify-content-center align-items-center'>
                    <HexagonIcon />
                </button>
            )}
        </div>
    </div>
);

export default function DataSection() {
    return (
        <>
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <p className='textLSemibold '>Brian Ford</p>
                </div>
                <div className="d-flex gap12">
                    <button className='btn white-btn textBtnSemibold'>Edit section</button>
                    <button className='btn blue-btn textBtnSemibold'>Add item</button>
                </div>
            </div>
            <div className="dataCards d-flex flex-wrap justify-content-between gap24">
                {/* Data Cards */}

                <div className="dataCard border-gry">

                    <div className="px16-py20 border-bottom-gry d-flex justify-content-between align-items-center gap-sm-3">
                        <p className='textLMedium '>Lookscout Team</p>
                        <button className='dotsBtn'>
                            <DotsIcon />
                        </button>
                    </div>

                    <div className="py20">
                        <CardRow imgSrc="/images/DataSection/Avatar1.svg" name="Latoya Langosh" description="Dynamic" statusLabel="Online" statusColor="blue" hasChevron />
                        <CardRow imgSrc="/images/DataSection/Avatar2.svg" name="Abel Mohr" description="Dynamic" statusLabel="Offline" statusColor="black" hasChevron />
                        <CardRow imgSrc="/images/DataSection/Avatar3.svg" name="Shari Stamm" description="Chief" statusLabel="Offline" statusColor="black" hasChevron />
                        <CardRow imgSrc="/images/DataSection/Avatar4.svg" name="Earl Jhonson" description="National" statusLabel="Online" statusColor="blue" hasChevron />
                        <CardRow imgSrc="/images/DataSection/Avatar5.svg" name="Erick Champlin" description="Central" statusLabel="Online" statusColor="blue" hasChevron />
                    </div>

                    <div className="px16-py20 border-top-gry d-flex gap12">
                        <button className='btn dataCardBtn blue-btn textBtnSemibold w-100'>View all</button>
                    </div>
                </div>
                <div className="dataCard border-gry">

                    <div className="px16-py20 border-bottom-gry d-flex justify-content-between align-items-center gap-sm-3">
                        <p className='textLMedium '>Updated Materials</p>
                        <button className='dotsBtn'>
                            <DotsIcon />
                        </button>
                    </div>

                    <div className="py20">
                        <CardRow imgSrc="/images/DataSection/FilePDF.svg" name="Lookscout Resources" description="80.69 mb" gapClass="gap-sm-3" imgClass='fileIcon' hasDownload />
                        <CardRow imgSrc="/images/DataSection/FileMP4.svg" name="Lookscout Updates" description="320.32 mb" gapClass="gap-sm-3" imgClass='fileIcon' hasDownload />
                        <CardRow imgSrc="/images/DataSection/FilePDF.svg" name="Lookscout Guides" description="320.32 mb" gapClass="gap-sm-3" imgClass='fileIcon' hasHexagon />
                        <CardRow imgSrc="/images/DataSection/FileZIP.svg" name="Lookscout Design System" description="320.32 mb" gapClass="gap-sm-3" imgClass='fileIcon' hasHexagon />
                        <CardRow imgSrc="/images/DataSection/FileMP4.svg" name="Lookscout Guides" description="125.05 mb" gapClass="gap-sm-3" imgClass='fileIcon' hasDownload />
                    </div>

                    <div className="px16-py20 border-top-gry d-flex gap12">
                        <button className='btn dataCardBtn white-btn textBtnSemibold w-100'>Cancel</button>
                        <button className='btn dataCardBtn blue-btn textBtnSemibold w-100'>Upload</button>
                    </div>
                </div>
                <div className="dataCard border-gry">

                    <div className="px16-py20 border-bottom-gry d-flex justify-content-between gap-sm-3">
                        <p className='textLMedium '>Recent Transactions</p>
                    </div>

                    <div className="py20">
                        <CardRow imgSrc="/images/DataSection/Pinterest.svg" name="Pinterest Team" description="Jan 23 2022" statusLabel="Done" statusColor="green" />
                        <CardRow imgSrc="/images/DataSection/Sketch.svg" name="Sketch Team" description="Jun 15 2022" statusLabel="Failed" statusColor="red" />
                        <CardRow imgSrc="/images/DataSection/Gitlab.svg" name="Gitlab Team" description="Jan 15 2022" statusLabel="Done" statusColor="green" />
                        <CardRow imgSrc="/images/DataSection/Clickup.svg" name="Clickup" description="Jan 15 2022" statusLabel="Failed" statusColor="red" />
                        <CardRow imgSrc="/images/DataSection/Deliverooo.svg" name="Deliverooo" description="Jan 15 2022" statusLabel="Done" statusColor="green" />
                    </div>

                    <div className="px16-py20 border-top-gry d-flex gap12">
                        <button className='btn p-0 textBtnSemibold text-blue d-flex align-items-center gap6'>Open
                            <ExternalLinkIcon />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}