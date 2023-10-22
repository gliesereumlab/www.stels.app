import styles from "./notFound.module.css";
import {Text, textTypes} from "../../shared/Text/Text";

export const NotFound = () => {
    return (
        <div className={styles.container}>
            <Text text={"404"} type={textTypes.PageTitle}/>
        </div>
    )
}
