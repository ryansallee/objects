const monthsInYear = 12;
const inchesInFoot = 12;

let ryan1 = {
    name: 'Ryan',
    height: 70,
    weight: 150,
    occupation: 'Software Developer',
    employer: 'JCPS',
    monthsEmployed: 12,
    getHeightInFeetandInches: function(){
        console.log(`How tall is ${this.name}?`);
        let feetAsDecimal = this.height/inchesInFoot;
        let feet = Math.floor(feetAsDecimal);
        let remainder = feetAsDecimal - feet;
        let inches = Math.round(remainder * inchesInFoot);
        return `${this.name} is ${feet}'${inches}"`; 
    },
    getEmploymentInYearsAndMonths: function(){
        console.log(`How long has ${this.name} been employed`);
        let yearsAsDecimal = this.monthsEmployed/monthsInYear;
        //console.log(yearsAsDecimal);
        let years = Math.floor(yearsAsDecimal);
        let remainder = yearsAsDecimal - years;
        //console.log(remainder);
        let months = Math.ceil(remainder * monthsInYear);
        return `${this.name} has been employed ${years} years and ${months} months as a ${this.occupation}!`;
    },
        
};

function Person(name, height, occupation, employer, monthsEmployed){
    this.name = name;
    this.height = height;
    this.occupation= occupation;
    this.employer = employer;
    this.monthsEmployed = monthsEmployed;
    this.getEmploymentInYearsAndMonths = function(){
        console.log(`How long has ${this.name} been employed`);
        let yearsAsDecimal = this.monthsEmployed/monthsInYear;
        //console.log(yearsAsDecimal);
        let years = Math.floor(yearsAsDecimal);
        let remainder = yearsAsDecimal - years;
        //console.log(remainder);
        let months = Math.ceil(remainder * monthsInYear);
        return `${this.name} has been employed ${years} years and ${months} months as a ${this.occupation}!`;
    }
    this.getHeightInFeetandInches = function(){
        console.log(`How tall is ${this.name}?`);
        let feetAsDecimal = this.height/inchesInFoot;
        let feet = Math.floor(feetAsDecimal);
        let remainder = feetAsDecimal - feet;
        let inches = Math.round(remainder * inchesInFoot);
        return `${this.name} is ${feet}'${inches}"`;
    };
    this.getWeightInStone
}

let ryan2 = new Person("Ryan", 70, "Developer Software", "JCPS", 12 );

console.log(ryan2.name);
ryan2.

// console.log(ryan1.name);
// ryan1.name = 'Leigh';
// console.log(ryan1.name);
// ryan1.shirtSize = 'Small';
// console.log(ryan1.shirtSize);

 console.log(ryan2.getHeightInFeetandInches());
// console.log(ryan2.getHeightInFeetandInches());
// console.log(ryan1.getEmploymentInYearsAndMonths());
// console.log(ryan2.getEmploymentInYearsAndMonths());
// ryan2.fun = 'Dogs';
// console.log(ryan2.fun);
