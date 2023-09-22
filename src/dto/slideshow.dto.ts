import { MinLength } from "class-validator"

export class SlideshowDto {
    id: number;

    @MinLength(1, { message: "This field must be than 1 character" })
    name: string;

    url: string;
    
    caption: string;
}