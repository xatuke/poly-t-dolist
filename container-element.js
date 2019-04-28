import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './special-image.js'

class ContainerElement extends PolymerElement {
  

  static get template() {
    return html`
      <style> 
        * {
          font-family: 'Open Sans';
          text-align: center;
        }
        span#text {
          display: block;
          font-size: 20px;
        }
        span {
          display: block;
          font-size: 30px;
          color: #1976d2;
          margin: 30px;
        }

      </style>
      <div>
        <span>Click Image</span>
        <!-- will add here an image -->
        <span id="text"></span>
      </div>
    `;
  }
}

customElements.define('container-element', ContainerElement);