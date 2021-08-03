import { newSpecPage } from '@stencil/core/testing';
import { AppBar } from '../app-bar';

describe('app-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBar],
      html: `<app-bar></app-bar>`
    });
    expect(page.root).toEqualHtml(`
      <app-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-bar>
    `);
  });
});
