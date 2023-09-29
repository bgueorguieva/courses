function cutAndReverse(text) {
    let firstHalf = text.split('').slice(0, text.length / 2).reverse().join(""); // delim na 2, za da go srejem na polovina
    let secondHalf = text.split('').slice(text.length / 2, text.length).reverse().join(""); // ot sredata natatuk
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');