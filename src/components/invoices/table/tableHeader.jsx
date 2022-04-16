import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (path) => {
    const { sortColumn } = this.props;

    if (path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-down" />;
    return <i className="fas fa-sort-up" />;
  };
  render() {
    const { selectInvoice, isAllCheckedInCurrentPage, selectedInvoicesCount, selectAllInvoicesInCurrentPage, unSelectAllInvoices, handleBulkRemove, handleBulkEdit, handleSeparateActions } = this.props
    return (
      <thead>
        <tr role="row">
            <th colspan="2" style={{"min-width": "200px"}} rowspan="1">
                <div className="thead-dd dropdown">
                    <span className="custom-control custom-control-nolabel custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check-handle" onClick={()=>selectInvoice("all")} checked={isAllCheckedInCurrentPage()}/>
                        <label className="custom-control-label" htmlFor="check-handle"></label>
                    </span>
                    <div className="thead-btn" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,11">
                        {selectedInvoicesCount > 0 && <span className="selected-row-info text-muted pl-1">{selectedInvoicesCount} selected</span>}
                        <span className="fa fa-caret-down"></span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation">
                          <Link className="dropdown-item" to="#" onClick={()=>selectAllInvoicesInCurrentPage()}>Select all</Link>
                          <Link className="dropdown-item" to="#" onClick={()=>unSelectAllInvoices()}>Unselect all</Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" to="#" onClick={()=>handleBulkRemove()}>Bulk remove</Link>
                          <Link className="dropdown-item" to="#" onClick={()=>handleBulkEdit()}>Bulk edit</Link>
                          <Link className="dropdown-item" to="#" onClick={()=>handleSeparateActions()}>Separate actions</Link>
                        </div>
                    </div>
                </div>
            </th>
            {/* className={
                column.key ? "cursor-pointer align-center" : "cursor-pointer"
              }
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              }} */}
            <th style={{"min-width": "180px"}} className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("client")}> Client {this.renderSortIcon("client")}</th>
            <th style={{"min-width": "135px"}} className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("dueDate")}> Due Date {this.renderSortIcon("dueDate")}</th>
            <th className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("status")}> Status {this.renderSortIcon("status")}</th>
            <th className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("amount")}> Amount {this.renderSortIcon("amount")}</th>
            <th className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("paid")}> Paid {this.renderSortIcon("paid")}</th>
            <th className="align-middle cursor-pointer" rowspan="1" colspan="1" onClick={() => this.raiseSort("balance")}> Balance {this.renderSortIcon("balance")}</th>
            <th className="align-middle cursor-pointer text-right" rowspan="1" colspan="1"></th>
        </tr>
    </thead>
    );
  }
}

export default TableHeader;
