import { Container } from '@mui/material'
import { Slider } from './component/Slider'
import { Motions } from './component/Motions'
import './Home.scss'
import { useState } from 'react'

function Home() {

    const [sort, setSort] = useState(0);

    const categories = ['Editing', 'Camera Action, Angle', 'Sound, Beat', 'Experimental', 'Graphical', 'Elements', 'Car', 'Gun',
        'Editing', 'Camera Action, Angle', 'Sound, Beat', 'Experimental', 'Graphical', 'Elements', 'Car', 'Gun']

    return (
        <Container className='home-page-wrapper'>
            <Slider categories={categories} />
            <Motions sort = {sort} setSort={setSort} />
        </Container>
    )
}

export default Home;