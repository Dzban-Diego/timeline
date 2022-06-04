import { useState } from 'react'
import { colors } from '../globals'

const Event = ({ externalStyle, event }) => {
    const [showDescription,setShowDescription] = useState(false)
    const [showLabel,setShowLabel] = useState(false)
    const isEvent = event.type === 'event'

    const styles = externalStyle ? externalStyle : {
        event: {
            position: 'absolute',
            top: `${event.distanceFromBottom}vh`,
            left: `${event.position+50}px`,
            scrollMarginTop: `${event.distanceFromBottom}vh`,
            scrollMarginLeft: '20vw',
            scrollMarginRight: '20vw',
            display: 'flex',
            flexDirection: isEvent ? 'row' : 'column',
            alignItems: 'flex-start',
        },
        periodTimeline: {
            width: `${event.endPosition - event.position}px`,
            height: '1vh',
            backgroundColor: '#ff0000',
            cursor: 'pointer',
        },
        stick: {
            backgroundColor: '#ff0000',
            width: '1vh',
            height: '100vh',
        },
        smallLabel: {
            color: colors.mein,
            margin: '.25vw',
            textAlign: 'left',
            cursor: 'pointer',
        },
        shadow: {
            boxShadow: '0 0 2.5em 0.5em rgb(204 204 204 / 50%)',
        },
        header: {
            backgroundColor: colors.mein,
            display: 'flex',
            flexDirection: isEvent ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            cursor: 'pointer',
            color: colors.fontColor,
            minWidth: '200px',
        },
        date: {
            margin: isEvent ? '.5vh' : '1vh',
        },
        title: {
            margin: isEvent ? '.5vh 4vh' : '1vh 4vh',
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
            maxWidth: '2000px',
            backgroundColor: '#ffffff',
            color: '#000000',
            margin: 0,
            padding: '1vw',
            maxHeight: '70vh',
        },
    }
    
    return (
        <div className='event' id={event.date} style={styles.event} onMouseEnter={ () =>  setShowLabel(true) } onMouseLeave={() => setShowLabel(showDescription ? true : false)}>
            <div style={event.type === 'event' ? styles.stick : styles.periodTimeline} ></div>
            {showLabel ?
                <div style={styles.shadow}>
                    <div style={styles.header} onClick={() => setShowDescription(!showDescription)}>
                        <h4 style={styles.date}>{event.date}</h4>
                        <h2 style={styles.title}>{event.title}</h2>
                        {!isEvent && <h4 style={styles.date}>{event.endDate}</h4>}
                    </div>
                    {showDescription && <p style={styles.description}>{event.description}</p>}
                </div>
                :
                <h4 style={styles.smallLabel} onClick={() => setShowLabel(!showLabel)}>{event.title}</h4>
            }
        </div>
    );
}

export default Event