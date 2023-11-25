import { html } from 'lit-html';
import { AdharRadio } from '@adhar-design-system/adhar-components/adhar-radio';

export default {
  title: 'AdharRadio',
  component: 'AdharRadio',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-radio
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-radio>
  `;
};

export const Default = (args) => Template(args);
