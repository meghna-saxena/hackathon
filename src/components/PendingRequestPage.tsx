import * as React from "react";

import NewList from "./common/NewList/NewList";

export interface IAppProps {}

export default class PendingRequestPage extends React.Component<IAppProps> {
  public render() {
    return <NewList />;
  }
}
