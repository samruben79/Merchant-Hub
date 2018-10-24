document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        var links = [];
        var tds = $('table').children('tbody').children('tr').children('td');
        console.log("TD:",tds)
        var aLink = tds.children('a');
        console.log(aLink)
        for (var i = 0; i < aLink.length; i++){
          var tdLink = aLink.attr("href");
          links.push(tdLink)
        }
        console.log(links)
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});
