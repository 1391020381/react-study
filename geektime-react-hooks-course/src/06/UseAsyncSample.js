import useAsync from "./useAsync";

export default function UserList() {
  // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
  const { execute: fetchUsers, data: users, loading, error } = useAsync(
    async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      return json.data;
    },
  );

  return (
    <div className="user-list">
      <h1>Use Async Sample</h1>

      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && <div style={{ color: "red" }}>Failed: {String(error)}</div>}
      <br />
      <ul>
        {users &&
          users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}
