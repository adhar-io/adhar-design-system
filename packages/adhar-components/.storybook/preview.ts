import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { defineCustomElements } from '@adhar-design-system/adhar-components/loader';

defineCustomElements();

const withThemeProvider = (storyFn, context) => {
  const cssClasses = { centered: context.parameters.layout === 'centered' };

  return html`
    <div class="bq-root ${classMap(cssClasses)}">${storyFn()}</div>
  `;
};
export const decorators = [withThemeProvider];
