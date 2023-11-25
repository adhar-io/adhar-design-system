import { html } from 'lit-html';
import { AdharAvatar } from '@adhar-design-system/adhar-components/adhar-avatar';

export default {
  title: 'AdharAvatar',
  component: 'AdharAvatar',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-avatar
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-avatar>
  `;
};

export const Default = (args) => Template(args);
