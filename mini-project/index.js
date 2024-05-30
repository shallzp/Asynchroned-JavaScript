const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = $("#selector select");
const btn = $("form button");
const to = $("#to select");
const from = $("#from select");

for (let select of dropdown){
    for(currCode in countryList){
        let newOption = $("<option></option>").text(currCode).val(currCode);

        if (select.name === "from" && currCode === "USD") {
            newOption.prop("selected", true);
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.prop("selected", true);
        }

        $(select).append(newOption);
    }

    $(select).change((evt) => {
        updateFlag(evt.target);
    });
}

function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let srcLink = `https://flagsapi.com/${countryCode}/shiny/64.png`;

    let img = $(element).prev();
    img.attr("src", srcLink);
}

$(btn).click(async (evt) => {
    evt.preventDefault();
    let amount = $(".amount input");
    let amtValue = $(amount).val();

    if(amtValue === "" || amtValue < 1){
        amtValue = 1;
        $(amount).val("1");
    }

    const URL = `${BASE_URL}/${$(from).val().toLowerCase()}/${$(to).val().toLowerCase()}.json`;

    let response = await fetch(URL);
});