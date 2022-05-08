# template-insert
Create templates with placeholders and insert variables into the placeholders.  Works with every text but was designed for HTML files.

# Install the package:
npm install template-insert

# Replace placeholders without a file

```javascript
   import {replaceContent} from "template-insert"
    
   const replacement = replaceContent("Normal text {{replaceme}} Normal text again",
     {
        replaceme: "Replaced Placeholder"
     }
    )
    
    //Result: 'Normal text Replaced Placeholder Normal text again'
```

# Replace placeholders from a file

```javascript
   import {replaceContent} from "template-insert"
   import {readFileSync} from "fs"
   
   const content = readFileSync("./index.html", {encoding: "utf8"})
   const replacement = replaceContent(content,
     {
        replaceme: "Replaced Placeholder",
        replacemetoo: "Another Placeholder"
     }
    )
```
