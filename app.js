const students = require('./students')

const { triggerAsyncId } = require('async_hooks')
const { string, number } = require('yargs')
const yargs = require('yargs')
const { argv } = require('process')


yargs.command({
    command: 'add',
    describe: 'Add Student',
    builder:{
        id:{
            describe:'Student ID',
            demandOption:true,
            type: 'number'
        },
        name:{
            describe:'Student Name',
            demandOption:true,
            type: 'string'
        }, 
        grade:{
            describe: 'Student Grade',
            demandOption:true,
            type: 'number'
        },
        comment:{
            describe: 'Comments',
            demandOption:false,
            type: 'string'
        },
    },
    handler: function(argv){
        students.addStudent(argv.id, argv.name, argv.grade, argv.comment)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete Student',
    builder:{
        id:{
            describe:'Student ID',
            demandOption:true,
            type:'number'
        },
    },
    handler: function(argv){
        students.removeStudent(argv.id)
    }
})

yargs.command({
    command: 'show',
    describe: 'Show Student',
    builder:{
        id:{
            describe:'Student ID',
            demandOption:true,
            type:'number'
        },
    },
    handler: function(argv){
        students.showStudent(argv.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'List Students',
    handler: function(){
        students.listStudents()
    }
})

yargs.parse()