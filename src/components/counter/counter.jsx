import '../badge/badge.jsx?type=jsx';

export const inferredObservability = true;

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { count } = this;

    return (
      <div>
        <button onclick={this.count -= 1}> -</button>
        <span>You have clicked <wcc-badge counter={count}></wcc-badge> times !!!</span>
        <button onclick={this.count += 1}> +</button>
      </div>
    );
  }
}

customElements.define('wcc-counter', Counter);