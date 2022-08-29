/*
Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

// function htmlspecialchars(formData) {
//     let x = formData.split("");
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == "<") {
//             x[i] = "&lt;";
//         } else if (x[i] == ">"){
//             x[i] = "&gt;";
//         } else if (x[i] == '"') {
//             x[i] = "&quot;";
//         } else if (x[i] == "&") {
//             x[i] = "&amp;";
//         }
//     }
//     return x.join("");
//   }

// console.log(htmlspecialchars("<h2>Hello World</h2>"));

// function htmlspecialchars(formData) {
//     return formData.replace(/&/g, "&amp;")
//                    .replace(/"/g, "&quot;")
//                    .replace(/</g, "&lt;")
//                    .replace(/>/g, "&gt;");
//   }



String.prototype.isUpperCase = function() {
    let str = "sds";
    if (str == str.toUpperCase()) {
      return true;
    } else {
      return false;
    }
}