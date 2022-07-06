import { Container } from '@mui/material'
import { NavLink } from 'react-router-dom';
import './TheFooter.scss'

function TheFooter() {
    return (
        <Container className='footer-wrapper'>
            <div className='contact-box'>
                <h1 htmlFor='emmail-contact'>Contact</h1>
                <p id='emmail-contact'>motiontrend@test.com</p>
            </div>
            <div className='services-box'>
                <NavLink to='/'>Introduction</NavLink>
                <NavLink to='/'>Terms of Service</NavLink>
                <select>
                    <option>Language</option>
                    <option>VIETNAMESE</option>
                    <option>ENGLISH</option>
                    <option>KOREA</option>
                </select>
                <NavLink to='/'>Customer Service</NavLink>
            </div>
        </Container>
    )
}

export default TheFooter;