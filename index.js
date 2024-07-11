// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  {
    name: "Alice",
    age: 30,
    gender: "Female",
  },
  {
    name: "Bob",
    age: 25,
    gender: "Male",
  },
  {
    name: "Charlie",
    age: 35,
    gender: "Male",
  },
  {
    name: "Diana",
    age: 28,
    gender: "Female",
  },
  {
    name: "Eve",
    age: 22,
    gender: "Female",
  },
  {
    name: "Frank",
    age: 40,
    gender: "Male",
  },
  {
    name: "Grace",
    age: 29,
    gender: "Female",
  },
  {
    name: "Hank",
    age: 33,
    gender: "Male",
  },
  {
    name: "Ivy",
    age: 27,
    gender: "Female",
  },
  {
    name: "Jack",
    age: 31,
    gender: "Male",
  },
];

const peopleFunction = (people) => {
  Females = people.filter((a) => a.gender === "Female");

  console.log(Females);
};

// peopleFunction(people);

// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year.Write A Function That Takes The Array And Returns A New Array With Only The Book Titles.Print The Result.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "wather",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
];

const bookFunction = (books) => {
  newBooksArray = books.map((a) => a.title);

  console.log(newBooksArray);
};

// bookFunction(books);

// 3. Task: Find Maximum Value:

// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const numbersArray = [43, 67, 83, 1, 43];

const maxFunction = (numbers) => {
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
};

const maxresult = maxFunction(numbersArray);

// console.log(maxresult);

// 4.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

let peopleArray = [
  {
    name: "tonu",
    age: 30,
    gender: "Female",
  },
  {
    name: "minny",
    age: 25,
    gender: "Male",
  },
  {
    name: "inny",
    age: 35,
    gender: "Male",
  },
];

const updateFunction = (name, updateAge) => {
  const find = peopleArray.find((a) => a.name === name);

  console.log(find);

  if (find) {
    find.age = updateAge;

    const filterOut = peopleArray.filter((a) => a.name !== name);

    const newArray = [...filterOut, find];
    console.log(newArray);
  } else {
    console.log("user not found");
  }
};

// updateFunction("inny", 10);

//5. Task: Array Reduction

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numberArray = [2, 2, 4, 5, 3, 3, 1, 1, 1];

const evenFuction = (numbers) => {
  const a = [];

  numbers.forEach((element) => {
    if (element % 2 === 0) {
      a.push(element);
    }
  });

  const b = a.reduce((a, b) => a + b, 0);
  return b;
};

const sumResult = evenFuction(numberArray);

// console.log(sumResult);
