import { Component, OnInit } from '@angular/core';
import { LISTDEPOKEMONS } from '../bdd/pokemons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listeDePokemon = LISTDEPOKEMONS;
  constructor() { }

  ngOnInit(): void {
  }

  filterPokemon(value:string){
    // on rafraichit la liste des pokemons
      this.listeDePokemon = LISTDEPOKEMONS;
      //on filtre la liste des pokemons
      this.listeDePokemon = this.listeDePokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    })
    
  }
  
}
