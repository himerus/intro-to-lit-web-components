import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * The Outline Widget Component
 * 
 * @element OutlineWidget
 * @extends LitElement
 */
@customElement("outline-widget")
export class OutlineWidget extends LitElement {

}

declare global {
  interface HTMLElementTagNameMap {
    "outline-widget": OutlineWidget;
  }
}
