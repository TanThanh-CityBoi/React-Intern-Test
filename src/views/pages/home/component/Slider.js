import { ButtonCustom } from '../../../Component/ButtonCustom'
import './Slider.scss'

function Slider(props) {

    return (
        <div className="slider-wrapper">
            {props.categories.map((val, idx) => (
                <div key={idx} className='slider-item'>
                    <ButtonCustom type='black' title={val} />
                </div>
            ))}
        </div>
    )
}

export { Slider }