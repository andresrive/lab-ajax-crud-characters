const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList()
      .then(allCharacters => {
        const parentDiv = document.querySelector(".characters-container")
        const hiddenDivOnFetch = document.getElementsByClassName("character-info")


        allCharacters.forEach((character) => {
          let oneCharacter = document.createElement("div")
          oneCharacter.className = "character-info"

          //Mostrar nombre
          let newDivId = document.createElement("div")
          newDivId.classList.add("id")
          newDivId.innerHTML = `Id: ${character.id}`
          oneCharacter.appendChild(newDivId)

          let newDivName = document.createElement("div")
          newDivName.classList.add("name")
          newDivName.innerHTML = `Name: ${character.name}`
          oneCharacter.appendChild(newDivName)

          let newDivOccupation = document.createElement("div")
          newDivOccupation.classList.add("occupation")
          newDivOccupation.innerHTML = `Occupation: ${character.occupation}`
          oneCharacter.appendChild(newDivOccupation)

          let newDivCartoon = document.createElement("div")
          newDivCartoon.classList.add("cartoon")
          newDivCartoon.innerHTML = `cartoon: ${character.cartoon}`
          oneCharacter.appendChild(newDivCartoon)

          let newDivWeapon = document.createElement("div")
          newDivWeapon.classList.add("weapon")
          newDivWeapon.innerHTML = `weapon: ${character.weapon}`
          oneCharacter.appendChild(newDivWeapon)

          parentDiv.appendChild(oneCharacter)
        })

        hiddenDivOnFetch[0].style.display = "none"
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function () {
    let oneId = document.querySelector(".operation input")
    charactersAPI.getOneRegister(oneId.value)
      .then(aCharacter => {
        const parentDiv = document.querySelector(".characters-container")
        const hiddenDivOnFetch = document.getElementsByClassName("character-info")


        let oneCharacter = document.createElement("div")
        oneCharacter.className = "character-info"

        //Mostrar nombre
        let newDivId = document.createElement("div")
        newDivId.classList.add("id")
        newDivId.innerHTML = `Id: ${aCharacter.id}`
        oneCharacter.appendChild(newDivId)

        let newDivName = document.createElement("div")
        newDivName.classList.add("name")
        newDivName.innerHTML = `Name: ${aCharacter.name}`
        oneCharacter.appendChild(newDivName)

        let newDivOccupation = document.createElement("div")
        newDivOccupation.classList.add("occupation")
        newDivOccupation.innerHTML = `Occupation: ${aCharacter.occupation}`
        oneCharacter.appendChild(newDivOccupation)

        let newDivCartoon = document.createElement("div")
        newDivCartoon.classList.add("cartoon")
        newDivCartoon.innerHTML = `cartoon: ${aCharacter.cartoon}`
        oneCharacter.appendChild(newDivCartoon)

        let newDivWeapon = document.createElement("div")
        newDivWeapon.classList.add("weapon")
        newDivWeapon.innerHTML = `weapon: ${aCharacter.weapon}`
        oneCharacter.appendChild(newDivWeapon)

        parentDiv.appendChild(oneCharacter)


        hiddenDivOnFetch[0].style.display = "none"
      })
  });

  document.getElementById('delete-one').addEventListener('click', function () {
    let oneId = document.querySelector(".delete input")
    charactersAPI.deleteOneRegister(oneId.value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let charId = document.getElementsByName("chr-id")
    let charIdValue = charId[0].value
    let charName = document.getElementsByName('name')
    let charNameValue = charName[1].value //[1]
    let charOccupation = document.getElementsByName('occupation')
    let charOccupationValue = charOccupation[1].value
    let charWeapon = document.getElementsByName('weapon')
    let charWeaponValue = charWeapon[1].value
    let charCartoon = document.getElementsByName('cartoon')
    let charCartoonValue = charCartoon[1].value

    charactersAPI.updateOneRegister({ id: charIdValue, name: charNameValue, occupation: charOccupationValue, cartoon: charCartoonValue, weapon: charWeaponValue })
    console.log(charNameValue, charOccupationValue)

  });



  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let charName = document.getElementsByName('name')
    let charNameValue = charName[0].value //[0]
    let charOccupation = document.getElementsByName('occupation')
    let charOccupationValue = charOccupation[0].value
    let charWeapon = document.getElementsByName('weapon')
    let charWeaponValue = charWeapon[0].value
    let charCartoon = document.getElementsByName('cartoon')
    let charCartoonValue = charCartoon[0].value

    charactersAPI.createOneRegister({ name: charNameValue, occupation: charOccupationValue, cartoon: charCartoonValue, weapon: charWeaponValue })
    console.log(charNameValue, charOccupationValue)


  });




});
