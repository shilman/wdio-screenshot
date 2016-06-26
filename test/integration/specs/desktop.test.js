import path from 'path';
import {assert} from 'chai';

import generateUUID from '../../../src/utils/generateUUID';
import compareImages from '../../helper/compareImages';

const tmpDir = path.join(process.cwd(), '.tmp');

const fixtureDir = path.join(process.cwd(), 'test/fixture');
const screenshotDir = path.join(fixtureDir, '/web/screenshots');

const screenStaticDocument480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-static-document-480.png'));
const screenStaticDocument1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-static-document-1600.png'));
const screenStaticElemenentFooter = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-static-element-footer.png'));
const screenStaticViewport480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-static-viewport-480.png'));
const screenStaticViewport1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-static-viewport-1600.png'));

const screenResponsiveDocument480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-document-480.png'));
const screenResponsiveDocument1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-document-1600.png'));
const screenResponsiveElemenentFooter480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-element-footer-480.png'));
const screenResponsiveElemenentFooter1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-element-footer-1600.png'));
const screenResponsiveViewport480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-viewport-480.png'));
const screenResponsiveViewport1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-viewport-1600.png'));

const screenResponsiveMinWidthDocument480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-min-width-document-480.png'));
const screenResponsiveMinWidthDocument1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-min-width-document-1600.png'));
const screenResponsiveMinWidthElemenentFooter = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-min-width-element-footer.png'));
const screenResponsiveMinWidthViewport480 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-min-width-viewport-480.png'));
const screenResponsiveMinWidthViewport1600 = getBrowserSpecificFile(path.join(screenshotDir, 'desktop-responsive-min-width-viewport-1600.png'));

function isIE() {
  const { browserName } = browser.desiredCapabilities;
  return browserName === 'internet explorer';
}

function getBrowserSpecificFile(screenshotPath) {
  const dir = path.dirname(screenshotPath);
  const ext = path.extname(screenshotPath);
  const file = path.basename(screenshotPath, ext);

  if (isIE()) {
    return path.join(dir, `${file}_ie${ext}`);
  }
  return screenshotPath;
}

describe('integration tests for desktop browsers', function () {

  context('static sites - static.html', function () {
    beforeEach(async function () {
      await browser.url('/static.html');
      await browser.pause(3000);
    });

    context('saveDocumentScreenshot', function () {
      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-document-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);

        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenStaticDocument480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-document-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenStaticDocument1600);
      });
    });

    context('saveElementScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-element-footer', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenStaticElemenentFooter);
      });

      it('with window size 1600px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-element-footer', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenStaticElemenentFooter);
      });
    });

    context('saveViewportScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-viewport-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenStaticViewport480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-static-viewport-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenStaticViewport1600);
      });
    });
  });

  context('responsive sites - responsive.html', function () {
    beforeEach(async function () {
      await browser.url('/responsive.html');
      await browser.pause(3000);
    });

    context('saveDocumentScreenshot', function () {
      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);

        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveDocument480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-document-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveDocument1600);
      });
    });

    context('saveElementScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenResponsiveElemenentFooter480);
      });

      it('with window size 1600px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenResponsiveElemenentFooter1600);
      });
    });

    context('saveViewportScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveViewport480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveViewport1600);
      });
    });
  });

  context('responsive sites with min-width - responsive-min-width.html', function () {
    beforeEach(async function () {
      await browser.url('/responsive-min-width.html');
      await browser.pause(3000);
    });

    context('saveDocumentScreenshot', function () {
      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-document-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);

        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveMinWidthDocument480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-document-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveDocumentScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveMinWidthDocument1600);
      });
    });

    context('saveElementScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-element-footer-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenResponsiveMinWidthElemenentFooter);
      });

      it('with window size 1600px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-element-footer-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveElementScreenshot(screenPath, '.footer');

        await compareImages(screenPath, screenResponsiveMinWidthElemenentFooter);
      });
    });

    context('saveViewportScreenshot', function () {

      it('with window size 480px', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-viewport-480', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 480, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveMinWidthViewport480);
      });

      it('with window size 1600', async function () {
        const screenPath = path.join(tmpDir, '/desktop-responsive-min-width-viewport-1600', `${generateUUID()}.png`);

        await browser.setViewportSize({width: 1600, height: 500});
        await browser.pause(500);
        await browser.saveViewportScreenshot(screenPath);

        await compareImages(screenPath, screenResponsiveMinWidthViewport1600);
      });
    });
  });

  // context.only('take screenshots', function () {
  //   context('responsive sites - responsive.html', function () {
  //     beforeEach(async function () {
  //       await browser.url('/responsive-min-width.html');
  //       await browser.pause(3000);
  //     });
  //
  //     context('saveDocumentScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveDocumentScreenshot(screenResponsiveMinWidthDocument480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.saveDocumentScreenshot(screenResponsiveMinWidthDocument1600);
  //       });
  //     });
  //
  //     context('saveElementScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveElementScreenshot(screenResponsiveMinWidthElemenentFooter, '.footer');
  //       });
  //
  //     });
  //
  //     context('saveViewportScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveViewportScreenshot(screenResponsiveMinWidthViewport480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.saveViewportScreenshot(screenResponsiveMinWidthViewport1600);
  //       });
  //     });
  //   });
  //
  //   context('responsive sites - responsive.html', function () {
  //     beforeEach(async function () {
  //       await browser.url('/responsive.html');
  //       await browser.pause(3000);
  //     });
  //
  //     context('saveDocumentScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveDocumentScreenshot(screenResponsiveDocument480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.saveDocumentScreenshot(screenResponsiveDocument1600);
  //       });
  //     });
  //
  //     context('saveElementScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveElementScreenshot(screenResponsiveElemenentFooter480, '.footer');
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.windowHandleSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.saveElementScreenshot(screenResponsiveElemenentFooter1600, '.footer');
  //       });
  //     });
  //
  //     context('saveViewportScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.saveViewportScreenshot(screenResponsiveViewport480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.saveViewportScreenshot(screenResponsiveViewport1600);
  //       });
  //     });
  //   });
  //
  //   context('static sites - static.html', function () {
  //     context('saveDocumentScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.url('/static.html');
  //         await browser.pause(3000);
  //         await browser.saveDocumentScreenshot(screenStaticDocument480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.url('/static.html');
  //         await browser.pause(1000);
  //         await browser.saveDocumentScreenshot(screenStaticDocument1600);
  //       });
  //     });
  //
  //     context('saveElementScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.url('/static.html');
  //         await browser.pause(3000);
  //         await browser.saveElementScreenshot(screenStaticElemenentFooter, '.footer');
  //       });
  //
  //     });
  //
  //     context('saveViewportScreenshot', function () {
  //       it('with window size 480px', async function () {
  //         await browser.setViewportSize({width: 480, height: 500});
  //         await browser.pause(500);
  //         await browser.url('/static.html');
  //         await browser.pause(3000);
  //         await browser.saveViewportScreenshot(screenStaticViewport480);
  //       });
  //
  //       it('with window size 1600', async function () {
  //         await browser.setViewportSize({width: 1600, height: 500});
  //         await browser.pause(500);
  //         await browser.url('/static.html');
  //         await browser.pause(1000);
  //         await browser.saveViewportScreenshot(screenStaticViewport1600);
  //       });
  //     });
  //   });
  // });

});
