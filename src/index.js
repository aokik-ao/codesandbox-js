/**
 * 分割代入
 */
// const myProfile = {
//   name: "aoki",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["aoki", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// 複数変数を同時に宣言できるよ

// mapはindexも保持出来る
const nameArr = ["青木", "田中", "鈴木"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

const newNameArr = nameArr.map((name) => {
  if (name === "青木") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
