const event = {
    type: '',           // event / period
    specific: true,     // czy data jest konkritna
    size: 0,            // 1 / 2 / 3
    date: '',           // Wyświetlana data >> period data rozpoczęcia
    title: '',          //wyśwyetlany tytuł
    description: '',    // opis
    tags: [],           //tagi
    
    position: 0,        // Pixel count from start of timeline 3px > 1 year  obliczany automatycznie
    importance: 1,      // ważność
    distanceFromTop: 80, // odległość on lini czasy | odwrotność bo liczy się on góry

    // -- PERIOD --
    endDate: 0, //      // Wyświetlana data końca wydarzenia
    endPeriod: 0,       // Pixel count to end of timeline 3px > 1 year  obliczany automatycznie
    subEvents: [        // Wydarzenia wyświetlane na małej lini czasowej
        
    ],
    hideSubEventr: [    // wydażenia wyświetlane na pełnoekranowej małej lini czasowej

    ],
}