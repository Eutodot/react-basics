import styles from "./SpecificScoreBox.module.css"

const SpecificScoreBox = (props) => {
    return (
        <div className={styles.specificScoreBox}>
            <h3 className={styles.specificScoreTitleWrapper}>
                <img className={styles.specificScoreIcon} src={props.icon} alt=''/>
                <span className={styles.specificScoreTitle}>{props.title}</span>
            </h3>
            <div className={styles.specificScoreWrapper}>
                <span className={styles.specificScore}>{props.score}</span>
                <span className={styles.specificMaxScore}> / {props.maxScore}</span>
            </div>
        </div>
    )
}

export default SpecificScoreBox