 function getPageLinkDomains() {
    return Array.from(document.getElementsByTagName('a'))
        .map(link => link.href
            .replace('http://','')
            .replace('https://','')
            .replace('wwww','')
            .split('/')
            .shift()
            )
        .reduce((uniqueDomains, domain) => {
            if (uniqueDomains.includes(domain)) return uniqueDomains;
            return [...uniqueDomains, domain];
            
            
        },[]) ;
        
}

let result = getPageLinkDomains();
document.getElementById('resultFunc').innerHTML=result;
