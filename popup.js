document.getElementById('openInstagram').addEventListener('click',function(){
    chrome.tabs.create({url:'https://www.instagram.com'});
});