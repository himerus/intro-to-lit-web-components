/**
 * The Outline  Link component
 * @element OutlineLink
 * @extends OutlineElement
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-link')
export class OutlineLink extends OutlineElement {

  render(): TemplateResult {
    return html`${this.linkHref
      ? html` <a
          href=${this.linkHref}
          rel="${ifDefined(this.linkRel)}"
          target="${ifDefined(this.linkTarget)}"
        >
          ${this.linkText ? html`${this.linkText}` : html`<slot></slot>`}
        </a>`
      : html`<slot></slot>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-link': OutlineLink;
  }
}
