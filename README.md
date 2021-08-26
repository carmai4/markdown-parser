# Markdown Parser  
`node index someMarkdownString`

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

This is a new paragraph.
- item 1
- item 2
```
returns  
`<html><body><h1>This is h1</h1><p>This is a paragraph.It has two lines.</p><p>This is a new paragraph.</p><ul><li>item 1</li><li>item 2</li></ul></body></html>`

