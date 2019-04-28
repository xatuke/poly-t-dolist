
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import './todo-item.js'
let UID = 3;
class TodoList extends PolymerElement {
  static get properties() {
    return {
      items: {
        type: Array,
        value: [{value: "Bananas", uid: 1, checked: false}, {value: "Milk", uid: 2, checked: false}]
      }
    }
  }
  
  static get template() {
    return html`
      <style>
        paper-card {
          /* responsive */
          width: 40%;
          min-width: 300px;
          /* centering */
          left: 50%;
          transform: translateX(-50%);
          
          /* styling */
          --paper-card-background-color: #e1f5fe;
          --paper-card-header-color: #212121;
          --paper-card-header: {
            text-align: center;
          };
          margin-top: 80px;
          margin-bottom: 100px;
        }
        paper-button.indigo {
          background-color: #536dfe; 
          color: white;
        }
        
      </style>
      <paper-card heading="Todo List" elevation="3">
        
        <!-- Main content -->
        <div class="card-content">
          <!-- Repeat the Items in the array using dom-repeat -->
          <dom-repeat items="[[items]]">
            <template>
              <todo-item on-delete-todo="deleteTodoHandler" value="[[item.value]]" uid="[[item.uid]]" checked="{{item.checked}}"></todo-item>
            </template>
          </dom-repeat>
        </div>
        <!-- Action and Input -->
        <div class="card-actions">
          <paper-input label="Todo Item" id="item-input" on-keypress="inputKeyPress"></paper-input>
          <br>
          <paper-button raised="" class="indigo" on-click="addItem">Add</paper-button>
        </div>
        
        <br>
        <br>
      </paper-card>
      <hr>
    `;
  }
  addItem() {
    let itemValue = this.shadowRoot.querySelector("#item-input").value;
    this.shadowRoot.querySelector("#item-input").value = '';
    UID = UID + 1;
    if (itemValue != '') {
      let item = {
        value: itemValue,
        uid: UID
      }
      this.push('items', item);
    }
  }
  deleteTodoHandler(event) {
    this.splice('items', this.getIndex(event.detail.uid), 1);
  }
  inputKeyPress(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
  }
  getIndex(uid) {
    for(let i=0; i<this.items.length; i++) {
      if (this.items[i].uid === uid) {
        return i;
      }
    }
  }
}
customElements.define('todo-list', TodoList);
  