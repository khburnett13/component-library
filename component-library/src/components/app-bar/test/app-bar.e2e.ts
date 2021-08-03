import { newE2EPage } from '@stencil/core/testing';

describe('app-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-bar></app-bar>');

    const element = await page.find('app-bar');
    expect(element).toHaveClass('hydrated');
  });
});
