import { html } from 'lit-html';
import { AdharMessage } from '@adhar-design-system/adhar-components/adhar-message';

export default {
  title: 'AdharMessage',
  component: 'AdharMessage',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-message
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-message>
  `;
};

export const Default = (args) => Template(args);
