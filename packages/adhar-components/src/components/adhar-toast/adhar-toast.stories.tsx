import { html } from 'lit-html';
import { AdharToast } from '@adhar-design-system/adhar-components/adhar-toast';

export default {
  title: 'AdharToast',
  component: 'AdharToast',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-toast
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-toast>
  `;
};

export const Default = (args) => Template(args);
