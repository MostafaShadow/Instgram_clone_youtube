import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import { resMessagesState } from "../../redux/store";
function IndexResponse() {
  const resMessages = useSelector(resMessagesState);
  return (
    <div>
      {resMessages.loading && <Loading />}
      {resMessages.error && <Error />}
    </div>
  );
}

export default IndexResponse;
