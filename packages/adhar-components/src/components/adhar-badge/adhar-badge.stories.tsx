import { html } from 'lit-html';
import { AdharBadge } from '@adhar-design-system/adhar-components/adhar-badge';

export default {
  title: 'AdharBadge',
  component: 'AdharBadge',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-badge
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-badge>
  `;
};

export const Default = (args) => Template(args);
