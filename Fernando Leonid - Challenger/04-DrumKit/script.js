const sons = {
    "a" : 'boom.wav',
    "s" : 'clap.wav',
    "d" : 'hihat.wav',
    "f" : 'kick.wav',
    "g" : 'openhat.wav',
    "h" : 'ride.wav',
    "j" : 'snare.wav',
    "k" : 'tink.wav',
    "l" : 'tom.wav'
}

function tocar(letra){
    console.log("teste")
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const j = document.querySelector(".j");
const k= document.querySelector(".k");
const l = document.querySelector(".l");

a.addEventListener('click', () => {
    tocar("a")
});

s.addEventListener('click', () => {
    tocar("s")
});

d.addEventListener('click', () => {
    tocar("d")
});

f.addEventListener('click', () => {
    tocar("f")
});

g.addEventListener('click', () => {
    tocar("g")
});

h.addEventListener('click', () => {
    tocar("h")
});

j.addEventListener('click', () => {
    tocar("j")
});

k.addEventListener('click', () => {
    tocar("k")
});

l.addEventListener('click', () => {
    tocar("l")
});



document.querySelector('body').addEventListener('keydown', function(event) {
    if(event.key == "a"){
        tocar("a");
    }else if(event.key == "s"){
        tocar("s");
    }else if(event.key == "d"){
        tocar("d");
    }else if(event.key == "f"){
        tocar("f");
    }else if(event.key == "g"){
        tocar("g");
    }else if(event.key == "h"){
        tocar("h");
    }else if(event.key == "j"){
        tocar("j");
    }else if(event.key == "k"){
        tocar("k");
    }else if(event.key == "l"){
        tocar("l");
    }
});