import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-bar',
  styleUrl: 'app-bar.scss',
  shadow: true
})
export class AppBar {
  @Prop() siteName: string;

  render() {
    return (
      <Host>
        <header>
          <h1>{this.siteName}</h1>
          <menu>
            <slot></slot>
          </menu>
        </header>
      </Host>
    );
  }
}
