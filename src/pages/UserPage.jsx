import { useParams } from "react-router-dom";

function UserPage() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Профиль пользователя: {userId}</h1>
    </div>
  );
}

export default UserPage;

// // HTML:
// <button onclick="handleClick()">Нажми меня</button>

// // React:
// <button onClick={handleClick}>Нажми меня</button>
