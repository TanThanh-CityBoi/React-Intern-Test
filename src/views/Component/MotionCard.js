import { BsEyeFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import './MotionCard.scss'

function MotionCard(props) {
    return (
        <div className="motion-card">
            <div className="motion-card__thumnail">
                <img src={props.motion.thumnail} style={{ width: "100%" }}></img>
            </div>
            <div className="motion-card__body">
                <div className="motion-card__title">
                    <img src={props.motion.avt}></img>
                    <p>{props.motion.username}</p>
                </div>
                <div className="motion-card__likes-views">
                    <div>
                        <p>
                            <AiFillHeart />
                            {props.motion.likes}
                        </p>
                    </div>
                    <div>
                        <p>
                            <BsEyeFill />
                            {props.motion.views}
                        </p>
                    </div>
                </div>
            </div>
            <div className='hover-card'></div>
        </div>
    )
}

export { MotionCard }