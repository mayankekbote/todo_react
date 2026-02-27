# React Context API – Explanation and Implementation

---

## What is Context API in React?

The **Context API** is a built-in feature in React that allows you to share state globally across components without manually passing props at every level of the component tree.

It is mainly used to solve the problem of **prop drilling**, where data needs to be passed through multiple intermediate components just to reach a deeply nested component.

In simple terms:

> Context provides a central store that any component inside the Provider can access directly.

---

## Why Use Context Instead of Props?

### Problem with Props (Prop Drilling)

When using props:

- Data flows from parent → child → grandchild
- Every intermediate component must pass the prop forward
- Code becomes harder to maintain
- Refactoring becomes more complex

Example structure:

App  
 └── Parent  
      └── Child  
           └── GrandChild (needs data)

If `GrandChild` needs state from `App`, every level must pass props.

---

### Advantages of Context API

- Eliminates prop drilling  
- Centralized state management  
- Cleaner component structure  
- Better scalability for medium-sized applications  
- Easier maintenance  

**Use Context when:**

- Multiple components need access to the same state  
- State is shared across distant parts of the tree  

---

# Step-by-Step: How Context Was Added to the Todo Project

---

## Step 1: Create `Wrapper.jsx` inside `/src`

Create a new file:

/src/Wrapper.jsx

---

## Step 2: Create Context Outside the Component

Inside `Wrapper.jsx`:

```js
import { createContext, useState } from "react";

export const todoContext = createContext(null);
```
Important:
The context must be created outside the functional component.



## Step 3: Move `useState` to Wrapper

Now shift your shared state from `App.jsx` to `Wrapper.jsx`.

```js
const Wrapper = (props) => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo1"
    }
  ]);

  return (
    <todoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
```

### Explanation

* `useState` is now inside `Wrapper`
* `todoContext.Provider` wraps all child components
* The `value` prop passes shared data (`todos`, `setTodos`)
* Any component inside `Wrapper` can access this state

---

## Step 4: Wrap App with Wrapper in `main.jsx`

Open `main.jsx` and wrap your `App` component:

```js
<Wrapper>
  <App />
</Wrapper>
```

Now the entire application is inside the Context Provider.

---

## Step 5: Use Context Where Needed

In any component where you want to access shared data:

```js
import { useContext } from "react";
import { todoContext } from "../Wrapper";

const [todos, setTodos] = useContext(todoContext);
```

Now you can:

* Read todos
* Add new todos
* Delete todos
* Update todos

All directly through context without passing props.

---

# Final Architecture

## Before Context

```
App (state)
  ↓ props
Create
  ↓ props
Read
```

State was passed manually via props.

---

## After Context

```
Wrapper (state)
   ↓
Context Provider
   ↓
Create & Read (direct access)
```

Components directly consume shared state using `useContext`.

---

# Conclusion

The Context API is an efficient solution for managing shared state in React applications where multiple components require access to the same data.

It improves code organization, reduces unnecessary prop passing, and enhances scalability.

For simple parent-child communication, props are sufficient.
For shared state across multiple components, Context provides a cleaner and more maintainable approach.



