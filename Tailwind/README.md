# 0x13. Javascript - Objects, Scopes and Closures.

## Why Javascript programming is amazing.

JavaScript has become an essential web technology along with HTML and CSS, as most browsers implement JavaScript. Thus, You must learn JavaScript if you want to get into web development, and you must learn it well if you're planning on being a front-end developer or on using JavaScript for backend development.

Furthermore, JavaScript usage has now extended to mobile app development, desktop app development, and game development. All in all, it has exploded in popularity and is now a very useful skill to learn.

> “Any application that can be written in JavaScript, will eventually be written in JavasSript.” — Jeff Atwood 2007

## How to create an object in Javascript.

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) Let's work through an example to understand what they look like.

As with many things in JavaScript, creating an object often begins with defining and initializing a variable.
For example:
```
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
```

The syntax always follows this pattern
___
## How to declare a class.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
## What "this" means.

**this** keyword refers to an object, that object which is executing the current bit of javascript code.
In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.

## What undefined means.

undefined is a property of the global object. That is, it is a variable in global scope. The initial value of undefined is the primitive value undefined.

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

Why the variable type and scope is important.

You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0–9).

Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) as well as "a" through "z" (lowercase).

JavaScript has three kinds of variable declarations.

- var: Declares a variable, optionally initializing it to a value.
- let: Declares a block-scoped, local variable, optionally initializing it to a value.
- const: Declares a block-scoped, read-only named constant.

#### Importance of the scope.

The scope is a policy that manages the availability of variables. A variable defined inside a scope is accessible only within that scope, but inaccessible outside.

In JavaScript, scopes are created by code blocks, functions, modules.

While const and let variables are scoped by code blocks, functions or modules, var variables are scoped only by functions or modules.

Scopes can be nested. Inside an inner scope you can access the variables of an outer scope.

The lexical scope consists of the outer function scopes determined statically. Any function, no matter the place where being executed, can access the variables of its lexical scope (this is the concept of closure).

## What is a closure.
![closure](https://dmitripavlutin.com/static/955adfa7435c76ac16bfaf9d7d992ac1/da8b6/javascript-closure-2.png)

the closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.

A rule of thumb to identify a closure: if you see in a function an alien variable (not defined inside the function), most likely that function is a closure because the alien variable is captured.

## What is a prototype.

The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

Every function includes prototype object by default.

The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

```
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15
```

## How to inherit an object from another.

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.