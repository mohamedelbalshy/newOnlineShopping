export class Product{
    name:string;
    price:number;
    category:string;
    avaliability:boolean;
    sellerName:string;
    description:string;
    imageSrc:string;
    quantity:number;
    constructor(name, price, category, avaliability, sellerName, description, imageSrc){
        this.name = name;
        this.price = price;
        this.category = category;
        this.avaliability = avaliability;
        this.sellerName = sellerName;
        this.description = description;
        this.imageSrc = imageSrc;

    }
}