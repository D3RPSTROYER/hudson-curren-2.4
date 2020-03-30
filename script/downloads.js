const content = document.querySelector('div.content');
const api = 'https://api.jsonbin.io/b/5e815c50862c46101ac086a6/latest';
const authKey = '$2b$10$0EaywmQ9k387XxShjAt.ouF7m0YLoSfHcBnMRMlaDHqSnflXwA.yq';
let delay = 0;

function doAll(api) {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", api)
    xhr.setRequestHeader('secret-key', authKey);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status != 200) {
            console.error(`Error: ${xhr.status}: ${xhr.statusText}`)
        } else {
            content.innerHTML = "";
            multiItem(JSON.parse(xhr.responseText));
        }
    }
}

// const videos = [
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 150
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 200
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 250
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 0
//     },
//     {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 50
//     }, {
//         name: 'TEST',
//         image: 'https://via.placeholder.com/300x200',
//         vidLink: '#',
//         dlLink: '#',
//         delay: 100
//     },
// ]

function makeItem(name, image, vidLink, dlLink, delay) {

    let res = `
        <div class="gallery" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="banner" style="background-image: url('${image}');">
            </div>
            <div class="desc">
            <div class="title">
            ${name}
            </div>
                <div class="links">
                <a href="${vidLink}">Video</a>&nbsp;|&nbsp;<a href="${dlLink}" download>Download</a>
                </div>
            </div>
        </div>`

    return res
}

function multiItem(array) {
    array.forEach(element => {
        content.innerHTML += makeItem(element.name, element.image, element.vidLink, element.dlLink, element.delay)
    });
}

function init() {
    doAll(api);
    // multiItem(videos);
    console.log(JSON.stringify(videos));
}

init()