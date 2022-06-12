const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    
  let theaterIXX = await promiseTheaterIXX();
  let theaterVGC = await promiseTheaterVGC();

  // Data penonton theater IXX dijumlahkan dgn data theater VGC menggunakan array concat
  let theaterData = theaterIXX.concat(theaterVGC);
  // Mengembalikan nilai length dari array yang telah difilter berdasarkan hasil emosi
  return theaterData.filter(element => (element.hasil === emosi)).length;
};

module.exports = {
  promiseOutput,
};
