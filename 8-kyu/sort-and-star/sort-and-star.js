function twoSort(s) {
  return s.sort()[0].split('').map(item => item + '***').join('').slice(0,-3);
}