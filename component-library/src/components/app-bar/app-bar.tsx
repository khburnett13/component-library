import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-bar',
  styleUrl: 'app-bar.scss',
  shadow: true
})
export class AppBar {
  // test

  render() {
    return (
      <Host>
        <header></header>
        <slot></slot>
      </Host>
    );
  }
}
