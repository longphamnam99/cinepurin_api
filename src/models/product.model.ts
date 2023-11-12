export class Product {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  category?: number[];
  price?: number;
  premiere?: Date;
  actor?: number[];
  director?: number[];
  type?: number;
  trailer?: string;


  constructor({ id, name, image, description, category, price, premiere, actor, director, type, trailer }) {
    if (id !== undefined) this.id = id;
    if (name !== undefined) this.name = name;
    if (image !== undefined) this.image = image;
    if (description !== undefined) this.description = description;
    if (category !== undefined) this.category = category;
    if (price !== undefined) this.price = price;
    if (premiere !== undefined) this.premiere = premiere;
    if (actor !== undefined) this.actor = actor;
    if (director !== undefined) this.director = director;
    if (type !== undefined) this.type = type;
    if (trailer !== undefined) this.trailer = trailer;
  }
}
