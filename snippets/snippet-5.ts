render(): TemplateResult {
  return html`${this.linkHref ? html`` : html``}`;
}
