//1
function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    if (evenNumbers.length === 0) return 0;
    const sum = evenNumbers.reduce((acc, number) => acc + number, 0);
    return sum / evenNumbers.length;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  const average = averageOfEvenNumbers(numbers);
  console.log(average); 
//2
  function longestWord(words) {
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
  }
  const words = ["apple", "banana", "cherry", "date"];
  const longest = longestWord(words);
  console.log(longest); 
  //3
  function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return totalPages / books.length;
  }
  const books = [
    { title: "Book 1", author: "Author 1", pages: 100 },
    { title: "Book 2", author: "Author 2", pages: 150 },
    { title: "Book 3", author: "Author 3", pages: 200 },
  ];
  const avgPages = averagePages(books);
  console.log(avgPages); 
  //4
  function countStringFrequency(strings) {
    return strings.reduce((frequency, str) => {
      frequency[str] = (frequency[str] || 0) + 1;
      return frequency;
    }, {});
  }
  const strings = ["hello", "world", "hello"];
  const frequency = countStringFrequency(strings);
  console.log(frequency); 
  //5
  function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
      cityCount[person.city] = (cityCount[person.city] || 0) + 1;
      return cityCount;
    }, {});
  }
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" },
  ];
  const cityCounts = countPeopleByCity(people);
  console.log(cityCounts); 
  