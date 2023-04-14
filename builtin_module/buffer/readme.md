## Binary data

- represent data in either in (0,1) format
- computer only understand binary data.(0 or 1)
- 1 bit (either 1 or 0)
- 8 bit = 1 byte
- base 2

## hex code

- represent data in from of (0 to f)
- 0 1 2 3 4 5 6 7 8 9 A B C D E F
- base 16
- why to use hex over binary:
  - compact
  - some what easy to read then binary
  - consume less memory
- four digit of binary can represent by single hex digit.
- 1001(binary) => 9(hex code)
- hex code is mostly prefixed
  - 0x in unix and c based programming
  - % url encodings
  - `#` color representation in html

## character set and character encoding

- character set is a collection of letters and symbols used to represent a language in writing system.

- eg. ascii character set contains letters and symbols used in english language.

- Characters in a character set are stored as one or more bytes in a computer.

- Each byte or sequence of bytes represents a given character.

- character encoding is a mapping of a character set to a binary number.

- A character encoding is the key that maps a particular byte or sequence of bytes to particular characters that the font renders as text.

- There are many different character encodings. If the wrong encoding is applied to the bytes in memory, the result will be unintelligible text.

- UTF-8 is a character encoding that is used to represent Unicode characters in a compact binary format.

- UTF-8 is the most common encoding used on the web.

- Basically, you can visualize this by assuming that all characters are stored in computers using a special code, like the ciphers used in espionage. A character encoding provides a key to unlock (ie. crack) the code. It is a set of mappings between the bytes in the computer and the characters in the character set. Without the key, the data looks like garbage.

- The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

  [more info 1](https://www.w3.org/International/articles/definitions-characters/)

  [more info 2](https://www.w3.org/International/questions/qa-what-is-encoding)

  [more info 3](https://www.w3.org/International/getting-started/characters)

## Buffer

- In computer science, a data buffer (or just buffer) is a region of a memory used to temporarily store data while it is being moved from one place to another.

- Buffers can be implemented in a fixed memory location in hardware—or by using a virtual data buffer in software, pointing at a location in the physical memory. In all cases, the data stored in a data buffer are stored on a physical storage medium.

- above are general definition of buffer. In nodejs buffer is objects are used to represent a fixed-length sequence of bytes.

- in a simple way we can say buffer is a temporary storage spot for a chunk of data that is being moved from one place to another.

- A buffer is a space in memory (typically RAM) that stores binary data.

- nodejs use hex code to represent binary data. so buffer is a collection of hex code. each hex code represent 8 bit of binary data. so each buffer object represent 8 bit of binary data.

- buffer is not resizable. so we need to create a new buffer object if we want to add more data to it.

  [more-info](https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/)
