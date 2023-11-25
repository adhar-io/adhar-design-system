import { html } from 'lit-html';
import { AdharSwitch } from '@adhar-design-system/adhar-components/adhar-switch';

export default {
  title: 'AdharSwitch',
  component: 'AdharSwitch',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-switch
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-switch>
  `;
};

export const Default = (args) => Template(args);
