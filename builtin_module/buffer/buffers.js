const { Buffer } = require("node:buffer");

/**
 * creating Buffer
 */

const buffer1 = Buffer.alloc(10);
// create buffer of 10 byte buffer is filled with binary zeroes as a placeholder for later data
console.log(buffer1);

const buffer2 = Buffer.alloc(10, 2);
// create buffer of 10 byte buffer in filled with binary 2
console.log(buffer2);

// node use utf8 encoding as default.

const asciBuf = Buffer.alloc(5, "a", "ascii");
// buffer is initialized with five bytes of the character a, using the ASCII representation.
console.log(asciBuf);
console.log(asciBuf.toString());
console.log(asciBuf.toJSON());

const buffer3 = Buffer.from("INDIA");
console.log(buffer3);
console.log(buffer3.toString());

const buffer4 = Buffer.from(buffer3);
console.log(buffer4);

/**
 * reading from Buffer
 */

const nameBuff = Buffer.from("jay");
console.log(nameBuff[0]); //first byte of a nameBuff in utf 8 106 represent j
console.log(nameBuff);
console.log(nameBuff.toJSON());
console.log(nameBuff.toString("utf-8"));
console.log(nameBuff.toString("hex"));

/**
 * Modifying a Buffer
 */

const hiBuff = Buffer.from("hi");
// console.log((hiBuff[0] = "j")); //this will not work
console.log((hiBuff[0] = 106));
console.log(hiBuff);
console.log(hiBuff.toString("utf-8"));

// If we wanted to change the contents of the entire buffer, we can use the write() method. The write() method accepts a string that will replace the contents of a buffer.

hiBuff.write("Hello");
console.log(hiBuff.toString());
// above log only print he bcz is not resizable

const buf1 = Buffer.from("Hello jay");
const buf2 = Buffer.from("      kishan");
console.log(buf1, buf2);
buf1.copy(buf2, 0, 0, 5);
console.log(buf2.toString("utf-8"));

const buf = Buffer.from([1, 2, 3, 4, 5]);
for (let b of buf) {
  console.log(b);
}
