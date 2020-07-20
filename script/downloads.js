const content = document.querySelector('div.content');
// var api = `http://${location.host.replace(location.port, "4000")}/videos`
const api = 'https://api.jsonbin.io/b/5f14dccf918061662844d884/latest';
const authKey = '$2b$10$0EaywmQ9k387XxShjAt.ouF7m0YLoSfHcBnMRMlaDHqSnflXwA.yq';

// JSONBin will be replaced with mySQL in the database 2.3 in term 3/4
// for now it works better and i can use JS
// i dont like PHP
// by making the client do the hard work you save server money and power. 
// which can be used to server the site faster or accept requests in higher volume

function doAll(api) {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", api)
    xhr.setRequestHeader('secret-key', authKey);
    xhr.send(null);

    xhr.onload = () => {
        if (xhr.status.toString()[0] != "2") {
            console.error(`Error: ${xhr.status}: ${xhr.statusText}`)
            content.innerHTML = `<div></div><center>${xhr.status}: ${xhr.statusText}</center>`;
        } else {
            content.innerHTML = "";
            console.log(`Status: ${xhr.status}: ${xhr.statusText}`);
            multiItem(JSON.parse(xhr.responseText));
        }
    }
}

function makeItem(name, img, vidLink, dlLink, delay) {

    let res = `
        <div class="gallery" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="banner" style="background-image: url('${img}');">
            </div>
            <div class="desc">
            <div class="title">
            ${name}
            </div>
                <div class="links">
                <a href="${vidLink}" target="_blank">Video</a>&nbsp;|&nbsp;<a href="${dlLink}" download>Download</a>
                </div>
            </div>
        </div>`

    return res
}

function multiItem(array) {
    array.forEach(element => {
        content.innerHTML += makeItem(element.name, element.img, element.vidLink, element.dlLink, element.delay)
    });
}

function init() {
    doAll(api);
}

init()