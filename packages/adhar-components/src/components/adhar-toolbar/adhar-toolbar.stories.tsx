import { html } from 'lit-html';
import { AdharToolbar } from '@adhar-design-system/adhar-components/adhar-toolbar';

export default {
  title: 'AdharToolbar',
  component: 'AdharToolbar',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-toolbar
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-toolbar>
  `;
};

export const Default = (args) => Template(args);
