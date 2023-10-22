import {useState} from 'react';
import classNames from 'classnames';

import styles from './faqItem.module.css';
import {Text, textTypes} from '../../../shared/Text/Text';
import arrowIcon from "./assets/arrow_back_ios_new.svg";

export const FaqItem = ({title, text, classes = []}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classNames([styles.faq_item, ...classes, open && styles.open])}>
            <div onClick={() => setOpen(!open)} className={classNames(["hover", styles.title_block])}>
                <Text text={title} type={textTypes.medium} classes={[styles.title]}/>
                <img src={arrowIcon} alt="arrow"/>
            </div>
            <div className={classNames([styles.text_block])}>
                <Text text={text}
                      type={textTypes.regularDark}
                />
            </div>
        </div>
    )
}
