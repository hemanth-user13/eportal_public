// function nsum(arr,target){
//     const result=[]
//     function findsum(start,currsum,curentcombination){
//         if(currsum===target){
//             result.push([...curentcombination])
//         }
//         if(currsum>target|| start===arr.length){
//             return 
//         }
//         findsum(start,currsum+arr[start],curentcombination.concat(arr[start]))
//         findsum(start+1,currsum,curentcombination)
//     }
//     return result    
// }
// let arr=[1,2,3,4,5,6,7,8]
// let target=10;
// console.log(nsum(arr,target))





// function Test(strs){
//     if(strs.length===0){
//         return ""
//     }
//     let pre=""
//     let firststr=strs[0]
//    for(let i in strs){
//     //   console.log(firststr[i])
//        let char=firststr[i]
//     //   console.log(char)
//        for(let j in strs){
//         //   console.log(strs[j])
//         // console.log(i>=strs[j] || strs[j][i]!==char)
//         console.log(strs[j][i]!==char)
//         // console.log(char)
//            if(i>=strs[j].length || strs[j][i]!==char){
//                return pre
//            }
//        }
//        pre=pre+char
//    }
//    return pre
// }

// let strs = ["flower", "flow", "flight"];
// console.log(Test(strs))


function Test1(strs){
    let pre=strs[0]
    let prelen=pre.length

    for(let i in strs){
        let check=strs[i]
        while (pre!==check.substring(0,prelen)){
            prelen--;
            if(prelen===0) return ""
            pre=pre.substring(0,prelen)
        }
    }
    return pre
}

let strs = ["flower", "flow", "flight"];
console.log(Test1(strs))
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return ""
    let pre=""
    let firststr=strs[0]
    for(let i in strs){
        let char=firststr[i]
        for(let j in strs){
            if(i>strs.length || strs[j][i]!==char){
                return pre
            }
        }
        pre+=char
    }
    return pre
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if(strs.length===0) return ""
    // let pre=""
    // let firststr=strs[0]
    // for(let i in strs){
    //     let char=firststr[i]
    //     for(let j in strs){
    //         if(i>strs.length || strs[j][i]!==char){
    //             return pre
    //         }
    //     }
    //     pre+=char
    // }
    // return pre

    let pre=strs[0]
    let prelen=pre.length
    for(let i in strs){
        let check=strs[i]
        while(pre!==check.substring(0,prelen)){
            prelen--
            if(prelen===0) return "";
            pre=pre.substring(0,prelen)
        }
        
    }
    return pre
};


let test1=["flower", "flow", "flight"];
let result=test1.slice(0,3)
console.log(result)