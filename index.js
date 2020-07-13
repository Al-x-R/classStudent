'use strict';

/*
Реализуйте класс Student (Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User),
с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
*/


class User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     */
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


class Student extends User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     * @param {number} year
     */
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year
    }

    getCourse() {
        let date = new Date().getFullYear()
        let course = date - this.year + 1
        if (course < 1) {
            throw new RangeError('you are probably just a future student')
        }
        return `student ${this.getFullName()} studying at ${course} course`
    }
}

const vasya = new Student('Vasiliy', "Pupkin", 2020)
console.log(vasya.getFullName())
console.log(vasya.getCourse())