import { newSpecPage } from '@stencil/core/testing';
import { AdharTab } from './adhar-tab';

describe('adhar-tab', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharTab],
      html: '<adhar-tab></adhar-tab>',
    });
    expect(root).toEqualHtml(`
      <adhar-tab>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-tab>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharTab],
      html: `<adhar-tab first="Stencil" last="'Don't call me a framework' JS"></adhar-tab>`,
    });
    expect(root).toEqualHtml(`
      <adhar-tab first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-tab>
    `);
  });
});
