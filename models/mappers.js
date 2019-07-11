module.exports = {
    intToSex,
    sexToInt,
    animalToBody,
    animalsToBody,
    intToUpgrade,
    upgradeToInt,
    shelterToBody
  };
  
  function intToSex(int) {
    return int === 1 ? "Male" : "Female";
  }
  
  function sexToInt(string) {
    return string === "Male" ? 1 : 0;
  }
  
  function animalsToBody(animals) {
      const result = animals.map( animal => {
          return {...animal, sex: intToSex(animal.sex)}
      })
      return result;
  }

  function animalToBody(animal) {
    const result = {
      ...animal,
      sex: intToSex(animal.sex)
    };
    return result;
  }

  function intToUpgrade(int) {
      return int === 1 ? "Yes" : "No";
  }

  function upgradeToInt(string) {
      return string === "Yes" ? 1 : 0;
  }

  function shelterToBody(shelter) {
      const result = {
          ...shelter,
          isUpgraded: intToUpgrade(shelter.isUpgraded)
      }
      return result
  }
  
  