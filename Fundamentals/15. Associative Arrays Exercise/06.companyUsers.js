function solve(arr) {
    let companies = {};

    for (let line of arr) {
        let currLine = line.split(' -> ');
        let [company, id] = currLine;

        if (!companies.hasOwnProperty(company)) {
            companies[company] = []; //=[]

        }
        if (!companies[company].includes(id)) {
            companies[company].push(id);
        }
    }
    let sortedCompanyInfo = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let companyData of sortedCompanyInfo) {
        let name = companyData[0];
        console.log(name);
        let employeesArr = companyData[1];
        for (let employee of employeesArr) {
            console.log(`-- ${employee}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);