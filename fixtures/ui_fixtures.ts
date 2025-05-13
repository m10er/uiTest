import { PageManager } from '../pages/pageManager';
import { test as baseTest, Page } from '@playwright/test';

type UiFixtures = {
    pageManager: PageManager;
  };
  
  export const test = baseTest.extend<UiFixtures>({
    pageManager: async ({page}, use) => {
      
      const pageManager = new PageManager(page);
      await use(pageManager); 
      await page.close();
    },
  
  
  });
  
  export { expect } from '@playwright/test';