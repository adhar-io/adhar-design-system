import { html } from 'lit-html';
import { AdharMenu } from '@adhar-design-system/adhar-components/adhar-menu';

export default {
  title: 'AdharMenu',
  component: 'AdharMenu',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-menu
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-menu>
  `;
};

export const Default = (args) => Template(args);
