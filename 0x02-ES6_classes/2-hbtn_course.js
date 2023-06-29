class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    // Setters for attribute validation
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number' && value > 0) {
      this._length = value;
    } else {
      throw new TypeError('Length must be a positive number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
