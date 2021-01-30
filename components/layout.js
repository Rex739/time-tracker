// header and footer components
import NavBar from './navbar'
import Footer from './footer'
// layout style file
import styles from '../styles/layout.module.css';


const Layout = ({ children }) => {
	return(
		<div className={styles.main}>
			<section className={styles.wrapper}>
				<NavBar />
					{children}
				<Footer />
			</section>
		</div>
	)
}

export default Layout