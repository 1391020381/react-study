import { useState, useCallback } from "react";
import useUsers from "./useUsers";
import UserInfoModal from "./UserInfoModal";

export default () => {
  const { data: users, loading, error } = useUsers();
  const [visibleUserId, setVisibleUserId] = useState(null);

  const showUser = useCallback((id) => {
    setVisibleUserId(id);
  }, []);
  const hideUser = useCallback(() => setVisibleUserId(null), []);

  if (!users || loading) return "Loading...";

  return (
    <div className="exp-10-user-list">
      <h2>Users</h2>
      <p>Click name to show details.</p>
      {error && "Fetch failed."}
      <ul>
        {users.map((user) => (
          <li>
            <a href="#" onClick={() => showUser(user.id)}>
              {user.name}
            </a>
          </li>
        ))}
      </ul>
      <UserInfoModal
        visible={!!visibleUserId}
        userId={visibleUserId}
        onOk={hideUser}
        onCancel={hideUser}
      />
    </div>
  );
};
