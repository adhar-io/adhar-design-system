import { html } from 'lit-html';
import { AdharAccordion } from '@adhar-design-system/adhar-components/adhar-accordion';

export default {
  title: 'AdharAccordion',
  component: 'AdharAccordion',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-accordion
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-accordion>
  `;
};

export const Default = (args) => Template(args);
