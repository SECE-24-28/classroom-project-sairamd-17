import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../spinner/load-spinner-component";

const MultiAPIComponent = () => {
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllData = async () => {
    setLoading(true);

    const res1 = await axios.get("https://dummyjson.com/products");
    const res2 = await axios.get("https://dummyjson.com/todos");
    const res3 = await axios.get("https://dummyjson.com/users");

    setProducts(res1.data.products);
    setTodos(res2.data.todos);
    setUsers(res3.data.users);

    setLoading(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Multiple API Fetch</h1>

      <button onClick={getAllData}>Fetch All Data</button>

      <hr />

      <h2>Products</h2>
      {products.map((p) => (
        <p key={p.id}>
          {p.title} — ₹{p.price}
        </p>
      ))}

      <hr />

      <h2>Todos</h2>
      {todos.map((t) => (
        <p key={t.id}>
          {t.todo} — {t.completed ? "Completed" : "Pending"}
        </p>
      ))}

      <hr />

      <h2>Users</h2>
      {users.map((u) => (
        <p key={u.id}>
          {u.firstName} {u.lastName} — {u.email}
        </p>
      ))}
    </div>
  );
};

export default MultiAPIComponent;
