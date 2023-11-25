import { html } from 'lit-html';
import { AdharInfo } from '@adhar-design-system/adhar-components/adhar-info';

export default {
  title: 'AdharInfo',
  component: 'AdharInfo',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-info
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-info>
  `;
};

export const Default = (args) => Template(args);
