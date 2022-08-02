$('#ok').click(function () {
  let val = pigTransleter($('#launguagePig').val())
  copyTextClipBoard(val)
})

function pigTransleter(string) {
  let vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я']
  let uppers = ['А', 'И', 'Е', 'Ё', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я']
  function pigTransle(string, vowels, uppers) {

    const myArray = string.split("");

    return myArray.reduce(function (prev, current, i, array) {

      vowels.forEach(element => {
        if (element == prev) prev = prev + "с" + element
        if (current == element) {
          prev = prev.substring(0, prev.length - 1)
          current = array[i - 1] + current + "с" + element
        }
      });

      uppers.forEach(element => {
        if (element == prev) prev = prev + "С" + element
        if (current == element) {
          prev = prev.substring(0, prev.length - 1)
          current = array[i - 1] + current + "С" + element
        }
      });

      return prev + current
    });

  }
  return pigTransle(string, vowels, uppers)
}

function copyTextClipBoard(text) {
  navigator.clipboard.writeText(text);
}