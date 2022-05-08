function parse(content){
    const regex = new RegExp('(?<={{)(.*?)(?=}})','g')
    return content.matchAll(regex)
}   

export function replaceContent(content,insertOptions){
    for (const match of parse(content)) {
        Object.keys(insertOptions).forEach(replacement => {
            if (match[0].replace(" ","") === replacement) {
                content = content.replaceAll(`{{${match[0]}}}`,insertOptions[replacement])
            }
        })
    }
    return content
}