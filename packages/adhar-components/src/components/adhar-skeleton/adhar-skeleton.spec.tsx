import { newSpecPage } from '@stencil/core/testing';
import { AdharSkeleton } from './adhar-skeleton';

describe('adhar-skeleton', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharSkeleton],
      html: '<adhar-skeleton></adhar-skeleton>',
    });
    expect(root).toEqualHtml(`
      <adhar-skeleton>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-skeleton>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharSkeleton],
      html: `<adhar-skeleton first="Stencil" last="'Don't call me a framework' JS"></adhar-skeleton>`,
    });
    expect(root).toEqualHtml(`
      <adhar-skeleton first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-skeleton>
    `);
  });
});
