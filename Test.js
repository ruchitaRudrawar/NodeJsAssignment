const readline = require('readline');
const fs = require('fs');
//Object creation of Readline Interface
const rl = readline.createInterface({
  input: fs.createReadStream('datafile.csv')
});
//WriteStream Creation
var ws = fs.createWriteStream('FirstJson.json');
var ws1 = fs.createWriteStream('SecondJson.json');
var ws2 = fs.createWriteStream('ThirdJson.json');
//CODE FOR FIRST JSON
//FUNCTION CREATION
function First(countryName,population)
{
  this.countryName =countryName;
  this.population =population;
};
var a=[];
var count=0;
var popIndex,countryIndex;
// ON() FOR LINE EVENT
rl.on('line', function (line) {
  if(count==0){
    var headers=line.split(",");
    popIndex = headers.indexOf("Population (Millions) - 2013");
    countryIndex = headers.indexOf("Country Name");
    count=1;
  } //END OF IF
  else
  {
    var hi='';
    var lineInfo=line.split(",");
    for(var i=0,j=0;i<lineInfo.length;i++){
      if(lineInfo[countryIndex]!='European Union' && lineInfo[countryIndex]!='World'){
        hi = new First(lineInfo[countryIndex],lineInfo[popIndex]);
      } //END OF INNER IF
    } // END OF FOR
    if(hi.length!=0){
      a.push(hi);
    } // END OF IF
  } //END OF ELSE
}); //END OF LINE()
//ON() FOR CLOSE EVENT
rl.on('close', function() {
  for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
      if((parseFloat(a[i].population,10))>(parseFloat(a[j].population,10))){
        var temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }//END OF IF
    }//END OF INNER FOR
  }//END OF MAIN FOR
  ws.write(JSON.stringify(a.reverse()));
}); //END OF CLOSE

//CODE FOR SECOND JSON
//FUNCTION CREATION
function Second(countryName,Gdp)
{
  this.countryName =countryName;
  this.Gdp =Gdp;
};
var a1=[];
var count1=0;
var countryIndex1;
var gdpIndex;
// ON() FOR LINE EVENT
rl.on('line', function (line) {
  if(count1==0){
    var headers=line.split(",");
    gdpIndex = headers.indexOf("GDP Billions (US$) - 2013");
    countryIndex1 = headers.indexOf("Country Name");
    count1=1;
  } //END OF IF
  else
  {
    var hi1='';
    var lineInfo=line.split(",");
    for(var i=0,j=0;i<lineInfo.length;i++){
      if(lineInfo[countryIndex1]!='European Union' && lineInfo[countryIndex1]!='World'){
        hi1 = new Second(lineInfo[countryIndex1],lineInfo[gdpIndex]);
      } //END OF IF
    } //END OF FOR
    if(hi1.length!=0){
      a1.push(hi1);
    } //END OF IF
  } //END OF ELSE
}); //END OF LINE()
//ON() FOR CLOSE EVENT
rl.on('close', function() {
  for(var i=0;i<a1.length;i++){
    for(var j=i+1;j<a1.length;j++){
      if((parseFloat(a1[i].Gdp,10))>(parseFloat(a1[j].Gdp,10))){
        var temp=a1[i];
        a1[i]=a1[j];
        a1[j]=temp;
      } //END OF IF
    } //END OF INNER FOR
  }//END OF MAIN FOR
  ws1.write(JSON.stringify(a1.reverse()));
}); //END OF CLOSE

//CODE FOR THIRD JSON
//FUNCTION CREATION
function Third(countryName,purchasingPower)
{
  this.countryName =countryName;
  this.purchasingPower =purchasingPower;
};
var a2=[];
var count2=0;
var countryIndex2;
var purchasingPowerIndex;
// ON() FOR LINE EVENT
rl.on('line', function (line) {
  if(count2==0){
    var headers=line.split(",");
    purchasingPowerIndex = headers.indexOf("Purchasing Power in Billions ( Current International Dollar) - 2013");
    countryIndex2 = headers.indexOf("Country Name");
    count2=1;
  } //END OF IF
  else
  {
    var hi2='';
    var lineInfo=line.split(",");
    for(var i=0,j=0;i<lineInfo.length;i++){
      if(lineInfo[countryIndex2]!='European Union' && lineInfo[countryIndex2]!='World'){
        hi2 = new Third(lineInfo[countryIndex2],lineInfo[purchasingPowerIndex]);
      } //END OF IF
    } //END OF FOR LOOP
    if(hi2.length!=0){
      a2.push(hi2);
    } //END OF IF
  } //END OF ELSE
}); //END OF LINE()
//ON() FOR CLOSE EVENT
rl.on('close', function() {
  for(var i=0;i<a2.length;i++){
    for(var j=i+1;j<a2.length;j++){
      if((parseFloat(a2[i].purchasingPower,10))>(parseFloat(a2[j].purchasingPower,10))){
        var temp=a2[i];
        a2[i]=a2[j];
        a2[j]=temp;
      }//END OF IF
    }//END OF FOR INNER LOOP
  }//END OF MAIN FOR LOOP

  ws2.write(JSON.stringify(a2.reverse()));
}); //END OF CLOSE
