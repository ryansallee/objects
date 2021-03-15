const monthsInYear = 12;
const inchesInFoot = 12;
const today = new Date(); 
const notRyansBirthday = new Date(1988, 10, 01);


//Defensive Coding & Validations
//Functions are objects too. And 1st class members!
let checkIfDate =(date) => {
    console.log(date);
    let isDate = date instanceof Date;
    console.log(isDate);
    if(!isDate && date != null){
        throw new Error(`You did not provide a valid date.`);
    }    
}

let calculateAge = (birthDate) =>{
    if(birthDate > today)
        throw new Error("The birthdate provided is after today. Are you a time traveler? Please try again.");
    checkIfDate(birthDate);
    let diffInMilliseconds = today - birthDate;
    let years = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    years = Math.floor(years);
    return years;
}

let calculateEmployment = function(name, monthsEmployed, occupation){
    console.log(`How long has ${name} been employed?`);
    let yearsAsDecimal = monthsEmployed/monthsInYear;
    let years = Math.floor(yearsAsDecimal);
    let remainder = yearsAsDecimal - years;
    let months = Math.ceil(remainder * monthsInYear);
    return `${name} has been employed ${years} years and ${months} months as a ${occupation}!`;
}

let ryan1 = {
    name: 'Ryan',
    height: 70,
    occupation: 'Software Developer',
    employer: 'JCPS',
    monthsEmployed: 17,
    birthDate: notRyansBirthday,
    getHeightInFeetandInches: function(){
        console.log(`How tall is ${this.name}?`);
        let feetAsDecimal = this.height/inchesInFoot;
        let feet = Math.floor(feetAsDecimal);
        let remainder = feetAsDecimal - feet;
        let inches = Math.round(remainder * inchesInFoot);
        return `${this.name} is ${feet}'${inches}"`; 
    },
    //Passing functions to an object. Functions
    getEmploymentInYearsAndMonths: calculateEmployment(this.name, this.monthsEmployed, this.occupation),
    getAge: calculateAge(this.birthDate)
        
};

//So why I am using 'this' so much?

function Person(name, height, birthday){
    checkIfDate(birthday);
    this.name = name;
    this.height = height;
    this.birthday = birthday;
    this.getAge = calculateAge(this.birthday);
}

Person.prototype.getHeightInFeetandInches = function(){
    console.log(`How tall is ${this.name}?`);
    let feetAsDecimal = this.height/inchesInFoot;
    let feet = Math.floor(feetAsDecimal);
    let remainder = feetAsDecimal - feet;
    let inches = Math.round(remainder * inchesInFoot);
    return `${this.name} is ${feet}'${inches}"`;
}

//Inheritance
function Employee(name, height, birthday, occupation, employer, monthsEmployed){
    Person.call(this, name, height, birthday);
    this.occupation= occupation;
    this.employer = employer;
    this.monthsEmployed = monthsEmployed;
    this.getEmploymentInYearsAndMonths = calculateEmployment(this.name, this.monthsEmployed, this.occupation);    
}

//Forcing Inheritance of prototypes
// Employee.prototype = Person.prototype;
// Employee.prototype.constructor = Employee;


//What is a prototype???
//Template for objects

//Abstraction
class LivingThing{
    constructor(){
        if(new.target === LivingThing){
            throw new Error("Abstract classes cannot be directly instantiated.");
        }
    }
    get age(){}
    get heightInFeetandInches(){}

}

//Inheritance && Encapsulation
class Human extends LivingThing{
    #birthDate;
    #name;
    #height;
    constructor(name, height, birthDate){
        super();
        checkIfDate(birthDate);
        this.#birthDate = birthDate;
        this.#name = name;
        this.#height = height;
    }
    get birthday(){
        return this.#birthDate;
    }
    get name(){
        return this.#name;
    }
    get height() {
        return this.#height;
    }
    get age(){
        return calculateAge(this.#birthDate);
    }
    get heightInFeetandInches(){
        console.log(`How tall is ${this.#name}?`);
        let feetAsDecimal = this.#height/inchesInFoot;
        let feet = Math.floor(feetAsDecimal);
        let remainder = feetAsDecimal - feet;
        let inches = Math.round(remainder * inchesInFoot);
        return `${this.#name} is ${feet}'${inches}"`;
    }
}

//Show Inheritance and polymorphism(override an existing function)
class Worker extends Human {
    #occupation;
    #employer;
    #monthsEmployed;
    constructor(name, height, birthDate, occupation, employer, monthsEmployed){
        super(name, height, birthDate);
        this.#occupation = occupation;
        this.#employer = employer;
        this.#monthsEmployed = monthsEmployed;
    }
    calculateEmployment(){
        calculateEmployment(this.name, this.#monthsEmployed, this.#occupation);
    }
    //Polymorphism
    get heightInFeetandInches(){
        console.log("This was overridden");
    }
}

let ryan2 = new Employee("Ryan", 70, notRyansBirthday, "Developer Software", "JCPS", 17);
console.log(ryan1.getHeightInFeetandInches);
console.log(ryan2.getHeightInFeetandInches);
let ryan3 = new Worker("Ryan", 70, notRyansBirthday, "Developer Software", "JCPS", 17);

