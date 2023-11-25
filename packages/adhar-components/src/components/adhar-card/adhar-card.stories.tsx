import { html } from 'lit-html';
import { AdharCard } from '@adhar-design-system/adhar-components/adhar-card';

export default {
  title: 'AdharCard',
  component: 'AdharCard',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-card
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-card>
  `;
};

export const Default = (args) => Template(args);
