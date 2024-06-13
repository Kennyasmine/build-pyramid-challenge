document.addEventListener("DOMContentLoaded", function(){
    // Performing a function
    function generatePyramid(count){
        const pyramidContainer = document.getElementById("pyramid");
        pyramidContainer.innerHTML = "";

        // Perfoming loop
        for(let i = 1; i <= count; i++){
            let row = "";
            for(let j = 1; j <= count - i; j++){
                row += "&nbsp;";
            }
            for(let k = 1; k <= 2 * i - 1; k++){
                row += "*";
            }
            pyramidContainer.innerHTML += row + "<br>";
        }
    }
    
    const pyramidBtn = document.getElementById("pyramidForm");
    pyramidBtn.addEventListener("submit", function(e){
        e.preventDefault();
        const count = document.getElementById("count").value;
        generatePyramid(count);
    });
    
});