import SectionTitle from "../SectionTitle/SectionTitle"
import SpecificScoreBox from "../SpecificScoreBox/SpecificScoreBox"
import styles from "./SummaryStats.module.css"

const SummaryStats = () => {
  return (
    <div className={styles.summaryContainer}>
            <SectionTitle underline={false}>Summary</SectionTitle>

            <div className={styles.specificScoreBoxContainer}>

                <SpecificScoreBox 
                    icon='https://raw.githubusercontent.com/frontendmentorio/results-summary-component/c9e7c41aec1a9c12c490b6801d10aa6bcdbd045c/assets/images/icon-reaction.svg' 
                    title='Reaction' 
                    score='80' 
                    maxScore='100'
                />

                <SpecificScoreBox 
                    icon='https://raw.githubusercontent.com/frontendmentorio/results-summary-component/c9e7c41aec1a9c12c490b6801d10aa6bcdbd045c/assets/images/icon-memory.svg' 
                    title='Memory' 
                    score='92' 
                    maxScore='100'
                />

                <SpecificScoreBox 
                    icon='https://raw.githubusercontent.com/frontendmentorio/results-summary-component/c9e7c41aec1a9c12c490b6801d10aa6bcdbd045c/assets/images/icon-verbal.svg' 
                    title='Verbal' 
                    score='61' 
                    maxScore='100'
                />

                <SpecificScoreBox 
                    icon='https://raw.githubusercontent.com/frontendmentorio/results-summary-component/c9e7c41aec1a9c12c490b6801d10aa6bcdbd045c/assets/images/icon-visual.svg' 
                    title='Visual' 
                    score='61' 
                    maxScore='100'
                />

            </div>
            <button className={styles.continueButton}>Continue</button>
        </div>
  )
}

export default SummaryStats