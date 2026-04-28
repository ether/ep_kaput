import {expect, test} from '@playwright/test';
import {getPadBody, goToNewPad} from 'ep_etherpad-lite/tests/frontend-new/helper/padHelper';

// The legacy spec deliberately spammed console.error in an infinite loop to
// demonstrate ep_kaput's crash-reporting hook; that is not a meaningful
// frontend test under Playwright. Replace with a smoke test that exercises
// pad loading with the plugin installed (the hook-side behaviour is exercised
// in the backend tests).

test.beforeEach(async ({page}) => {
  await goToNewPad(page);
});

test.describe('ep_kaput', () => {
  test('pad loads with ep_kaput installed', async ({page}) => {
    const padBody = await getPadBody(page);
    await expect(padBody).toBeVisible();
  });
});
