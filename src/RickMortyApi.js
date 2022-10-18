// https://www.youtube.com/watch?v=TbG7U16n4fY&ab_channel=QwertyPy

import { LitElement, html } from 'lit';

import './components/GetData';
import './components/ApiTemplate';

import style from './styles/RickMortyStyle';

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return [style];
  }

  /*No es la mejor forma de escuchar un evento */
  constructor() {
    super();

    // Por el retraso al cargarse la data esta no llega a dateTemplate y primero se renderiza el componente antes que la data. Para solucionar esto se ocupa lo un array vasio en el wiki.
    this.wiki = [];

    this.addEventListener('ApiData', (e) => {
      console.log(e.detail.data);
      this._dataFormat(e.detail.data);
    })
  }

  // damos forma a la data y por cada personaje sacamos el valor que vamos a nececitar.
  _dataFormat(data){
    let characters = [];

    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      })
    })
    console.log(characters)
// ya trabajada la data la enviamos a las propiedades estaticas
    this.wiki = characters;

  }

  render() {
    return html`
    <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
    <api-template></api-template>

    <div class="container">${this.dateTemplate}</div>
    `;
  }

  get dateTemplate(){
    console.log(this.wiki)
    return html`
    ${this.wiki.map( (character, index) => html`
    <div class="card">
      <div class="card-content">

      <h2> ${character.name} </h2>
        <img src="${character.img}">

        <p>${character.species} | ${character.status}</p>

        <!--p>Specie: ${character.species} </p>
        <p>Status: ${character.status}</p-->
      </div>
    </div>
    ` )}
    `
  }

}
