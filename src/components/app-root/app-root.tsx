import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <raise-light />
        <raise-dark />
        <raise-ibatitude />
      </ion-app>
    );
  }
}
