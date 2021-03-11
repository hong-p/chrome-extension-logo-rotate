console.log("from background");

chrome.tabs.onActivated.addListener(tab =>{
    console.log(tab);
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        if(/^http/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file : './style.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=>{
                console.log('Injected!!');
            })
        }
    })
})


chrome.tabs.onUpdated.addListener(
    function(tabId,changeInfo,tab){
        if (/^http/.test(tab.url) && changeInfo.url === undefined){
            chrome.tabs.insertCSS(null, {file : './style.css'});
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, ()=>{
            console.log('Injected!!');
        } );
        }
    }
);