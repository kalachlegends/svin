

$('#ok').click(function () {
  let val = pigTransleter($('#launguagePig').val())
  copyTextClipBoard(val)
})
function pigTransleter(string) {

  let vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я']
  function pigTransle(string, vowels) {

    const myArray = string.split("");

    return myArray.reduce(function (prev, current, i, array) {

      vowels.forEach(element => {
        if (element == prev) prev = "с" + element + prev
        if (current == element) {

          prev = prev.substring(0, prev.length - 1)
          current = array[i - 1] + current + "с" + element
        }
      });

      return prev + current
    });

  }
  return pigTransle(string, vowels)
}
function copyTextClipBoard(text) {
  navigator.clipboard.writeText(text);
}