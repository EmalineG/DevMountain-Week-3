function decoder(code) {
    let splitStr = code.split('')
    let result = ''
  
    for (let i = 0; i < splitStr.length; i++) {
        if(!isNaN(+splitStr[i])){
            i += +splitStr[i]
        } else {
            result += splitStr[i]
        }
    }
    return result

    }
  
 
  console.log(decoder('0h2xce5ngbrdy'))