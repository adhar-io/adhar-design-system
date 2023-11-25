import { newSpecPage } from '@stencil/core/testing';
import { AdharDialog } from './adhar-dialog';

describe('adhar-dialog', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharDialog],
      html: '<adhar-dialog></adhar-dialog>',
    });
    expect(root).toEqualHtml(`
      <adhar-dialog>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-dialog>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharDialog],
      html: `<adhar-dialog first="Stencil" last="'Don't call me a framework' JS"></adhar-dialog>`,
    });
    expect(root).toEqualHtml(`
      <adhar-dialog first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-dialog>
    `);
  });
});
