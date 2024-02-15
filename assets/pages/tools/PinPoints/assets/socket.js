const Server = (ip_adr) => {
    var api_key = "d3d0ae123323ed";
    var sender = "https://ipinfo.io/" + ip_adr + "?token=" + api_key;

    fetch(sender)
        .then(response => response.json())
        .then(data => {
            let country = "Country : " + data.country + "\n";
            let city = "City : " + data.city + "\n" ;
            let region = "Region : " + data.region + "\n";
            let location = "Location(x, y) : " + data.loc + "\n";
            let organization = "Organization : " + data.org + "\n";
            let postal = "Postal : " + data.postal + "\n";
            let timezone = "Timezone : " + data.timezone + "\n";
            //console.log(country + city + region + location + organization + postal + timezone);

            document.getElementById('Country').innerHTML = country;
            document.getElementById('City').innerHTML = city;
            document.getElementById('Region').innerHTML = region;
            document.getElementById('Location').innerHTML = location;
            document.getElementById('Organization').innerHTML = organization;
            document.getElementById('Postal').innerHTML = postal;
            document.getElementById('Timezone').innerHTML = timezone;
        })
        .catch(error => console.error('Error fetching location:', error));
}

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        document.getElementById('ip_global').innerHTML = "Public : " + ip;
        Server(ip);
    })
    .catch(error => console.error('Fucked:', error));

let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Loading...";
});
window.addEventListener("focus", () =>{
    document.title = doctitle;
});

const Local = () => {
    document.getElementById('ip_v4').innerHTML = "IPv4 : " + location.hostname;  
    document.getElementById('port').innerHTML = "Port : " + location.port;
}
Local();

function Alert() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        var message = "Public IP : " + ip + "\n\nQ. これは何ですか？\n\nA. あなたの 'グローバルIPアドレス' です。\n　 他人に教えると悪さをされるので\n　 聞かれても、絶対に教えないでね。\n\n© Sakamochan";
        alert(message);
    })
    .catch(error => console.error('Fucked:', error));
}