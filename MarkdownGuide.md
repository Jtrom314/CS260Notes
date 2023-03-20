# Markdown syntax guide:

## Headings

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

H1
======

H2
------
```

## Paragraphs

Paragraphs are separated by empty lines. To create a new paragraph, press `enter` twice.

```
Paragraph 1

Paragraph 2
```

## Character styles

```
*Italic*
**Bold**
~~Strikethrough~~
```

Result:

*Italic*
**Bold**
~~Strikethrough~~

## Unordered list

```
* Item 1
* Item 2
* Item 3
    * Item 3a
    * Item 3b
    * Item 3c
```

Result:

* Item 1
* Item 2
* Item 3
   * Item 3a
   * Item 3b
   * Item 3c

## Ordered list

```
1. Item 1
2. Item 2
3. Item 3
    1. Item 3.1
    2. Item 3.2
    3. Item 3.3
```

## Quotes

```
> Line 1
>
> Line 3
>> Quote within a quote
```
Result:

> Line 1
> 
> Line 3
>> Quote wthin a quote


## Links to external websites

```
This is [an example](http://www.example.com) of an inline link.
[This link](http://www.example.com "Title") has a title attribute.
Links are also auto-detected in text: http://www.example.com
```

Result:

This is [an example](http://www.example.com) of an inline link.

[This link](http://www.example.com "Title") has a title attribute.

Links are also auto-detected in text: http://www.example.com

## Images

```
![Alt text](/path/to/image.jpg)
![Alt text](/path/to/image.png "Optional title attribute")
![Alt text](/url/to/image.jpg)
```

## Tables

```
| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| Item 1    | Item 2    | Item 3    | 
```

## Horizontal line breaks

```
Paragraph 1

---

Paragraph 2
```

Example:

---

## Backslash escapes

Certain characters can be escaped with a preceding backslash to preserve the literal display of a character instead of its special Markdown meaning. This applies to the following characters:

| Character | Description |
|-----------| ------------| 
| \\ | backslash |
| \` | backtick |
| \* | asterisk |
| \_ | underscore |
| \{\} | curly braces |
| \[\] | square brackets |
| \(\) | parentheses |
| \#   | hash mark |
| \>   | greater than |
| \+   | plus sign |
| \-   | hyphen |
| \.   | dot |
| \!   | exclamation mark |

## Entity
An HTML entity is a piece of text ("string") that begins with an ampersand (`&`) and ends with a semicolon (`;`). Entites are fequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

### Reserved characters

See a list of all reserved characters [here](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

| Character | Entity |
|-----------|--------|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |