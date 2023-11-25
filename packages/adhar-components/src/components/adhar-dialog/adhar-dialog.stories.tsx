import { html } from 'lit-html';
import { AdharDialog } from '@adhar-design-system/adhar-components/adhar-dialog';

export default {
  title: 'AdharDialog',
  component: 'AdharDialog',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-dialog
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-dialog>
  `;
};

export const Default = (args) => Template(args);
