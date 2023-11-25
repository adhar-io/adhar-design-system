import { html } from 'lit-html';
import { AdharCheckbox } from '@adhar-design-system/adhar-components/adhar-checkbox';

export default {
  title: 'AdharCheckbox',
  component: 'AdharCheckbox',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-checkbox
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-checkbox>
  `;
};

export const Default = (args) => Template(args);
