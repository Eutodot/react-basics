import SummaryResult from "../../components/SummaryResult/SummaryResult"
import SummaryStats from "../../components/SummaryStats/SummaryStats"
import styles from "./SummaryPage.module.css"

const SummaryPage = () => {
  return (
    <div className={styles.summaryWrapper} >

        <SummaryResult />

        <SummaryStats />
    </div>
  )
}

export default SummaryPage