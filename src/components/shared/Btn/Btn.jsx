import styles from './btn.module.css';
import classNames from 'classnames';

export const Btn = ({text, action, type = "button", classes = []}) => {
    return (
        type === "button" ?
            <button onClick={action} className={classNames([styles.btn, "hover", ...classes])}>{text}</button>
            :
            <a href={action} target="_blank" className={classNames([styles.btn, "hover", ...classes])}
               rel="noreferrer">{text}</a>
    )
}
