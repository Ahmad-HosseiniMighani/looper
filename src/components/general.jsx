import React from 'react';
import { Link } from 'react-router-dom';
import Form from './common/form';

class General extends Form {
    state = { 
        errors: {},
     }
     dropDownContent(){
         return(
            <div className="dropdown-menu-animation">
                <div className="dropdown-arrow"></div>
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Logout</a>
            </div>
         )
     }
    render() { 
        return ( 
            <main className="app-main">
        <div className="wrapper">
          <div className="page">
            <div className="page-inner">
              <header className="page-title-bar">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                      <Link href="#"><i className="breadcrumb-icon fa fa-angle-left mr-2"></i>Components</Link>
                    </li>
                  </ol>
                </nav>
                <h1 className="page-title"> General Elements </h1>
              </header>
              <div className="page-section">
                <div className="section-block">
                  <h2 className="section-title"> Buttons </h2>
                  <p className="text-muted"> Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. </p>
                </div>
                <div className="card-deck-xl">
                  <div className="card card-fluid">
                    <div className="card-body">
                      <div className="el-example">
                        {this.renderButton("Button", "btn btn-primary")}
                        {this.renderButton("Button", "btn btn-secondary")}
                        {this.renderButton("Button", "btn btn-success")}
                        {this.renderButton("Button", "btn btn-info")}
                        {this.renderButton("Button", "btn btn-warning")}
                        {this.renderButton("Button", "btn btn-danger")}
                        {this.renderButton("Button", "btn btn-light")}
                        {this.renderButton("Button", "btn btn-dark")}
                        {this.renderButton("Button", "btn btn-link")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        {this.renderButton("Disabled", "btn btn-primary disabled")}
                        {this.renderButton("Disabled", "btn btn-secondary disabled")}
                        {this.renderButton("Disabled", "btn btn-success disabled")}
                        {this.renderButton("Disabled", "btn btn-info disabled")}
                        {this.renderButton("Disabled", "btn btn-warning disabled")}
                        {this.renderButton("Disabled", "btn btn-danger disabled")}
                        {this.renderButton("Disabled", "btn btn-light disabled")}
                        {this.renderButton("Disabled", "btn btn-dark disabled")}
                        {this.renderButton("Disabled", "btn btn-link disabled")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        {this.renderButton("Outline", "btn btn-outline-primary")}
                        {this.renderButton("Outline", "btn btn-outline-secondary")}
                        {this.renderButton("Outline", "btn btn-outline-success")}
                        {this.renderButton("Outline", "btn btn-outline-info")}
                        {this.renderButton("Outline", "btn btn-outline-warning")}
                        {this.renderButton("Outline", "btn btn-outline-danger")}
                        {this.renderButton("Outline", "btn btn-outline-light")}
                        {this.renderButton("Outline", "btn btn-outline-dark")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        {this.renderButton("Subtle", "btn btn-subtle-primary")}
                        {this.renderButton("Subtle", "btn btn-subtle-secondary")}
                        {this.renderButton("Subtle", "btn btn-subtle-success")}
                        {this.renderButton("Subtle", "btn btn-subtle-info")}
                        {this.renderButton("Subtle", "btn btn-subtle-warning")}
                        {this.renderButton("Subtle", "btn btn-subtle-danger")}
                        {this.renderButton("Subtle", "btn btn-subtle-light")}
                        {this.renderButton("Subtle", "btn btn-subtle-dark")}
                        {this.renderButton("Subtle", "btn btn-subtle-link")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        {this.renderButton("Nesting", "btn btn-primary")}
                          <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                {this.dropDownContent()}
                            </div>
                          </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        {this.renderButton("Nesting", "btn btn-success")}
                          <div className="btn-group" role="group">
                            <button id="btnGroupDrop2" type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                                {this.dropDownContent()}
                            </div>
                          </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                          {this.renderButton("Nesting", "btn btn-info")}
                          <div className="btn-group" role="group">
                            <button id="btnGroupDrop3" type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
                                {this.dropDownContent()}
                            </div>
                          </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                          {this.renderButton("Nesting", "btn btn-danger")}
                          <div className="btn-group" role="group">
                            <button id="btnGroupDrop4" type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop4">
                                {this.dropDownContent()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-fluid">
                    <div className="card-body">
                      <div className="el-example">
                        {this.renderButton("Large", "btn btn-secondary btn-lg")}
                        {this.renderButton("Default", "btn btn-secondary")}
                        {this.renderButton("Small", "btn btn-secondary btn-sm")}
                        {this.renderButton("XSmall", "btn btn-secondary btn-xs")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            {/* You can Make a component of it its just case show */}
                        <label className="btn btn-secondary active"><input type="checkbox" checked /> Active</label>
                        <label className="btn btn-secondary"><input type="checkbox" /> Check</label>
                        <label className="btn btn-secondary"><input type="checkbox" /> Check</label>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active"><input type="radio" name="options" id="option1" checked /> Active</label>
                        <label className="btn btn-secondary"><input type="radio" name="options" id="option2" /> Radio</label>
                        <label className="btn btn-secondary"><input type="radio" name="options" id="option3" /> Radio</label>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="btn-group-vertical">
                        {this.renderButton("Group vertical", "btn btn-secondary")}
                        <div className="btn-group dropright" role="group">
                          <button id="btnGroupVerticalDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Group vertical</button>
                          <div className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                            {this.dropDownContent()}
                          </div>
                        </div>
                        {this.renderButton("Group vertical", "btn btn-secondary")}
                        {this.renderButton("Group vertical", "btn btn-secondary")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        {this.renderButton("Left", "btn btn-secondary")}
                        {this.renderButton("Middle", "btn btn-secondary")}
                        {this.renderButton("Right", "btn btn-secondary")}
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                          {this.renderButton("1", "btn btn-secondary")}
                          {this.renderButton("2", "btn btn-secondary")}
                          {this.renderButton("3", "btn btn-secondary")}
                        </div>
                        <div className="btn-group mr-2" role="group" aria-label="Second group">
                          {this.renderButton("4", "btn btn-secondary")}
                          {this.renderButton("5", "btn btn-secondary")}
                        </div>
                        <div className="btn-group" role="group" aria-label="Third group">
                            {this.renderButton("6", "btn btn-secondary")}
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      {this.renderButton("Block level button", "btn btn-primary btn-lg btn-block")}
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Dialogs </h2>
                  <p className="text-muted"> Display a content in a layer above the App (like alert, helper text, etc) with Modal, Tooltips, and Popovers. </p>
                </div>
                <div className="card-deck-xl">
                  <div className="card card-fluid">
                    <div className="card-header"> Tooltips {"&"} Popovers </div>
                    <div className="card-body">
                      <p className="text-muted"> Hover on buttons below to see tooltips. </p>
                      <div className="el-example">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tooltip on top">Tooltip on top</button> <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Tooltip on right">Tooltip on right</button> <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Tooltip on bottom">Tooltip on bottom</button> <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Tooltip on left">Tooltip on left</button> <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="" data-bs-original-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <p className="text-muted"> Click buttons below to see Popover. </p>
                      <div className="el-example">
                        <button type="button" className="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="" data-bs-original-title="Popover Title">Popover Left</button> <button type="button" className="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="" data-bs-original-title="Popover Title">Popover Top</button> <button type="button" className="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="" data-bs-original-title="Popover Title">Popover Bottom</button> <button type="button" className="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="" data-bs-original-title="Popover Title">Popover Right</button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-fluid">
                    <div className="card-header"> Modals {"&"} Toastr </div>
                    <div className="card-body">
                      <div className="el-example">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open: normal</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Open: large</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalSm">Open: small</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Open: center</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Open: long</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">Open: scrollable</button>
                      </div>
                      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Laudantium praesentium similique natus consequuntur, quae amet, sequi non velit placeat distinctio excepturi tempore quos expedita veritatis at corporis beatae maiores iste. </p>
                              <p> Omnis velit praesentium, incidunt voluptatibus voluptatem iure corporis minima error ipsum itaque magnam vero laborum molestiae vel. Saepe modi atque, iure dolores nulla dolor quia, eius libero ullam dicta explicabo! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="exampleModalLg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="myLargeModalLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Officiis asperiores consectetur in, aspernatur, voluptate velit ut libero quo eius veritatis incidunt, fugit voluptatibus ullam voluptates error earum unde illo! Aliquid. </p>
                              <p> Explicabo, fugiat sapiente aliquam? Perspiciatis, harum ratione veritatis. Fuga velit eos quos numquam impedit, unde reiciendis asperiores sunt repellat distinctio, totam, veritatis mollitia. Id iusto repudiandae ad, architecto assumenda blanditiis. </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="exampleModalSm" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="mySmallModalLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Quis cum doloremque, ab culpa fugit deserunt necessitatibus! Eos saepe impedit, facilis veritatis, incidunt fuga optio sint, officiis molestias earum deserunt quas! </p>
                              <p> Modi vel nihil doloribus tempore amet. Facilis vel, cupiditate incidunt illo amet pariatur tenetur quam commodi neque, mollitia laboriosam aperiam fugiat, ratione. Ratione rem nobis temporibus facilis exercitationem porro? Obcaecati. </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalCenterLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Laudantium praesentium similique natus consequuntur, quae amet, sequi non velit placeat distinctio excepturi tempore quos expedita veritatis at corporis beatae maiores iste. </p>
                              <p> Omnis velit praesentium, incidunt voluptatibus voluptatem iure corporis minima error ipsum itaque magnam vero laborum molestiae vel. Saepe modi atque, iure dolores nulla dolor quia, eius libero ullam dicta explicabo! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalLongLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalScrollableLabel" className="modal-title"> Modal title </h5>
                            </div>
                            <div className="modal-body">
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                              <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                              <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalAlert">Open: alert</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalAlertWarning">Open: warning</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalAlertDanger">Open: danger</button>
                      </div>
                      <div className="modal modal-alert fade" id="exampleModalAlert" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalAlertLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalAlertLabel" className="modal-title">
                                <i className="fa fa-trophy text-success mr-1"></i> Congrats! You Unlock New Feature. </h5>
                            </div>
                            <div className="modal-body">
                              <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal modal-alert fade" id="exampleModalAlertWarning" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalAlertWarningLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalAlertWarningLabel" className="modal-title">
                                <i className="fa fa-bullhorn text-warning mr-1"></i> Modal: warning </h5>
                            </div>
                            <div className="modal-body">
                              <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button> <button type="button" className="btn btn-light">Secondary Action</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal modal-alert fade" id="exampleModalAlertDanger" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalAlertDangerLabel" aria-hidden="true">
                        
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalAlertDangerLabel" className="modal-title">
                                <i className="fa fa-exclamation-triangle text-red mr-1"></i> Alert: danger </h5>
                            </div>
                            <div className="modal-body">
                              <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <div className="el-example">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalDrawerRight">Drawer: right</button> <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalDrawerLeft">Drawer: left</button> <button type="button" className="btn btn-lg btn-primary btn-floated" data-bs-toggle="modal" data-bs-target="#exampleModalDocked" data-backdrop="false"><i className="fas fa-comment fa-lg"></i></button>
                      </div>
                      <div className="modal modal-drawer fade" id="exampleModalDrawerRight" tabindex="-1" role="dialog" aria-labelledby="exampleModalDrawerRightLabel" aria-hidden="true">
                        <div className="modal-dialog modal-drawer-right" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalDrawerRightLabel" className="modal-title"> Drawer: right </h5>
                            </div>
                            <div className="modal-body">
                              <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal modal-drawer fade" id="exampleModalDrawerLeft" tabindex="-1" role="dialog" aria-labelledby="exampleModalDrawerLeftLabel" aria-hidden="true">
                        <div className="modal-dialog modal-drawer-left modal-sm" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 id="exampleModalDrawerLeftLabel" className="modal-title"> Drawer: left </h5>
                            </div>
                            <div className="modal-body">
                              <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal modal-docked fade" id="exampleModalDocked" tabindex="-1" role="dialog" aria-labelledby="exampleModalDockedLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm modal-dialog-scrollable" role="document">
                          <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                              <div className="d-block">
                                <p id="exampleModalDockedLabel"> Hi 👋! I'm a Modal Docked </p>
                                <p className="text-center px-3"> You can use .modal-{"{"}lg,sm{"}"} class to in/decrease my size an put any type of content in my body. </p>
                              </div>
                            </div>
                            <div className="modal-body py-3">
                              <div className="form-group">
                                <div className="form-label-group">
                                  <input type="text" id="cname" className="form-control placeholder-shown" placeholder="Name" required/> <label for="cname">Name</label>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-label-group">
                                  <input type="email" id="cmail" className="form-control placeholder-shown" placeholder="Email address" required/> <label for="cmail">Email Address</label>
                                </div>
                              </div>
                              {this.renderButton("Lets Chat","btn btn-lg btn-block btn-primary")}
                              <button type="button" className="btn btn-lg btn-block btn-link" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top">
                      <button type="button" className="btn btn-secondary" onclick="$('#toast1').toast('show')">Try Bootstrap Toast</button> <button type="button" id="toastr-demo" className="btn btn-secondary">Try Toastr 3rd party</button>
                      
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Indicators </h2>
                  <p className="text-muted"> Provide contextual feedback messages for typical user actions and labeling components. </p>
                </div>
                <div className="section-block">
                  <div className="alert alert-secondary has-icon alert-dismissible fade show">
                    <button type="button" className="close" data-bs-dismiss="alert">×</button>
                    <div className="alert-icon">
                      <span className="oi oi-flag"></span>
                    </div>
                    <h4 className="alert-heading"> Warning! </h4>
                    <p className="mb-0"> Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <Link to="#" className="alert-link">vel scelerisque nisl consectetur et</Link>. </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-bs-dismiss="alert">×</button> <strong>Oh snap!</strong> <Link to="#" className="alert-link">Change a few things up</Link> and try submitting again. </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="alert alert-success alert-dismissible fade show">
                        <button type="button" className="close" data-bs-dismiss="alert">×</button> <strong>Well done!</strong> You successfully read <Link to="#" className="alert-link">this important alert message</Link>. </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="alert alert-info alert-dismissible fade show">
                        <button type="button" className="close" data-bs-dismiss="alert">×</button> <strong>Heads up!</strong> This <Link to="#" className="alert-link">alert needs your attention</Link>, but it's not super important. </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="alert alert-primary has-icon" role="alert">
                        <div className="alert-icon">
                          <span className="oi oi-info"></span>
                        </div>This is a primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="alert alert-warning has-icon" role="alert">
                        <div className="alert-icon">
                          <span className="fa fa-bullhorn"></span>
                        </div>This is a warning alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="alert alert-dark has-icon" role="alert">
                        <div className="alert-icon">
                          <span className="oi oi-bell"></span>
                        </div>This is a dark alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="log-divider">
                  <span className="bg-light"><i className="fa fa-fw fa-comment-alt"></i> This is a log divider</span>
                </div>
                <div className="section-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <span className="badge badge-primary">Primary</span> <span className="badge badge-secondary">Secondary</span> <span className="badge badge-success">Success</span> <span className="badge badge-danger">Danger</span> <span className="badge badge-warning">Warning</span> <span className="badge badge-info">Info</span> <span className="badge badge-light">Light</span> <span className="badge badge-dark">Dark</span>
                      </p>
                      <p>
                        <span className="badge badge-subtle badge-primary">Primary</span> <span className="badge badge-subtle badge-secondary">Secondary</span> <span className="badge badge-subtle badge-success">Success</span> <span className="badge badge-subtle badge-danger">Danger</span> <span className="badge badge-subtle badge-warning">Warning</span> <span className="badge badge-subtle badge-info">Info</span> <span className="badge badge-subtle badge-light">Light</span> <span className="badge badge-subtle badge-dark">Dark</span>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>
                        <span className="badge badge-pill badge-primary">Primary</span> <span className="badge badge-pill badge-secondary">Secondary</span> <span className="badge badge-pill badge-success">Success</span> <span className="badge badge-pill badge-danger">Danger</span> <span className="badge badge-pill badge-warning">Warning</span> <span className="badge badge-pill badge-info">Info</span> <span className="badge badge-pill badge-light">Light</span> <span className="badge badge-pill badge-dark">Dark</span>
                      </p>
                      <p>
                        <span className="badge badge-lg badge-danger"><span className="fas fa-circle pulse mr-1"></span>Live View</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <Link to="#" className="mention">@mention</Link>
                  </p>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Progress </h2>
                  <p className="text-muted"> Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars. </p>
                </div>
                <div className="section-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="section-title"> Contextual </h3>
                      <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-4">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="section-title"> Striped </h3>
                      <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="section-title"> Multiple bars </h3>
                      <div className="progress mb-4">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="section-title"> Animated </h3>
                      <div className="progress mb-4">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="section-title"> Sizing </h3>
                      <div className="progress progress-lg mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"> 10% </div>
                      </div>
                      <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 25% </div>
                      </div>
                      <div className="progress progress-sm mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="progress progress-xs mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Spinners </h2>
                  <p className="text-muted"> Indicate the loading state of a component or page. </p>
                </div>
                <div className="section-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="section-title"> Border spinner </h3>
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-muted" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="section-title"> Growing spinner </h3>
                      <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-info" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-muted" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="section-title mt-3"> Sizing </h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="spinner-border text-primary spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-primary spinner-grow-sm" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button className="btn btn-primary" type="button" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span className="sr-only">Loading...</span></button> <button className="btn btn-primary" type="button" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button> <button className="btn btn-primary" type="button" disabled><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> <span className="sr-only">Loading...</span></button> <button className="btn btn-primary" type="button" disabled><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</button>
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Navs </h2>
                  <p className="text-muted"> The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling. </p>
                </div>
                <div className="card-deck-xl">
                  <div className="card card-fluid">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                          <a className="nav-link active show" data-bs-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown <span className="caret"></span></a>
                          <div className="dropdown-menu">
                            <div className="dropdown-menu-animation">
                                <div className="dropdown-arrow"></div><a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Separated link</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active show" id="home">
                          <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                        </div>
                        <div className="tab-pane fade" id="profile">
                          <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-fluid">
                    <div className="card-body">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown <span className="caret"></span></a>
                          <div className="dropdown-menu">
                            <div className="dropdown-menu-animation">
                                <div className="dropdown-arrow"></div><a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Separated link</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown <span className="caret"></span></a>
                          <div className="dropdown-menu">
                            <div className="dropdown-menu-animation">
                                <div className="dropdown-arrow"></div><a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Separated link</a>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-deck-xl">
                  <div className="card card-fluid">
                    <div className="card-body">
                      <h4 className="card-title"> Breadcrumbs </h4>
                      <hr/>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Home </li>
                      </ol>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Library </li>
                      </ol>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Library</a>
                        </li>
                        <li className="breadcrumb-item active">Data </li>
                      </ol>
                    </div>
                  </div>
                  <div className="card card-fluid">
                    <div className="card-body">
                      <h4 className="card-title"> Paginations </h4>
                      <hr/>
                      <div className="el-example">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a className="page-link" href="#">«</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">4</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">5</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">»</a>
                          </li>
                        </ul>
                      </div>
                      <div className="el-example">
                        <ul className="pagination pagination-sm">
                          <li className="page-item disabled">
                            <a className="page-link" href="#">«</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">4</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">5</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">»</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Navbars </h2>
                  <p className="text-muted"> Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) and become horizontal as the available viewport width increases. </p>
                </div>
                <div className="card card-fluid">
                  <div className="card-body">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                      <a className="navbar-brand" href="#">Looper</a>
                      <button className="hamburger hamburger hamburger-squeeze hamburger-toggle d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor1" aria-controls="navbarColor1" aria-expanded="false" aria-label="Toggle navigation"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                      <div className="collapse navbar-collapse" id="navbarColor1">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                          <div className="top-bar-search d-flex">
                            <div className="input-group has-clearable">
                              <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="oi oi-magnifying-glass"></span></span>
                              </div><input type="text" className="form-control" aria-label="Search" placeholder="Type something..."/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
                      <a className="navbar-brand" href="#">Looper</a>
                      <button className="hamburger hamburger hamburger-squeeze hamburger-toggle d-lg-none" type="button" data-toggle="collapse" data-target="#navbarColor2" aria-controls="navbarColor2" aria-expanded="false" aria-label="Toggle navigation"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                      <div className="collapse navbar-collapse" id="navbarColor2">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                          <div className="top-bar-search d-flex">
                            <div className="input-group has-clearable">
                              <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="oi oi-magnifying-glass"></span></span>
                              </div><input type="text" className="form-control" aria-label="Search" placeholder="Type something..."/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                      <a className="navbar-brand" href="#">Looper</a>
                      <button className="hamburger hamburger-light hamburger-squeeze hamburger-toggle d-lg-none" type="button" data-toggle="collapse" data-target="#navbarColor3" aria-controls="navbarColor3" aria-expanded="false" aria-label="Toggle navigation"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                      <div className="collapse navbar-collapse" id="navbarColor3">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                          <div className="top-bar-search d-flex">
                            <div className="input-group has-clearable">
                              <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="oi oi-magnifying-glass"></span></span>
                              </div><input type="text" className="form-control" aria-label="Search" placeholder="Type something..."/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Containers </h2>
                </div>
                <div className="jumbotron">
                  <h1 className="display-1"> Hello, world! </h1>
                  <p className="lead"> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. </p>
                  <hr className="my-4"/>
                  <p> It uses utility classes for typography and spacing to space content out within the larger container. </p>
                  <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>
                </div>
                <div className="section-block">
                  <h2 className="section-title"> Cards </h2>
                  <p className="text-muted"> Provide a flexible and extensible content container with multiple variants and options. </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <h5 className="card-title"> Special title treatment </h5>
                          <h6 className="card-subtitle text-muted"> Support card subtitle </h6>
                        </div>
                        <figure className="embed-responsive embed-responsive-16by9 mb-0">
                          <img className="embed-responsive-item" src="assets/images/dummy/img-1.jpg" alt="Card image"/>
                        </figure>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="card-footer-content text-muted"> Card Footer </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#card-home">Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active show" data-bs-toggle="tab" href="#card-profile">Profile</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div id="myTabCard" className="tab-content">
                            <div className="tab-pane fade" id="card-home">
                              <h5 className="card-title"> Special title treatment </h5>
                              <p className="card-text"> With supporting text below as a natural lead-in to additional content. </p><a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="tab-pane fade active show" id="card-profile">
                              <h5 className="card-title"> Special title treatment </h5>
                              <p className="card-text"> With supporting text below as a natural lead-in to additional content. </p><a href="#" className="btn btn-danger">Go somewhere</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title"> Special title treatment </h4>
                          <h6 className="card-subtitle mb-2 text-muted"> Support card subtitle </h6>
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <ul className="list-group list-group-flush list-group-bordered border-top border-bottom">
                          <li className="list-group-item">Cras justo odio </li>
                          <li className="list-group-item">Dapibus ac facilisis in </li>
                          <li className="list-group-item">Vestibulum at eros </li>
                        </ul>
                        <div className="card-body">
                          <a href="#" className="card-link">Card link</a> <a href="#" className="card-link">Another link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-inverse bg-primary">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention card-link">@stilearningTwit</a> . <a href="#" className="hashtag card-link">#looper</a> <a href="#" className="hashtag card-link">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card bg-secondary">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-inverse bg-success">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention card-link">@stilearningTwit</a> . <a href="#" className="hashtag card-link">#looper</a> <a href="#" className="hashtag card-link">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-inverse bg-danger">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention card-link">@stilearningTwit</a> . <a href="#" className="hashtag card-link">#looper</a> <a href="#" className="hashtag card-link">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-black bg-warning">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-inverse bg-info">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention card-link">@stilearningTwit</a> . <a href="#" className="hashtag card-link">#looper</a> <a href="#" className="hashtag card-link">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-dark bg-light">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-light bg-dark">
                        <div className="card-header"> Components </div>
                        <div className="card-body">
                          <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="#" className="mention">@stilearningTwit</a> . <a href="#" className="hashtag">#looper</a> <a href="#" className="hashtag">#admin</a><br/>
                            <time datetime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="#" className="card-footer-item card-footer-item-bordered">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-block">
                  <h2 className="section-title"> Expansion Cards </h2>
                  <p className="text-muted"> A lightweight container that may either stand alone or be connected to a larger surface, such as a card. </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div id="accordion" className="card-expansion">
                        <div className="card card-expansion-item expanded">
                          <div className="card-header border-0" id="headingOne">
                            <button className="btn btn-reset" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #1</span></button>
                          </div>
                          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                        <div className="card card-expansion-item">
                          <div className="card-header border-0" id="headingTwo">
                            <button className="btn btn-reset collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #2</span></button>
                          </div>
                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                        <div className="card card-expansion-item">
                          <div className="card-header border-0" id="headingThree">
                            <button className="btn btn-reset collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #3</span></button>
                          </div>
                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div id="accordion2" className="card-expansion">
                        <div className="card card-expansion-item expanded">
                          <div className="card-header border-0" id="headingOne2">
                            <button className="btn btn-reset d-flex justify-content-between w-100" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2"><span>Expandable Item #1</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                          </div>
                          <div id="collapseOne2" className="collapse show" aria-labelledby="headingOne2" data-parent="#accordion2">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                        <div className="card card-expansion-item">
                          <div className="card-header border-0" id="headingTwo2">
                            <button className="btn btn-reset d-flex justify-content-between w-100 collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2"><span>Expandable Item #2</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                          </div>
                          <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                        <div className="card card-expansion-item">
                          <div className="card-header border-0" id="headingThree2">
                            <button className="btn btn-reset d-flex justify-content-between w-100 collapsed" data-toggle="collapse" data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2"><span>Expandable Item #3</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                          </div>
                          <div id="collapseThree2" className="collapse" aria-labelledby="headingThree2" data-parent="#accordion2">
                            <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="section-block">
                  <h2 className="section-title"> Text Element </h2>
                </div>
                <div className="card card-fluid">
                  <div className="card-body p-sm-5">
                    <h1> Hello World </h1>
                    <p> Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well! </p>
                    <h2> Second level </h2>
                    <p> Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl. </p>
                    <ul>
                      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet. </li>
                      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis. </li>
                      <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. </li>
                      <li>Ut non enim metus. </li>
                    </ul>
                    <h3> Third level </h3>
                    <p> Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus. </p>
                    <ol>
                      <li>Donec blandit a lorem id convallis. </li>
                      <li>Cras gravida arcu at diam gravida gravida. </li>
                      <li>Integer in volutpat libero. </li>
                      <li>Donec a diam tellus. </li>
                      <li>Aenean nec tortor orci. </li>
                      <li>Quisque aliquam cursus urna, non bibendum massa viverra eget. </li>
                      <li>Vivamus maximus ultricies pulvinar. </li>
                    </ol>
                    <blockquote>
                      <p className="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                      <footer> Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                    <p> Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie. </p>
                    <p> Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo. </p>
                    <dl>
                      <dt> Web </dt>
                      <dd> The part of the Internet that contains websites and web pages </dd>
                      <dt> HTML </dt>
                      <dd> A markup language for creating web pages </dd>
                      <dt> CSS </dt>
                      <dd> A technology to make HTML look better </dd>
                    </dl>
                    <p> Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante. </p>
                    <h4> Fourth level </h4>
                    <p> Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur. </p>
                    <pre>&lt;!DOCTYPE html&gt;
                    &lt;html&gt;
                    &lt;head&gt;
                    &lt;title&gt;Hello World&lt;/title&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
                    &lt;/body&gt;
                    &lt;/html&gt;</pre>
                    <p> Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien. </p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th> One </th>
                          <th> Two </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Three </td>
                          <td> Four </td>
                        </tr>
                        <tr>
                          <td> Five </td>
                          <td> Six </td>
                        </tr>
                        <tr>
                          <td> Seven </td>
                          <td> Eight </td>
                        </tr>
                        <tr>
                          <td> Nine </td>
                          <td> Ten </td>
                        </tr>
                        <tr>
                          <td> Eleven </td>
                          <td> Twelve </td>
                        </tr>
                      </tbody>
                    </table>
                    <p> Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque. </p>
                    <h5> Fifth level </h5>
                    <p> Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio. </p>
                    <figure>
                      <img src="https://bulma.io/images/placeholders/256x256.png" alt=""/> <img src="https://bulma.io/images/placeholders/256x256.png" alt=""/>
                      <figcaption> Figure 1: Some beautiful placeholders </figcaption>
                    </figure>
                    <h6> Sixth level </h6>
                    <blockquote className="text-right">
                      <p className="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                      <footer> Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                    <p> Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="app-footer">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="text-muted" href="#">Support</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Help Center</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Terms of Service</a>
            </li>
          </ul>
          <div className="copyright"> Copyright © 2018. All right reserved. </div>
        </footer>
      </main>
         );
    }
}
 
export default General;