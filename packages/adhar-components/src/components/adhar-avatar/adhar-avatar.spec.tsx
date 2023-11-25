import { newSpecPage } from '@stencil/core/testing';
import { AdharAvatar } from './adhar-avatar';

describe('adhar-avatar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharAvatar],
      html: '<adhar-avatar></adhar-avatar>',
    });
    expect(root).toEqualHtml(`
      <adhar-avatar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-avatar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharAvatar],
      html: `<adhar-avatar first="Stencil" last="'Don't call me a framework' JS"></adhar-avatar>`,
    });
    expect(root).toEqualHtml(`
      <adhar-avatar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-avatar>
    `);
  });
});
