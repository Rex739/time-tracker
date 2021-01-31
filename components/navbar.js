import styles from '../styles/navbarFooter.module.css'
import Link from 'next/link'

const NavBar = () =>{
	return(
		<header className={styles.navbarWrapper}>
			<nav className={styles.topNav, styles.desktopNav}>
				<ul>
					<li><Link href="/"><a><img src="images/desktop-logo.png" alt=""/></a></Link></li>
					<li><Link href="/features"><a>Features</a></Link></li>
					<li><Link href="/pricing"><a>Pricing</a></Link></li>
					<li><Link href="/why"><a>Why Gravity</a></Link></li>
					<li><Link href="/sign-in"><a>Sign In</a></Link></li>
				</ul>
			</nav>
			<nav className={styles.topNav, styles.mobileNav}>
				<ul>
					<li><Link href="/"><a><img src="images/mobile-logo.png" alt=""/></a></Link></li>
					<li>
						<button className="">
							<Link href="/">
								<a><img src="images/menu.svg" alt="menu"/>Menu</a>
							</Link>
						</button>
					</li>
				</ul>
			</nav>	
		</header>
	)
}

export default NavBar