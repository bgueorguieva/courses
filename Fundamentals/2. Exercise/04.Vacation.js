function vacation(peopleCount, groupType, day) {
    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.90;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.50;

    let studentsDiscountPerc = 15;
    let businessDiscountPeople = 10;
    let regularDiscountPerc = 5;

    let totalPrice = 0;

    if (groupType === "Business" && peopleCount >= 100) { // vajno da se izvadi predi drugata smetka
        peopleCount -= businessDiscountPeople;
    }

    if (groupType === "Students" && day === "Friday") {
        totalPrice += peopleCount * studentsFridayPrice;
    } else if (groupType === "Students" && day === "Saturday") {
        totalPrice += peopleCount * studentsSaturdayPrice;
    } else if (groupType === "Students" && day === "Sunday") {
        totalPrice += peopleCount * studentsSundayPrice;
    } else if (groupType === "Regular" && day === "Friday") {
        totalPrice += peopleCount * regularFridayPrice;
    } else if (groupType === "Regular" && day === "Saturday") {
        totalPrice += peopleCount * regularSaturdayPrice;
    } else if (groupType === "Regular" && day === "Sunday") {
        totalPrice += peopleCount * regularSundayPrice;
    } else if (groupType === "Business" && day === "Friday") {
        totalPrice += peopleCount * businessFridayPrice;
    } else if (groupType === "Business" && day === "Saturday") {
        totalPrice += peopleCount * businessSaturdayPrice;
    } else if (groupType === "Business" && day === "Sunday") {
        totalPrice += peopleCount * businessSundayPrice;
    }

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice -= (studentsDiscountPerc / 100) * totalPrice; // vadim procenta
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= (regularDiscountPerc / 100) * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);