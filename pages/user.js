import withRedux from "next-redux-wrapper";
import MomentComp from "../components/MomentComp";

export  default () => {
  return (
    <div>
      <h1>user</h1>
      <h2>next.js react view</h2>
      <MomentComp type="user"/>
    </div>
  )
}
