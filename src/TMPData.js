export const data = [
    /*
    {
        date: '', // yyyy-mm
        description: '', // opis
        title: '', // Tytuł
        tags: [], //tagi

        type: 'event-specific', // event-specific / event-not-specific / period-specific / period-not-specific
        position: '', // Pixel count from start of timeline 4px > 1 year
        importance: 1, // Ważność wydażenia
        distanceFromBottom: 3 // 1-60
    },
    */
    {
        date: '3102', // yyyy-mm
        title: 'TEST',
        description: 'TO jest tylko test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', // opis
        tags: [], //tagi
        
        type: 'event',
        position: 9306, // Pixel count from start of timeline 3px > 1 year
        importance: 1,
        distanceFromBottom: 80
    },
    {
        date: '', // yyyy-mm
        title: 'Rok zerowy',
        description: 'TO jest tylko test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', // opis
        tags: [], //tagi
        
        type: 'event',
        position: 12078, // Pixel count from start of timeline 3px > 1 year
        importance: 1,
        distanceFromBottom: 80
    },
    {
        date: '4026pne', // yyyy-mm
        title: 'Stworzenie adama i ewy',
        description: 'TO jest tylko test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', // opis
        tags: [], //tagi
        
        type: 'event',
        position: 0, // Pixel count from start of timeline 3px > 1 year
        importance: 1,
        distanceFromBottom: 80
    },
    {
        type: 'period',           // event / period
        specific: true,     // czy data jest konkritna
        date: '4026pne',           // Wyświetlana data >> period data rozpoczęcia
        title: 'Adam😉',          //wyśwyetlany tytuł
        description: 'To jest życie jednego z większych dzbanków',    // opis
        tags: [],           //tagi
        
        position: 0,        // Pixel count from start of timeline 3px > 1 year  obliczany automatycznie
        importance: 1,      // ważność
        distanceFromBottom: 50, // odległość on lini czasy | odwrotność bo liczy się on góry
    
        // -- PERIOD --
        endDate: '3096pne', //      // Wyświetlana data końca wydarzenia
        endPosition: 2790,     // Pixel count to end of timeline 3px > 1 year  obliczany automatycznie
        subEvents: [        // Wydarzenia wyświetlane na małej lini czasowej
            
        ],
        hideSubEventr: [    // wydażenia wyświetlane na pełnoekranowej małej lini czasowej
    
        ],
    },
    {
        type: 'period',             // event / period
        specific: true,             // czy data jest konkritna
        date: '2 p.n.e.',           // Wyświetlana data >> period data rozpoczęcia
        title: 'Jezus',          //wyśwyetlany tytuł
        description: 'To jest życie Jezusa',    // opis
        tags: [],           //tagi
        
        position: 12072,        // Pixel count from start of timeline 3px > 1 year  obliczany automatycznie
        importance: 1,      // ważność
        distanceFromBottom: 50, // odległość on lini czasy | odwrotność bo liczy się on góry
    
        // -- PERIOD --
        endDate: '33 n.e.', //      // Wyświetlana data końca wydarzenia
        endPosition: 12177,     // Pixel count to end of timeline 3px > 1 year  obliczany automatycznie
        subEvents: [        // Wydarzenia wyświetlane na małej lini czasowej
            
        ],
        hideSubEventr: [    // wydażenia wyświetlane na pełnoekranowej małej lini czasowej
    
        ],
    }
]