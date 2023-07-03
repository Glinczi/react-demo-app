let arrData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

let sortArr = []

// data 代表你点击的是哪个数据
function sortItem(data) {
  let arr = arrData.filter(item => {
    return item.id != data.id
  })
  arr.unshift(data)
  Object.assign(sortArr, arr)
}

sortItem({ id: 4 })

console.log(sortArr)