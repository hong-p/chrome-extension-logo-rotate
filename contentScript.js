console.log('contentScript.js');

// message 보내고 응답 받기(onMessage.js injection)
chrome.runtime.sendMessage('onMessage', (response)=> {
    console.log(`message from background: ${JSON.stringify(response)}`);
});
