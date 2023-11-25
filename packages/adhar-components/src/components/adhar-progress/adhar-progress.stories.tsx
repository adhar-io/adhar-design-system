import { html } from 'lit-html';
import { AdharProgress } from '@adhar-design-system/adhar-components/adhar-progress';

export default {
  title: 'AdharProgress',
  component: 'AdharProgress',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-progress
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-progress>
  `;
};

export const Default = (args) => Template(args);
