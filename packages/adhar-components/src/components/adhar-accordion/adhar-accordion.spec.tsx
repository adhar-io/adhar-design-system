import { newSpecPage } from '@stencil/core/testing';
import { AdharAccordion } from './adhar-accordion';

describe('adhar-accordion', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharAccordion],
      html: '<adhar-accordion></adhar-accordion>',
    });
    expect(root).toEqualHtml(`
      <adhar-accordion>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-accordion>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharAccordion],
      html: `<adhar-accordion first="Stencil" last="'Don't call me a framework' JS"></adhar-accordion>`,
    });
    expect(root).toEqualHtml(`
      <adhar-accordion first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-accordion>
    `);
  });
});
