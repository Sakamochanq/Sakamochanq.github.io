const Server = (ip_adr) => {
    var api_key = "d3d0ae123323ed";
    var sender = "https://ipinfo.io/" + ip_adr + "?token=" + api_key;

    fetch(sender)
        .then(response => response.json())
        .then(data => {
            let timezone = data.timezone;
            document.getElementById('zone').innerHTML = "\""+timezone +"\"";
        })
        .catch(error => console.error('Error fetching location:', error));
}

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        Server(ip);
    })
    .catch(error => console.error('Fucked:', error));

document.getElementById('dev').innerHTML = "\"Sakamochanq\"";