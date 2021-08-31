// number 01:
const student = {
    name: 'Shakib',
    id: 17,
    subject: 'science',
    expense: 7000,
    isRice: false,
    bestFriend: {
        name: 'Asif',
        id: 19,
        subject: 'Math'
    },
    favoriteSubjects: ['english', 'Math', 'economic', 'policies', 'coding'],
    goingAbroad: function () {
        console.log(this.name, 'will going Canada soon.');
        console.log(this.subject, 'is not the best department all the time.')
    },
    friendZoon: function (spend, tips) {
        this.expense = this.expense - spend - tips;
        return this.expense;
    }
}
student.goingAbroad();
const afterSpending = student.friendZoon(1000, 150);
const afterSpendingTwo = student.friendZoon(1999, 200);

console.log(afterSpending);
console.log(afterSpendingTwo);


// number: 02

const newTemp = `
Shakib favorite subject is: ${student.subject}
Ths best friend of Shakib is: ${student.bestFriend.name}
Shakib favorite subject are: ${student.favoriteSubjects[1]}
`;

console.log(newTemp);