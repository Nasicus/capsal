import { WebPlugin } from '@capacitor/core';
import { MsalPluginPlugin } from './definitions';

export class MsalPluginWeb extends WebPlugin implements MsalPluginPlugin {
  constructor() {
    super({
      name: 'MsalPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const MsalPlugin = new MsalPluginWeb();

export { MsalPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MsalPlugin);
