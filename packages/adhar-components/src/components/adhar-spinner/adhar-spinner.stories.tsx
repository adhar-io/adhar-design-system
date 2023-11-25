import { html } from 'lit-html';
import { AdharSpinner } from '@adhar-design-system/adhar-components/adhar-spinner';

export default {
  title: 'AdharSpinner',
  component: 'AdharSpinner',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-spinner
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-spinner>
  `;
};

export const Default = (args) => Template(args);
