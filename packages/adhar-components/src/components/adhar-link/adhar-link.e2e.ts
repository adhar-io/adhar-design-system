import { newE2EPage } from '@stencil/core/testing';

describe('adhar-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<adhar-link></adhar-link>');
    const element = await page.find('adhar-link');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<adhar-link></adhar-link>');
    const component = await page.find('adhar-link');
    const element = await page.find('adhar-link >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
