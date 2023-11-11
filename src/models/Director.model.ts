export class Director {
    name: string;
    image: string;
    description: string;
    birthday: Date;

    constructor({ name, image, description,  birthday }) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.birthday = birthday;
    }
}
