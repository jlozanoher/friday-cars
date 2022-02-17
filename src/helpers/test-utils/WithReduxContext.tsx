import { Provider } from "react-redux";
import store from "../../app/store";

interface Props {
  children: any;
}

export const WithReduxContext = (props: Props) => (
  <Provider store={store}>{props.children}</Provider>
);
