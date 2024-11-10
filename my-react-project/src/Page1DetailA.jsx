import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  console.log(state);

  const onClickBack = () => navigation(-1);

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};