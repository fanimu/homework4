function nilairandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nilai = [];
let genap = [];
let ganjil = [];

for (let i = 0; i < 100; i++) {
  nilai.push(nilairandom(1, 50));
}

for (let h in nilai) {
  if (h % 2 == 0) {
    genap.push(nilai[h]);
  } else {
    ganjil.push(nilai[h]);
  }
}

// for (let x = 0; x < nilai.length; x++) {
//   if (x % 2 == 0) {
//     genap.push(nilai[x]);
//   } else {
//     ganjil.push(nilai[x]);
//   }
// }

function nMax(a) {
  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      var nilai_maxa = a[i];
    } else {
      if (a[i] > nilai_maxa) {
        nilai_maxa = a[i];
      }
    }
  }
  return nilai_maxa;
}

function nMin(a) {
  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      var nilai_min = a[i];
    } else {
      if (a[i] < nilai_min) {
        nilai_min = a[i];
      }
    }
  }
  return nilai_min;
}

function total(a) {
  let tot = 0;
  for (let i = 0; i < a.length; i++) {
    tot += a[i];
  }
  return tot;
}

function rata(a) {
  let tot = 0;
  let rata2;
  for (let i = 0; i < a.length; i++) {
    tot += a[i];
  }
  rata2 = tot / a.length;
  return rata2;
}

function banding(genap, ganjil) {
  if (genap == ganjil) {
    var ket = 'array Genap sama dengan array Ganjil \n';
  } else if (genap > ganjil) {
    ket = 'array Genap lebih besar dari array Ganjil \n';
  } else {
    ket = 'array Ganjil lebih besar dari array Genap \n';
  }
  return ket;
}

console.log(nilai);
console.log(genap);
console.log(ganjil);
console.log('Nilai Max Genap ' + nMax(genap));
console.log('Nilai Max Ganjil ' + nMax(ganjil));
console.log('Nilai Max ' + banding(nMax(genap), nMax(ganjil)));

console.log('Nilai Min Genap ' + nMin(genap));
console.log('Nilai Min Ganjil ' + nMin(ganjil));
console.log('Nilai Min ' + banding(nMin(genap), nMin(ganjil)));

console.log('Nilai Total Genap ' + total(genap));
console.log('Nilai Total Ganjil ' + total(ganjil));
console.log('Nilai Total ' + banding(total(genap), total(ganjil)));

console.log('Nilai Rata2 Genap ' + rata(genap));
console.log('Nilai Rata2 Ganjil ' + rata(ganjil));
console.log('Nilai Rata2 ' + banding(rata(genap), rata(ganjil)));
