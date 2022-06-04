const renderSubEvents = events => {
    return events.map(event => {
        const styles = {
            event: {
                top: `0px`,
                left: `0px`,
                position: 'absolute',
                boxShadow: '0 0 2.5em 0.5em rgb(204 204 204 / 50%)',
                scrollMarginLeft: '20vw',
                scrollMarginRight: '20vw',
                zIndex: 100
            },
            eventHeader: {
                backgroundColor: '#ff0000',
                cursor: 'pointer',
                padding: '.5vh 1rem',
                color: colors.fontColor,
            },
            eventTitle: {
                margin: 0,
                fontSize: '2vh'
            },
            eventDate: {
                margin: 0,
                fontSize: '1.5vh'
            },
            description: {
                height: 'auto',
                width: 'auto',
                backgroundColor: '#ffffff',
                color: '#000000',
                margin: 0,
                padding: '1vw',
                maxWidth: '20vw',
                fontSize: '1.3vh'
            },
            hideDescription: {
                overflow: 'hidden',
                height: '0px',
                width: '0px',
                padding: '0px',
                margin: '0',
            }
        }
        return (
            <Event externalStyle={styles.subEvent} event={event}></Event>
        )
    })
}




