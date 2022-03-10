// Media arictmética

function arithmeticMean(list){
//     let listSum = 0;
//     for (let i = 0; i < list.length; i++) {
//         listSum = listSum + list[i];
//     }
//     const avarage = listSum / list.length;
//     return avarage;
// }

    const listSum = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const avarage = listSum / list.length;     
    return avarage;
}