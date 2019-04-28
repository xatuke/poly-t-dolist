
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


class TodoItem extends PolymerElement {
  static get properties() {
    return {
      value: {
        type: String,
        value: '',
        notify: true,
        reflectToAttribute: true
      },
      uid: {
        type: Number,
        reflectToAttribute: true
      },
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    }
  }


  static get template() {
    return html`
      <style>
        iron-icon {
          margin-left: auto;
          --iron-icon-fill-color: #424242;
        }

        paper-item {
          --paper-item-focused-before: {
            opacity: 0;
          }
        }
        
      </style>
      <paper-item>
        <paper-checkbox checked="{{checked}}">
        </paper-checkbox>
        <span>[[value]]</span>
        <iron-icon icon="delete" on-click="deleteHandler"></iron-icon>
      </paper-item>
    `;
  }

  deleteHandler() {
    this.dispatchEvent(new CustomEvent('delete-todo',{
      detail: {
        type: "delete",
        uid: this.uid
      }
    }));
  }
}

customElements.define('todo-item', TodoItem);
        