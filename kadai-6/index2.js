//error
const str1 = "abc";
const str2 = "'abc'";
const str3 = '"abc"';
const str4 = '{"a": undefined}';
const str5 = '{"a": 123}';
const str6 = '{a: 123}';

try{
    console.log(JSON.parse(str1));
}catch(err){
    console.log('error');
    console.log(err);
}
//シングルクォーテーションで"abc"を囲んでいないという理由でエラーが出る
try{
    console.log(JSON.parse(str2));
}catch(err){
    console.log('error');
    console.log(err);
}
/*プロパティのキーの文字列は必ずダブルクォーテーションで囲まなければならないため、エラーが出る
abcという文字列はJSONとしては正しくない→"abc"が正しい*/

try{
    console.log(JSON.parse(str3));
}catch(err){
    console.log('error');
    console.log(err);
}


try{
    console.log(JSON.parse(str4));
}catch(err){
    console.log('error');
    console.log(err);
}
//undefinedは値として使えないという理由でエラーが出る

try{
    console.log(JSON.parse(str5));
}catch(err){
    console.log('error');
    console.log(err);
}


try{
    console.log(JSON.parse(str6));
}catch(err){
    console.log('error');
    console.log(err);
}

//aにダブルクォーテーションをつけていないという理由でエラーが出る