console.log("from background");

// 참고 https://m.blog.naver.com/is_king/221581768105


// 화면이 refresh 될때 감지하는 리스너 
// /^http(s)?:\/\/[\w]*/
// / -> 정규식 시작
// ^ -> 텍스트 시작
// http(s)? 는 http or https
// :\/\/ -> ://
// [\w]* 아무 문자나 숫자 개수 제한없음 
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
    // console.log(changeInfo)
    // console.log(tab)
    if(/^https:\/\/chrome/.test(tab.url)) return;
    if (/^http(s)?:\/\/[\w]*/.test(tab.url) && changeInfo.status === 'complete'){
        chrome.tabs.insertCSS(null, {file : './style.css'});
        chrome.tabs.executeScript(null, {file: "./foreground.js"}, ()=>{
            console.log('Injected!!');
        });
    }
});


// onMessage 메시지 받으면 onMessage.js 파일 injection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == "onMessage"){
        chrome.tabs.executeScript({
        file: 'onMessage.js'
        });
    }
    sendResponse({result:'onMessage.js injected'});
    // Returning true is required here!
    return true;
});

