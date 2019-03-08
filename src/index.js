import saveDocumentScreenshot from './commands/saveDocumentScreenshot';
import saveElementScreenshot from './commands/saveElementScreenshot';
import saveViewportScreenshot from './commands/saveViewportScreenshot';

import makeDocumentScreenshot from './modules/makeDocumentScreenshot';
import makeElementScreenshot from './modules/makeElementScreenshot';
import makeViewportScreenshot from './modules/makeViewportScreenshot';
import beforeScreenshot from './modules/beforeScreenshot';
import afterScreenshot from './modules/afterScreenshot';

class WDIOScreenshot {
  constructor(browser, options) {
    if (!browser) {
      throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot');
    }

    // add commands to WebdriverIO instance
    browser.addCommand('saveDocumentScreenshot', saveDocumentScreenshot);
    browser.addCommand('saveElementScreenshot', saveElementScreenshot);
    browser.addCommand('saveViewportScreenshot', saveViewportScreenshot);
  }
}

// export init function for initialization
export function init(webdriverInstance, options) {
  return new WDIOScreenshot(webdriverInstance, options);
}

// export also helpers for regression lib
export {
  makeDocumentScreenshot,
  makeElementScreenshot,
  makeViewportScreenshot,
  beforeScreenshot,
  afterScreenshot,
};
