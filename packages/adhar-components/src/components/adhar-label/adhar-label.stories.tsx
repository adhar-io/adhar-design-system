import { html } from 'lit-html';
import { AdharLabel } from '@adhar-design-system/adhar-components/adhar-label';

export default {
  title: 'AdharLabel',
  component: 'AdharLabel',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-label
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-label>
  `;
};

export const Default = (args) => Template(args);
