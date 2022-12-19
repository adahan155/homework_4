const student = "Айдарбеков Адахан Таалайбекович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
const mist = 0.2;

function throwRandomError(opport){
    let naib = 1;
    accid = Math.random(naib);
    alert(`Выпало число ${accid}`)
    if(opport >= accid){
        throw new Error('Произошла ошибка, пожалуйста перезагрузите страницу')
    }
}

try{
    throwRandomError(mist)
    alert('Всё в порядке, приложение работает в штатном режиме')
} 
catch (mist){
    alert( `${mist.message}`)
}