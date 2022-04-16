import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ sortColumn, onSort, selectInvoice, data, selectedInvoices, isAllCheckedInCurrentPage, selectAllInvoicesInCurrentPage, unSelectAllInvoices, handleBulkRemove, handleBulkEdit, handleSeparateActions, handleViewInvoice, handleEditInvoice, handleSendReminderInvoice, handleDownloadPDFInvoice, handleInvoiceShareTo, handleDeleteInvoice }) => {
  return (
    <table id="invoicesTable" class="table dataTable no-footer" role="grid">
      <TableHeader
        sortColumn={sortColumn}
        onSort={onSort}
        selectInvoice={selectInvoice}
        isAllCheckedInCurrentPage={isAllCheckedInCurrentPage}
        selectedInvoicesCount={selectedInvoices.length}
        selectAllInvoicesInCurrentPage={selectAllInvoicesInCurrentPage}
        unSelectAllInvoices={unSelectAllInvoices}
        handleBulkRemove={handleBulkRemove}
        handleBulkEdit={handleBulkEdit}
        handleSeparateActions={handleSeparateActions}
    />
      <TableBody
        data={data}
        selectInvoice={selectInvoice}
        selectedInvoices={selectedInvoices}
        handleViewInvoice={handleViewInvoice}
        handleEditInvoice={handleEditInvoice}
        handleSendReminderInvoice={handleSendReminderInvoice}
        handleDownloadPDFInvoice={handleDownloadPDFInvoice}
        handleInvoiceShareTo={handleInvoiceShareTo}
        handleDeleteInvoice={handleDeleteInvoice}
      />
    </table>
  );
};

export default Table;
