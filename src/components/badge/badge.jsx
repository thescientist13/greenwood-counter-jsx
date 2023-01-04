export const inferredObservability = true;

export default class BadgeComponent extends HTMLElement {

  constructor() {
    super();

    this.counter = 0;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { counter } = this;
    const condition = ` (${counter % 2 === 0 ? 'even' : 'odd'}) `;
    // const conditionalClass = ` (${predicate ? 'even' : 'odd'}) `;
    // const conditionalText = predicate ? ' 🥳' : '';

    // TODO  <span class={conditionalClass}>{counter}<span>{conditionalText}</span></span>
    // should have attr AND text instructions
    // though technically conditionalClass should only observe off predicate
    return (
      <span><span>{counter}</span><span>{condition}</span></span>
    );
  }
}

customElements.define('wcc-badge', BadgeComponent);