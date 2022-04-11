# Getting Started with Lit2 Web Components

> The following set of code & links represents the samples posted alongside the article titled **Getting Started with Lit2 Web Components** on the [Phase2 Technology Blog](https://www.phase2technology.com/insights). Links here will be updated with actual links after post is publicly avaiable.

- In the `carbon-config.json` file, you will find the exact configurations used for screenshots at [carbon.now.sh](https://carbon.now.sh/)

## Code Snippets

- [Snippet 1](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=import%2520%257B%2520LitElement%2520%257D%2520from%2520%2522lit%2522%253B%250Aimport%2520%257B%2520customElement%2520%257D%2520from%2520%2522lit%252Fdecorators.js%2522%253B%250A%250A%252F**%250A%2520*%2520The%2520Outline%2520Widget%2520Component%250A%2520*%2520%250A%2520*%2520%2540element%2520OutlineWidget%250A%2520*%2520%2540extends%2520LitElement%250A%2520*%252F%250A%2540customElement%28%2522outline-widget%2522%29%250Aexport%2520class%2520OutlineWidget%2520extends%2520LitElement%2520%257B%250A%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%2522outline-widget%2522%253A%2520OutlineWidget%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 2](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=import%2520%257B%2520OutlineElement%2520%257D%2520from%2520%2522..%252Foutline-element%252Foutline-element%2522%253B%250Aimport%2520%257B%2520customElement%2520%257D%2520from%2520%2522lit%252Fdecorators.js%2522%253B%250A%250A%252F**%250A%2520*%2520The%2520Outline%2520Widget%2520Component%250A%2520*%2520%250A%2520*%2520%2540element%2520OutlineWidget%250A%2520*%2520%2540extends%2520OutlineElement%250A%2520*%252F%250A%2540customElement%28%2522outline-widget%2522%29%250Aexport%2520class%2520OutlineWidget%2520extends%2520OutlineElement%2520%257B%250A%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%2522outline-widget%2522%253A%2520OutlineWidget%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 3](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253ESimple%2520%2522hard%2520coded%2522%2520element%2520inside%2520the%2520component%2520ShadowDOM.%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2560%250A%257D)

- [Snippet 4](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F**%250A%2520*%2520The%2520Outline%2520%2520Link%2520component%250A%2520*%2520%2540element%2520OutlineLink%250A%2520*%2520%2540extends%2520OutlineElement%250A%2520*%2520%2540slot%2520-%2520The%2520default%252C%2520and%2520only%2520slot%2520for%2520this%2520element.%250A%2520*%252F%250A%2540customElement%28%27outline-link%27%29%250Aexport%2520class%2520OutlineLink%2520extends%2520OutlineElement%2520%257B%250A%250A%2520%2520render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520%2520%2520return%2520html%2560%2524%257Bthis.linkHref%250A%2520%2520%2520%2520%2520%2520%253F%2520html%2560%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%2524%257Bthis.linkHref%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rel%253D%2522%2524%257BifDefined%28this.linkRel%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520target%253D%2522%2524%257BifDefined%28this.linkTarget%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%257Bthis.linkText%2520%253F%2520html%2560%2524%257Bthis.linkText%257D%2560%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2560%250A%2520%2520%2520%2520%2520%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%2560%253B%250A%2520%2520%257D%250A%257D%250A%250Adeclare%2520global%2520%257B%250A%2520%2520interface%2520HTMLElementTagNameMap%2520%257B%250A%2520%2520%2520%2520%27outline-link%27%253A%2520OutlineLink%253B%250A%2520%2520%257D%250A%257D)

- [Snippet 5](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520%250A%2520%2520%2520%2520%2520%2520html%2560%2524%257Bthis.linkHref%2520%250A%2520%2520%2520%2520%253F%2520html%2560%2560%2520%250A%2520%2520%2520%2520%253A%2520html%2560%2560%250A%2520%2520%257D%2560%253B%250A%257D)

- [Snippet 6](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=html%2560%253Cslot%253E%253C%252Fslot%253E%2560)

- [Snippet 7](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Coutline-link%253E%250A%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%253EPhase2%2520Technology%253C%252Fa%253E%250A%253C%252Foutline-link%253E)

- [Snippet 8](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Coutline-link%253E%250A%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%2520target%253D%2522_blank%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522%252Flogo.png%2522%2520alt%253D%2522Logo%2520image%2520for%2520Phase2%2520Technology%2522%2520%252F%253E%250A%2520%2520%253C%252Fa%253E%250A%253C%252Foutline-link%253E)

- [Snippet 9](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=670&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=render%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%2524%257Bthis.linkHref%250A%2520%2520%2520%2520%253F%2520html%2560%2520%250A%2520%2520%2520%2520%2520%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520href%253D%2524%257Bthis.linkHref%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520rel%253D%2522%2524%257BifDefined%28this.linkRel%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520target%253D%2522%2524%257BifDefined%28this.linkTarget%29%257D%2522%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%257Bthis.linkText%2520%253F%2520html%2560%2524%257Bthis.linkText%257D%2560%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2560%250A%2520%2520%2520%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D%2560%253B%250A%257D%250A)

- [Snippet 10](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%257Bthis.linkText%2520%253F%2520html%2560%2524%257Bthis.linkText%257D%2560%2520%253A%2520html%2560%253Cslot%253E%253C%252Fslot%253E%2560%257D)

- [Snippet 11](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253C%21--%2520%250A%2520%2520Create%2520a%2520fully%2520slotted%2520link.%250A%2520%2520This%2520relies%2520on%2520the%2520consumer%2520to%2520build%2520any%2520markup%2520required%250A%2520%2520to%2520render%2520the%2520actual%2520link%2520and%2520linked%2520item%28s%29.%250A--%253E%250A%253Coutline-link%253E%250A%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%2520target%253D%2522_blank%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522%252Flogo.png%2522%2520alt%253D%2522Logo%2520image%2520for%2520Phase2%2520Technology%2522%2520%252F%253E%250A%2520%2520%253C%252Fa%253E%250A%253C%252Foutline-link%253E%250A)

- [Snippet 12](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253C%21--%2520%250A%2520%2520Link%2520with%2520linkHref%2520passed%2520as%2520an%2520attribute%2520and%2520slotted%2520link%2520text.%2520%250A--%253E%250A%253Coutline-link%2520link-href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%253E%250A%2520%2520Phase2%250A%253C%252Foutline-link%253E%250A)

- [Snippet 13](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253C%21--%2520Link%2520with%2520linkHref%2520and%2520linkText%2520passed%2520as%2520attributes.%2520%2520--%253E%250A%253Coutline-link%250A%2520%2520link-href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%250A%2520%2520link-text%253D%2522Phase2%2522%250A%253E%250A%253C%252Foutline-link%253E%250A)

- [Snippet 14](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253C%21--%2520Link%2520with%2520all%2520the%2520attributes.%2520%2520--%253E%250A%253Coutline-link%250A%2520%2520link-href%253D%2522https%253A%252F%252Fwww.phase2technology.com%252F%2522%250A%2520%2520link-text%253D%2522Phase2%2522%250A%2520%2520link-rel%253D%2522prefetch%2522%250A%2520%2520link-target%253D%2522_blank%2522%250A%253E%250A%253C%252Foutline-link%253E)

- [Snippet 15](https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=a11y-dark&wt=none&l=application%2Ftypescript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Render%2520method%2520composing%2520together%2520three%2520different%2520template%2520partials.%250Arender%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%250A%2520%2520%2520%2520%2524%257Bthis.headerTemplate%257D%250A%2520%2520%2520%2520%2524%257Bthis.articleTemplate%257D%250A%2520%2520%2520%2520%2524%257Bthis.footerTemplate%257D%250A%2520%2520%2560%250A%257D%250A%250A%252F%252F%2520Template%2520partial%2520for%2520the%2520header%2520content.%250AheaderTemplate%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%253Cheader%253E%253C%252Fheader%253E%2560%250A%257D%250A%250A%252F%252F%2520Template%2520partial%2520for%2520the%2520article%2520content.%250AheaderTemplate%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%253Carticle%253E%253C%252Farticle%253E%2560%250A%257D%250A%250A%252F%252F%2520Template%2520partial%2520for%2520the%2520footer%2520content.%250AheaderTemplate%28%29%253A%2520TemplateResult%2520%257B%250A%2520%2520return%2520html%2560%253Cfooter%253E%253C%252Ffooter%253E%2560%250A%257D)
