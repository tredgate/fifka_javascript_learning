const points = 95;
const studentName = "Marie Poláková";
let grade;

if (points >= 90) {
  grade = "A";
} else if (points >= 85) {
  grade = "B";
} else if (points >= 75) {
  grade = "C";
} else if (points >= 70) {
  grade = "D";
} else if (points >= 60) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`${studentName} získal/a známku: ${grade}`);
