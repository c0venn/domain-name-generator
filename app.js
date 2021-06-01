window.onload = () =>{
    document.querySelector("#btn").addEventListener("click",() =>{
    document.querySelector('#generator').innerHTML = generatedomain();    
});
console.log("hello");
};
let generatedomain = () => {
    let pronoun = ["your" ,"us", "our", "my","the"];
    let subject = ["page", "link", "module", "magic"];
    let noun = ["intelligence","technology","mobile","loyalty"];
    let extensions =[".com",".net",".us",".io",".tv",".click"];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjectIndx = Math.floor(Math.random() * subject.length);
    let nounIndx = Math.floor(Math.random() * noun.length);
    let extensionsIndx = Math.floor(Math.random() * extensions.length);
    
    return pronoun[proIndx] + '' + subject[subjectIndx] + '' + noun[nounIndx] + '' + extensions[extensionsIndx];
}