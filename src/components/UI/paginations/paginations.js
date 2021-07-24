import React, { Component } from "react";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import classes from "./paginations.module.css";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Paginations extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.props.getSearchResultPage(this.props.page);
    }
  }
  render() {
    let controlBtn = "";
    if (this.props.page === 1 && this.props.numPages > 1) {
      controlBtn = (
        <button
          onClick={() => this.props.clickNextBtn(this.props.page + 1)}
          className={`${classes.PaginationBtn} ${classes.pagination__btnNext}`}
        >
          <span>Page {this.props.page + 1}</span>
          <ArrowForwardOutlinedIcon className={classes.ArrowIcon} />
        </button>
      );
    }
    //Last page
    else if (
      this.props.page === this.props.numPages &&
      this.props.numPages > 1
    ) {
      controlBtn = (
        <button
          onClick={() => this.props.clickPrevBtn(this.props.page - 1)}
          className={`${classes.PaginationBtn} ${classes.pagination__btnPrev}`}
        >
          <ArrowBackOutlinedIcon className={classes.ArrowIcon} />
          <span>Page {this.props.page - 1}</span>
        </button>
      );
    }

    ////Other pages
    else if (this.props.page < this.props.numPages) {
      controlBtn = (
        <React.Fragment>
          <button
            onClick={() => this.props.clickPrevBtn(this.props.page - 1)}
            className={`${classes.PaginationBtn} ${classes.pagination__btnPrev}`}
          >
            <ArrowBackOutlinedIcon className={classes.ArrowIcon} />
            <span>Page {this.props.page - 1}</span>
          </button>
          <button
            onClick={() => this.props.clickNextBtn(this.props.page + 1)}
            className={`${classes.PaginationBtn} ${classes.pagination__btnNext}`}
          >
            <span>Page {this.props.page + 1}</span>
            <ArrowForwardOutlinedIcon className={classes.ArrowIcon} />
          </button>
        </React.Fragment>
      );
    } else {
      controlBtn = "";
    }
    return <div className={classes.pagination}>{controlBtn}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.search.page,
    numPages: state.search.numPages,
    result: state.search.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickNextBtn: (page) => dispatch(actions.clickNextBtn(page)),
    clickPrevBtn: (page) => dispatch(actions.clickPrevBtn(page)),
    getSearchResultPage: (page) => dispatch(actions.getSearchResultPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);
