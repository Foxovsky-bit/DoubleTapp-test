import styles from './Header.module.scss'
import logo from '../../assets/svg/logo.svg'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <img  className={styles.logo} src={logo} alt=''/>
            <div className={styles.title}>STUDENTS <span className={styles.author}>
                by <span className={styles.username}>Foxovsky-bit</span>
                </span>
            </div>
        </div>
    )
}