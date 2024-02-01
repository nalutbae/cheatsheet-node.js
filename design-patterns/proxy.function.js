// class example of proxy design pattern

// RealSubject function
function createWebPage(url) {
  return {
    load: function () {
      console.log(`Loading web page from ${url}`);
    },
  };
}

// Proxy function
function createWebPageProxy(url) {
  let cachedPage = null;

  return {
    load: function () {
      if (!cachedPage) {
        cachedPage = createWebPage(url);
        cachedPage.load();
      } else {
        console.log(`Retrieving web page from cache for ${url}`);
      }
    },
  };
}

// Usage
const pageProxy1 = createWebPageProxy("https://example.com/page1");
const pageProxy2 = createWebPageProxy("https://example.com/page2");

pageProxy1.load(); // Loading web page from https://example.com/page1
pageProxy2.load(); // Loading web page from https://example.com/page2

// re -load the already loaded page
pageProxy1.load(); // Retrieving web page from cache for https://example.com/page1
