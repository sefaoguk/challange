const button = document.querySelectorAll(".button")
// Farklı resimlerin gelmesi için cycle başlattım, başa dönmesi için fonksiyon içerisinde 0'ladım.
cycle = 0;



button.forEach(function (item) {
    item.addEventListener('click', function () {
        //Farklı resimlerin gelmesi için cycle'ın döneceği resim dizisi
        let resim = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg']
        let div = document.createElement('div');
        div.className = "card";
        //resim içerisine cycle değeri girerek dizinin indexlerine göre döndürdüm.
        div.innerHTML = ` 
        <img class ="image" src="${resim[cycle]}">
        `


        // Hangi butona basıldıysa onun üst parentına koydum ki farklı butona tıklandığında aynı div içerisine resim atmasın.
        item.parentElement.appendChild(div);
        cycle++;
        if (cycle == 4) {
            cycle = 0;
        }
        console.log(deleteButton)
    })

})









//const deleteButton = document.querySelector(".delete")
//deleteButton.addEventListener('click',deleteButton.parentElement.remove())
// deleteButton.forEach(function(sil){
//     sil.addEventListener('click',function(){
//         console.log(item)

//         item.remove();
//     })
// })
