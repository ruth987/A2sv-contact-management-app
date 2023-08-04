import { redirect } from "react-router-dom";
import { deleteContact } from "../Contacts";

export async function action({ params }) {
    throw new Error("Not implemented");
  await deleteContact(params.contactId);
  return redirect("/");
}