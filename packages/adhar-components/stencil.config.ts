import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'adhar-components',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      includeGlobalScripts: false,
    },

    reactOutputTarget({
      componentCorePackage: '@adhar-design-system/adhar-components',
      proxiesFile:
        '../../../packages/adhar-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@adhar-design-system/adhar-components',
      directivesProxyFile:
        '../../../packages/adhar-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/adhar-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
