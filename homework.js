let arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
let arrayOfWordsCaps = [];
const complicatedArray = ['cucumber', 44, true];

function makeAllCaps(){
    arrayOfWords.forEach(element => {
        element = element.toUpperCase()
        arrayOfWordsCaps.push(element)
    });
    console.log("caps", arrayOfWordsCaps)
}

function makeAllSorts(){
    arrayOfWordsCaps.sort()
    console.log("sort", arrayOfWordsCaps)
}

let promise = new Promise(()=>{
    setTimeout(()=>{
        makeAllCaps()
    },2000)
    setTimeout(()=>{
        makeAllSorts()
    },3000)
})  