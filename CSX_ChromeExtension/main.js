const contents = document.getElementById("contents");
//Removed below method to prevent inconsistent extension functionality
// while (contents.firstChild){
//     contents.removeChild(contents.firstChild)
// }

let contentsParents = contents.parentNode
contentsParents.removeChild(contents);

let div = document.createElement("div")
div.classList.add("beautText")

$('img').click(function(){
    setTimeout(() => alert('This Alert Works'), 2000);
})


function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min))
}

function ajaxCall(){
    $.ajax({
        method: 'GET',
        url: 'https://unsplash.it/list',
        success: function(result) {
            console.log(result);
            let randomIndex = getRandomInt(0, result.length);
            console.log(randomIndex);
            let randomImg = result[randomIndex];
            var img = document.createElement("img");
            img.src='https://unsplash.it/1200/800?image=' + randomImg.id
            div.append(img)
            var text = document.createTextNode("Ha you're distracting yourself again! Get back to work lovely")
            contentsParents.append(div)
            div.prepend(text)

            


            return result;
        // result is whatever the URL sends back from the request
        },
        error: function(err) {
            console.log("this didn't work")
        // if any errors occur during the process you can check out the
        // the error by logging the 'err' argument
        }
    });
};

const picArray = ajaxCall();
// click to change image does not work yet 
$('img').click(function(){
    div.removeChild(img)
    img.src='https://unsplash.it/1200/800?image=' + randomImg.id
    div.append(img)
})

// console.log(picArray);




