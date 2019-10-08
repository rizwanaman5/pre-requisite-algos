// Write a program to find area and circumference of circle

const areaAndPerimeter = (radius) => {
    let area = Math.PI * (radius ** 2)
    let perimeter = 2 * Math.PI * radius

    console.log('area ->', Number(area.toFixed(2)))
    console.log('perimeter ->', Number(perimeter.toFixed(2)))
}

areaAndPerimeter(10)