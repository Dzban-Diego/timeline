import { colors } from '../globals'
import { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from "../index"
import { DATABASE_CONFIGURATION } from "../config"


const EventForm = (props) => {
    const styles = {
        dialogBackground: {
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
            height: '100vh',
            backgroundColor: '#0000008a',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 2.5em 0.5em rgb(204 204 204 / 50%)'
        },
        eventForm: {
            backgroundColor: '#ffffff',
            opacity: '1',
            position: 'absolute',
        },
        header: {
            backgroundColor: colors.mein
        },
        title: {
            margin: '0',
            padding: '3vh',
        },
        form: {
            fontSize: '2vh',
            margin: '3vh 4vh',
            color: colors.mein,
        },
        label: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '.5vh',
            width: '100%'
        },
        input: {
            fontSize: 'inherit',
            width: '100%',
            borderStyle: 'none none solid none',
            borderRadius: '0',
            margin: '0',
            padding: '0 0 .5vh 0',

        },
        actions: {
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '3vh',
            height: '5vh',
        },
        button: {
            backgroundColor: colors.mein,
            border: "none",
            color: colors.fontColor,
            fontSize: '2vh',
            padding: '1vh 2vh',
            margin: '0 1vh'
        }
    }

    const [info, setInfo] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('event')
    const [length, setLength] = useState('')
    const [endDate, setEndDate] = useState('')
    const [position, setPosition] = useState('')
    const [tags, setTags] = useState([])
    const [important, setImportant] = useState(5)

    const [specific, setSpecific] = useState(true)
    const [distanceFromTop, setDistanceFromTop] = useState(40)

    const options = [
        { label: "Ludzie", value: "people" },
        { label: "Ważne", value: "important" },
        { label: "Księgi", value: "books", disabled: true },
    ];

    const cencel = () => {
        props.closeForm()
    }

    const saveEvent = async () => {
        const event = {
            type: type,                 // event / period
            specific: specific,         // czy data jest konkritna
            date: date,                 // Wyświetlana data >> period data rozpoczęcia
            title: title,               //wyśwyetlany tytuł
            description: description,   // opis
            tags: tags.map(tag => tag.value), //tagi
            
            position: position,             // Pixel count from start of timeline 3px > 1 year  obliczany automatycznie
            important: important,       // ważność
            distanceFromTop: distanceFromTop, // odległość on lini czasy | odwrotność bo liczy się on góry

            // -- PERIOD --
            endDate: endDate,           // Wyświetlana data końca wydarzenia
            length: length,             // długość wydarzenia
        }
        console.log(event)

        try {
            let docRef = await addDoc(collection(firestore, DATABASE_CONFIGURATION), {event: 'tesrt'})
            console.log(docRef.id)
        }
        catch (e) { console.log(e) }
    }

    return (
        <div className='dialogBackground' style={styles.dialogBackground}>
            <div className="eventForm" style={styles.eventForm}>
                <div className="header" style={styles.header}>
                    <h2 className='title' style={styles.title}>Dodaj nowe wydarzenie</h2>
                </div>
                {!info && 
                    <form className="form" style={styles.form}>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Nazwa:
                            <input 
                                type="text"
                                style={styles.input}
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Opis:
                            <textarea 
                                type="text"
                                style={styles.input}
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Typ:
                            <select
                                style={styles.input}
                                onChange={e => setType(e.target.value)}
                                value={type}
                            >
                                <option value={'event'}>Wydaszenie</option>
                                <option value={'period'}>Trwające</option>
                            </select>
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Data {type === 'period' && `rozpoczęcia`}:
                            <input 
                                type="text"
                                style={styles.input}
                                onChange={e => setDate(e.target.value)}
                                value={date}
                            />
                        </label>
                        {type === 'period' && <>
                            <label 
                                className="label" 
                                style={styles.label}
                            >
                                Data zakończenia:
                                <input
                                    type="text"
                                    style={styles.input}
                                    onChange={e => setEndDate(e.target.value)}
                                    value={endDate}
                                />
                            </label>
                            <label 
                                className="label" 
                                style={styles.label}
                            >
                                Czas twania:
                                <input
                                    type="text"
                                    style={styles.input}
                                    onChange={e => setLength(e.target.value)}
                                    value={length}
                                />
                            </label>
                        </>}
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Tagi:
                            <MultiSelect
                                options={options}
                                style={styles.input}
                                onChange={setTags}
                                value={tags}
                                labelledBy="Select"
                            />
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Ważność: {`${important}`}
                            <input 
                                type="range"
                                max='10'
                                style={styles.input}
                                onChange={e => setImportant(e.target.value)}
                                value={important}
                            />
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Rok:
                            <input 
                                type="number"
                                style={styles.input}
                                onChange={e => setPosition(e.target.value)}
                                value={position}
                            />
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Pewność:
                            <select
                                style={styles.input}
                                onChange={e => setSpecific(e.target.value)}
                                value={specific}
                            >
                                <option value={[true, true]}>Pewne</option>
                                {type === 'period' && <>
                                    <option value={[true, false]}>Początek pewny</option>
                                    <option value={[false, true]}>Koniec pewny</option>
                                </>}
                                <option value={[false, false]}>Przybliżone</option>
                            </select>
                        </label>
                        <label 
                            className="label" 
                            style={styles.label}
                        >
                            Położenie {`${distanceFromTop}`}
                            <input 
                                type="range"
                                max='80'
                                style={styles.input}
                                onChange={e => setDistanceFromTop(e.target.value)}
                                value={distanceFromTop}
                            />
                        </label>
                    </form>
                }
                <div className="actions" style={styles.actions}>
                    <button className="info" onClick={()=> setInfo(!info)} style={styles.button}>Info</button>
                    <button className="cencel" onClick={()=> cencel()} style={styles.button}>Anuluj</button>
                    <button className="save" onClick={()=>saveEvent()} style={styles.button}>Zapisz</button>
                </div>
            </div>
        </div>
    )
}

export default EventForm