/*
import {animate, scroll} from "https://cdn.skypack.dev/motion@10.16.4"
scroll(animate("#progress-bar", {scaleX: [0, 1]}), {target: "#slides"})
*/

document.getElementById('controls').classList.add('visible')

const slides = document.getElementById('slides')
document.getElementById('next-slide').addEventListener('click', function() {
    slides.scroll({left: slides.scrollLeft + document.body.clientWidth, behavior: 'smooth'})
})
document.getElementById('first-slide').addEventListener('click', function() {
    slides.scroll({left: 0, behavior: 'smooth'})
})
slides.addEventListener('scroll', function() {
    document.getElementById('next-slide').style.opacity = ((slides.scrollLeft + document.body.clientWidth) < slides.scrollWidth-5) ? 1 : 0
    document.getElementById('first-slide').style.opacity = ((slides.scrollLeft + document.body.clientWidth) < slides.scrollWidth-5) ? 0 : 1
})

document.getElementById('full-screen').addEventListener('click', function() {
    document.body.requestFullscreen({navigationUI: "hide"})
})
document.addEventListener('fullscreenchange', function() {
    document.getElementById('full-screen').style.opacity = document.fullscreenElement ? 0 : 1
})
