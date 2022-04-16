import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Input2 from "./input2";
import Input3 from "./input3";
import Select from "./select";
import RadioInput from "./radioInput";
import TextArea from './textarea';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  ErrorsLang = (errors) => {
    return errors.map((error) => {
      switch (error.type) {
        case "number.base":
          if (error.context.key === "username")
            return {
              message: `"${error.context.label}" نباید خالی یا شامل غیر عدد باشد.`,
            };
          return {
            message: `"${error.context.label}" باید فقط شامل عدد باشد.`,
          };
        case "string.min":
          return {
            message: `"${error.context.label}" نمی‌تواند کمتر از ${error.context.limit} کاراکتر باشد.`,
          };
        case "number.min":
          return {
            message: `"${error.context.label}" نمی‌تواند کمتر از ${error.context.limit} باشد.`,
          };
        case "string.max":
          return {
            message: `"${error.context.label}" نمی‌تواند بیشتر از ${error.context.limit} کاراکتر باشد.`,
          };
        case "number.max":
          return {
            message: `"${error.context.label}" نمی‌تواند بیشتر از ${error.context.limit} باشد.`,
          };
        case "string.alphanum":
          return {
            message: `"${error.context.label}" نمی‌تواند شامل کاراکتر خاص باشد.`,
          };
        case "string.regex.name":
          return {
            message: `"${error.context.label}" باید فقط شامل ${error.context.name} باشد.`,
          };
        case "any.empty":
          return {
            message: `"${error.context.label}" نمی‌تواند خالی باشد.`,
          };
        case "string.email":
          return {
            message: `"${error.context.label}" را صحیح وارد کنید.`,
          };
        case "any.allowOnly":
          return {
            message:
              "توجه داشته باشید که دو رمز عبور جدید باید باهم یکسان باشند.",
          };
        default:
          return { message: "این فیلد نیاز به اصلاح دارد." };
      }
    });
  };
  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors)
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  quilHandleChange(e) {
    const data = { ...this.state.data };
    data.content = e;
    this.setState({ data });
  }

  renderButton(label, classes, type = "submit") {
    return (
      <button
        //disabled={this.validate()}
        type={type}
        className={classes}
      >
        {label}
      </button>
    );
  }
  renderButton2(label, classes, type = "submit", onClickFunc, onClickData) {
    return (
      <button
        type={type}
        //disabled={this.validate()}
        className={classes}
        onClick={()=>onClickFunc(onClickData)}
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, extraClasses = "", placeholder = "", type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        extraClasses={extraClasses}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderInput2(name, label, extraClasses = "", placeholder = "", type = "text") {
    const { data, errors } = this.state;
    return (
      <Input2
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        extraClasses={extraClasses}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderInput3(name, label, extraClasses = "", placeholder = "", type = "text") {
    const { data, errors } = this.state;
    return (
      <Input3
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        extraClasses={extraClasses}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderTextArea(name, label, extraClasses = "", placeholder = "") {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        label={label}
        placeholder={placeholder}
        extraClasses={extraClasses}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderSelect(name, label, options, extraClasses) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
        customClass={extraClasses}
      />
    );
  }
  renderRadioInput(id, name, label, value) {
    const { data } = this.state;
    return (
      <RadioInput
        name={name}
        id={id}
        label={label}
        currentvalue={data[name]}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
export default Form;
