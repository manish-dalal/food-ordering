import React from "react";
import { IoMdCalendar } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

import getImage from "utils/getImage";
import { months } from "utils/common";
import { getItems, itemsFilterChange } from "redux/actions/getItem";

function FilterBar(props) {
  const { filters, dispatch } = props;
  const onSortChange = order => {
    dispatch(itemsFilterChange({ sort: "price", order }));
    dispatch(getItems());
  };
  let currentDate = new Date();
  return (
    <div className="Home_filterBar center">
      <div className="app-container center">
        <img
          src={getImage("lunchBox")}
          className="Home_filterBar_img"
          alt="lunch"
        />
        <div className="title">Buffet</div>
        <div className="date btn center">
          <IoMdCalendar size={25} />
          <div className="description">
            {currentDate.getDate()}{" "}
            {months[currentDate.getMonth()].abbreviation}
          </div>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle tag="a" className="nav-link">
            <div className="sort btn center">
              <div className="description">Sort</div>
              <FaFilter size={20} />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              active={filters.order === "asc" ? true : false}
              onClick={onSortChange.bind(this, "asc")}
            >
              Price: Low to High
            </DropdownItem>
            <DropdownItem
              active={filters.order === "desc" ? true : false}
              onClick={onSortChange.bind(this, "desc")}
            >
              Price: High to Low
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    filters: state.itemsReducer.filters
  };
};
export default connect(mapStateToProps)(FilterBar);
