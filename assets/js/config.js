const main = () => {

    let arrayColors = ArrayGenerator();
    let life = 10;
    let condition = true;
    let setItem = arrayColors[Math.floor(Math.random() * 9) + 1]

    arrayColors.sort((a, b) => a.id - b.id)
    //valor escolhido
    alert(setItem.name)
    let aux = 10;
    do {

        const value = window.prompt(`Estou pensando em um dessas cores: \n\n[ ${arrayColors[0].name}, ${arrayColors[1].name}, ${arrayColors[2].name}, ${arrayColors[3].name}, ${arrayColors[4].name}, ${arrayColors[5].name}, ${arrayColors[6].name}, ${arrayColors[7].name}, ${arrayColors[8].name}, ${arrayColors[9].name}  ]\n\n Vidas: ${aux} \n\nEm que cor estou pensando??`);

        if (value == setItem.name) {
            alert("Acerto miseravi")
            document.getElementById('backgroundID').style.background = `${setItem.rgb}`
            condition = false
        }

        else {
            for (let x = 0; x < arrayColors.length; x++) {
                if (value == arrayColors[x].name) {
                    confirm(`Não foi dessa vez! \n\n Dica: sua cor é alfabeticamente ${arrayColors[x].id > setItem.id ? 'supeior' : 'inferior'} que à minha.`);
                }
            }

        }
        aux = aux - 1
        if (aux == 0) {
            condition = false
            console.log()
        }
    } while (condition);

}

const ArrayGenerator = () => {
    let arrayAux = [];
    let number = 10
    for (let i = 0; i < number; i++) {
        arrayAux.push(getColor(Math.floor(Math.random() * 22) + 1))
    }
    return arrayAux

}

const getColor = (params) => {
    let arrayColor = [
        {
            id: 1,
            name: 'AliceBlue',
            rgb: '#F0F8FF'
        },
        {
            id: 2,
            name: 'AntiqueWhite',
            rgb: '#FAEBD7'
        },
        {
            id: 3,
            name: 'Aqua',
            rgb: '#00FFFF'
        },
        {
            id: 4,
            name: 'Aquamarine',
            rgb: '#7FFFD4'
        },
        {
            id: 5,
            name: 'Azure',
            rgb: '#F0FFFF'
        },
        {
            id: 6,
            name: 'Beige',
            rgb: '#F5F5DC'
        },
        {
            id: 7,
            name: 'Bisque',
            rgb: '#FFE4C4'
        },
        {
            id: 8,
            name: 'Black',
            rgb: '#000000'
        },
        {
            id: 9,
            name: 'BlanchedAlmond',
            rgb: '#FFEBCD'
        },
        {
            id: 10,
            name: 'Blue',
            rgb: '#0000FF'
        },
        {
            id: 11,
            name: 'BlueViolet',
            rgb: '#8A2BE2'
        },
        {
            id: 12,
            name: 'Chartreuse',
            rgb: '#7FFF00'
        },
        {
            id: 13,
            name: 'Brown',
            rgb: '#A52A2A'
        },
        {
            id: 14,
            name: 'BurlyWood',
            rgb: '#DEB887'
        },
        {
            id: 15,
            name: 'CadetBlue',
            rgb: '#5F9EA0'
        },
        {
            id: 16,
            name: 'Chartreuse',
            rgb: '#7FFF00'
        },
        {
            id: 17,
            name: 'Chocolate',
            rgb: '#D2691E'
        },
        {
            id: 18,
            name: 'ForestGreen',
            rgb: '#228B22'
        },
        {
            id: 19,
            name: 'Indigo',
            rgb: '#4B0082'
        },
        {
            id: 20,
            name: 'LightCoral',
            rgb: '#F08080'
        },
        {
            id: 21,
            name: 'OrangeRed',
            rgb: '#FF4500'
        },
        {
            id: 22,
            name: 'White',
            rgb: '#FFFFFF'
        },


    ]
    return arrayColor[params]

}