let fs = require('fs');
let input = process.argv.slice(2);
console.log("input",input);
let options =[];
let filePaths=[];
for(let i =0; i<input.length;i++){
    if(input[i]=="-s" || input[i]=="-b" || input[i]=="-n"){
        options.push(input[i]);
    }
    else{
        filePaths.push(input[i]);
    }
}

console.log("options",options);
console.log("filePaths", filePaths);

for(let i=0;i<filePaths.length;i++){
    let isFilePresent = fs.existsSync(filePaths[i]);
    if(isFilePresent==false){
        console.log("filepath", filePaths[i], "does not exist")
        return;
    }
}
let totalcontent = "";
for(let i =0;i<filePaths.length;i++){
    let contentOfCurrent = fs.readFileSync(filePaths[i]);
    totalcontent+=contentOfCurrent+ "\n";
}

console.log(totalcontent);
//implements

let isOption = options.includes("-s");
if(isOption==true){
    let contentArr = totalcontent.split("\r\n");
    let tempArr = [];
    for(let i =0;i<contentArr.length;i++){
        if(contentArr[i]!==""){
            tempArr.push(contentArr[i]);
        }
    }
    totalcontent=tempArr.join("\r\n");
}

let isN=options.includes("-n");
if(isN==true){
    let count=1;
    let contentArr=totalcontent.split("\r\n");

    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=count+". "+contentArr[i];
        count++;
    }
    console.log(contentArr);
}
console.log(totalcontent);
//-s option implemented

//node wcat.js -s -b -n "f1.txt"
//node wcat.js -s -b -n "f1.txt" "f5.txt" "f9.txt"