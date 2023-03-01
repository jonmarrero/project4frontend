import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const team = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h2>Create a New Team</h2>
      <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="subject"/>
          <input type="text" name="details" placeholder="subject"/>
          <button>Create New Team</button>
      </Form>
  </div>
  {team.map((post) => <Post key={post.id} post={post} />)}
  </>;
};

export default Index;