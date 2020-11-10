import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'raise-ibatitude',
  styleUrl: 'raise-ibatitude.css',
  shadow: true,
})
export class RaiseIbatitude {

  render() {
    return (
      <Host>
        <raise-form />
      </Host>
    );
  }

}
