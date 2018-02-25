function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query
  var queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(queryInfo, tabs => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the query. When popup is opened, there should be a window and at least one tab, so we assume that |tabs| is a non-empty array. A window can have only have one active tab at a time, so array consts of exactly one tab
    var tab = tabs[0];

    // tab is a plain object
    // tab.url is only available if the "activeTab permission is declared."
    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string')

    callback(url);
  });
}