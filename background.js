browser.contextMenus.create({
    id: "show-flag-names",
    title: "Show Countries"
  });
  
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "show-flag-names") {
      browser.tabs.executeScript({
        file: "show-countries.js"
      });
    }
  });