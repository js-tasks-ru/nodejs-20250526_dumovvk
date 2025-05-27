
export default function sum(a, b) {
  if(Number.isFinite(a) && Number.isFinite(b)) {
    return a+b
  }
  else {throw new TypeError("Arguments must be numbers");}
}
