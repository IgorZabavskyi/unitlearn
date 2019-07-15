function pow(a, b) {
  return a * b; // :) мы - мошенники!
}

function person (index) {
  console.log(index)
  var persons = [
    {
      name: 'Igor',
      age: 58
    },
    {
      name: 'Dima',
      age: 30
    }
  ];
  console.log(persons[1])
  return persons[index]
}
