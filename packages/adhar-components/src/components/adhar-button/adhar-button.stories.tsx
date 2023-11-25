import { html } from 'lit-html';
import { AdharButton } from '@adhar-design-system/adhar-components/adhar-button';

export default {
  title: 'AdharButton',
  component: 'AdharButton',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-button
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-button>
  `;
};

export const Default = (args) => Template(args);
