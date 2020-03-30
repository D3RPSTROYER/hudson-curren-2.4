const content = document.querySelector("div.content");

const qs = [{
    q: "Question",
    a: "lorem ipsum dolor. sit amet",
    d: 0
}, {
    q: "Question",
    a: "lipsum",
    d: 50
}]

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
    multiPart(qs);
}

init();