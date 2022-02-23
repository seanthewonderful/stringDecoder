
// code = '0h1ie2nml1cl3pppo'

// function decoder(code) {
//     let codeArr = Array.from(code)
//     for(i=0; i<code.length; i++){
//         if(Number.isInteger(codeArr[i])){
//             let x = codeArr[i]+1
//             return codeArr[i+x]
//         }
//     }
// }

// console.log(decoder(code))


//answer
// let decoder = (code) => {
//     let decodeWord = "";

//     for (let i = 0; i < code.length; i++) {
//         if(!(isNaN(code[i]))){
            
//             let skipNum = parseInt(code[i])+1;
//             decodeWord += code[i + skipNum];
//         }
//     }
//     return decodeWord;
// }

// console.log(decoder('2bna0p1mp2osl0e'));

const decoder = (code) => {
    let splitStr = code.split("")
    let result = ""

for(i=0;i<splitStr.length; i++){
    if(!isNaN(+splitStr[i])) {
        i += splitStr[i]
    }else {
        result += splitStr[i]
    }
}return result
}