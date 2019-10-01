const John = 24
const Barbara = 28
const Patrick = 32
const Benjamin = 17
const Sylvie = 36
const nbEtudiant = 5

const sommeAge = John + Barbara+ Patrick + Benjamin + Sylvie
console.log(sommeAge)
const moyenneAge = sommeAge / nbEtudiant
console.log(moyenneAge)

const diffAge = Sylvie - Benjamin
console.log(diffAge)
if (diffAge<10){
    console.log("true")
    
}else{
    console.log("false")
}

if (John <25 && Benjamin<25){
    console.log("true");
}else{
    console.log("false");
}

plus35Ans = (Sylvie<35)? console.log("Il n'y a personne au dessus de 35 ans"): console.log("Il y a au moins une personne au dessus de 35 ans")