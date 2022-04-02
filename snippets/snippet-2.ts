import { OutlineElement } from "../outline-element/outline-element";
import { customElement } from "lit/decorators.js";

/**
 * The Outline Widget Component
 * 
 * @element OutlineWidget
 * @extends OutlineElement
 */
@customElement("outline-widget")
export class OutlineWidget extends OutlineElement {

}

declare global {
  interface HTMLElementTagNameMap {
    "outline-widget": OutlineWidget;
  }
}
