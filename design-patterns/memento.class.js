// class example of mediator design pattern

// A class that stores the editor status
class EditorMemento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Editor
class Editor {
  constructor() {
    this.content = "";
  }

  // A method that stores the current state of the editor
  createMemento() {
    return new EditorMemento(this.content);
  }

  // A method to restore to the previous state
  restore(memento) {
    this.content = memento.getContent();
  }

  // Modifying the contents of the editor
  setContent(content) {
    this.content = content;
  }

  // A method that outputs the current editor
  getContent() {
    return this.content;
  }
}

// Editor Manager Class
class EditorManager {
  constructor() {
    this.history = [];
  }

  // A method that adds the state of the editor to the history
  save(editor) {
    this.history.push(editor.createMemento());
  }

  // The most recent status in the history and apply to the editor
  undo(editor) {
    if (this.history.length) {
      this.history.pop();
      editor.restore(this.history[this.history.length - 1]);
    }
  }
}

// Usage
const editor = new Editor();
const editorManager = new EditorManager();

editor.setContent("This is the first sentence.");
editorManager.save(editor);

editor.setContent("This is the second sentence.");
editorManager.save(editor);

console.log(editor.getContent()); // This is the second sentence.

editorManager.undo(editor);
console.log(editor.getContent()); // This is the first sentence.
