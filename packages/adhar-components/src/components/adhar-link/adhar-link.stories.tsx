import { html } from 'lit-html';
import { AdharLink } from '@adhar-design-system/adhar-components/adhar-link';

export default {
  title: 'AdharLink',
  component: 'AdharLink',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-link
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-link>
  `;
};

export const Default = (args) => Template(args);
