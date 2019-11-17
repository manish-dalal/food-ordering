import React, { useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScrolling from "react-infinite-scrolling";

import { getItems } from "redux/actions/getItem";
import HomeCard from "components/HomeCard";
import FilterBar from "components/FilterBar";
import CheckOutBar from "components/CheckOutBar";

const Home = props => {
  const { dispatch, items } = props;
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const renderItems = items.map((item, index) => (
    <HomeCard item={item} key={index} />
  ));
  const loadMore = () => {};
  return (
    <div className="Home">
      <FilterBar />
      <div className="Home_header center">
        <div className="app-container center">
          <div className="title center">Lunch</div>
        </div>
      </div>
      <div className="Home_body center">
        <div className="app-container">
          <h3 className="Home_body_title">Lunch</h3>
        </div>
        <div className="app-container center Home_body_container">
          <InfiniteScrolling handleBottomReach={loadMore}>
            {renderItems}
          </InfiniteScrolling>
        </div>
        <CheckOutBar />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState,
    items: state.itemsReducer.items
  };
};
export default connect(mapStateToProps)(Home);
