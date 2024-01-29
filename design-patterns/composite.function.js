// function example of composite structural design pattern

// Leaf (Single object) function
function createFile(name, parent) {
  return {
    name: name,
    parent: parent,

    display: function () {
      console.log(`${"│    ".repeat(getDepth(this))}├───File: ${this.name}`);
    },
  };
}

// Composite function
function createDirectory(name, parent) {
  return {
    name: name,
    parent: parent,
    children: [],

    add: function (item) {
      item.parent = this;
      this.children.push(item);
    },

    remove: function (item) {
      const index = this.children.indexOf(item);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    },

    display: function () {
      console.log(
        `${"│    ".repeat(getDepth(this))}└───Directory: ${this.name}`
      );
      this.children.forEach((child) => {
        child.display();
      });
    },
  };
}

// Depth
function getDepth(item) {
  let depth = 0;
  let current = item.parent;
  while (current) {
    depth++;
    current = current.parent;
  }
  return depth;
}

// Usage
const root = createDirectory("Root", null);
const folder1 = createDirectory("Folder 1", root);
const folder2 = createDirectory("Folder 2", root);
const file1 = createFile("File 1", root);
const file2 = createFile("File 2", folder1);

root.add(folder1);
root.add(folder2);
root.add(file1);

folder1.add(file2);

root.display();
