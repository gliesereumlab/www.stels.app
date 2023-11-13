import styles from './btn.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const Btn = ({ text, action, type = "button", classes = [] }) => {
    const { t, i18n } = useTranslation();
    return (
        type === "button" ?
            <button onClick={action} className={classNames([styles.btn, "hover", ...classes])}>{t(text)}</button>
            :
            <a href={action} target="_blank" className={classNames([styles.btn, "hover", ...classes])}
                rel="noreferrer">{t(text)}</a>
    )
}
