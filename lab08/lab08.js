window.onload = function () {
    //------Exercise 1-----------------------------------------------------------------------------------------
    String.prototype.filter = function (str) {
        let arr = this.split(' ');
        return arr.filter(value => value != str).join(' ');
    };

    let origString = 'this house is not nice!';
    console.log('\nExercise 1:');
    console.log("Original string: " + origString);
    console.log("Filtered result: " + origString.filter('not'));

    //------Exercise 2-----------------------------------------------------------------------------------------
    Array.prototype.bubbleSort = function () {

        let origValues = this.slice();
        let length = origValues.length - 1;
        do {
            var swapped = false;
            for (let i = 0; i < length; ++i) {
                if (origValues[i] > origValues[i + 1]) {
                    let temp = origValues[i];
                    origValues[i] = origValues[i + 1];
                    origValues[i + 1] = temp;
                    swapped = true;
                }
            }
        }
        while (swapped === true);
        return origValues;

    };

    let origArr = [6, 4, 0, 3, -2, 1];
    console.log('\nExercise 2:');
    console.log("Original: " + origArr);
    console.log("Bibble Sort Result: " + origArr.bubbleSort());

    //------Exercise 3-1 ----------------------------------------------------------------------------------------
    console.log('\nExercise 3:');
    const Person = function (name) {
        this.name = name;
    };
    const Teacher = function (name, subject) {
        Person.call(this, name);
        this.subject = subject;
    };

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.teach = function () {
        return this.name + ' is now teaching ' + this.subject;
    };
    const t1 = new Teacher('Tina Xing', 'WAP');
    let res = t1.teach();
    console.log('Exercise 3-1: ' + res);

    //------Exercise 3-2 ----------------------------------------------------------------------------------------
    const P = {
        name: 'Unknown'
    }

    const T = Object.create(P);
    T.teaching = function (subject) {
        this.subject = subject;
    };

    let t2 = Object.create(T);
    t2.name = 'Tina Xing';
    t2.teaching('WAP');
    console.log('Exercise 3-2: ' + t2.name + ' is now teaching ' + t2.subject);

//------Exercise 4-1 ---------------------------------------------------------------------------------------
    const Person4 = {
        name: 'Unknown',
        age: null,
        greeting: function () {
            console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
        },
        salute: function () {
            console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
        }
    };
    const Student = Object.create(Person4);
    Student.major = function (major) {
        this.major = major;
    };
    Student.greeting = function () {
        console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
    };

    const Professor = Object.create(Person4);
    Professor.department = function (department) {
        this.department = department;
    };
    Professor.salute = function () {
        console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
    };

    const p1 = Object.create(Professor);
    p1.name = 'Tina Xing';
    p1.age = 18;
    p1.department = 'ComPro';
    const s1 = Object.create(Student);
    s1.name = 'Sod Shirmen';
    s1.age = 28;
    s1.major = 'Computer Science';

    console.log('\nExercise 4-1: ')
    p1.greeting();
    p1.salute();

    s1.greeting();
    s1.salute();

    //------Exercise 4-2 ----------------------------------------------------------------------------------------

    console.log('\nExercise 4-2: ')

    const Person42 = function (name, age) {
        this.name = name;
        this.age = age;
    }
    Person42.prototype.salute = function () {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    };

    Person42.prototype.greeting = function () {
        console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    };


    const Student42 = function (name, age, major) {
        Person42.call(this, name, age);
        this.major = major;
    }
    Student42.prototype = Object.create(Person42.prototype);

    Student42.prototype.greeting = function () {
        console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
    }

    const Professor42 = function (name, age, department) {
        Person42.call(this, name, age);
        this.department = department;
    }

    Professor42.prototype = Object.create(Person42.prototype);
    Professor42.prototype.salute = function () {
        console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
    }

    const prof1 = new Professor42('Xing', 18, 'ComPro');
    prof1.salute();
    prof1.greeting();

    const stud1 = new Student42('Sod', 28, 'CS');
    stud1.greeting();
    stud1.salute();



};




