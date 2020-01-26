 const day = parseInt(process.argv[2]);
 const age = [
     20,
     21,
     22,
     23,
     24,
     25,
     25,
     26,
     27,
     28,
     29,
     30
 ]


if(day % 5 ===0 && age <= 23) {
    console.log('あなたはシャイ性格です');
} else if(day % 5 === 1 && age <= 26) {
    console.log('あなたは怒りっぽい性格です');
} else if (day % 5 ===0 && age <= 30) {
    console.log('あなたは優しい性格です');
} else {
    console.log('あなたは性格が悪いです');
}