import { Page, WikipediaData } from "../types/WikipediaData";

export function constants() {
  return {
    appName: 'Wiki Gallery',
  }
}

export function joinStyles(...styles: any[]) {
  return styles.filter(s => Boolean(s)).join(' ');
}

export function nextPage(data: WikipediaData[], currentPage: Page): Page | undefined {
  let page = data[currentPage.dataIndex].pages[currentPage.index + 1];
  if (!page) {
    let nextDataIndex = currentPage.dataIndex + 1;
    if (data[nextDataIndex]) {
      page = data[nextDataIndex].pages[0];
    }
  }
  return page;
}

export function previousPage(data: WikipediaData[], currentPage: Page): Page | undefined {
  let page = data[currentPage.dataIndex].pages[currentPage.index - 1];
  if (!page) {
    let previousDataIndex = currentPage.dataIndex - 1;
    if (data[previousDataIndex]) {
      const pagesLength = data[previousDataIndex].pages.length;
      page = data[previousDataIndex].pages[pagesLength - 1];
    }
  }
  return page;
}
