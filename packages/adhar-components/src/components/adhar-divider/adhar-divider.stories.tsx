import { html } from 'lit-html';
import { AdharDivider } from '@adhar-design-system/adhar-components/adhar-divider';

export default {
  title: 'AdharDivider',
  component: 'AdharDivider',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-divider
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-divider>
  `;
};

export const Default = (args) => Template(args);
