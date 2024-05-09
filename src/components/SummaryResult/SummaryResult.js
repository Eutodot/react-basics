import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./SummaryResult.module.css"

const SummaryResult = () => {
  return (
    <div className={styles.resultContainer}>
      <SectionTitle underline={true}>
        <span>Your Result</span>
      </SectionTitle>

      <div className={styles.playerScoreBox}>
          <span className={styles.playerScore}>76</span>
          <span className={styles.maxScore}>of 100</span>
      </div>

      <div className={styles.description}>
          <span className={styles.shout}>Great</span>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default SummaryResult