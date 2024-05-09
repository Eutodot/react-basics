import styles from './SectionTitle.module.css'
const SectionTitle = (props) => {
    console.log(props.underline)
  return (
    <h2 className={styles.header} style={{textDecoration: props.underline ? 'underline' : 'none'}}>{props.children}</h2>
  )
}

export default SectionTitle