
function fibs(n, results=[]) {
  

    for (let i = 0; i < n; i++) {
         if (i == 0) {
            results.push(0);
        } else if (i == 1) {
            results.push(1);
        } else {
            results.push(results[i -1] + results[i-2]);
        }
    }

    return results;
}


console.log(fibs(3));



function fibsRec(n, results=[]) {
    if (n == 1) {
        results.push(0);
        return results;
    } else if (n == 2) {
        results.push(0,1);
        return results;
    }
    
    else {
        results = results.concat(fibsRec(n-1).reduce((accumulator, item, index,array) => {
            if (index == array.length-1) {
                accumulator.push(item);
                accumulator.push(item + array[index-1]);
              
            } else {
                accumulator.push(item);
            }
            return accumulator;
        }, []));


    }

    return results;
}


console.log(fibsRec(8));

/*


    Fibbonaci(7) = 0	1	1	2	3	5	8]
    Fibbonaci(8) = [
    0, 1, 1,  2,
    3, 5, 8, 13
    ]

Problem:
    Buat program yang menerima angka yang menyimbolkan baris dari deret fibonanci. dan menampilkan deret fibonnaci pada baris tersebut
Plan:
    - Inputan akan berupa angka 
    - Output yang dihasilkan akan berupa array yang menampilkan deret pada inputan 
Contoh:
    fibsRec(1) => [0]
    fibsRec(2) => [0,1]

    fibsRec(3) => [0,1,1] => fibsRec(2) + 1 ;
    fibsRec(4) => [0,1,1,2]  fibsRec(3) + 2
    fibsRec(5) => [0,1,1,2,3]
    fibsRec(6) => [0,1,1,2,3,5]
    fibsRec(7) => [0,1,1,2,3,5,8]

    
    rumus fibonnaci sendiri sebagai berikut:
    F0 = 0
    F1 = 1

    untuk Fn > 1
    Fn = Fn-1 + Fn-2


Pseudocode:
    - Buat paramater n pada fungsi fibsRec, buat juga array kosong yang kita sebut results pada parameter
    - untuk n == 1 maka kembalikan [0]
    - untuk n == 2 maka kembalikan [0,1]
    - selain dari dua kondisi diatas untuk mendapatkan deret selanjutnya sendiri dilakukan dengan menambahkan isi dari 2 deret sebelumnya


*/

