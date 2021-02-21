"use strict";

//возможные пути для Херсон-Москва, Херсон-Берлин:
const khrsnToMscw = ['Херсон - Киев - Москва', 'Херсон - Одесса - Киев - Москва'];
const khrsnToBrln = ['Херсон - Киев - Минск - Берлин', 'Херсон - Киев - Москва- Берлин'];
const khrsnToKiyv = ['Херсон - Киев'];

// Таблица расстояний:
const distance = {
  "khersonToKiyv": 548,
  "KiyvToMoscow": 860,
  "khersonToOdessa": 201,
  "OdessaToKiyv": 473,
  "KiyvToMinsk": 527,
  "MinskToMoscow": 718,
  "MoscowToBerlin": 1814,
  "MinskToBerlin": 1112
};

//Обьявляем все нужные для работы переменные:
const select = document.getElementById('listA'); //или document.querySelector('class');
const select2 = document.getElementById('listB');
const ways = document.getElementById("list2");
const btn = document.getElementById('button');

//вешаем обработчики события CHANGE в выпадающем списке:
select.addEventListener('change', setWay);
select2.addEventListener('change', setWay);

//создаём функцию, которая после выбора точки А и точки Б будет предлагать возможные пути:
function setWay() {
  const choice = select.value;
  const choice2 = select2.value;
  if (choice === 'Kherson' && choice2 === 'Moscow') {
    // select.innerHTML = ""; - если нужно очистить список после выбора
    for (let i = 0; i < khrsnToMscw.length; i++) {
        let opt = khrsnToMscw[i];
        ways.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }
  }
  else if (choice === 'Kherson' && choice2 === 'Berlin') {
    for (let i = 0; i < khrsnToBrln.length; i++) {
      let opt2 = khrsnToBrln[i];
      ways.innerHTML += "<option value=\"" + opt2 + "\">" + opt2 + "</option>";
    }
  }
    else if (choice === 'Kherson' && choice2 === 'Kiyv') {
    for (let i = 0; i < khrsnToKiyv.length; i++) {
      let opt3 = khrsnToKiyv[i];
      ways.innerHTML += "<option value=\"" + opt3 + "\">" + opt3 + "</option>";
    }
  }
}
//Вешаем обработчик событий на клик по кнопке "Расчитать маршрут".
btn.addEventListener('click', () => {
  if (ways.value === 'Херсон - Киев - Москва') {
  let elem = distance.khersonToKiyv + distance.KiyvToMoscow;
//выводим на экран сообщение для пользователя о том, сколько км составит выбранный маршрут
  btn.insertAdjacentHTML("afterend", '<p> Расстояние маршрута Херсон - Киев - Москва составит </p>'+ elem + ' километров');
// Отправляем выбранный маршрут на сервер
              const request = new XMLHttpRequest();
              request.open('POST', 'server.php');
              request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
              const json = JSON.stringify('Выбранный путь ' + khrsnToMscw[0] + ' составит ' + elem + ' километров');
              request.send(json);
              request.addEventListener('readystatechange', () => {
              if (request.readyState === 4 && request.status === 200) {
              console.log(request.response);
              }
          });
      }
   else if (ways.value === 'Херсон - Одесса - Киев - Москва') {
    let elem2 = distance.khersonToOdessa + distance.OdessaToKiyv + distance.KiyvToMoscow;
    btn.insertAdjacentHTML("afterend", '<p> Расстояние маршрута Херсон - Одесса - Киев - Москва составит </p>'+ elem2 + ' километров');
  
// Отправляем выбранный маршрут на сервер:
              const request2 = new XMLHttpRequest();
              request2.open('POST', 'server.php');
              request2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
              const json2 = JSON.stringify('Выбранный путь ' + khrsnToMscw[1] + ' составит ' + elem2 + ' километров');
              request2.send(json2);
              request2.addEventListener('readystatechange', () => {
              if (request2.readyState === 4 && request2.status === 200) {
              console.log(request2.response);               
          }
      });
   }
   else if (ways.value === 'Херсон - Киев - Минск - Берлин') {
    let elem3 = distance.khersonToKiyv + distance.KiyvToMinsk + distance.MinskToBerlin;
    btn.insertAdjacentHTML("afterend", '<p> Расстояние маршрута Херсон - Киев - Минск - Берлин составит </p>'+ elem3 + ' километров');
                const request3 = new XMLHttpRequest();
                request3.open('POST', 'server.php');
                request3.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                const json3 = JSON.stringify('Выбранный путь ' + khrsnToBrln[0] + ' составит ' + elem3 + ' километров');
                request3.send(json3);
                request3.addEventListener('readystatechange', () => {
                if (request3.readyState === 4 && request3.status === 200) {
                console.log(request3.response);
                }
        });
  }
   else if (ways.value === 'Херсон - Киев - Москва- Берлин')  {
    let elem4 = distance.khersonToKiyv + distance.KiyvToMoscow + distance.MoscowToBerlin
    btn.insertAdjacentHTML("afterend", '<p> Расстояние маршрута Херсон - Киев - Москва- Берлин составит </p>'+ elem4 + ' километров');
// Отправляем выбранный маршрут на сервер:
                const request4 = new XMLHttpRequest();
                request4.open('POST', 'server.php');
                request4.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                const json4 = JSON.stringify('Выбранный путь ' + khrsnToBrln[1] + ' составит ' + elem4 + ' километров');
                request4.send(json4);
                request4.addEventListener('readystatechange', () => {
                if (request4.readyState === 4 && request4.status === 200) {
                console.log(request4.response);
}
        });
              }
    else if (ways.value === 'Херсон - Киев')  {
                let elem5 = distance.khersonToKiyv;
                btn.insertAdjacentHTML("afterend", '<p> Расстояние маршрута Херсон - Киев  составит </p>'+ elem5 + ' километров');
            // Отправляем выбранный маршрут на сервер:
                            const request5 = new XMLHttpRequest();
                            request5.open('POST', 'server.php');
                            request5.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                            const json5 = JSON.stringify('Выбранный путь ' + khrsnToKiyv[0] + ' составит ' + elem5 + ' километров');
                            request5.send(json5);
                            request5.addEventListener('readystatechange', () => {
                            if (request5.readyState === 4 && request5.status === 200) {
                            console.log(request5.response);
 }
         });
              }
    else {
      for (let i = 0; i < 1; i++) {
        if (ways.value == '' || ways.value == null) {
        alert('Сначала выберите маршрут'); 
        }
      }
    }
  });

  /*Подгрузка списка из файла JSON 
  else if (choice === 'Kherson' && choice2 === 'Lviv') {
          const test = new XMLHttpRequest();
          test.open('GET', 'js/export.json');
          test.setRequestHeader('Coontent.Type', 'application/json; charset=itf-8');
          test.send();
          test.addEventListener('readystatechange', () => {
            if (test.readyState === 4 && test.status === 200) {
            console.log(JSON.parse(test.response));
            let data = JSON.parse(JSON.stringify(test.response));
            const test_list = document.getElementById('list2');
            for(let i = 0; i < data.length; i++) {
            let opt_test = data[i];
            test_list.innerHTML += "<option value=\"" + opt_test + "\">" + opt_test + "</option>";
        }
      } */

   
  