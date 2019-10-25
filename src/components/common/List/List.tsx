import { List, Avatar, Button, Skeleton } from "antd";
import * as React from "react";
import reqwest from "reqwest";
import "./List.css";
import axios from "axios";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=3&inc=name,gender,email,nat&noinfo`;

interface IState {
  initLoading: boolean;
  loading: boolean;
  data: any[];
  list: any[];
}
export default class LoadMoreList extends React.Component<any, IState> {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: []
  };

  componentDidMount() {
    // this.getData(res => {
    //   this.setState({
    //     initLoading: false,
    //     data: res.results,
    //     list: res.results
    //   });
    // });

    axios.get(fakeDataUrl).then(res => {
      //this.state.data.concat(res.results)
      this.setState({ data: res.data.results }, () => {
        this.getData();
      });
    });
  }

  getData = () => {
    // console.log("DATAAAA", this.state.data);

    const { data } = this.state;

    let listTrial: any[];

    listTrial =
      data &&
      data.map((el: any) => {
        return el.name.first;
      });

    console.log("listTrial", listTrial);
    this.setState({ list: listTrial });
  };

  //   getData = callback => {
  //     reqwest({
  //       url: fakeDataUrl,
  //       type: "json",
  //       method: "get",
  //       contentType: "application/json",
  //       success: res => {
  //         callback(res);
  //       }
  //     });
  //   };

  //   onLoadMore = () => {
  //     this.setState({
  //       loading: true,
  //       list: this.state.data.concat(
  //         [...new Array(count)].map(() => ({ loading: true, name: {} }))
  //       )
  //     });
  //     this.getData(res => {
  //       const data = this.state.data.concat(res.results);
  //       this.setState(
  //         {
  //           data,
  //           list: data,
  //           loading: false
  //         },
  //         () => {
  //           // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //           // In real scene, you can using public method of react-virtualized:
  //           // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //           window.dispatchEvent(new Event("resize"));
  //         }
  //       );
  //     });
  //   };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px"
          }}
        >
          {/* // <Button onClick={this.onLoadMore}>loading more</Button> */}
        </div>
      ) : null;

    return (
      <div className="list">
        <List
          className="demo-loadmore-list"
          //   loading={initLoading}
          itemLayout="horizontal"
          //   loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">Approve</a>,
                <a key="list-loadmore-more" style={{ color: "red" }}>
                  Reject
                </a>
              ]}
            >
              <Skeleton avatar title={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
