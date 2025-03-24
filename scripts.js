let timerInterval;
let currentPage = 1;
let generatedData = null;
let startTime;
let lastRecordedTime = "Time: 0:00";

function startTimer() {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
}

document.getElementById('startField').addEventListener('input', function () {
    if (!timerInterval) {
        startTimer();
        document.getElementById('timer').textContent = "Time: 0:00"; // Reset when typing starts
    }
});

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    document.getElementById('timer').textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// data generation part //

function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

function getRandomDate(startYear, endYear) {
    let year = startYear + Math.floor(Math.random() * (endYear - startYear));
    let month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    let day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    return `${month}/${day}/${year}`;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const cardTypes = ["USA", "bank", "CITIBANK", "USBANK", "RAS", "VISA", "WEILS FARGO", "DISCOVER", "AMERICAN EXPRESS", "RETAIL", "BARCLAYS", "WELLS FARGO", "CREDIT ONE", "BANK OF AMERICA", "PNC BANK", "MASTER CARD", "CITIZENS BANK", "CAPITAL ONE AND CHASE", "usa", "bnk", "citibank", "usbank", "ras", "visa", "wels fargo", "discover", "american express", "retail", "barclays", "wells fargo", "credit one", "bank of america", "pnc bank", "master card", "citizens bank", "capital one and chase", "UsA", "baNK", "CiTiBAnK", "uSBANK", "RaS", "ViSA", "WEIls FARGO", "DiSCOVER", "AMERICan EXPRESS", "RETAIl", "BARCLAYs", "WELLS FarGO", "CREdit ONE", "BANK OF AMERICa", "PNC BANK", "MAster CARD", "CITIZENS BanK", "CAPITAL ONE AND CHASE", "usa", "bnk", "citiBAnk", "usbANK", "rAS", "vISA", "wels fargo", "discover", "american express", "retail", "barclays", "wells fargo", "credit one", "bank of america", "pnc bank", "master card", "citizens bank", "capital one and chase"];
const cardIssueTypes = ["USA", "CITIBANK", "USBANK", "RAS", "VISA", "WEILS FARGO", "DISCOVER", "AMERICAN EXPRESS", "RETAIL", "BARCLAYS", "WELLS FARGO", "CREDIT ONE", "BANK OF AMERICA", "PNC BANK", "MASTER CARD", "CITIZENS BANK", "CAPITAL ONE AND CHASE", "usa", "citibank", "usbank", "ras", "visa", "wels fargo", "discover", "american express", "retail", "barclays", "wells fargo", "credit one", "bank of america", "pnc bank", "master card", "citizens bank", "capital one and chase", "UsA", "CiTiBAnK", "uSBANK", "RaS", "ViSA", "WEIls FARGO", "DiSCOVER", "AMERICan EXPRESS", "RETAIl", "BARCLAYs", "WELLS FarGO", "CREdit ONE", "BANK OF AMERICa", "PNC BANK", "MAster CARD", "CITIZENS BanK", "CAPITAL ONE AND CHASE", "usa", "citibank", "usbank", "ras", "visa", "wels fargo", "discover", "american express", "retail", "barclays", "wells fargo", "credit one", "bank of america", "pnc bank", "master card", "citizens bank", "capital one and chase"];
const insuranceOptions = ["Yes", "No", "YesS", "YeEs", "NOI", "noi", "yes", "no", "yess", "yess", "noi", "noi", "YeS", "nO", "YeSS", "YeES", "NOI", "noI", "yes", "no", "yess", "yees", "noi", "noi"];
const sexOptions = ["Male", "Female", "MELA", "FAMALE", "EMAL", "FEMLE", "male", "female", "mela", "famale", "emal", "femle", "MaLe", "FeMAle", "MElA", "FAmaLE", "EMAl", "FEmLE", "male", "female", "mela", "famale", "emal", "femle"];
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-", "a+", "a-", "b+", "b-", "o+", "o-", "ab+", "ab-", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-", "a+", "a-", "b+", "b-", "o+", "o-", "ab+", "ab-"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "west denise", "fuenteshaven", "new shaunbury", "new shaunbury", "nprth ashleybury", "east brian", "taylorview", "lake ariel", "south brandonchester", "north tina", "north daniel", "south brittanyport", "bennettfort", "pughctad", "jamessurt", "bettymouth", "saravhille", "north justin", "pearsonton", "christinebuyr", "lake jenniferstad", "davismouth", "east kelliehaven", "lake christopherview", "shelbystad", "justinmouth", "suttonside", "mratinview", "west mariahhaven", "nicoleshire", "north theersa", "lake ariel", "west mariahhaven", "jamessurt", "lake ariel", "christinebuyr", "saravhille", "east brian", "christinebuyr", "bennettfort", "justinmouth", "davismouth", "saravhille", "lake christopherview", "saravhille", "bennettfort", "bennettfort", "saravhille", "bennettfort", "jamessurt", "lake ariel", "east brian", "christinebuyr", "lake christopherview", "nicoleshire", "lake christopherview", "south brittanyport", "pearsonton", "saravhille", "bennettfort", "north tina", "north daniel", "saravhille", "saravhille", "north justin", "north daniel", "lake ariel", "bennettfort", "pughctad", "justinmouth", "saravhille", "north tina", "lake ariel", "mratinview", "lake ariel", "east brian", "nicoleshire", "east brian", "christinebuyr", "south brandonchester", "north daniel", "north justin", "north tina", "bennettfort", "nprth ashleybury", "saravhille", "saravhille", "lake ariel", "christinebuyr", "north daniel", "nicoleshire", "bennettfort", "bennettfort", "lake ariel", "nicoleshire", "christinebuyr", "bennettfort", "bennettfort", "bennettfort", "pughctad", "bennettfort", "new york", "los angeles", "chicago", "houston", "miami", "west denise", "fuenteshaven", "new shaunbury", "new shaunbury", "nprth ashleybury", "east brian", "taylorview", "lake ariel", "south brandonchester", "north tina", "north daniel", "south brittanyport", "bennettfort", "pughctad", "jamessurt", "bettymouth", "saravhille", "north justin", "pearsonton", "christinebuyr", "lake jenniferstad", "davismouth", "east kelliehaven", "lake christopherview", "shelbystad", "justinmouth", "suttonside", "mratinview", "west mariahhaven", "nicoleshire", "north theersa", "lake ariel", "west mariahhaven", "jamessurt", "lake ariel", "christinebuyr", "saravhille", "east brian", "christinebuyr", "bennettfort", "justinmouth", "davismouth", "saravhille", "lake christopherview", "saravhille", "bennettfort", "bennettfort", "saravhille", "bennettfort", "jamessurt", "lake ariel", "east brian", "christinebuyr", "lake christopherview", "nicoleshire", "lake christopherview", "south brittanyport", "pearsonton", "saravhille", "bennettfort", "north tina", "north daniel", "saravhille", "saravhille", "north justin", "north daniel", "lake ariel", "bennettfort", "pughctad", "justinmouth", "saravhille", "north tina", "lake ariel", "mratinview", "lake ariel", "east brian", "nicoleshire", "east brian", "christinebuyr", "south brandonchester", "north daniel", "north justin", "north tina", "bennettfort", "nprth ashleybury", "saravhille", "saravhille", "lake ariel", "christinebuyr", "north daniel", "nicoleshire", "bennettfort", "bennettfort", "lake ariel", "nicoleshire", "christinebuyr", "bennettfort", "bennettfort", "bennettfort", "pughctad", "bennettfort"];
const provinces = ["California", "Texas", "Florida", "New York", "Illinois", "ID", "CO", "MS", "MT", "NH", "MA", "CA", "VT", "AL", "AZ", "WA", "WV", "KS", "ID", "SC", "WV", "UT", "HI", "IN", "NV", "RI", "CO", "AK", "IL", "MI", "ME", "IN", "TN", "ID", "DC", "CA", "TN", "ID", "CA", "IN", "WV", "NH", "IN", "WV", "MI", "RI", "WV", "AK", "WV", "WV", "WV", "WV", "WV", "ID", "CA", "NH", "IN", "AK", "ID", "AK", "WA", "HI", "WV", "WV", "AL", "AZ", "WV", "WV", "UT", "AZ", "CA", "WV", "KS", "MI", "WV", "AL", "CA", "IN", "CA", "NH", "ID", "NH", "IN", "VT", "AZ", "UT", "AL", "WV", "MT", "WV", "WV", "CA", "IN", "AZ", "ID", "WV", "WV", "CA", "ID", "IN", "WV", "WV", "WV", "KS", "WV", "OH", "GA", "PA", "OK", "VA", "MD", "Ohio", "Georgia", "Pennsylvania", "Oklahoma", "Virginia", "Maryland", "North Carolina", "South Carolina", "New Jersey", "Connecticut", "Wisconsin", "Oregon"];
const countries = ["USA", "Canada", "UK", "Australia", "us", "united States", "unitade state", "united stat", "un states", "usa", "canada", "uk", "australia", "us", "united states", "unitade state", "united stat", "un states", "USA", "Canada", "UK", "Australia", "Us", "United States", "UnitAdE State", "United Stat", "Un States", "usa", "canada", "uk", "australia", "us", "united states", "unitade state", "united stat", "un states"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "Sonday", "Mondayy", "TuesDay", "WednesDay", "ThursDay", "Frday", "SaturDay", "sonday", "mondayy", "tuesday", "wednesday", "thursday", "frday", "saturday"];

const userName = [
    "Alice Smith", "Robert Johnson", "Mary Brown", "James Wilson", "Patricia Garcia",
    "Michael Davis", "Linda Rodriguez", "David Williams", "Jennifer Garcia", "Christopher Rodriguez",
    "Angela Wilson", "Brian Martinez", "Nicole Anderson", "Kevin Thomas", "Michelle Jackson",
    "Jason White", "Stephanie Harris", "Jeffrey Martinez", "Kimberly Young", "Ryan Allen",
    "Jessica King", "Eric Wright", "Sarah Lopez", "Brandon Hill", "Melissa Green",
    "Timothy Adams", "Amy Baker", "Benjamin Carter", "Elizabeth Mitchell", "Samuel Perez", "Bharat rasve", "muskan shaikh", "amir khan", "prachi kale"
];
function generateRandomData() {

    return {
        "Record Number": getRandomNumber(6),
        "Customer ID": getRandomNumber(Math.floor(Math.random() * 5) + 8),
        "Card Issue Type": `${getRandomItem(cardIssueTypes)} card Credit card`,
        "Card Limit": getRandomNumber(Math.floor(Math.random() * 3) + 5),
        "Average Monthly Usage": getRandomNumber(Math.floor(Math.random() * 3) + 4),
        "Does Credit Card Provide Life Insurance": getRandomItem(insuranceOptions),
        "Average Monthly Payment": getRandomNumber(Math.floor(Math.random() * 3) + 3),
        "Card Issuer Date": `${getRandomItem(dayNames)}, ${getRandomDate(2000, 2024)}`,
        "Card Holder Name": `${getRandomItem(userName)}`,
        "Card Holder DOB": `${getRandomItem(dayNames)}, ${getRandomDate(1950, 2005)}`,
        "Alternate Docket No": `${getRandomNumber(6)}-${getRandomNumber(8)}/PRO`,
        "Sex_1": getRandomItem(sexOptions),
        "Register Address": `${getRandomNumber(4)} Random Street, ${getRandomItem(cities)}`,
        "Card Type": `${getRandomItem(cardTypes)} card Credit card`,
        "Rate of Interest": getRandomNumber(3),
        "FICO Credit Score": getRandomNumber(4),
        "City_1": getRandomItem(cities),
        "Province_1": getRandomItem(provinces),
        "Zip_1": getRandomNumber(5),
        "Beneficiary Name": `${getRandomItem(userName)}`,
        "Alternate Address": `${getRandomNumber(3)} West Street, ${getRandomItem(cities)}`,
        "Beneficiary DOB": `${getRandomItem(dayNames)}, ${getRandomDate(1950, 2010)}`,
        "City_2": getRandomItem(cities),
        "Province_2": getRandomItem(provinces),
        "Zip_2": getRandomNumber(5),
        "Country": getRandomItem(countries),
        "Blood Group": getRandomItem(bloodGroups),
        "Sex_2": getRandomItem(sexOptions),
        "Card Expire Date": `${getRandomItem(dayNames)}, ${getRandomDate(2025, 2035)}`,
        "Credit Card Account Number": getRandomNumber(15),
        "IDON Customer Number": getRandomNumber(12)
    };
}

function updateDataBox(pageId) {
    const currentForm = document.getElementById(pageId);
    const dataBox = currentForm.querySelector('.data-box');
    let dataString =
        `${generatedData["Record Number"]}    ${generatedData["Customer ID"]}    ${generatedData["Card Issue Type"]}    ${generatedData["Card Limit"]}    ${generatedData["Average Monthly Usage"]}    ${generatedData["Does Credit Card Provide Life Insurance"]}    ${generatedData["Average Monthly Payment"]}    ${generatedData["Card Issuer Date"]}    ${generatedData["Card Holder Name"]}    ${generatedData["Card Holder DOB"]}    ${generatedData["Alternate Docket No"]}    ${generatedData["Sex_1"]}    ${generatedData["Register Address"]}    ${generatedData["Card Type"]}    ${generatedData["Rate of Interest"]}    ${generatedData["FICO Credit Score"]}    ${generatedData["City_1"]}    ${generatedData["Province_1"]}    ${generatedData["Zip_1"]}    ${generatedData["Beneficiary Name"]}    ${generatedData["Alternate Address"]}    ${generatedData["Beneficiary DOB"]}    ${generatedData["City_2"]}    ${generatedData["Province_2"]}    ${generatedData["Zip_2"]}    ${generatedData["Country"]}    ${generatedData["Blood Group"]}    ${generatedData["Sex_2"]}    ${generatedData["Card Expire Date"]}    ${generatedData["Credit Card Account Number"]}    ${generatedData["IDON Customer Number"]}`;

    dataBox.innerHTML = dataString;
}

function showPage(pageNumber) {
    document.querySelectorAll('.container').forEach(page => page.style.display = 'none');
    document.getElementById(`form${pageNumber}`).style.display = 'block';
    currentPage = pageNumber;

}

function nextPage(pageNumber) {
    showPage(pageNumber);
    updateDataBox(`form${pageNumber}`);

}

function prevPage(pageNumber) {
    showPage(pageNumber);
    updateDataBox(`form${pageNumber}`);

}

function submitForm() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    lastRecordedTime = document.getElementById('timer').textContent;
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
    generatedData = generateRandomData();
    updateDataBox('form1');
    showPage(1);
}

window.onload = function () {
    showPage(1);
    generatedData = generateRandomData();
    updateDataBox('form1');

};
