const content = document.querySelector("div.content");
const api = "https://api.jsonbin.io/b/5e828a4c22c81b0ffa4ed870/latest"
const authKey = '$2b$10$0EaywmQ9k387XxShjAt.ouF7m0YLoSfHcBnMRMlaDHqSnflXwA.yq';

function doAll(api, auth) {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", api)
    xhr.setRequestHeader('secret-key', auth);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status != 200) {
            console.error(`Error: ${xhr.status}: ${xhr.statusText}`);
            content.innerHTML = `<div></div><center>${xhr.status}: ${xhr.statusText}</center`;
        } else {
            content.innerHTML = "";
            multiPart(JSON.parse(xhr.responseText));
        }
    }
}

function generatePart(q, a, d) {

    // CHONKY IF STATEMENT LMAO
    if (q === undefined || q === null || a === undefined || a === null || d === undefined || d === null) {
        console.error("EXPECTED VALUE, FOUND NULL");
        console.error(`q: ${q}`);
        console.error(`a: ${a}`);
        console.error(`d: ${d}`)
    } else {
        return `
        <div class="qa" data-aos="fade-up" data-aos-delay="${d}">
                <div class="q">
                    ${q}
                </div>
                <div class="a">
                    ${a}
                </div>
            </div>
        `
    }
}

function multiPart(a) {
    if (typeof a === "object") {
        content.innerHTML = null
        a.forEach(element => {
            try {
                content.innerHTML += generatePart(element.q, element.a, element.d);
            } catch (error) {
                console.error(error);
                content.innerHTML = `<div></div><span>${error}</span>`;
                throw `${error}`;
            }
        });
    } else {
        console.error("a should be array, its not");
        console.warn(a);
    }
}

function init() {
    doAll(api, authKey);
}

init();