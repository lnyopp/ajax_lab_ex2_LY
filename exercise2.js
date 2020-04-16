function compare(num) {
    p = new Promise((resolve, reject) => {
        if (num >= 50) {
            resolve(num + " is at least 50, success!")
        }
        else {
            reject(num + " is less than 50, error!")
        }
    })
    return p
}

compare(55)
.then(result => console.log(result))
.catch(reject => console.log(reject))

compare(10)
.then(result => console.log(result))
.catch(error => console.log(error))