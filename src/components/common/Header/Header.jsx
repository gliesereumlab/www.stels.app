import styles from './header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Text, textTypes } from '../../shared/Text/Text';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ghIcon from "../assets/Github_white.svg";
import logo from "../assets/logo-stels.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

import { useTranslation } from 'react-i18next'
import Select from 'react-select'

const languages = [
    {
        value: "en",
        label: "EN"
    },
    {
        value: "kr",
        label: "KR"
    },
    {
        value: "cn",
        label: "CN"
    }
]

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages.find(l => l.value === localStorage.getItem('lang')) || languages[0]);

    const { pathname } = useLocation();
    const { t, i18n } = useTranslation()

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang) {
            i18n.changeLanguage(lang);
            console.log(languages.find(l => l.value === lang))
        }
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "scroll"
            };
        }

    }, [menuOpen])

    const changeLanguageHandler = (lang) => {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
    }

    return (
        <header className={classNames([styles.header])}>
            <nav className={classNames("container", styles.content)}>
                <div className={styles.part}>
                    <a href="/#intro" className={classNames([styles.logo, "hover"])}>
                        <img src={logo} alt="logo" />
                    </a>

                    <ul className={styles.links_list}>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#solutions">
                                <Text text={"Solutions"} type={textTypes.regularDark} />
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#ai_systems">
                                <Text text={"AI-systems"} type={textTypes.regularDark} />
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#ecosystem">
                                <Text text={"Ecosystem"} type={textTypes.regularDark} />
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#media">
                                <Text text={"Media"} type={textTypes.regularDark} />
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#faq">
                                <Text text={"FAQ"} type={textTypes.regularDark} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.part}>
                    <ul className={classNames([styles.links_list])}>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/market">
                                <Text text={"Features"} type={textTypes.regularDark} />
                            </Link>
                        </li>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/about">
                                <Text text={"About us "} type={textTypes.regularDark} />
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.links_list}>
                        <li>
                            <Link to="https://github.com/gliesereumlab/web.stels.app" target="_blank"
                                className={classNames([styles.social_link, "hover"])}>
                                <img src={ghIcon} alt="GitHub" />
                            </Link>
                        </li>
                        <li>
                            <Select
                                isSearchable={false}
                                defaultValue={selectedLang}
                                blurInputOnSelect
                                isClearable={false}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#999',
                                        primary: '#ff8200',
                                    },
                                })}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "transparent",
                                        color: "#fff",
                                        cursor: "pointer",
                                        boxShadow: "none",
                                        border: "none",
                                        height: window.innerWidth <= 980 ? 20 : 38,
                                        minHeight: window.innerWidth <= 980 ? "30px" : "38px"
                                    }),
                                    valueContainer: (baseStyles, state) => ({
                                        ...baseStyles,
                                        padding: window.innerWidth <= 980 ? "2px 6px" : "2px 8px",
                                        fontSize: window.innerWidth <= 980 ? "15px" : "normal",
                                        marginTop: window.innerWidth <= 980 ? "-7px" : "0",
                                        marginRight: window.innerWidth <= 980 ? "-12px" : "0"
                                    }),
                                    indicatorsContainer: (baseStyles, state) => ({
                                        ...baseStyles,
                                        padding: window.innerWidth <= 980 ? "2px" : "0",
                                        marginTop: window.innerWidth <= 980 ? "-6px" : "0"
                                    }),
                                    indicatorSeparator: (baseStyles, state) => ({
                                        ...baseStyles,
                                        marginTop: window.innerWidth <= 980 ? "10px" : "8px",
                                        marginBottom: window.innerWidth <= 980 ? "10px" : "8px",
                                        display: "none"
                                    }),
                                    option: (baseStyles, state) => ({
                                        ...baseStyles,
                                        cursor: "pointer",
                                        backgroundColor: "transparent",
                                        color: state.isSelected ? "#fff" : "#999",
                                    }),
                                    singleValue: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#999",
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: "rgba(30, 31, 32, 0.95)",
                                    }),

                                }}
                                onChange={(val) => changeLanguageHandler(val.value)}
                                options={languages} />
                        </li>
                        {/* <li>
                            <Link className={classNames([styles.social_link, "hover"])}>
                                <img src={tgIcon} alt="Telegram" />
                            </Link>
                        </li> */}
                        {
                            window.innerWidth <= 980 &&
                            <li>
                                <div onClick={() => setMenuOpen(!menuOpen)} className={classNames([styles.menu_btn])}>
                                    <img src={menuOpen ? closeIcon : menuIcon} alt="" />
                                </div>
                                <div className={classNames([styles.menu, menuOpen && styles.menu_open])}>
                                    <ul className={styles.menu_list}>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/market">
                                                <Text text={"Features"} type={textTypes.regular} />
                                            </Link>
                                        </li>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/about">
                                                <Text text={"About us "} type={textTypes.regular} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
