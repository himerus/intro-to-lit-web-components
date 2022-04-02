// Render method composing together three different template partials.
render(): TemplateResult {
  return html`
    ${this.headerTemplate}
    ${this.articleTemplate}
    ${this.footerTemplate}
  `
}

// Template partial for the header content.
headerTemplate(): TemplateResult {
  return html`<header></header>`
}

// Template partial for the article content.
headerTemplate(): TemplateResult {
  return html`<article></article>`
}

// Template partial for the footer content.
headerTemplate(): TemplateResult {
  return html`<footer></footer>`
}
