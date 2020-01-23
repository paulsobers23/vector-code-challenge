class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  get length(){
    return Math.sqrt(this.x**2 + this.y**2);
  }
}

Vec.prototype.plus = function(vec){
  return new Vec(this.x + vec.x, this.y + vec.y);
};

Vec.prototype.minus = function(vec){
  return new Vec(this.x - vec.x, this.y - vec.y);
};

const firstVec = new Vec(1,2);
const secondVec = new Vec(2,3);
const thirdVec = new Vec(3,4);
console.log(thirdVec.length);
console.log(firstVec.plus(secondVec));

