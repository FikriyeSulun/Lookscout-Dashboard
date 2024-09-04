import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo, SearchIcon, GeneralIcon, CalendarIcon, BarsIcon, General2Icon, MailIcon, RingIcon, UserIcon, StarIcon, BankIcon, UserNoteIcon, ArrowLeftIcon, SearchInputIcon, DotsIcon, CloseCrossIcon, SettingsIcon, ExitIcon, LogoMobile, LightModeIcon, DarkModeIcon, BurgerMenuIcon, TasksIcon, StatisticsIcon } from './Icons';

// ---------------- Icons ----------------
export const icons = {
    search: <SearchIcon />,
    general: <GeneralIcon />,
    calendar: <CalendarIcon />,
    bars: <BarsIcon />,
    settings: <SettingsIcon />,
    general2: <General2Icon />,
    messages: <MailIcon />,
    notifications: <RingIcon />,
    users: <UserIcon />,
    events: <StarIcon />,
    organization: <BankIcon />,
    teams: <UserNoteIcon />,
    tasks: <TasksIcon />,
    statistics: <StatisticsIcon />
};

// ---------------- Btn Datas ----------------
export const mainMenuButtons = ['search', 'general', 'calendar', 'bars'];
export const searchGeneral = [
    { id: 'general', label: 'General', icon: 'general2' },
    { id: 'messages', label: 'Messages', icon: 'messages' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications' },
    { id: 'users', label: 'Users', icon: 'users' },
    { id: 'events', label: 'Events & Logs', icon: 'events' },
    { id: 'organization', label: 'Organization', icon: 'organization' },
    { id: 'teams', label: 'Teams', icon: 'teams' }
];
export const calendar = [
    { id: 'events', label: 'Events & Logs', icon: 'events' },
    { id: 'tasks', label: 'Tasks', icon: 'tasks' },
];
export const bars = [
    { id: 'statistics', label: 'Statistics', icon: 'statistics' },
];

export default function SideMenu({ isMenuOpen, onToggleMenu }) {
    const [activeButton, setActiveButton] = useState('general');
    const [activeButtonSlider, setActiveButtonSlider] = useState('events');
    const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Is there mode selection on local storage?
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    });

    // ---------------- Mode Click (Dark-Light) ----------------
    const toggleMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Save selected mod to local storage
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };
    // ---------------- Start with selected mode ----------------
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    // ---------------- Main Menu Open/Close ----------------
    const toggleMenu = () => {
        onToggleMenu();
    };

    // ---------------- Main Menu Section Click ----------------
    const menuSectionClick = (buttonId) => {
        if (['search', 'general', 'calendar', 'bars'].includes(buttonId) && !isMenuOpen) {
            onToggleMenu();
        }
        setActiveButton(buttonId);
    };

    // ---------------- Burger Menu Click ----------------
    const burgerMenuClick = () => {
        setIsMenuOpenMobile(!isMenuOpenMobile);
    };

    // ---------------- Slider Menu Section Click ----------------
    const sliderMenuSectionClick = (buttonId) => {
        setActiveButtonSlider(buttonId);
    };

    // ---------------- Determine Buttons for Slider ----------------
    const getSliderButtons = () => {
        switch (activeButton) {
            case 'general':
                return searchGeneral;
            case 'calendar':
                return calendar;
            case 'bars':
                return bars;
            default:
                return [];
        }
    };

    // ---------------- Render Buttons ----------------
    const renderButtons = (buttons, clickHandler, activeState) =>
        buttons.map((button) => (
            <button
                key={button.id || button}
                className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${activeState === (button.id || button) ? 'active' : ''} ${(button.id || button) === 'search' ? 'color-fill' : ''}`}
                onClick={() => clickHandler(button.id || button)}
            >
                {icons[button.icon || button]}
            </button>
        ));

    return (
        <>

            {/* Side Menu */}

            <div className="sideMenu d-flex flex-row">
                <div className="mainMenu border-righ-gry d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column gap-sm-3">
                        <div>
                            <Link to={"/"} className='logo d-flex flex-column justify-content-center align-items-center'>
                                <Logo />
                            </Link>
                        </div>
                        <div className="menuSection d-flex flex-column align-items-center gap-sm-2">
                            {renderButtons(mainMenuButtons, menuSectionClick, activeButton)}
                        </div>
                    </div>

                    <div className="bottomSectionContainer">
                        <div className="menuSection d-flex flex-column align-items-center gap-sm-2">
                            <div className="toggle-buttons">
                                <button
                                    className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${isDarkMode ? 'd-none' : ''}`}
                                    onClick={toggleMode}
                                >
                                    <LightModeIcon />
                                </button>
                                <button
                                    className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${isDarkMode ? '' : 'd-none'}`}
                                    onClick={toggleMode}
                                >
                                    <DarkModeIcon />
                                </button>
                            </div>
                            <button className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${activeButton === 'settings' ? 'active' : ''}`}
                                onClick={() => menuSectionClick('settings')}>
                                <SettingsIcon />
                            </button>
                            <button className="btn menuSectionBtn color-fill d-flex justify-content-center align-items-center">
                                <ExitIcon />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sliderbar Menu */}

                <div className={`sliderbarMenu border-righ-gry d-flex flex-column justify-content-between ${isMenuOpen ? 'open' : 'closed'}`}>
                    <div className='d-flex flex-column gap32'>
                        <div className="sideMenuHeader d-flex align-items-center gap12">
                            <button className='btn sliderCloseBtn p-0 d-flex justify-content-center align-items-center' onClick={toggleMenu}>
                                <ArrowLeftIcon />
                            </button>
                            <p className='textLSemibold text-gry'>Lookscout Dashboard</p>
                        </div>

                        <div className="searchHere position-relative my28">
                            <input className='d-flex gap-sm-2' type="text" placeholder='Search here...' />
                            <SearchInputIcon />
                        </div>

                        <div className="sideMenuSections d-flex flex-column gap-sm-1">
                            {getSliderButtons().map(button => (
                                <button
                                    key={button.id}
                                    className={`sideMenuSection w-100 py28 d-flex align-items-center gap12 ${activeButtonSlider === button.id ? 'active' : ''} ${(button.id || button) === 'organization' ? 'color-fill' : ''}`}
                                    onClick={() => setActiveButtonSlider(button.id)}
                                >
                                    <div className="sideMenuSectionImg d-flex justify-content-center align-items-center">
                                        {icons[button.icon]}
                                    </div>
                                    <p className="textMSemibold text-gry">{button.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='d-flex flex-column gap32'>
                        <div className="my28 d-flex justify-content-between align-items-center ">
                            <div className='d-flex align-items-center gap12'>
                                <div className="profilePhoto">
                                    <img src="/images/ProfilePhoto.svg" alt="pp" />
                                </div>
                                <p className='profileName textMMedium'>Brian Ford</p></div>
                            <button className='dotsBtn'>
                                <DotsIcon />
                            </button>
                        </div>

                        <div className="my28">
                            <div className="widgetsNavContent position-relative p-3 d-flex flex-column gap-sm-3">
                                <div className="d-flex flex-column gap-sm-2">
                                    <div className="progressCircle">
                                        {/* <img src="/images/SideBar/ProgressCircle.svg" alt="progress circle" /> */}
                                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='circle' d="M58 29C58 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 58 12.9837 58 29ZM4.35 29C4.35 42.6138 15.3862 53.65 29 53.65C42.6138 53.65 53.65 42.6138 53.65 29C53.65 15.3862 42.6138 4.35 29 4.35C15.3862 4.35 4.35 15.3862 4.35 29Z" fill="#F5F8FE" />
                                            <path d="M29 2.175C29 0.97378 29.9753 -0.00848854 31.1731 0.0815039C36.9879 0.518362 42.555 2.70059 47.132 6.36752C52.2767 10.4892 55.8636 16.2406 57.3016 22.6738C58.7396 29.1071 57.9429 35.8384 55.0428 41.7582C52.1427 47.6781 47.3123 52.4332 41.3476 55.24C35.3829 58.0467 28.64 58.7376 22.2301 57.1987C15.8202 55.6598 10.1258 51.983 6.0855 46.7743C2.04519 41.5656 -0.0999674 35.1357 0.00357778 28.5445C0.0956999 22.6804 1.96284 16.9999 5.33273 12.2411C6.02692 11.2607 7.40543 11.1354 8.33099 11.9011C9.25654 12.6668 9.37722 14.0329 8.69607 15.0224C5.94948 19.0119 4.42963 23.7377 4.35304 28.6128C4.26503 34.2154 6.08841 39.6807 9.52267 44.1082C12.9569 48.5356 17.7971 51.6609 23.2456 52.9689C28.694 54.277 34.4255 53.6897 39.4955 51.304C44.5654 48.9182 48.6713 44.8764 51.1364 39.8445C53.6015 34.8126 54.2787 29.0911 53.0564 23.6228C51.834 18.1545 48.7852 13.2658 44.4122 9.76239C40.6071 6.7139 35.997 4.87263 31.1723 4.44587C29.9757 4.34003 29 3.37622 29 2.175Z" fill="#437EF7" />
                                            <path d="M19.201 34.1293C18.5147 34.1293 17.9053 34.0138 17.3729 33.783C16.8435 33.5522 16.428 33.2367 16.1264 32.8366C15.8279 32.4335 15.6802 31.9764 15.6832 31.4656C15.6802 31.0685 15.7663 30.7038 15.9418 30.3714C16.1172 30.0391 16.3542 29.7621 16.6527 29.5405C16.9543 29.3158 17.2898 29.1727 17.6591 29.1112V29.0465C17.1728 28.9388 16.7789 28.6911 16.4773 28.3033C16.1787 27.9124 16.031 27.4615 16.0341 26.9506C16.031 26.4644 16.1664 26.0304 16.4403 25.6488C16.7143 25.2672 17.0897 24.9671 17.5668 24.7486C18.0438 24.527 18.5885 24.4162 19.201 24.4162C19.8073 24.4162 20.3474 24.527 20.8214 24.7486C21.2984 24.9671 21.6739 25.2672 21.9478 25.6488C22.2248 26.0304 22.3633 26.4644 22.3633 26.9506C22.3633 27.4615 22.2109 27.9124 21.9062 28.3033C21.6046 28.6911 21.2153 28.9388 20.7383 29.0465V29.1112C21.1076 29.1727 21.44 29.3158 21.7354 29.5405C22.034 29.7621 22.271 30.0391 22.4464 30.3714C22.6249 30.7038 22.7141 31.0685 22.7141 31.4656C22.7141 31.9764 22.5633 32.4335 22.2617 32.8366C21.9601 33.2367 21.5446 33.5522 21.0153 33.783C20.489 34.0138 19.8842 34.1293 19.201 34.1293ZM19.201 32.8089C19.5549 32.8089 19.8627 32.7489 20.1243 32.6289C20.3859 32.5058 20.589 32.3335 20.7337 32.1119C20.8783 31.8903 20.9522 31.6348 20.9553 31.3455C20.9522 31.0439 20.8737 30.7777 20.7198 30.5469C20.569 30.313 20.3613 30.1299 20.0966 29.9975C19.835 29.8652 19.5365 29.799 19.201 29.799C18.8625 29.799 18.5608 29.8652 18.2962 29.9975C18.0315 30.1299 17.8222 30.313 17.6683 30.5469C17.5175 30.7777 17.4437 31.0439 17.4467 31.3455C17.4437 31.6348 17.5144 31.8903 17.6591 32.1119C17.8037 32.3304 18.0069 32.5012 18.2685 32.6243C18.5331 32.7474 18.844 32.8089 19.201 32.8089ZM19.201 28.5018C19.4903 28.5018 19.7457 28.4433 19.9673 28.3263C20.192 28.2094 20.369 28.0463 20.4982 27.837C20.6275 27.6277 20.6937 27.3861 20.6967 27.1122C20.6937 26.8414 20.629 26.6044 20.5028 26.4013C20.3767 26.1951 20.2012 26.0366 19.9766 25.9258C19.7519 25.8119 19.4934 25.755 19.201 25.755C18.9025 25.755 18.6393 25.8119 18.4116 25.9258C18.1869 26.0366 18.0115 26.1951 17.8853 26.4013C17.7622 26.6044 17.7022 26.8414 17.7053 27.1122C17.7022 27.3861 17.7637 27.6277 17.8899 27.837C18.0192 28.0432 18.1961 28.2063 18.4208 28.3263C18.6486 28.4433 18.9086 28.5018 19.201 28.5018ZM27.5942 34.1293C27.1417 34.1262 26.7001 34.0477 26.2692 33.8938C25.8384 33.7369 25.4506 33.483 25.1059 33.1321C24.7612 32.7782 24.4873 32.3088 24.2841 31.7241C24.081 31.1362 23.981 30.4084 23.9841 29.5405C23.9841 28.7311 24.0702 28.0094 24.2426 27.3754C24.4149 26.7414 24.6627 26.2058 24.9858 25.7688C25.309 25.3287 25.6983 24.9933 26.1538 24.7624C26.6124 24.5316 27.1248 24.4162 27.6911 24.4162C28.2851 24.4162 28.8114 24.5331 29.2699 24.767C29.7316 25.0009 30.104 25.321 30.3871 25.7273C30.6703 26.1304 30.8457 26.5859 30.9134 27.0938H29.2284C29.1422 26.7306 28.9653 26.4413 28.6975 26.2259C28.4328 26.0073 28.0974 25.8981 27.6911 25.8981C27.0356 25.8981 26.5308 26.1828 26.1769 26.7521C25.826 27.3215 25.6491 28.1032 25.646 29.0973H25.7106C25.8614 28.8265 26.0569 28.5941 26.2969 28.4002C26.537 28.2063 26.8078 28.0571 27.1094 27.9524C27.4141 27.8447 27.7357 27.7908 28.0743 27.7908C28.6282 27.7908 29.1253 27.9232 29.5654 28.1879C30.0086 28.4525 30.3594 28.8172 30.618 29.282C30.8765 29.7436 31.0042 30.273 31.0011 30.87C31.0042 31.4917 30.8626 32.0503 30.5764 32.5458C30.2902 33.0382 29.8916 33.426 29.3807 33.7092C28.8698 33.9923 28.2743 34.1323 27.5942 34.1293ZM27.5849 32.7443C27.9204 32.7443 28.2205 32.6628 28.4851 32.4996C28.7498 32.3365 28.9591 32.1165 29.113 31.8395C29.2669 31.5625 29.3423 31.2517 29.3392 30.907C29.3423 30.5684 29.2684 30.2622 29.1176 29.9883C28.9699 29.7144 28.7652 29.4974 28.5036 29.3374C28.242 29.1773 27.9435 29.0973 27.608 29.0973C27.3587 29.0973 27.1264 29.145 26.9109 29.2404C26.6955 29.3358 26.5077 29.4682 26.3477 29.6374C26.1877 29.8036 26.0615 29.9975 25.9692 30.2191C25.8799 30.4376 25.8337 30.6715 25.8307 30.9208C25.8337 31.2501 25.9107 31.5533 26.0615 31.8303C26.2123 32.1072 26.42 32.3288 26.6847 32.495C26.9494 32.6612 27.2495 32.7443 27.5849 32.7443ZM37.5165 32.2273V31.7287C37.5165 31.3625 37.5935 31.0254 37.7474 30.7177C37.9043 30.4099 38.1321 30.1622 38.4306 29.9744C38.7291 29.7867 39.0907 29.6928 39.5155 29.6928C39.9525 29.6928 40.3187 29.7867 40.6142 29.9744C40.9096 30.1591 41.1328 30.4053 41.2836 30.7131C41.4375 31.0208 41.5144 31.3594 41.5144 31.7287V32.2273C41.5144 32.5935 41.4375 32.9305 41.2836 33.2383C41.1297 33.546 40.9035 33.7938 40.605 33.9815C40.3095 34.1693 39.9463 34.2631 39.5155 34.2631C39.0846 34.2631 38.7199 34.1693 38.4214 33.9815C38.1228 33.7938 37.8966 33.546 37.7427 33.2383C37.5919 32.9305 37.5165 32.5935 37.5165 32.2273ZM38.7214 31.7287V32.2273C38.7214 32.4704 38.7799 32.6935 38.8969 32.8967C39.0138 33.0998 39.22 33.2013 39.5155 33.2013C39.814 33.2013 40.0187 33.1013 40.1295 32.9013C40.2433 32.6982 40.3003 32.4735 40.3003 32.2273V31.7287C40.3003 31.4825 40.2464 31.2578 40.1387 31.0547C40.031 30.8485 39.8232 30.7454 39.5155 30.7454C39.2262 30.7454 39.0215 30.8485 38.9015 31.0547C38.7814 31.2578 38.7214 31.4825 38.7214 31.7287ZM32.7108 26.8168V26.3182C32.7108 25.9489 32.7893 25.6103 32.9462 25.3026C33.1032 24.9948 33.3309 24.7486 33.6295 24.5639C33.928 24.3762 34.2896 24.2823 34.7143 24.2823C35.1483 24.2823 35.513 24.3762 35.8084 24.5639C36.107 24.7486 36.3316 24.9948 36.4824 25.3026C36.6332 25.6103 36.7086 25.9489 36.7086 26.3182V26.8168C36.7086 27.1861 36.6317 27.5246 36.4778 27.8324C36.327 28.1371 36.1023 28.3817 35.8038 28.5664C35.5053 28.7511 35.1421 28.8434 34.7143 28.8434C34.2804 28.8434 33.9141 28.7511 33.6156 28.5664C33.3202 28.3817 33.0955 28.1355 32.9416 27.8278C32.7877 27.52 32.7108 27.183 32.7108 26.8168ZM33.9249 26.3182V26.8168C33.9249 27.063 33.9818 27.2876 34.0957 27.4908C34.2127 27.6908 34.4189 27.7908 34.7143 27.7908C35.0098 27.7908 35.2129 27.6908 35.3237 27.4908C35.4376 27.2876 35.4945 27.063 35.4945 26.8168V26.3182C35.4945 26.072 35.4407 25.8473 35.3329 25.6442C35.2252 25.438 35.019 25.3349 34.7143 25.3349C34.422 25.3349 34.2173 25.438 34.1003 25.6442C33.9834 25.8504 33.9249 26.075 33.9249 26.3182ZM33.2371 34L39.7371 24.5455H40.8912L34.3912 34H33.2371Z" fill="#437EF7" />
                                        </svg>

                                    </div>
                                    <div className="d-flex flex-column gap2">
                                        <p className='textMSemibold'>Subscription Plan</p>
                                        <p className='textSRegular text-gry'>Your Subscription plan will expire soon please upgrade!</p>
                                    </div>
                                </div>
                                <button className='btn textBtnSemibold text-blue'>Upgrade</button>
                                <button className='btn crossBtn position-absolute'>
                                    <CloseCrossIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            {/* Top Menu */}

            <div className="topMenu d-flex flex-column">

                <div className="topMenuHead align-items-center justify-content-between p-3 border-bottom-gry">
                    <Link to="/" className="logo color-fill d-flex flex-column justify-content-center align-items-center">
                        <LogoMobile />
                    </Link>
                    <div className="d-flex align-items-center">
                        <div className="mobile-menu-modeBtn toggle-buttons">
                            <button className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${isDarkMode ? 'd-none' : ''}`} onClick={toggleMode}>
                                <LightModeIcon />
                            </button>
                            <button className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${isDarkMode ? '' : 'd-none'}`} onClick={toggleMode}>
                                <DarkModeIcon />
                            </button>
                        </div>
                        <button className="burgerBtn btn d-flex align-items-center justify-content-center p-0" onClick={burgerMenuClick}>
                            <BurgerMenuIcon />
                        </button>
                    </div>
                </div>

                {/* Sliderbar Menu Mobile */}

                <div className={`sliderbarMenuMobile border-bottom-gry flex-column justify-content-between ${isMenuOpenMobile ? 'open' : 'closed'}`}>
                    <div className="menuSection d-flex flex-row align-items-center gap-sm-2">
                        {renderButtons(mainMenuButtons, menuSectionClick, activeButton)}
                        <button className={`btn menuSectionBtn d-flex justify-content-center align-items-center ${activeButton === 'settings' ? 'active' : ''}`}
                            onClick={() => menuSectionClick('settings')}>
                            <SettingsIcon />
                        </button>
                    </div>

                    <div className={`sliderbarMenuMobileSections flex-column justify-content-between ${isMenuOpen ? 'open' : 'closed'}`}>
                        <div className="sideMenuSections d-flex flex-column gap-sm-1">
                            {getSliderButtons().map(button => (
                                <button
                                    key={button.id}
                                    className={`sideMenuSection w-100 py28 d-flex align-items-center gap12 ${activeButtonSlider === button.id ? 'active' : ''} ${(button.id || button) === 'organization' ? 'color-fill' : ''}`}
                                    onClick={() => setActiveButtonSlider(button.id)}
                                >
                                    <div className="sideMenuSectionImg d-flex justify-content-center align-items-center">
                                        {icons[button.icon]}
                                    </div>
                                    <p className="textMSemibold text-gry">{button.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



// Events Etkinlikler
// Reminders Hatırlatıcılar
// Tasks Görevler
// Meetings Toplantılar
// Deadlines Son teslim tarihleri
// Appointments Randevular

// Reports Raporlar
// Statistics İstatistikler
// Trends Trendler


{/* <button className={`sideMenuSection w-100 py28 d-flex align-items-center gap12 ${activeButtonSlider === 'events' ? 'active' : ''}} onClick={() => sliderMenuSectionClick('events')`}>
<div className="sideMenuSectionImg d-flex justify-content-center align-items-center">
    <StarIcon />
</div>
<p className='textMSemibold text-gry'>Events & Logs</p>
</button> */}