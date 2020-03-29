const content = document.querySelector('div.content');
let delay = 0;

// DELAY PROPERTY STUPID, GOT RID OF IT

const videos = [
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 150
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 200
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 250
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 0
    },
    {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 50
    }, {
        name: 'TEST',
        image: 'https://via.placeholder.com/300x200',
        vidLink: '#',
        dlLink: '#',
        delay: 100
    },
]

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
    multiItem(videos);
}

init()