import styles from '../styles/Home.module.css'

const Home =() => {
  return (
    <main className={styles.main}>
        <div className={styles.imageWrapper}>
        	<img src="images/hero.svg" alt="time tracker illustration image" className={styles.hideDesktop}/>
        	<img src="images/mobile-hero.svg" alt="time tracker illustration image" className={styles.hideMobile}/>
        </div>
        <div className={styles.heroCaption}>
        	<h3>Simple time tracking. <br /> Powerful reporting.</h3>
        	<p>Turn your team on to productivity with Gravity the time tracker.</p>
        	<button>Request early access</button>
        </div>
    </main>
  )
}

export default Home
