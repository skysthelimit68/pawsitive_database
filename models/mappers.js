module.exports = {
    intToString,
    stringToInt,
    animalToBody
  };
  
  function intToString(int) {
    return int === 1 ? "Male" : "Female";
  }
  
  function stringToInt(string) {
    return string === "Male" ? 1 : 0;
  }
  
  function animalToBody(animal) {
    const result = {
      ...animal,
      sex: intToString(animal.sex),
    };
    return result;
  }
  
  