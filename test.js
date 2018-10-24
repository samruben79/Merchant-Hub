document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {

      var links = [];
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        var links = [];
        var tds = $('#program_directory_table').find('a').each(function(){
          var link = $(this).attr('href')
          links.push(link);


        });
        console.log(links)
        // console.log(tds)
        // aLink = tds.children('a');
        // console.log('Alink:',aLink);
        // var link = aLink.attr('href')
        // for(var i = 0; i< aLink.length; i++){
        //   var link = aLink.attr('href')
        //   links.push(link);


        // console.log(links)
        // var links = aLink.attr('href')
        // console.log('href',links)
        // var aLink = tds.children('a')
        // console.log(aLink)

        // console.log(document.body);
        // return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        // console.log('Popup script:')
        // console.log(results[0]);
    });
});
