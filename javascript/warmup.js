function greeting(name){
return "Hello " +name+"!"
}
console.log(greeting("Nikhil"));
console.log(greeting("Nithin"));
console.log(greeting("Nidhish"));

const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.map(num=>num*2))
console.log(nums.filter(num=>num%2===0))
console.log(nums.reduce((a,b)=>a+b))
console.log(nums.filter(num=>num%2===0).map(num=>num*2).reduce((a,b)=>a+b,0))

const user={name:"Ada",age:"36",skill:["JS","TS"]}
const { name, skill } = user;
console.log(name, skill)

function newSkill(skill){
     user.skill.push(skill)
     return user.skill
}
console.log(newSkill("Python"))

console.log(`${user.name} (${user.age}) knows ${user.skill.join(", ")}`)