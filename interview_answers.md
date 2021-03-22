# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component is a class component, stateful components are keeping track of changing data and needs a render method to return a React Element.

A functional component is a function and it doesn't have a local state but you can use a hook to manage the state behavior.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   We use componentWillMount when we want to call an API from the server and component Will Update when new props are passed to the component or the state is changed. It is used right before rendering.

3) Define stateful logic.
   It is any code that uses state, It can be a function that handles a click event.

4) What are the three step of creating a successful test? What is done in each phase?
   Arrange, Act and Assert
