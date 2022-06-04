import { colors } from "../globals"
import { useState } from "react"
import EventForm from "./eventForm"

const NavigationBar = () => {
    const [showForm, setShowForm] = useState(false)
    const styles = {
        navigationBar: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5vh',
            fontSize: '5vh',
            backgroundColor: colors.mein,
            color: colors.fontColor,
            textAlign: 'center',
            padding: '1vh 2vh',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            zIndex: 100,
            boxShadow: '0  0 2.5em 0.5em rgb(204 204 204 / 50%)'
        },
        button: {
            margin: '0 1vh',
            cursor: 'pointer',
            fontSize: '5vh'
        }
    }
    return (
        <div className="nav" style={styles.navigationBar}>
            <div style={styles.button} onClick={() => setShowForm(!showForm)}>+</div>
            {showForm &&
                <EventForm closeForm={()=>{setShowForm(false)}} />
            }
        </div>
    )
}

export default NavigationBar