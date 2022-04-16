import React, { Component } from "react";
import Table from './table/table';

class invoiceTable extends Component {
  render() {
    const { invoices, onSort, sortColumn, selectInvoice, selectedInvoices, isAllCheckedInCurrentPage, selectAllInvoicesInCurrentPage, unSelectAllInvoices, handleBulkRemove, handleBulkEdit, handleSeparateActions, handleViewInvoice, handleEditInvoice, handleSendReminderInvoice, handleDownloadPDFInvoice, handleInvoiceShareTo, handleDeleteInvoice } = this.props;
    return (
      <Table
        data={invoices}
        sortColumn={sortColumn}
        onSort={onSort}
        selectInvoice={selectInvoice}
        isAllCheckedInCurrentPage={isAllCheckedInCurrentPage}
        selectedInvoices={selectedInvoices}
        selectAllInvoicesInCurrentPage={selectAllInvoicesInCurrentPage}
        unSelectAllInvoices={unSelectAllInvoices}
        handleBulkRemove={handleBulkRemove}
        handleBulkEdit={handleBulkEdit}
        handleSeparateActions={handleSeparateActions}
        handleViewInvoice={handleViewInvoice}
        handleEditInvoice={handleEditInvoice}
        handleSendReminderInvoice={handleSendReminderInvoice}
        handleDownloadPDFInvoice={handleDownloadPDFInvoice}
        handleInvoiceShareTo={handleInvoiceShareTo}
        handleDeleteInvoice={handleDeleteInvoice}
      />
    );
  }
}

export default invoiceTable;
