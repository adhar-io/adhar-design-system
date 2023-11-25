import { newE2EPage } from '@stencil/core/testing';

describe('adhar-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<adhar-tooltip></adhar-tooltip>');
    const element = await page.find('adhar-tooltip');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<adhar-tooltip></adhar-tooltip>');
    const component = await page.find('adhar-tooltip');
    const element = await page.find('adhar-tooltip >>> div');
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
