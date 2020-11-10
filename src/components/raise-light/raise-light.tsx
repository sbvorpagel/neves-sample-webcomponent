import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'raise-light',
  styleUrl: 'raise-light.css',
  shadow: true,
})
export class RaiseLight {

  render() {
    return (
      <Host>
        <raise-form />
      </Host>
    );
  }

}
