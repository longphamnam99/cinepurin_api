interface InputData {
    id: number;
    name: string;
    url: string;
    caption: string;
}

export class Slideshow {
    id?: number;
    name?: string;
    url?: string;
    caption?: string;

    constructor({id, name, url, caption}: InputData) {
        if(id) this.id = id;
        if(name) this.name = name;
        if(url) this.url = url;
        if(caption) this.caption = caption;
    }
}