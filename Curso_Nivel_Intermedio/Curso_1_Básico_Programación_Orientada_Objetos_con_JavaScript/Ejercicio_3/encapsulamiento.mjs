function videoPlay(id) {

    const urlSecreta = " https://platzi.com/ " + id
    console.log("Se esta reproduciendo desde la url" + urlSecreta)
}

function videoStop(id) {

    const urlSecreta = " https://platzi.com/ " + id
    console.log(" Pausamos la url" + urlSecreta)
}

export class Platziclass {
    constructor({
        name,
        videoID
    }) {
        this.name = name
        this.videoID = videoID
    }

    reproducirt() {
        videoPlay(this.videoID)
    }

    pausar() {
        videoStop(this.videoID)
    }
}