letters = ["a","b","c","d","e","f","g","h"]

// newArray = letters.map(letter =>{
//     for (let i=1; i<9; i++){
//          `${letter} - ${i}`
//     }})
// letters.map((letter, j) => {
    //     newArray2[j] = new Array(8);
    //     j++;
    //     for (let i=0; i<8; i++){
        //         // Array[i] = `${letter} - ${i + 1}`
        //      newArray2[j][i] = `${letter} - ${i+1}`;
        //     }
        //     // return newArray2
        // })
        
let newArray2 = [8] 
        console.log(newArray2)

function chessboard (array){
    for (let j=0; j<array.length; j++){
        newArray2[j] = new Array(8);
        for (let i=0; i<8; i++){
            newArray2[j][i] = `${array[j]} - ${i+1}`;
            // newArray2[j].fill(`${array[j]} - ${i+1}`, [i])
            // console.log(newArray2[j][i])
        } 
    }
    return newArray2
}
console.log(chessboard(letters))
// console.log(newArray2)