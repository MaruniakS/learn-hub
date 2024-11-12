import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById("root");
  
  if (root) {
    const usersList = new UserList(root, users);
    usersList.render();
  } else {
    throw new Error("Root2 element not found");
  }
});

users.fetch();

setTimeout(() => {
  users.fetch();
}, 10)
