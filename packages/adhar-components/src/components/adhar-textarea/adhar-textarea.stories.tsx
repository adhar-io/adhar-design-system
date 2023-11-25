import { html } from 'lit-html';
import { AdharTextarea } from '@adhar-design-system/adhar-components/adhar-textarea';

export default {
  title: 'AdharTextarea',
  component: 'AdharTextarea',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <adhar-textarea
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></adhar-textarea>
  `;
};

export const Default = (args) => Template(args);
