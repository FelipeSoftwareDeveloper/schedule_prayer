import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../img/prayer_logo.png'

function NavBar()
{
    return (
       <nav className={styles.navbar}>
           <Container>
               <Link to="/">
                   <img src={logo} alt="Schedule Pray" width="30" heigth="30" />
               </Link>
               <ul className={styles.list}>
                   <li className={styles.item}>
                        <Link to="/">Home</Link>
                   </li>
               </ul>
            </Container>
       </nav>
    )
}

export default NavBar