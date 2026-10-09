export class Task {
  constructor(id, title, completed) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
    this.title = title;
    this.completed = completed;
  }

    toggle(){
        //toggle bitmemiş görevi bitmiş yapacak, bitmiş görevi de bitmemiş
        return new Task(this.id, this.title, !this.completed);
        //aynı id, aynı başlık, 
        // ama completed değeri tersi olan yepyeni bir görev oluştur
        //ve farklı kaydet diyor immutability için


    }
}