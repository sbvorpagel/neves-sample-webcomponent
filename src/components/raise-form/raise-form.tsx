import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'raise-form',
  styleUrl: 'raise-form.css',
  shadow: true,
})
export class RaiseForm {

  render() {
    return (
      <Host>
        <ion-card>
          <ion-item>
            <ion-label>Nome</ion-label>
            <ion-input type="text" />
          </ion-item>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email" />
          </ion-item>
          <ion-button>Registrar</ion-button>
        </ion-card>
      </Host>
    );
  }

}
