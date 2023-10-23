console.log("charlie")
var photos=[1,2,3]
function ShowPhotos (photo) {
    console.log("showphotos"+photo)
    var body = document.getElementById("the-body")
    var e=document.createElement("div")
    e.textContent=photo
    body.append(e)
}
window.onload=() => photos.map(ShowPhotos)