let container = document.querySelector(".container");
let clear = document.querySelector(".bottom__display");
let topDisplay = document.querySelector(".top__display");
let nums = [];
let data = "";


container.addEventListener("click", (e) => {

    if(nums.length == 0 && data.length > 1) {
        topDisplay.textContent = "";
        data = "";
    }
    if(e.target.dataset.info == "=") {
        let result = 0;
        if(nums[1] == "+") {
            result = +nums[0] + +nums[2];
            
            nums = [];
        } else if(nums[1] == "-") {
            result = +nums[0] - +nums[2];
            nums = [];
        } else if(nums[1] == "*") {
            result = +nums[0] * +nums[2];
            nums = [];
        } else if(nums[1] == "/") {
            result = +nums[0] / +nums[2];
            nums = [];
        }
        data += "= ";
        data += result;
        
    }else {
        nums.push(e.target.dataset.info)
        data += e.target.dataset.info;
        data += " ";
    }
    
    topDisplay.textContent = data;
    
});


clear.addEventListener("click", () => {
    topDisplay.textContent = "";
    data = "";
} );

