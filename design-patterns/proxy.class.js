// class example of proxy design pattern

// RealSubject class
class WebPage {
  constructor(url) {
    this.url = url;
  }

  load() {
    console.log(`Loading web page from ${this.url}`);
  }
}

// Proxy class
class WebPageProxy {
  constructor(url) {
    this.url = url;
    this.cachedPage = null;
  }

  load() {
    if (!this.cachedPage) {
      this.cachedPage = new WebPage(this.url);
      this.cachedPage.load();
    } else {
      console.log(`Retrieving web page from cache for ${this.url}`);
    }
  }
}

// Usage
const pageProxy1 = new WebPageProxy("https://example.com/page1");
const pageProxy2 = new WebPageProxy("https://example.com/page2");

pageProxy1.load(); // Loading web page from https://example.com/page1
pageProxy2.load(); // Loading web page from https://example.com/page2

// Rapid the already loaded page
pageProxy1.load(); // Retrieving web page from cache for https://example.com/page1
