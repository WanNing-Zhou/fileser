var uInt8Array = new Uint8Array(1024 * 1024 * 16); // 16MB
for (var i = 0; i < uInt8Array.length; ++i) {
    uInt8Array[i] = i;
}

console.log([uInt8Array.buffer])
const transferred = structuredClone(uInt8Array, {
    transfer: [uInt8Array.buffer],
});

console.log(uInt8Array.byteLength); // 0


const arr = [1,2,3,4]

const clone = structuredClone(arr, {transfer: [arr.buffer]})

console.log(clone)