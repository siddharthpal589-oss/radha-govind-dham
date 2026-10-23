import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;

loginBtn.addEventListener("click", async () => {
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");
    window.location.href = "./admin.html";
  } catch (error) {
    alert("Wrong Email or Password");
  }
});