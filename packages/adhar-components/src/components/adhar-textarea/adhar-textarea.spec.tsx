import { newSpecPage } from '@stencil/core/testing';
import { AdharTextarea } from './adhar-textarea';

describe('adhar-textarea', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharTextarea],
      html: '<adhar-textarea></adhar-textarea>',
    });
    expect(root).toEqualHtml(`
      <adhar-textarea>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-textarea>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharTextarea],
      html: `<adhar-textarea first="Stencil" last="'Don't call me a framework' JS"></adhar-textarea>`,
    });
    expect(root).toEqualHtml(`
      <adhar-textarea first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-textarea>
    `);
  });
});
