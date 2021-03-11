console.log("from background");

// 탭이 활성화 될때 감지되는 리스너 
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

// 화면이 refresh 될때 감지하는 리스너 
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