import { html } from 'lit-html';
import { AdharPopover } from '@adhar-design-system/adhar-components/adhar-popover';

export default {
  title: 'AdharPopover',
  component: 'AdharPopover',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-popover
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-popover>
  `;
};

export const Default = (args) => Template(args);
