// https://www.youtube.com/watch?v=TbG7U16n4fY&ab_channel=QwertyPy

import { LitElement, html } from "lit-element";
import styles from '../styles/ApiTemplateStyle'

export class ApiTemplate extends LitElement{

    static get styles(){
        return [styles]
    }

    render(){
        return html`
            <div class="container">
                <h1>the <strong class="title">Rick & Morty</strong> API</h1>
                <!--p class="title">with LitElement</p-->
                <h1 class="lit">with LitElement</h1>
            </div>
        `
    }
};

customElements.define('api-template', ApiTemplate);