import React, { useRef, useCallback } from "react";
import { FaSearch, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import getImage from "utils/getImage";
import { getItems, itemsFilterChange } from "redux/actions/getItem";
// @ts-ignore
// import colors from "assets/css/colors.scss";

const Header = props => {
  const {
    dispatch,
    filters,
    location: { pathname }
  } = props;

  const { search = "" } = filters;
  const myInp = useRef(null);
  function loadData(searchValue) {
    dispatch(getItems());
  }
  const delayedQuery = useCallback(debounce(loadData, 300), []);

  const onSearch = event => {
    const {
      target: { value }
    } = event;
    dispatch(itemsFilterChange({ search: value, sort: "", order: "" }));
    delayedQuery(value);
  };
  const clearSearch = () => {
    dispatch(itemsFilterChange({ search: "" }));
    loadData("");
  };

  return (
    <div className="Header center">
      <div className="app-container center">
        <img src={getImage("logo")} alt="logo" />
        {pathname === "/" ? (
          <div
            className="search center"
            onClick={() => {
              myInp.current.focus();
            }}
          >
            <FaSearch className="Header_icon search_icon" />
            <input
              className="search_input"
              placeholder="Search Item"
              onChange={onSearch}
              value={search}
              ref={myInp}
            />
            {search.length ? (
              <IoMdClose size={25} onClick={clearSearch} />
            ) : null}
          </div>
        ) : (
          <div className="search-alt"></div>
        )}
        <FaMapMarkerAlt className="Header_icon locationIcon" size={20} />
        <div className="Header_location">Embassy Golf Links</div>
        <FaUserCircle className="Header_icon" size={36} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    filters: state.itemsReducer.filters
  };
};

const HeaderWithRouter = withRouter(props => <Header {...props} />);
export default connect(mapStateToProps)(HeaderWithRouter);
