document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("result").onclick = function() {
        let massOption = document.getElementById("mass").value,
            distOption = document.getElementById("dist").value,
            clientResult = massOption * distOption;
        Swal.fire({
            title: 'Сделаем скидку для вас!',
            text: 'Стоимость предварительного рассчета составляет : ' + String(clientResult) + "₽",
            imageUrl: 'https://moskvalux.ru/wp-content/uploads/2020/07/XXXL.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    };

    document.getElementById("submit").onclick = function() {
        Swal.fire({
            title: 'Спасибо!',
            text: 'Ваша заявка отправлена',
            imageUrl: '',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    };

});