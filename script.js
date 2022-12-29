class Base {
  constructor(value) {
    this.value = value;
  }

  plus(value) {
    this.value = this.value + value;
    return this;
  }

  get() {
    return this.value;
  }
}

class IntBuilder extends Base {
  constructor(value) {
    super(value);
  }

  minus(value) {
    this.value = this.value - value;
    return this;
  }

  multiply(value) {
    this.value = this.value * value;
    return this;
  }

  divide(value) {
    this.value = this.value / value;
    return this;
  }

  mod(value) {
    this.value = Math.floor(this.value / value);
    return this;
  }
}

const test = new IntBuilder(10);
test.plus(2).minus(4).multiply(3).divide(6).mod(3).get()

function StringBuilder() {
  Object.call(this, Base(value));
}

StringBuilder.prototype = Base.prototype.constructor;
StringBuilder = StringBuilder.prototype;

StringBuilder.prototype.minus = function (value) { 
  this.value = this.value.slice(0, -value);
  return this;
};

StringBuilder.prototype.multiply = function (value) {
  this.value = this.value.repeat(value);
  return this;
};

StringBuilder.prototype.divide = function (value) {
    this.value = this.value.slice(0,value);
    return this;
  };
  StringBuilder.prototype.remove = function (value) {
    this.value = this.value.split('l').join('');
    return this;
  };
  StringBuilder.prototype.sub = function (value) {
    this.value = this.value.substr(value)
    return this;
  };
const test2 = new StringBuilder("Hello");
test2.plus(" all!").minus(4).multiply(3).divide(4).remove('l').sub(1,1).get()
