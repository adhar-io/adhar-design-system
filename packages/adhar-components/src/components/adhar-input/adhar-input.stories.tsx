import { html } from 'lit-html';
import { AdharInput } from '@adhar-design-system/adhar-components/adhar-input';

export default {
  title: 'AdharInput',
  component: 'AdharInput',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-input
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-input>
  `;
};

export const Default = (args) => Template(args);
