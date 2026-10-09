import { Task, TaskManager } from "./taskManager.js";
import { fetchTasks } from "./api.js";


const loadBtn = document.getElementById('loadTaskBtn');
const statusMessage = document.getElementById('statusMessage');

loadBtn.addEventListener('click', async function(e){ // bir dinleyici yerleştir ve click olunca bu fonskiyonu çlaıştır
    console.log(e); //event in kısaltması ve tıklama olayını gösterir   
    console.log(e.target); // tıklanan butonun kendisini gösterir
    statusMessage.textContent = 'Loading tasks...';


      try {
    const rawTasks = await fetchTasks();

    const jsonString = JSON.stringify(rawTasks); //metne çevirdi
    console.log(jsonString);

    const parsedTasks = JSON.parse(jsonString);
    const taskInstances = parsedTasks.map(t => new Task(t.id, t.title, t.completed));
    console.log(taskInstances);

    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks.";
  }
});


