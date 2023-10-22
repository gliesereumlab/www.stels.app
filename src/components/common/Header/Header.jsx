import styles from './header.module.css';
import {Link, useLocation} from 'react-router-dom';
import {Text, textTypes} from '../../shared/Text/Text';
import classNames from 'classnames';
import {useEffect, useState} from 'react';
import ghIcon from "../assets/Github_white.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const {pathname} = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header className={classNames([styles.header])}>
            <nav className={classNames("container", styles.content)}>
                <div className={styles.part}>
                    <Link to="/" className={classNames([styles.logo, "hover"])}>
                        <img src={logo} alt="logo"/>
                    </Link>

                    <ul className={styles.links_list}>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#solutions">
                                <Text data={[{text: "Solutions"}]} type={textTypes.regularDark}/>
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#ai_systems">
                                <Text data={[{text: "AI-systems"}]} type={textTypes.regularDark}/>
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#ecosystem">
                                <Text data={[{text: "Ecosystem"}]} type={textTypes.regularDark}/>
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#media">
                                <Text data={[{text: "Media"}]} type={textTypes.regularDark}/>
                            </a>
                        </li>
                        <li className={classNames([styles.nav_link_y, "hover"])}>
                            <a href="/#faq">
                                <Text data={[{text: "FAQ"}]} type={textTypes.regularDark}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.part}>
                    <ul className={classNames([styles.links_list])}>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/market">
                                <Text data={[{text: "Features"}]} type={textTypes.regularDark}/>
                            </Link>
                        </li>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/about">
                                <Text data={[{text: "About us"}]} type={textTypes.regularDark}/>
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.links_list}>
                        <li>
                            <Link to="https://github.com/gliesereumlab/web.stels.app" target="_blank"
                                  className={classNames([styles.social_link, "hover"])}>
                                <img src={ghIcon} alt="GitHub"/>
                            </Link>
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
                                    <img src={menuOpen ? closeIcon : menuIcon} alt=""/>
                                </div>
                                <div className={classNames([styles.menu, menuOpen && styles.menu_open])}>
                                    <ul className={styles.menu_list}>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/market">
                                                <Text data={[{text: "Features"}]} type={textTypes.regular}/>
                                            </Link>
                                        </li>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/about">
                                                <Text data={[{text: "About us"}]} type={textTypes.regular}/>
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
