const profile = {
    name: "takeshi",
    age: 25,
    hobby: "programming",
    major:"history"
};

//objectのキーを配列で取得する
const keys = Object.keys(profile);

for(let i = 0; i < keys.length; i++){
    
    const key = keys[i];
    const value = profile[key];
    console.log(`私の${key}は${value}です`);
}