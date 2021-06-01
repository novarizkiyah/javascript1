const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);

//constructing promise object akan digunakan untuk menjalankan proses asynchronus
//seperti mengambil data dari internet. Hasilnya dapat berhasil/gagal
//output yang dihasilkan baik fulfill/reject baru berupa promise, bkn nilai dari fungsi tsb.
//Caranya harus pakai .then