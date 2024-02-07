import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { Text, textTypes } from '../../shared/Text/Text';
import classNames from 'classnames';

// import tgIcon from "../assets/Telegram_white.svg";
import ghIcon from "../assets/Github_white.svg";
import blur from "./assets/blur-3.svg";

export const Footer = () => {
    return (
        <footer className={classNames([styles.footer])}>
            <img src={blur} alt="blur" className={styles.blur} />
            <div className={classNames("container", styles.content)}>
                <div className={styles.part}>
                    <Text text={"Gliesereum Lab © 2023"} type={textTypes.regularDark} />
                </div>
                <div className={styles.part}>
                    <ul className={styles.links_list}>
                        <li>
                            <Link to="https://github.com/gliesereumlab/web.stels.app" target="_blank"
                                className={classNames([styles.social_link, "hover"])}>
                                <img src={ghIcon} alt="GitHub" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
