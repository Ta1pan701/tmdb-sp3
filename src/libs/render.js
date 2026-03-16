export function render(arr, place, Component) {
    console.log(place);
    
    place.innerHTML=""
    for (const item of arr) {
        let elem = Component(item, arr)
        place.append(elem)
    }
}