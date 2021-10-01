const item = document.querySelectorAll('.item')
item.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log(item.innerHTML)
        item.parentElement.parentElement.children[0].innerHTML=item.innerHTML
        })
})