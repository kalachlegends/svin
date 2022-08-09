let element = document.querySelector("#alert-text")

$('#ok').click(function () {
  let val = pigTransleter($('#launguagePig').val());
  copyTextClipBoard(val);
  element.innerHTML = "Вы стали хрюшкой <div><img class='pigg' src='icon-setdown.png'/></div>";
  setTimeout(function () {
    console.log(document.body.height, document.body)
    document.documentElement.style.height = "170px"
    element.innerHTML = ""
    $('#launguagePig').val("")
  }, 5000)
})

function pigTransleter(string) {
  let vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я']
  let uppers = ['А', 'И', 'Е', 'Ё', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я']
  let wordEn = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
  function pigTransle(string, vowels, uppers, wordEn) {

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
  return pigTransle(string, vowels, uppers, wordEn)
}


function copyTextClipBoard(text) {
  navigator.clipboard.writeText(text);
}

var enterText = document.getElementById('launguagePig');
enterText.onkeydown = function (e) {
  e = e || window.event;
  if (e.shiftKey && e.keyCode == 13) {
    let val = pigTransleter($('#launguagePig').val());
    copyTextClipBoard(val);
    element.innerHTML = "Вы стали хрюшкой <div><img class='pigg' src='icon-setdown.png'/></div>";
    setTimeout(function () {
      console.log(document.body.height, document.body)
      document.documentElement.style.height = "170px"
      element.innerHTML = ""
      $('#launguagePig').val("")
    }, 5000)
  }
  return true;
}