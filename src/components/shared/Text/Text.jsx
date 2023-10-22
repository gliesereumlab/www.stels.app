import styles from './Text.module.css';
import classNames from 'classnames';

export const textTypes = {
    PageTitle: "title_page",
    BlockTitle: "title_block",
    TextTitle: "title_text",
    regular: "regular",
    regularDark: "regular_dark",
    medium: "medium",
}

export const Text = ({text, data, type = textTypes.regular, classes = []}) => {
    return (
        <div className={classNames([styles.text, styles[type], ...classes])}>
            {
                text
                    ?
                    <span>{text}</span>
                    :
                    data.map(block => {
                        return <span key={block.text} className={block.accent && styles.accent}>{block.text}</span>
                    })
            }
        </div>
    )
}
