const fs = require('fs');

const addStudent = (id, name, grade, comment) => {
    const students = loadStudents()
    const duplicateIDs = students.filter(function (students) {
        return students.id === id
    })
    if (duplicateIDs.length === 0) {
        students.push({
            id,
            name,
            grade,
            comment
        })

        saveStudents(students)
        console.log('Saved Successfully')
    } else {
        console.log('Error Duplicate ID')
    }
};

const removeStudent = (id) => {
    const students = loadStudents()

    const studentsToKeep = students.filter(function (students) {
        return students.id !== id
    })

    if(students.length > studentsToKeep.length){
        console.log('Student Deleted')
        saveStudents(studentsToKeep)
    } else {
        console.log('Invalid Student ID')
    }
}

const showStudent = (id) =>{

    const students = loadStudents()

    const student = students.find((students)=>{
        return students.id === id
    })

    if(student){
        console.log('ID', 'Name', 'Grade', 'Comment')
        console.log(student.id, student.name, student.grade, student.comment)
    }
};

const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync('students.json').toString();
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};

const listStudents = () =>{
    const students = loadStudents()
    console.log('Name', 'Grade')
    students.forEach(student => {
        console.log(student.name, student.grade)
    });
};

const saveStudents = (students) => {
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json', saveData)
};

module.exports = {
    addStudent:addStudent,
    removeStudent:removeStudent,
    showStudent:showStudent,
    listStudents:listStudents
}