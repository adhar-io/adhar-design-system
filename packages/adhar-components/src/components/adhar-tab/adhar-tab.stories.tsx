import { html } from 'lit-html';
import { AdharTab } from '@adhar-design-system/adhar-components/adhar-tab';

export default {
  title: 'AdharTab',
  component: 'AdharTab',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-tab
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-tab>
  `;
};

export const Default = (args) => Template(args);
