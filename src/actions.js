import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction({ request }) {
  // get the form data
  const formData = await request.formData();

  // construct new team
  const newTeam = {
    subject: formData.get("subject"),
    details: formData.get("details"),
  };

  // request to create route in backend
  await fetch(url + "/teams/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeam),
  });

  // redirect back to the index page
  return redirect("/");
}
export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new team
    const newTeam = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + "/teams/" + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeam),
    });
  
    // redirect back to the index page
    return redirect("/");
  }
  export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + "/teams/" + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}