"use strict"

let hh = 0
let mm = 0
let ss = 0

let tempo = 60; // quantos milesimos vale um 1 segundo?
let cron

//inciar o temporizador
function start() {

    cron = setInterval(() => { timer() }, tempo)

}
// para o temporizador mas nao limpar as variaveis
function pause() {
    clearInterval(cron)
}
//para o temporizador e limprar as variaveis
function stop() {
   clearInterval(cron)
  

    document.getElementById('counter').innerHTML = '00:00:00'
}
//faz a contagem do tempo e exibiçao
function timer() {

    ss++ // incrementa +1 na variavel ss

    if(ss == 60) { // verificar se deu 59 segundos
        ss = 0 // volta os segundos para 0
        mm++ // adiciona +1 na variavel mm

        if(mm == 60) { // verificar se deu 59 minutos
            mm= 0 // volta os minutos para 0
            hh++ //adciona +1 na variavel hora
        }
    }

   //criar uma variavel com o valor tratado hh:mm:ss
    let format = (hh < 10 ? '0' + hh : hh)  + ':' + (mm < 10 ? '0'+ mm : mm ) + ":" + (ss < 10 ? '0' + ss : ss)
    // insere o valor tratado no elemento counter

    document.getElementById('counter').innerText = format

    //retornar o valor tratado
    return format
}
