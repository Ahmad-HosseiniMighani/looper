import React from "react";

const Modal = ({ modalId, dataId, handleDelete }) => {
  return (
    <div
      className="modal fade"
      id={modalId}
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header p-4">
            <h6 className="modal-title" id="staticBackdropLabel">
              آیا از انجام عملیات مطعمن هستید؟
            </h6>
            <button
              type="button"
              className="close left"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center my-4">
            <p className="py-2 mb-0 text-danger">
              توجه داشته باشید که اطلاعات به طور دائم حذف خواهند شد.
            </p>
          </div>
          <div className="modal-footer p-3">
            <button
              type="button"
              className="btn btn-outline-secondary font-weight-bold py-2"
              data-dismiss="modal"
            >
              <i className="fas fa-times px-1"></i>
              انصراف
            </button>
            <button
              type="button"
              className="btn btn-outline-danger font-weight-bold py-2"
              onClick={() => handleDelete(dataId)}
              data-dismiss="modal"
            >
              <i className="fas fa-trash-alt px-1"></i>
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
