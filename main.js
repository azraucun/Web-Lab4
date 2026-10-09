import {Task} from './taskManager.js';



const loadBtn = document.getElementById('loadTaskBtn');
const statusMessage = document.getElementById('statusMessage');

loadBtn.addEventListener('click', function(e){ // bir dinleyici yerleştir ve click olunca bu fonskiyonu çlaıştır
    console.log(e); //event in kısaltması ve tıklama olayını gösterir   
    console.log(e.target); // tıklanan butonun kendisini gösterir
    statusMessage.textContent = 'Loading tasks...';
})