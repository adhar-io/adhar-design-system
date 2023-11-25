import { html } from 'lit-html';
import { AdharSlider } from '@adhar-design-system/adhar-components/adhar-slider';

export default {
  title: 'AdharSlider',
  component: 'AdharSlider',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-slider
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-slider>
  `;
};

export const Default = (args) => Template(args);
