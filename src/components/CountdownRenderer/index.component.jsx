import TimeBlock from '../TimeBlock/index.component'
import Demacator from '../Demacator/index.component';
import './CountdownRenderer.styles.scss';

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className='countdown-renderer'>
            <TimeBlock title='days' value={days}/>
            <Demacator />
            <TimeBlock title='hours' value={hours}/>
            <Demacator />
            <TimeBlock title='minutes' value={minutes}/>
            <Demacator />
            <TimeBlock title='seconds' value={seconds}/>
        </div>
    );
}

export default CountdownRenderer;
