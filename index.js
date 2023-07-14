import inquirer from 'inquirer';
import qr from "qr-image"
import { URL } from 'url';
import fs from "fs"

inquirer
  .prompt([{
    message: "Type in the URL: ",
    name: "URL"
}])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"))

    fs.writeFile("URL.Text",url,(err)=>{
        if(err)throw err;
        console.log("The File HAs Been Saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
