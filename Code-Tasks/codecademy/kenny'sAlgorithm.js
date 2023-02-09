const student_grades = {"Jeremy" : 87, "Kyla" : 82, "Ayesha" : 90, "Aleida" : 94, "Todd" : 79, "Maxwell" : 98, "Yolonda" : 81, "Kiyoko" : 71, "Dagmar" : 73, "Laura" : 91, "Shimeah" : 81, "Songqiao" : 92, "Frankie" : 87, "Natalia" : 95, "Gonzalo" : 82, "Pavel" : 78};

const value_array = [];
for (const key in student_grades) {
    value_array.push([student_grades[key], key])
}
value_array.sort((a, b) => a[0] - b[0]);

const student_couples_arrays = [];
while (value_array.length != 0) {
    student_couples_arrays.push([value_array.shift(), value_array.pop()])
}

const definitive_couples = [];
for (const item of student_couples_arrays) {
    definitive_couples.push([item[1][1], item[0][1]])
}
console.log(definitive_couples);