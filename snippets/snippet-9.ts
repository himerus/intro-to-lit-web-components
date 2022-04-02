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
