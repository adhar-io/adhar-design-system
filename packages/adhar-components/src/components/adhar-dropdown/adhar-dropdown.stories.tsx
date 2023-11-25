import { html } from 'lit-html';
import { AdharDropdown } from '@adhar-design-system/adhar-components/adhar-dropdown';

export default {
  title: 'AdharDropdown',
  component: 'AdharDropdown',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-dropdown
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-dropdown>
  `;
};

export const Default = (args) => Template(args);
