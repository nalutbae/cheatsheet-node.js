// function example of mediator design pattern

//  A function that stores the editor status
function createEditorMemento(content) {
  return {
    getContent() {
      return content;
    },
  };
}

// Editor function
function createEditor() {
  let content = "";

  // A function that stores the current state of the editor
  function createMemento() {
    return createEditorMemento(content);
  }

  // A function to restore to the previous state
  function restore(memento) {
    content = memento.getContent();
  }

  // Modifying the contents of the editor
  function setContent(newContent) {
    content = newContent;
  }

  // A function that return the current editor
  function getContent() {
    return content;
  }

  return {
    createMemento,
    restore,
    setContent,
    getContent,
  };
}

// Editor Manager function
function createEditorManager() {
  const history = [];

  // A function that adds the state of the editor to the history
  function save(editor) {
    history.push(editor.createMemento());
  }

  // Functions that are most recent in history and apply to the editor
  function undo(editor) {
    if (history.length > 0) {
      history.pop();
      editor.restore(history[history.length - 1]);
    }
  }

  return {
    save,
    undo,
  };
}

// Usage
const editor = createEditor();
const editorManager = createEditorManager();

editor.setContent("This is the first sentence.");
editorManager.save(editor);

editor.setContent("This is the second sentence.");
editorManager.save(editor);

console.log(editor.getContent()); // This is the second sentence.

editorManager.undo(editor);
console.log(editor.getContent()); // This is the first sentence.
