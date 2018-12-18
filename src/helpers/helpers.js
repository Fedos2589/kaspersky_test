export const arraymove = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex]
    arr.splice(fromIndex, 1)
    arr.splice(toIndex, 0, element)

    return arr
}
