import Event from './event'
import { colors } from '../globals'
import { useState } from 'react'
import Label from '../components/Label'

const Period = ({ event }) => {
    const styles = {
        period: {
            position: 'absolute',
            top: `${event.distanceFromBottom}vh`,
            left: `${event.position+50}px`,
            scroll: `${event.distanceFromBottom}vh`,
            color: colors.fontColor,
        },
        shadow: {
            boxShadow: '0 0 2.5em 0.5em rgb(204 204 204 / 50%)',
        },
        labels: {
            position: 'relative',
            overflow: 'hidden',
            height: '10vh'
        },
        header: {
            backgroundColor: colors.mein,
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
        },
        date: {
            margin: '1vh',
        },
        title: {
            margin: '1vh',
        },
        smallLabel: {
            color: colors.mein,
            margin: '0',
            textAlign: 'left',
            cursor: 'pointer',
        },
        periodTimeline: {
            width: `${event.endPosition - event.position}px`,
            height: '1vh',
            backgroundColor: '#ff0000',
            cursor: 'pointer',
        },
        description: {
            height: 'auto',
            width: 'auto',
            backgroundColor: '#ffffff',
            color: '#000000',
            margin: 0,
            padding: '1vw',
        },
        hideDescription: {
            height: '0px',
            width: '0px',
            padding: '0px',
            margin: '0',
            overflow: 'hidden'
        },
        
    }
    const [showDescription,setShowDescription] = useState(false)
    const [showLabel,setShowLabel] = useState(false)

    return (
        <div className='period' id={event.date} style={styles.period} onMouseEnter={ () =>  setShowLabel(true) } onMouseLeave={() => setShowLabel(showDescription ? true : false)}>
            <div style={styles.periodTimeline}></div>
            {showLabel ?
                <Label event={event}></Label>
                :
                <h4 style={styles.smallLabel} onClick={() => setShowLabel(!showLabel)}>{event.title}</h4>
            }
        </div>
    );
}

export default Period