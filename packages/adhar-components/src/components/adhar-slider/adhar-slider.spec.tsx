import { newSpecPage } from '@stencil/core/testing';
import { AdharSlider } from './adhar-slider';

describe('adhar-slider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AdharSlider],
      html: '<adhar-slider></adhar-slider>',
    });
    expect(root).toEqualHtml(`
      <adhar-slider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </adhar-slider>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AdharSlider],
      html: `<adhar-slider first="Stencil" last="'Don't call me a framework' JS"></adhar-slider>`,
    });
    expect(root).toEqualHtml(`
      <adhar-slider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </adhar-slider>
    `);
  });
});
