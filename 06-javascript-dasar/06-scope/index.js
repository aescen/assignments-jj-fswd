var y = 0; // var tersimpan di memori global
const z = -1; // let / const memiliki ruang memori sendiri - sendiri
const fun = () => {
  // function scope
  var a = 88; // local variable
  let x = 11; // local variable

  let y = 99; // local variable
  var z = 98; // Error: variable already defined
};
