//que tipo de dato espera y que tipo de dato devuelve
function findFirstRepeated(giftIds:number[]):number{
    const seen = new Set<number>()//El conjunto almacenará números, lo que ofrece verificación de tipos adicional.

    for(let i = 0; i<giftIds.length; i++){
        const id = giftIds[i]
        if(seen.has(id)){
            return id;
        }
        seen.add(id)
    }
    return -1
}



const giftIds :number[] = [2, 1, 3, 5, 3, 2]
const firstRepeatedId : number = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 :number[] = [1, 2, 3, 4]
const firstRepeatedId2 : number = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 :number[] = [5, 1, 5, 1]
const firstRepeatedId3 : number = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5