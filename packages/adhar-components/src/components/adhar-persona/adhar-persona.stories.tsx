import { html } from 'lit-html';
import { AdharPersona } from '@adhar-design-system/adhar-components/adhar-persona';

export default {
  title: 'AdharPersona',
  component: 'AdharPersona',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-persona
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-persona>
  `;
};

export const Default = (args) => Template(args);
