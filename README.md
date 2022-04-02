# Getting Started with Lit2 Web Components

> The following set of code & links represents the samples posted alongside the article titled **Getting Started with Lit2 Web Components** on the [Phase2 Technology Blog](https://www.phase2technology.com/insights).

- In the `carbon-config.json` file, you will find the exact configurations used for screenshots at [carbon.now.sh](https://carbon.now.sh/)

## Code Snippets

- [Snippet 1](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=import%2520%257B%2520LitElement%2520%257D%2520from%2520%2522lit%2522%253B%250Aimport%2520%257B%2520customElement%2520%257D%2520from%2520%2522lit%252Fdecorators.js%2522%253B%250A%250A%252F**%250A%2520*%2520The%2520Outline%2520Widget%2520Component%250A%2520*%2520%250A%2520*%2520%2540element%2520OutlineWidget%250A%2520*%2520%2540extends%2520LitElement%250A%2520*%252F%250A%2540customElement%28%2522outline-widget%2522%29%250Aexport%2520class%2520OutlineWidget%2520extends%2520LitElement%2520%257B%250A%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%2522outline-widget%2522%253A%2520OutlineWidget%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 2)](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=import%2520%257B%2520OutlineElement%2520%257D%2520from%2520%2522..%252Foutline-element%252Foutline-element%2522%253B%250Aimport%2520%257B%2520customElement%2520%257D%2520from%2520%2522lit%252Fdecorators.js%2522%253B%250A%250A%252F**%250A%2520*%2520The%2520Outline%2520Widget%2520Component%250A%2520*%2520%250A%2520*%2520%2540element%2520OutlineWidget%250A%2520*%2520%2540extends%2520OutlineElement%250A%2520*%252F%250A%2540customElement%28%2522outline-widget%2522%29%250Aexport%2520class%2520OutlineWidget%2520extends%2520OutlineElement%2520%257B%250A%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%2522outline-widget%2522%253A%2520OutlineWidget%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 3](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253ESimple%2520%2522hard%2520coded%2522%2520element%2520inside%2520the%2520component%2520ShadowDOM.%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2560%250A%257D)

- [Snippet 4](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F**%250A%2520*%2520The%2520Outline%2520%2520Link%2520component%250A%2520*%2520%2540element%2520OutlineLink%250A%2520*%2520%2540extends%2520OutlineElement%250A%2520*%2520%2540slot%2520-%2520The%2520default%252C%2520and%2520only%2520slot%2520for%2520this%2520element.%250A%2520*%252F%250A%2540customElement%28%27outline-link%27%29%250Aexport%2520class%2520OutlineLink%2520extends%2520OutlineElement%2520%257B%250A%250A%2520%2520render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520%2520%2520return%2520html%2560%2524%257Bthis.linkHref%250A%2520%2520%2520%2520%2520%2520%253F%2520html%2560%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%2524%257Bthis.linkHref%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rel%253D%2522%2524%257BifDefined%28this.linkRel%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520target%253D%2522%2524%257BifDefined%28this.linkTarget%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%257Bthis.linkText%2520%253F%2520html%2560%2524%257Bthis.linkText%257D%2560%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2560%250A%2520%2520%2520%2520%2520%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%2560%253B%250A%2520%2520%257D%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%27outline-link%27%253A%2520OutlineLink%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 5](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%2524%257Bthis.linkHref%2520%253F%2520html%2560%2560%2520%253A%2520html%2560%2560%257D%2560%253B%250A%257D)
