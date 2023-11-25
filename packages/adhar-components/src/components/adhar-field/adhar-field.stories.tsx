import { html } from 'lit-html';
import { AdharField } from '@adhar-design-system/adhar-components/adhar-field';

export default {
  title: 'AdharField',
  component: 'AdharField',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-field
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-field>
  `;
};

export const Default = (args) => Template(args);
