function area(radius) {
    if (typeof radius == 'number') {
        let circleArea = radius ** 2 * Math.PI;

        console.log(circleArea.toFixed(2)); //prevrushta chisloto v string
    } else {
        console.log(`We can not calculate the circle area, because we receive ${typeof radius}`);
    }

}
area(5);
area('text')