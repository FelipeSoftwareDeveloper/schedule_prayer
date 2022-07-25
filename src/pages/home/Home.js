import styles from './Home.module.css'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Schedule Prayer</span></h1>
            <p>Let's get start manager yours prayers!</p>
           
        </section>
    )
}

export default Home