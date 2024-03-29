// class example of composite structural design pattern

// Component Interface
class FileSystemItem {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent;
  }

  add(item) {}

  remove(item) {}

  getChild(index) {}

  display() {}
}

// Leaf (Single object) class
class File extends FileSystemItem {
  constructor(name, parent) {
    super(name, parent);
  }

  display() {
    console.log(`${"│    ".repeat(this.getDepth())}├───File: ${this.name}`);
  }

  getDepth() {
    let depth = 0;
    let current = this.parent;
    while (current) {
      depth++;
      current = current.parent;
    }
    return depth;
  }
}

// Composite (Composite object) class
class Directory extends FileSystemItem {
  constructor(name, parent) {
    super(name, parent);
    this.children = [];
  }

  add(item) {
    item.parent = this;
    this.children.push(item);
  }

  remove(item) {
    const index = this.children.indexOf(item);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }

  display() {
    console.log(
      `${"│    ".repeat(this.getDepth())}├───Directory: ${this.name}`
    );
    this.children.forEach((child) => {
      child.display();
    });
  }

  // 깊이 계산
  getDepth() {
    let depth = 0;
    let current = this.parent;
    while (current) {
      depth++;
      current = current.parent;
    }
    return depth;
  }
}

// Usage
const root = new Directory("Root");
const folder1 = new Directory("Folder 1");
const folder2 = new Directory("Folder 2");
const file1 = new File("File 1");
const file2 = new File("File 2");

root.add(folder1);
root.add(folder2);
root.add(file1);

folder1.add(file2);

root.display();
/**
├───Directory: Root
│    ├───Directory: Folder 1
│    │    ├───File: File 2
│    ├───Directory: Folder 2
│    ├───File: File 1
 */
