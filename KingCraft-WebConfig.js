const EmberObject = [
    {
    Név: 'GergoPanda',
    Rang: 'Tulajdonos',
    ekkortól: '2021',
    Figyelmeztetések: '0',
    },
    {
    Név: 'UZX',
    Rang: 'Staff',
    ekkortól: '2021',
    Figyelmeztetések: '0',
    },
    {
    Név: 'Dani098',
    Rang: 'Építész',
    ekkortól: '2022',
    Figyelmeztetések: '1'

}]

    if (website_loaded) {
        console.log('%coldal Betöltött', 'color:green;')
        var website_loaded = true
    } else {
        console.log('%cbetöltés folyamatban... ', 'color:orange;')
        var website_loaded = false
        
    }

    
    var website_loaded = true

    
    if (website_loaded) {
        console.log('%coldal Betöltött', 'color:green;')
        var website_loaded = true
    } else {
        console.log('%cbetöltés folyamatban... ', 'color:orange;')
        var website_loaded = false
    }

    console.table(EmberObject)