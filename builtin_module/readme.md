## OS-module

### /dev/null

- dev/null is a null device file.
- discard anything written to it.
- return EOF on reading
- if we want to dump stderr data we can dump into /dev/null
- grep -r hello /sys/
- `grep -r hello /sys/ 2> /dev/null`
- we want only unsuccessful ping `ping www.example.com 1> /dev/null`
- in above line 1 and 2 are linux file descriptors , 1 is stdout and 2 is stderr

### Endianness:

- Endianness refers to the byte order used to represent multi-byte data types in computer memory. It determines the order in which the bytes of a multi-byte data type, such as an integer or floating-point number, are stored in memory.

  - There are two common types of endianness:

    - Big-endian: The most significant byte (MSB) of a multi-byte data type is stored at the lowest memory address, while the least significant byte (LSB) is stored at the highest memory address.

    - Little-endian: The least significant byte (LSB) of a multi-byte data type is stored at the lowest memory address, while the most significant byte (MSB) is stored at the highest memory address.
      => load avg is unix specif it return 0

- os.setPriority([pid, ]priority) Attempts to set the scheduling priority for the process specified by pid. If pid is not provided or is 0, the process ID of the current process is used.
