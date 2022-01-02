// Primitive Types
const number = 1;
// Create exact copy of number
const num2 = number;

console.log(num2);

// Reference Types
// In memory
const person = {
    name: 'Max'
}
// Instead, we can use a spread
// Pointer to the memory
// const secondPerson = person; WILL NOT WORK
const secondPerson = {
    ...person
};


// Will actually change it for the secondperson as well due to them pointing to same place
person.name = 'Manu'
console.log(secondPerson);
// Works like this in arrays as well