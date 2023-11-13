import styles from './Text.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const textTypes = {
    PageTitle: "title_page",
    BlockTitle: "title_block",
    TextTitle: "title_text",
    regular: "regular",
    regularDark: "regular_dark",
    medium: "medium",
}

export const Text = ({ text, data, type = textTypes.regular, classes = [] }) => {
    const { t, i18n } = useTranslation();

    const renderData = (data) => {
        return <>
            {
                data.map(block => {
                    return <span key={block.text} className={block.accent && styles.accent}>{block.text}</span>
                })
            }
        </>
    }

    const getText = () => {
        let res
        try {
            res = renderData(JSON.parse(t(data)))
        } catch {
            if (text) {
                res = <span>{t(text)}</span>
            } else {
                res = <span>{t(data)}</span>
            }
        }
        return res
    }
    return (
        <div className={classNames([styles.text, styles[type], ...classes])}>
            {
                getText()
            }
        </div>
    )
}
