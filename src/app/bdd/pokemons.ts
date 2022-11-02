import { Pokemon } from "../models/pokemon";

// le mot clé export rend exportable (accessible) la constante n'importe ou dans le projet
export const LISTDEPOKEMONS:Array<Pokemon> = [
    {
        id: 1,
        name: 'Bulbizzard',
        types:'herbe',
        cp:5,
        hp:25,
        picture:'assets/001.png',
        created: new Date()
    },
    {
        id: 2,
        name: 'Salameche',
        types:'feu',
        cp:9,
        hp:29,
        picture:'assets/004.png',
        created: new Date()
    },
    {
        id: 3,
        name: 'Carapuce',
        types:'eau',
        cp:7,
        hp:27,
        picture:'assets/007.png',
        created: new Date()
    },
    {
        id: 4,
        name: 'Aspicot',
        types:'insecte',
        cp:4,
        hp:18,
        picture:'assets/013.png',
        created: new Date()
    },
    {
        id: 5,
        name: 'Roucool',
        types:'vol',
        cp:3,
        hp:16,
        picture:'assets/016.png',
        created: new Date()
    },
    {
        id: 6,
        name: 'Rattata',
        types:'normal',
        cp:3,
        hp:29,
        picture:'assets/019.png',
        created: new Date()
    },
    {
        id: 7,
        name: 'Piafabec',
        types:'vol',
        cp:5,
        hp:25,
        picture:'assets/021.png',
        created: new Date()
    },
    {
        id: 8,
        name: 'Abo',
        types:'poison',
        cp:16,
        hp:4,
        picture:'assets/023.png',
        created: new Date()
    },
    {
        id: 9,
        name: 'Pikachu',
        types:'electrique',
        cp:9,
        hp:10,
        picture:'assets/025.png',
        created: new Date()
    },
    {
        id: 10,
        name: 'Sablette',
        types:'roche',
        cp:16,
        hp:23,
        picture:'assets/027.png',
        created: new Date()
    },
    {
        id: 11,
        name: 'Melofée',
        types:'fée',
        cp:9,
        hp:25,
        picture:'assets/035.png',
        created: new Date()
    },
    {
        id: 12,
        name: 'Goupix',
        types:'feu',
        cp:17,
        hp:25,
        picture:'assets/037.png',
        created: new Date()
    }

];