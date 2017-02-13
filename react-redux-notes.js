// Modern React with Redux Course Notes



// Modern Javascript Tooling

// We will be writing our code in ES6 (ES2016) syntax,
// but no browser has support for ES6 yet, so our code
// needs to transpiled/tooled into ES5. Webpack/Babel
// are transpilers that convert our code into a single
// Javascript file called 'App.js' that can be safely
// run in the browser.


// React is a Javascript library that we use to produce
// html. When we write React code, we're writing independent
// components or views. Components are snippets of code
// that produce html. When we write React code, we
// write nested components.

// Two step process for writing a component:
// 1) First, we make the component that makes some
// HTML. (Make)
// 2) Second, take this component's generated HTML and
// put it on the page (on the DOM.) (Render)

// Javascript modules are siloed from the other code
// that we write and the other libraries that we install
// in our project, unless we explicitly import the library.
// This is to prevent confusion if multiple libraries
// have multiple variables with the same name, for example.

// When we create a component, we are creating a class, a
// type of component. We can have many instances of a
// class, so when we write a component we're writing code
// for a component factory, but not an actual instance of
// that type of component.

// We need to instantiate (call an instance) our components
// before we try to render them to the DOM. We can do
// this by writing JSX in our main App.js component.


// Component Structure

// A component is a function or object that returns some
// HTML. In React, we have one main component (App.js)
// that imports all of the other components. We isolate
// functionality by writing one component per file.

// Youtube API

// Getting Youtube's API is free, but we do need a key so
// can keep track of who's accessing their API.

// `npm install --save <node package>`: installs package
// and puts it in a package.json file


// Exporting Modules, Classes, and State

// A given file might have a lot of code, but we might
// just need a small portion of it. To do that, we
// export that function.

// Whenever we import code from a file that we write as
// developers, we need to give a file reference to the file
// we want to import. We don't need to do this for libraries
// because they're namespaced.

// A class component is used whenever we want a component
// to have some sort of internal record keeping; some way
// for it to be aware of itself and what's happened to it
// since it's been rendered.

// Our SearchBar really need to be a class component so
// that it has internal state to respond to some input.

// An ES6 class is an object with properties and methods
// to it. Every React class component must have a render
// method to generate JSX to a DOM.

// General rule of thumb is to write a functional component
// unless you need a component with some internal state,
// which case, use a class component.


// Handling User Events

// Whenever a user is using a web application, they're
// triggering events all the time (moving the mouse,
// clicking, etc.)

// Handling events in React involves two steps:
// 1) Declare an Event Handler. An event handler is a
// function that should run whenever the event occurs.
// 2) Pass the Event Handler to the element that we want
// to monitor for events.

// All input elements in HTML emit a change event when a
// user types something in.

// Whenever we're writing JSX and referencing Javascript, we
// wrap it in curly braces.

// Define an event handler function on the class whenever
// the event occurs

// The 'event' object (can be named anything but 'e' and
// 'event' are common ones for readability purposes) argument
// passes specific info about what changed.



// State

// State is a plain Javascript object that is used to
// record and react to user events.

// Each class component has its own state object. Whenever
// state is changed, the component immediately re-renders,
// and forces all of its children to re-render as well.

// All Javascript classes have a special function called
// constructor. The constructor function is the first and
// only function called automatically whenever a new instance
// of the class is created. The constructor function is reserved
// for doing some set up inside of our class like initializing
// variables, state, or methods.

// Remember how our component SearchBar extends Component?
// Component (from the React library) itself has its own
// constructor function. When we define a method that is already
// defined on the parent class which is Component, we can call
// that parent method on the parent class by calling `super()`.

// We initialize state by creating a new object and assigning it
// to `this.state`:

	this.state = { term: '' };

// The object we pass will also contain properties that we want
// to record on the state (in this case, it's 'search term').

// You can imagine that we'd want to update state in response
// to user inputs like a search term.

// Updating state is different from creating state. We ONLY
// use `this.state` when we initialize state. When we want to
// update state, we use the method `this.setState()` and pass
// it the object that contains the new state that we want to
// give to our component.

// Using `.setState()` allows us to maintain continuity by
// letting React know that the state needs to be updated.
// The state object is central to React and is responsible
// for so much, so we want the child components that rely on
// state to have the same state object.



// Controlled Components

// A controlled input/controlled form element/controlled field
// is a form element like `input` whose value is set by the
// state and not the other way around. Its value only ever
// changes when the state changes. We then call `this.setState()`
// to update state with the new value of a state property.

// Downward Dataflow: only the most parent component should be
// responsible for fetching data. The parent component passes
// down this data as `props` to child components.



// Refactoring Functional Components to Class Components

// Data changing over time = a good use for state.
// We always call our constructor and super function with
// `props`.



// Props

// In a functional component, props are passed in as an
// argument. In a class component, props are available anywhere
// in any method we define as `this.props`.
// Functional component: `props`
// Class component: `this.props.name`
// Always ask yourself if a component needs state, or if it just
// needs props when building a new component.



// Building Lists with Map

// React has a bunch of logic built into it to optimize rendering
// lists. React uses keys for each list item so that it can update
// and re-render a specific list item instead of having to recreate
// and re-render the entire list if only one item changes.

// A common strategy for building keys for a list of data is to use
// the id.

// In our videoItems function, each Youtube search object from the
// API response has a unique `etag`, so we assign that as the key
// property to each video list item.












