// https://www.youtube.com/watch?v=TbG7U16n4fY&ab_channel=QwertyPy

import { LitElement } from "lit-element";

export class GetData extends LitElement {

    static get properties(){
        return{
            url:{type: String},
            method: {type: String}
        }
    }

/*  
// Se genera un error por que al llamar al constructor antes de que se inicialice TODO no hay nada que cargar y regresa un Undefined, se puede apreciar en el console.log() que esta en el getData(), para ello nos apollamos de firstUpdated(){}

    constructor(){
        super();
        this.getData();
    } */

    firstUpdated(){
        this.getData();
    }

    _senData(data){
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: {data: data}, bubbles: true, composed: true
        }))
    }

    getData(){

        console.log(this.url)

        fetch(this.url, {method: this.method})
        .then((response) => {
            if(response.ok) return response.json();
            return Promise.reject(response)
        })
        .then((data) => {this._senData(data); })
        .catch((error) => {console.warn("Algo salio mal", error)})
   }

}

customElements.define('get-data', GetData);