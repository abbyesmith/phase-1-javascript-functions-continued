// code your solution here
let activity=`roller-skate`
function saturdayFun(activity=`roller-skate`) {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(work=`go to the office`){
    return (`This Monday, I will ${work}.`)
}

// function wrapAdjective(adjective = `special`){
//     return (`You are ${adjective}!`)
// }

// let wrapAdjective = funtion(style = "*") {
//     return function (adjective = "special"){
//         return `You are ${style}${adjective}${style}!`
//     }
// }

let wrapAdjective = function (style = `*`) {
    return function(adjective = `special`){
        return `You are ${style}${adjective}${style}!`
    }
}