# Markdown Parser  
`node index someMarkdownString`
- supports up to the first 1000 chars

## Recognizes and parses the following elements
- '#This is h1' -> `<h1>This is h1</h1>`  
- '##This is h2' -> `<h2>This is h2</h2>`  
- 'This is a paragraph. It may contain newlines' -> `<p>This is a paragraph. It may contain newlines</p>`  
- '- list item1 - list item2' -> `<ul><li>list item 1</li><li>list item2</li></ul>`  

## Example
```
#This is h1
This is a paragraph.
It has two lines.
- item 1
- item 2
```
-> `<html><body><h1>This is h1</h1><p>This is a paragraph.It has two lines.</p><ul><li>item 1</li><li>item 2</li></ul></body></html>`

