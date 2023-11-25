import { html } from 'lit-html';
import { AdharSkeleton } from '@adhar-design-system/adhar-components/adhar-skeleton';

export default {
  title: 'AdharSkeleton',
  component: 'AdharSkeleton',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-skeleton
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-skeleton>
  `;
};

export const Default = (args) => Template(args);
