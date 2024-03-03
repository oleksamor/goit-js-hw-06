class StringBuilder {
  
#value;
constructor(value){
 this.#value = value;
}

getValue() {
    return this.#value;
}

padStart(str){
   return this.#value = str.concat(this.#value);
}

padEnd(str){
return this.#value = this.#value.concat(str);
}

padBoth(str){
 return this.#value = str.concat(this.#value, str);
}

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
