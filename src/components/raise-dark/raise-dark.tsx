import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'raise-dark',
  styleUrl: 'raise-dark.css',
  shadow: true,
})
export class RaiseDark {

  render() {
    return (
      <Host>
        <raise-form />
      </Host>
    );
  }

}
