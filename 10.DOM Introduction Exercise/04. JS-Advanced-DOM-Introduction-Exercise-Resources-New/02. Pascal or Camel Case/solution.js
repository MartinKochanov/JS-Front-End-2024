function solve() {
  const input = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');

  let result = input.toLowerCase().split(' ');
  switch (namingConvention) {
    case 'Camel Case':
      for (let i = 1; i < result.length; i++) {
        let string = result[i];
        result[i] = string.charAt(0).toUpperCase() + string.substring(1);
      }
      break;
    case 'Pascal Case':
      for (let i = 0; i < result.length; i++) {
        let string = result[i];
        result[i] = string.charAt(0).toUpperCase() + string.substring(1);
      }
      break;
    default:
      result = ['Error!']
  }
  resultElement.textContent = result.join('');
}