import React from 'react';
import { BreadcrumbChevronIcon, ChevronLeftIcon } from './Icons';

// ---------------- Breadcrumb ----------------
const BreadcrumbItem = ({ label, href, isActive }) => (
    <li className='breadcrumbItem d-flex gap-sm-1'>
        <a className={`textSMedium text-gry ${isActive ? 'breadcrumbOpen active' : ''}`} href={href}>{label}</a>
        {!isActive && (
            <div className="chevronRight breadcrumbChevron d-flex justify-content-center align-items-center">
                <BreadcrumbChevronIcon />
            </div>
        )}
    </li>
);

export default function Header() {

    // ---------------- Breadcrumb Datas ----------------
    const breadcrumbs = [
        { label: 'Home', href: '', isActive: false },
        { label: 'Settings', href: '', isActive: false },
        { label: 'General', href: '', isActive: true }
    ];

    return (
        <>
            <div className="header d-flex flex-column gap20">

                {/* Breadcrumb */}

                <ol className="breadcrumb d-flex gap-sm-1">
                    {breadcrumbs.map((item, index) => (
                        <BreadcrumbItem key={index} {...item} />
                    ))}
                </ol>

                {/* Mobile */}

                <button className='back align-items-center gap6 p-0'>
                    <div className="chevronLeft d-flex align-items-center justify-content-center">
                        <ChevronLeftIcon />
                    </div>
                    <p className='textBtnSemibold'>Back</p>
                </button>

                {/* Hey there */}
                
                <div className="d-flex flex-wrap justify-content-between gap16">
                    <div>
                        <h1 className='headlineSDesktopSemibold'>Hey there, Brian Ford!</h1>
                        <p className='textLRegular text-gry'>Welcome back, we're happy to have you here!</p>
                    </div>
                    <div className="d-flex gap12">
                        <button className='btn white-btn textBtnSemibold'>Edit section</button>
                        <button className='btn blue-btn textBtnSemibold'>Add item</button>
                    </div>
                </div>

            </div>
        </>
    )
}