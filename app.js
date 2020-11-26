/*
Variable for each section 
My sections will be:
Title (mandatory)
Installation
Usage
Credits
License
Badges
*/
const inquirer = require('inquirer');
const util = require('util');
  
 inquirer
  .prompt([
    {
      name: "sections",
      type: "list",
      message: "Please select the sections you want in a README file",
      choices: ["TableOfContents","Installation","Usage","Technologies","Credits","License"],
    },
  ])
  .then((response) => {
    console.log(response.sections);
  });
 
 
 
 
 
 
/*
Title should include:
Repo Location and link
and 

# Your Project Title

## Description 


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


 1. inline code like this: `*Hello* **world!**"`
 2. fenced code blocks (you may use ` ``` ` or `~~~` 
   as delimiters): 
``` markdown
*Hello* **world!**
```
 ![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

http://github.com - automatic!
[GitHub](http://github.com)
*/

