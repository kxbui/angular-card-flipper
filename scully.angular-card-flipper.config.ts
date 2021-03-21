import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

setPluginConfig(baseHrefRewrite, { href: '/angular-card-flipper/' });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-card-flipper',
  outDir: './dist/static',
  defaultPostRenderers: [baseHrefRewrite],
  routes: {}
};
