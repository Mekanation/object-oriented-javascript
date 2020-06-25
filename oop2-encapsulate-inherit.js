
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".
//     //Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.
//     //Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

//     //your code here...

class Book {
    #author;
    #publisher;
    constructor() {
        this.#author = null;
        this.#publisher = null;
    }
    getAuthor() {
        return this.#author;
    }
    setAuthor(author) {
        this.#author = author;
    }
    getPublisher() {
        return this.#publisher;
    }
    setPublisher(publisher) {
        this.#publisher = publisher;
    }

}

class Author {
    #name;
    #books;
    constructor() {
        this.#name = null;
        this.#books = null;
    }
    getAuthorName() {
        return this.#name;
    }
    setAuthorName(authorName) {
        this.#name = authorName;
    }
    getBooks() {
        return this.#books;
    }
    setBooks(books) {
        this.#books = books;
    }

}

class Publisher {
    #authors;
    #books;
    constructor() {
        this.#authors = null;
        this.#books = null;
    }
    getAuthors() {
        return this.#authors;
    }
    setAuthors(authors) {
        this.#authors = authors;
    }
    getBooks() {
        return this.#books;
    }
    setBooks(books) {
        this.#books = books;
    }

}
class Review {
    #review;
    #user;
    constructor() {
        this.#review = null;
        this.#user = null;
    }
    getReview() {
        return this.#review;
    }
    setReview(review) {
        this.#review = review;
    }
    getUser() {
        return this.#user;
    }
    setUser(user) {
        this.#user = user;
    }

}






// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a company name and # of employees.  
//       Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. 
//      Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



//     //your code here...

class Umbrella {
    #name;
    #totalCompanies
    constructor() {

        this.#name = "Allegis Group";
        this.#totalCompanies = 3;

    }
    getUmbrellaName() {
        return this.#name;
    }
    getTotalCompanies() {
        return this.#totalCompanies;
    }

}
class Companies extends Umbrella {
    #companyName;
    #numberofEmployees;
    constructor(companyName, numberofEmployees) {
        super();
        this.#companyName = companyName;
        this.#numberofEmployees = numberofEmployees;

    }
    getcompanyName() {
        return this.#companyName;
    }
    getnumberofEmployees() {
        return this.#numberofEmployees;
    }
    addEmployeeToRoster() {
        this.#numberofEmployees++;
    }
    sayCompanyDetails() {
        return `At ${this.#companyName}, we have ${this.#numberofEmployees} employees.`;
    }

}
class Site extends Companies {
    #siteCompanyName;
    #siteLocation;
    constructor(siteCompanyName, siteLocation) {
        super();
        this.#siteCompanyName = siteCompanyName;
        this.#siteLocation = siteLocation;
    }
    saySite() {
        return `I am a part of ${this.#siteCompanyName}, I am based in ${this.#siteLocation}`;
    }
    sayPurpose() {
        return `At ${this.#siteLocation} we do hard work`;

    }
    getSite() {
        return this.#siteCompanyName;
    }
}
class Employee {
    #name;
    #title;
    #salary;
    #site;
    #employeeCompanyName;
    constructor(name, title, salary, site, employeeCompanyName) {

        this.#name = name;
        this.#title = title;
        this.#salary = salary;
        this.#site = site;
        this.#employeeCompanyName = employeeCompanyName;
    }

    sayName() {
        return `My name is ${this.#name}`;
    }
    saySite() {
        return `I am at ${this.#site}`;
    }
    sayFullDetails() {
        return `My name is ${this.#name}. I am located in ${this.#site} for ${this.#employeeCompanyName}. My position is ${this.#title}. I earn ${this.#salary} doing ${this.#title}`;
    }
    sayCompanyName() {
        return `My Company is ${this.#employeeCompanyName}`;
    }
    getEmployeeCompanyName() {
        return this.#employeeCompanyName;
    }


}
const umbrella = new Umbrella();
Object.freeze(umbrella);
console.log(umbrella.getUmbrellaName());

const teksystems = new Companies("TEKSystems", 0);
const teksystemsDallas = new Site(teksystems.getcompanyName(), "Dallas");
const teksystemsColorado = new Site(teksystems.getcompanyName(), "Colorado");
const teksystemsCanadia = new Site(teksystems.getcompanyName(), "Canadia");
const phil = new Employee("Phil", "CEO", 1000000, teksystemsDallas.getSite(), teksystems.getcompanyName());
teksystems.addEmployeeToRoster();
const bob = new Employee("Bob", "Janitor", 10, teksystemsColorado.getSite(), teksystems.getcompanyName());
teksystems.addEmployeeToRoster();
const jeff = new Employee("Jeff", "Manager", 70000, teksystemsCanadia.getSite(), teksystems.getcompanyName());
teksystems.addEmployeeToRoster();
const jennie = new Employee("Jennie", "Secretary", 40000, teksystemsDallas.getSite(), teksystems.getcompanyName());
teksystems.addEmployeeToRoster();

console.log(phil.sayCompanyName());
console.log(teksystems.sayCompanyDetails());//example
// 1 Financial Officer, 1 Marketer, 1 Lawyer. 
const aerotek = new Companies("Aerotek", 0);
const aerotekDallas = new Site(teksystems.getcompanyName(), "Dallas");
const aerotekColorado = new Site(teksystems.getcompanyName(), "Colorado");
const aerotekCanadia = new Site(teksystems.getcompanyName(), "Canadia");
const edward = new Employee("Edward", "Engineer", 120000, aerotekDallas.getSite(), aerotek.getcompanyName());
aerotek.addEmployeeToRoster();
const sally = new Employee("Sally", "Engineer", 140000, aerotekDallas.getSite(), aerotek.getcompanyName());
aerotek.addEmployeeToRoster();
const paola = new Employee("Paola", "HR", 20000, aerotekCanadia.getSite(), aerotek.getcompanyName());
aerotek.addEmployeeToRoster();



console.log(edward.sayCompanyName());
console.log(aerotek.sayCompanyDetails());//aerotek Example
// 1 Financial Officer, 1 Marketer, 1 Lawyer. 
const easi = new Companies("EASi", 0);
const easiDallas = new Site(teksystems.getcompanyName(), "Dallas");
const easiColorado = new Site(teksystems.getcompanyName(), "Colorado");
const easiCanadia = new Site(teksystems.getcompanyName(), "Canadia");
const jim = new Employee("Jim", "Lawyer", 200000, easiCanadia.getSite(), easi.getcompanyName());
easi.addEmployeeToRoster();
const june = new Employee("June", "Financial Officer", 130000, easiColorado.getSite(), easi.getcompanyName());
easi.addEmployeeToRoster();
const chad = new Employee("Chad", "Marketing", 20000, easiColorado.getSite(), easi.getcompanyName());
easi.addEmployeeToRoster();


console.log(jim.sayCompanyName());
console.log(easi.sayCompanyDetails());//easi example
/****************************************************************************************************************************************************************************************
Bonus Exercise:

3. Building on Exercise 1, Do the following :
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant review, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...