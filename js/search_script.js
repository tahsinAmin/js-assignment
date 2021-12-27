// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom-box ");

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; // user enetered data
    let emptyArray = suggestions.filter(data => {
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map(data => {
        return data = '<li>'+ data +'</li>';
    });
    console.log(emptyArray);
}
 