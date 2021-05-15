import { zeroPad } from 'react-countdown';
import './TimeBlock.styles.scss';

const TimeBlock = ({title, value}) => {
    return (
        <div className='time-block'>
            <p className="time-block-title">{title.toUpperCase()}</p>
            <p className="time-block-value"> {zeroPad(value)} </p>
        </div>
    );
}

export default TimeBlock;
