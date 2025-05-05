import { test, expect } from '@playwright/test';
import { BaseHelper } from '../pages/baseHelper';

test('has title', async ({ page }) => {

  const baseHelper = new BaseHelper(page);
  
});
