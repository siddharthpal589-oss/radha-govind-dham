alert("admin.ts loaded");

import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const publishBtn = document.querySelector("#publishBtn") as HTMLButtonElement;
const textarea = document.querySelector("#announcement") as HTMLTextAreaElement;

publishBtn.addEventListener("click", async () => {
  console.log("Button clicked");

  const text = textarea.value.trim();
  console.log("Text:", text);

  if (!text) {
    alert("Announcement likho!");
    return;
  }

  try {
    await addDoc(collection(db, "announcements"), {
      text,
      createdAt: new Date(),
    });

    alert("Announcement Publish Ho Gaya!");
    textarea.value = "";
  } catch (error) {
    console.error("Firebase Error:", error);
    alert(String(error));
  }
});