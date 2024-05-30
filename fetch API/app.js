const URL = "https://cat-fact.herokuapp.com/facts";

// const getData = async () => {
//     let response = await fetch(URL);
//     console.log(response); //JSON format

//     let data = await response.json();

//     $(".btn").after("<p id='1'>" + data[0].text + "</p>")
//     $("#1").after("<p id='2'>" + data[1].text + "</p>")
//     $("#2").after("<p id='3'>" + data[2].text + "</p>")
//     $("#3").after("<p id='4'>" + data[3].text + "</p>")
//     $("#4").after("<p id='5'>" + data[4].text + "</p>")
    
//     console.log(data);
// }

function getData() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        $(".btn").after("<p id='1'>" + data[0].text + "</p>")
        $("#1").after("<p id='2'>" + data[1].text + "</p>")
        $("#2").after("<p id='3'>" + data[2].text + "</p>")
        $("#3").after("<p id='4'>" + data[3].text + "</p>")
        $("#4").after("<p id='5'>" + data[4].text + "</p>")
    
        console.log(data);
    })
}

$(".btn").click(() => {
    getData();
});