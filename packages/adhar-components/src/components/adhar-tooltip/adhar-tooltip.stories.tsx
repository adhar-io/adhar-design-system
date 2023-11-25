import { html } from 'lit-html';
import { AdharTooltip } from '@adhar-design-system/adhar-components/adhar-tooltip';

export default {
  title: 'AdharTooltip',
  component: 'AdharTooltip',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-tooltip
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-tooltip>
  `;
};

export const Default = (args) => Template(args);
