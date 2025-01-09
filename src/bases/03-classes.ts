import axios from "axios";

export class Pokemon {
    get url(): string {
        return `https://pokeapi.co/api/v2/pokemon/${this.id}`
    }
    
    public age: number;
    constructor(
        public id: number,
        public name: string,
        age: number
    ){
        this.age = age;
    }

    async getMoves() {
        const { data } = await axios.get(this.url);
        return data.moves;
    }
}

export const pikachu = new Pokemon(1, 'Pikachu', 10);
console.log(pikachu.getMoves());