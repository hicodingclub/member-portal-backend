function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emailing-emailing-module"], {
  /***/
  "./src/app/emailing-cust/base/emailqueue/emailqueue-detail.cust.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailqueue/emailqueue-detail.cust.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: EmailqueueDetailCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailqueueEmailqueueDetailCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueDetailCustComponent", function () {
      return EmailqueueDetailCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailqueue/emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");

    var EmailqueueDetailCustComponent = /*#__PURE__*/function (_emailing_emailqueue_) {
      _inherits(EmailqueueDetailCustComponent, _emailing_emailqueue_);

      var _super = _createSuper(EmailqueueDetailCustComponent);

      function EmailqueueDetailCustComponent() {
        _classCallCheck(this, EmailqueueDetailCustComponent);

        return _super.apply(this, arguments);
      }

      return EmailqueueDetailCustComponent;
    }(_emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueComponent"]);

    EmailqueueDetailCustComponent.ɵfac = function EmailqueueDetailCustComponent_Factory(t) {
      return ɵEmailqueueDetailCustComponent_BaseFactory(t || EmailqueueDetailCustComponent);
    };

    EmailqueueDetailCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueDetailCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailqueueDetailCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailqueueDetailCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailqueueDetailCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueDetailCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailqueue/emailqueue-edit.cust.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailqueue/emailqueue-edit.cust.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmailqueueEditCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailqueueEmailqueueEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueEditCustComponent", function () {
      return EmailqueueEditCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailqueue/emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");

    var EmailqueueEditCustComponent = /*#__PURE__*/function (_emailing_emailqueue_2) {
      _inherits(EmailqueueEditCustComponent, _emailing_emailqueue_2);

      var _super2 = _createSuper(EmailqueueEditCustComponent);

      function EmailqueueEditCustComponent() {
        _classCallCheck(this, EmailqueueEditCustComponent);

        return _super2.apply(this, arguments);
      }

      return EmailqueueEditCustComponent;
    }(_emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueComponent"]);

    EmailqueueEditCustComponent.ɵfac = function EmailqueueEditCustComponent_Factory(t) {
      return ɵEmailqueueEditCustComponent_BaseFactory(t || EmailqueueEditCustComponent);
    };

    EmailqueueEditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueEditCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailqueueEditCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailqueueEditCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailqueueEditCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueEditCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailqueue/emailqueue-list.cust.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailqueue/emailqueue-list.cust.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmailqueueListCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailqueueEmailqueueListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueListCustComponent", function () {
      return EmailqueueListCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailqueue/emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");

    var EmailqueueListCustComponent = /*#__PURE__*/function (_emailing_emailqueue_3) {
      _inherits(EmailqueueListCustComponent, _emailing_emailqueue_3);

      var _super3 = _createSuper(EmailqueueListCustComponent);

      function EmailqueueListCustComponent() {
        _classCallCheck(this, EmailqueueListCustComponent);

        return _super3.apply(this, arguments);
      }

      return EmailqueueListCustComponent;
    }(_emailing_emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueComponent"]);

    EmailqueueListCustComponent.ɵfac = function EmailqueueListCustComponent_Factory(t) {
      return ɵEmailqueueListCustComponent_BaseFactory(t || EmailqueueListCustComponent);
    };

    EmailqueueListCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueListCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailqueueListCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailqueueListCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailqueueListCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueListCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailsettings/emailsettings-detail.cust.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailsettings/emailsettings-detail.cust.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EmailsettingsDetailCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailsettingsEmailsettingsDetailCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsDetailCustComponent", function () {
      return EmailsettingsDetailCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailsettings/emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");

    var EmailsettingsDetailCustComponent = /*#__PURE__*/function (_emailing_emailsettin) {
      _inherits(EmailsettingsDetailCustComponent, _emailing_emailsettin);

      var _super4 = _createSuper(EmailsettingsDetailCustComponent);

      function EmailsettingsDetailCustComponent() {
        _classCallCheck(this, EmailsettingsDetailCustComponent);

        return _super4.apply(this, arguments);
      }

      return EmailsettingsDetailCustComponent;
    }(_emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsComponent"]);

    EmailsettingsDetailCustComponent.ɵfac = function EmailsettingsDetailCustComponent_Factory(t) {
      return ɵEmailsettingsDetailCustComponent_BaseFactory(t || EmailsettingsDetailCustComponent);
    };

    EmailsettingsDetailCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsDetailCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailsettingsDetailCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailsettingsDetailCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailsettingsDetailCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsDetailCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailsettings/emailsettings-edit.cust.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailsettings/emailsettings-edit.cust.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmailsettingsEditCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailsettingsEmailsettingsEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsEditCustComponent", function () {
      return EmailsettingsEditCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailsettings/emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");

    var EmailsettingsEditCustComponent = /*#__PURE__*/function (_emailing_emailsettin2) {
      _inherits(EmailsettingsEditCustComponent, _emailing_emailsettin2);

      var _super5 = _createSuper(EmailsettingsEditCustComponent);

      function EmailsettingsEditCustComponent() {
        _classCallCheck(this, EmailsettingsEditCustComponent);

        return _super5.apply(this, arguments);
      }

      return EmailsettingsEditCustComponent;
    }(_emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsComponent"]);

    EmailsettingsEditCustComponent.ɵfac = function EmailsettingsEditCustComponent_Factory(t) {
      return ɵEmailsettingsEditCustComponent_BaseFactory(t || EmailsettingsEditCustComponent);
    };

    EmailsettingsEditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsEditCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailsettingsEditCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailsettingsEditCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailsettingsEditCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsEditCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailsettings/emailsettings-list.cust.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailsettings/emailsettings-list.cust.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmailsettingsListCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailsettingsEmailsettingsListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsListCustComponent", function () {
      return EmailsettingsListCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailsettings/emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");

    var EmailsettingsListCustComponent = /*#__PURE__*/function (_emailing_emailsettin3) {
      _inherits(EmailsettingsListCustComponent, _emailing_emailsettin3);

      var _super6 = _createSuper(EmailsettingsListCustComponent);

      function EmailsettingsListCustComponent() {
        _classCallCheck(this, EmailsettingsListCustComponent);

        return _super6.apply(this, arguments);
      }

      return EmailsettingsListCustComponent;
    }(_emailing_emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsComponent"]);

    EmailsettingsListCustComponent.ɵfac = function EmailsettingsListCustComponent_Factory(t) {
      return ɵEmailsettingsListCustComponent_BaseFactory(t || EmailsettingsListCustComponent);
    };

    EmailsettingsListCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsListCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailsettingsListCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailsettingsListCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailsettingsListCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsListCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EmailtemplateDetailCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailtemplateEmailtemplateDetailCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateDetailCustComponent", function () {
      return EmailtemplateDetailCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailtemplate/emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");

    var EmailtemplateDetailCustComponent = /*#__PURE__*/function (_emailing_emailtempla) {
      _inherits(EmailtemplateDetailCustComponent, _emailing_emailtempla);

      var _super7 = _createSuper(EmailtemplateDetailCustComponent);

      function EmailtemplateDetailCustComponent() {
        _classCallCheck(this, EmailtemplateDetailCustComponent);

        return _super7.apply(this, arguments);
      }

      return EmailtemplateDetailCustComponent;
    }(_emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateComponent"]);

    EmailtemplateDetailCustComponent.ɵfac = function EmailtemplateDetailCustComponent_Factory(t) {
      return ɵEmailtemplateDetailCustComponent_BaseFactory(t || EmailtemplateDetailCustComponent);
    };

    EmailtemplateDetailCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateDetailCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailtemplateDetailCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailtemplateDetailCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailtemplateDetailCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateDetailCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmailtemplateEditCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailtemplateEmailtemplateEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateEditCustComponent", function () {
      return EmailtemplateEditCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailtemplate/emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");

    var EmailtemplateEditCustComponent = /*#__PURE__*/function (_emailing_emailtempla2) {
      _inherits(EmailtemplateEditCustComponent, _emailing_emailtempla2);

      var _super8 = _createSuper(EmailtemplateEditCustComponent);

      function EmailtemplateEditCustComponent() {
        _classCallCheck(this, EmailtemplateEditCustComponent);

        return _super8.apply(this, arguments);
      }

      return EmailtemplateEditCustComponent;
    }(_emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateComponent"]);

    EmailtemplateEditCustComponent.ɵfac = function EmailtemplateEditCustComponent_Factory(t) {
      return ɵEmailtemplateEditCustComponent_BaseFactory(t || EmailtemplateEditCustComponent);
    };

    EmailtemplateEditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateEditCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailtemplateEditCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailtemplateEditCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailtemplateEditCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateEditCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/base/emailtemplate/emailtemplate-list.cust.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/emailing-cust/base/emailtemplate/emailtemplate-list.cust.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmailtemplateListCustComponent */

  /***/
  function srcAppEmailingCustBaseEmailtemplateEmailtemplateListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateListCustComponent", function () {
      return EmailtemplateListCustComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing/emailtemplate/emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");

    var EmailtemplateListCustComponent = /*#__PURE__*/function (_emailing_emailtempla3) {
      _inherits(EmailtemplateListCustComponent, _emailing_emailtempla3);

      var _super9 = _createSuper(EmailtemplateListCustComponent);

      function EmailtemplateListCustComponent() {
        _classCallCheck(this, EmailtemplateListCustComponent);

        return _super9.apply(this, arguments);
      }

      return EmailtemplateListCustComponent;
    }(_emailing_emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateComponent"]);

    EmailtemplateListCustComponent.ɵfac = function EmailtemplateListCustComponent_Factory(t) {
      return ɵEmailtemplateListCustComponent_BaseFactory(t || EmailtemplateListCustComponent);
    };

    EmailtemplateListCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateListCustComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailtemplateListCustComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵEmailtemplateListCustComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmailtemplateListCustComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateListCustComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/emailing-routing.cust.path.ts":
  /*!*************************************************************!*\
    !*** ./src/app/emailing-cust/emailing-routing.cust.path.ts ***!
    \*************************************************************/

  /*! exports provided: EmailingRoutingCustPath */

  /***/
  function srcAppEmailingCustEmailingRoutingCustPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingRoutingCustPath", function () {
      return EmailingRoutingCustPath;
    }); // Path under emailing/cust/


    var EmailingRoutingCustPath = [// your customization goes here
    ];
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:52 GMT-0700 (Pacific Daylight Time)
    
    // Path under emailing/cust/
    export const EmailingRoutingCustPath = [
      // your customization goes here
    ];**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/emailing-cust/emailing.conf.ts":
  /*!************************************************!*\
    !*** ./src/app/emailing-cust/emailing.conf.ts ***!
    \************************************************/

  /*! exports provided: EmailingCoreRoutes, EmailingRoutes, emailing_server_root_uri */

  /***/
  function srcAppEmailingCustEmailingConfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingCoreRoutes", function () {
      return EmailingCoreRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingRoutes", function () {
      return EmailingRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailing_server_root_uri", function () {
      return emailing_server_root_uri;
    });
    /* harmony import */


    var _emailing_emailing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../emailing/emailing.component */
    "./src/app/emailing/emailing.component.ts");
    /* harmony import */


    var _emailing_emailing_routing_core_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../emailing/emailing-routing.core.path */
    "./src/app/emailing/emailing-routing.core.path.ts");
    /* harmony import */


    var _emailing_routing_cust_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailing-routing.cust.path */
    "./src/app/emailing-cust/emailing-routing.cust.path.ts"); //Import routing paths


    var EmailingCoreRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
      path: '',
      // non lazy load config. Include module in app module.
      // path: 'emailing',
      component: _emailing_emailing_component__WEBPACK_IMPORTED_MODULE_0__["EmailingComponent"],
      children: [{
        path: '',
        redirectTo: 'emailtemplate',
        pathMatch: 'full'
      }, {
        path: 'emailtemplate',
        children: _emailing_emailing_routing_core_path__WEBPACK_IMPORTED_MODULE_1__["emailtemplateRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'emailtemplate'
        }
      }, {
        path: 'emailsettings',
        children: _emailing_emailing_routing_core_path__WEBPACK_IMPORTED_MODULE_1__["emailsettingsRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'emailsettings'
        }
      }, {
        path: 'emailqueue',
        children: _emailing_emailing_routing_core_path__WEBPACK_IMPORTED_MODULE_1__["emailqueueRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'emailqueue'
        }
      }]
    }];
    var EmailingRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
      path: 'cust',
      // non lazy load config. Include module in app module.
      // path: 'emailing/cust',
      children: _emailing_routing_cust_path__WEBPACK_IMPORTED_MODULE_2__["EmailingRoutingCustPath"]
    }];
    var emailing_server_root_uri = '/api/emailing';
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:52 GMT-0700 (Pacific Daylight Time)
    
    import {
      Routes
    } from '@angular/router';
    import {
      EmailingComponent
    } from '../emailing/emailing.component';
    //Import routing paths
    import {
      emailtemplateRoutingCorePath,
      emailsettingsRoutingCorePath,
      emailqueueRoutingCorePath,
    } from '../emailing/emailing-routing.core.path';
    export const EmailingCoreRoutes: Routes = [{
      // Lazy Load: and add to app routing:
      //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
      path: '',
      // non lazy load config. Include module in app module.
      // path: 'emailing',
      component: EmailingComponent,
      children: [{
        path: '',
        redirectTo: 'emailtemplate',
        pathMatch: 'full'
      }, {
        path: 'emailtemplate',
        children: emailtemplateRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'emailtemplate'
        }
      }, {
        path: 'emailsettings',
        children: emailsettingsRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'emailsettings'
        }
      }, {
        path: 'emailqueue',
        children: emailqueueRoutingCorePath,
        data: {
          mraLevel: 1,
          item: 'emailqueue'
        }
      }, ]
    }, ];
    import {
      EmailingRoutingCustPath
    } from './emailing-routing.cust.path';
    export const EmailingRoutes: Routes = [{
      // Lazy Load: and add to app routing:
      //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
      path: 'cust',
      // non lazy load config. Include module in app module.
      // path: 'emailing/cust',
      children: EmailingRoutingCustPath,
    }, ];**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/emailing-cust/emailing.cust.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/emailing-cust/emailing.cust.module.ts ***!
    \*******************************************************/

  /*! exports provided: EmailingCustModule */

  /***/
  function srcAppEmailingCustEmailingCustModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingCustModule", function () {
      return EmailingCustModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _emailing_emailing_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailing/emailing.core.module */
    "./src/app/emailing/emailing.core.module.ts");

    var EmailingCustModule = function EmailingCustModule() {
      _classCallCheck(this, EmailingCustModule);
    };

    EmailingCustModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmailingCustModule
    });
    EmailingCustModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmailingCustModule_Factory(t) {
        return new (t || EmailingCustModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _emailing_emailing_core_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailingCustModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _emailing_emailing_core_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingCustModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _emailing_emailing_core_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCoreModule"]],
          declarations: [],
          exports: [],
          providers: [],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing-cust/emailing.tokens.value.ts":
  /*!********************************************************!*\
    !*** ./src/app/emailing-cust/emailing.tokens.value.ts ***!
    \********************************************************/

  /*! exports provided: emailing_server_root_uri */

  /***/
  function srcAppEmailingCustEmailingTokensValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailing_server_root_uri", function () {
      return emailing_server_root_uri;
    });

    var emailing_server_root_uri = '/api/emailing';
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sun Jul 19 2020 22:23:52 GMT-0700 (Pacific Daylight Time)
    
    export const emailing_server_root_uri: string = '/api/emailing';**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/emailing/emailing-routing.core.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/emailing/emailing-routing.core.module.ts ***!
    \**********************************************************/

  /*! exports provided: EmailingRoutingCoreModule */

  /***/
  function srcAppEmailingEmailingRoutingCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingRoutingCoreModule", function () {
      return EmailingRoutingCoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailing-cust/emailing.conf */
    "./src/app/emailing-cust/emailing.conf.ts");

    var EmailingRoutingCoreModule = function EmailingRoutingCoreModule() {
      _classCallCheck(this, EmailingRoutingCoreModule);
    };

    EmailingRoutingCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmailingRoutingCoreModule
    });
    EmailingRoutingCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmailingRoutingCoreModule_Factory(t) {
        return new (t || EmailingRoutingCoreModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailingRoutingCoreModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingRoutingCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreRoutes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing-routing.core.path.ts":
  /*!********************************************************!*\
    !*** ./src/app/emailing/emailing-routing.core.path.ts ***!
    \********************************************************/

  /*! exports provided: emailtemplateRoutingCorePath, emailsettingsRoutingCorePath, emailqueueRoutingCorePath */

  /***/
  function srcAppEmailingEmailingRoutingCorePathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailtemplateRoutingCorePath", function () {
      return emailtemplateRoutingCorePath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailsettingsRoutingCorePath", function () {
      return emailsettingsRoutingCorePath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailqueueRoutingCorePath", function () {
      return emailqueueRoutingCorePath;
    });
    /* harmony import */


    var _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-list/emailtemplate-list.component */
    "./src/app/emailing/emailtemplate/emailtemplate-list/emailtemplate-list.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-detail/emailtemplate-detail.component */
    "./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-edit/emailtemplate-edit.component */
    "./src/app/emailing/emailtemplate/emailtemplate-edit/emailtemplate-edit.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-list/emailsettings-list.component */
    "./src/app/emailing/emailsettings/emailsettings-list/emailsettings-list.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-detail/emailsettings-detail.component */
    "./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-edit/emailsettings-edit.component */
    "./src/app/emailing/emailsettings/emailsettings-edit/emailsettings-edit.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-list/emailqueue-list.component */
    "./src/app/emailing/emailqueue/emailqueue-list/emailqueue-list.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-detail/emailqueue-detail.component */
    "./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-edit/emailqueue-edit.component */
    "./src/app/emailing/emailqueue/emailqueue-edit/emailqueue-edit.component.ts");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/__ivy_ngcc__/fesm2015/hicoder-angular-auth.js"); // Import components for each schema


    var emailtemplateRoutingCorePath = [{
      path: 'list',
      component: _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_0__["EmailtemplateListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateDetailComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'new',
      component: _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    var emailsettingsRoutingCorePath = [{
      path: 'list',
      component: _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_4__["EmailsettingsDetailComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmailsettingsEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    var emailqueueRoutingCorePath = [{
      path: 'list',
      component: _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_6__["EmailqueueListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_7__["EmailqueueDetailComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_8__["EmailqueueEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/emailing/emailing-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/emailing/emailing-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmailingRoutingModule */

  /***/
  function srcAppEmailingEmailingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingRoutingModule", function () {
      return EmailingRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailing-cust/emailing.conf */
    "./src/app/emailing-cust/emailing.conf.ts");

    var EmailingRoutingModule = function EmailingRoutingModule() {
      _classCallCheck(this, EmailingRoutingModule);
    };

    EmailingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmailingRoutingModule
    });
    EmailingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmailingRoutingModule_Factory(t) {
        return new (t || EmailingRoutingModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__["EmailingRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_emailing_cust_emailing_conf__WEBPACK_IMPORTED_MODULE_2__["EmailingRoutes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing.component.ts":
  /*!************************************************!*\
    !*** ./src/app/emailing/emailing.component.ts ***!
    \************************************************/

  /*! exports provided: EmailingComponent */

  /***/
  function srcAppEmailingEmailingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingComponent", function () {
      return EmailingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EmailingComponent = /*#__PURE__*/function () {
      function EmailingComponent() {
        _classCallCheck(this, EmailingComponent);
      }

      _createClass(EmailingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmailingComponent;
    }();

    EmailingComponent.ɵfac = function EmailingComponent_Factory(t) {
      return new (t || EmailingComponent)();
    };

    EmailingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailingComponent,
      selectors: [["app-emailing"]],
      decls: 12,
      vars: 0,
      consts: [[1, "container"], [1, "card", "component-main-card"], [1, "card-header"], [1, "nav", "nav-pills"], ["routerLink", "./emailtemplate", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "./emailsettings", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "./emailqueue", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "card-body"]],
      template: function EmailingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".component-main-card[_ngcontent-%COMP%] {\n  border: 0rem;\n  border-radius: 0rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZW1haWxpbmcvZW1haWxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtbWFpbi1jYXJkIHtcbiAgYm9yZGVyOiAwcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailing',
          templateUrl: './emailing.component.html',
          styleUrls: ['./emailing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing.core.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/emailing/emailing.core.module.ts ***!
    \**************************************************/

  /*! exports provided: EmailingCoreModule */

  /***/
  function srcAppEmailingEmailingCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingCoreModule", function () {
      return EmailingCoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _emailing_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./emailing.directive */
    "./src/app/emailing/emailing.directive.ts");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony import */


    var _emailing_routing_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./emailing-routing.core.module */
    "./src/app/emailing/emailing-routing.core.module.ts");
    /* harmony import */


    var _emailing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./emailing.component */
    "./src/app/emailing/emailing.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-list/emailtemplate-list.component */
    "./src/app/emailing/emailtemplate/emailtemplate-list/emailtemplate-list.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_list_cust_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../emailing-cust/base/emailtemplate/emailtemplate-list.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-list.cust.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-detail/emailtemplate-detail.component */
    "./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_detail_cust_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_detail_emailtemplate_detail_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component */
    "./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component.ts");
    /* harmony import */


    var _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./emailtemplate/emailtemplate-edit/emailtemplate-edit.component */
    "./src/app/emailing/emailtemplate/emailtemplate-edit/emailtemplate-edit.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_edit_cust_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./emailsettings/emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-list/emailsettings-list.component */
    "./src/app/emailing/emailsettings/emailsettings-list/emailsettings-list.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_list_cust_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../emailing-cust/base/emailsettings/emailsettings-list.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-list.cust.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-detail/emailsettings-detail.component */
    "./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_detail_cust_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../emailing-cust/base/emailsettings/emailsettings-detail.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-detail.cust.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_detail_emailsettings_detail_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-detail/emailsettings-detail-field.component */
    "./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail-field.component.ts");
    /* harmony import */


    var _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./emailsettings/emailsettings-edit/emailsettings-edit.component */
    "./src/app/emailing/emailsettings/emailsettings-edit/emailsettings-edit.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_edit_cust_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../emailing-cust/base/emailsettings/emailsettings-edit.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-edit.cust.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./emailqueue/emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-list/emailqueue-list.component */
    "./src/app/emailing/emailqueue/emailqueue-list/emailqueue-list.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_list_cust_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../emailing-cust/base/emailqueue/emailqueue-list.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-list.cust.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-detail/emailqueue-detail.component */
    "./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_detail_cust_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../emailing-cust/base/emailqueue/emailqueue-detail.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-detail.cust.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_detail_emailqueue_detail_field_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-detail/emailqueue-detail-field.component */
    "./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail-field.component.ts");
    /* harmony import */


    var _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./emailqueue/emailqueue-edit/emailqueue-edit.component */
    "./src/app/emailing/emailqueue/emailqueue-edit/emailqueue-edit.component.ts");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_edit_cust_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../emailing-cust/base/emailqueue/emailqueue-edit.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-edit.cust.component.ts"); // Import components for each schema


    var EmailingCoreModule = function EmailingCoreModule() {
      _classCallCheck(this, EmailingCoreModule);
    };

    EmailingCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmailingCoreModule
    });
    EmailingCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmailingCoreModule_Factory(t) {
        return new (t || EmailingCoreModule)();
      },
      providers: [{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
        useClass: _emailing_directive__WEBPACK_IMPORTED_MODULE_4__["MraNgbDateFormatterService"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__["MddsRichtextEditorModule"], _emailing_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["EmailingRoutingCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailingCoreModule, {
        declarations: [_emailing_component__WEBPACK_IMPORTED_MODULE_8__["EmailingComponent"], _emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_9__["EmailtemplateComponent"], _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailtemplateListComponent"], _emailing_cust_base_emailtemplate_emailtemplate_list_cust_component__WEBPACK_IMPORTED_MODULE_11__["EmailtemplateListCustComponent"], _emailing_cust_base_emailtemplate_emailtemplate_detail_cust_component__WEBPACK_IMPORTED_MODULE_13__["EmailtemplateDetailCustComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_12__["EmailtemplateDetailComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["EmailtemplateDetailFieldComponent"], _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmailtemplateEditComponent"], _emailing_cust_base_emailtemplate_emailtemplate_edit_cust_component__WEBPACK_IMPORTED_MODULE_16__["EmailtemplateEditCustComponent"], _emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_17__["EmailsettingsComponent"], _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_18__["EmailsettingsListComponent"], _emailing_cust_base_emailsettings_emailsettings_list_cust_component__WEBPACK_IMPORTED_MODULE_19__["EmailsettingsListCustComponent"], _emailing_cust_base_emailsettings_emailsettings_detail_cust_component__WEBPACK_IMPORTED_MODULE_21__["EmailsettingsDetailCustComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_20__["EmailsettingsDetailComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailsettingsDetailFieldComponent"], _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_23__["EmailsettingsEditComponent"], _emailing_cust_base_emailsettings_emailsettings_edit_cust_component__WEBPACK_IMPORTED_MODULE_24__["EmailsettingsEditCustComponent"], _emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_25__["EmailqueueComponent"], _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_26__["EmailqueueListComponent"], _emailing_cust_base_emailqueue_emailqueue_list_cust_component__WEBPACK_IMPORTED_MODULE_27__["EmailqueueListCustComponent"], _emailing_cust_base_emailqueue_emailqueue_detail_cust_component__WEBPACK_IMPORTED_MODULE_29__["EmailqueueDetailCustComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_28__["EmailqueueDetailComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_field_component__WEBPACK_IMPORTED_MODULE_30__["EmailqueueDetailFieldComponent"], _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_31__["EmailqueueEditComponent"], _emailing_cust_base_emailqueue_emailqueue_edit_cust_component__WEBPACK_IMPORTED_MODULE_32__["EmailqueueEditCustComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__["MddsRichtextEditorModule"], _emailing_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["EmailingRoutingCoreModule"]],
        exports: [_emailing_component__WEBPACK_IMPORTED_MODULE_8__["EmailingComponent"], _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailtemplateListComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_12__["EmailtemplateDetailComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["EmailtemplateDetailFieldComponent"], _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmailtemplateEditComponent"], _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_18__["EmailsettingsListComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_20__["EmailsettingsDetailComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailsettingsDetailFieldComponent"], _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_23__["EmailsettingsEditComponent"], _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_26__["EmailqueueListComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_28__["EmailqueueDetailComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_field_component__WEBPACK_IMPORTED_MODULE_30__["EmailqueueDetailFieldComponent"], _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_31__["EmailqueueEditComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__["MddsRichtextEditorModule"], _emailing_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["EmailingRoutingCoreModule"]],
          declarations: [_emailing_component__WEBPACK_IMPORTED_MODULE_8__["EmailingComponent"], _emailtemplate_emailtemplate_component__WEBPACK_IMPORTED_MODULE_9__["EmailtemplateComponent"], _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailtemplateListComponent"], _emailing_cust_base_emailtemplate_emailtemplate_list_cust_component__WEBPACK_IMPORTED_MODULE_11__["EmailtemplateListCustComponent"], _emailing_cust_base_emailtemplate_emailtemplate_detail_cust_component__WEBPACK_IMPORTED_MODULE_13__["EmailtemplateDetailCustComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_12__["EmailtemplateDetailComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["EmailtemplateDetailFieldComponent"], _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmailtemplateEditComponent"], _emailing_cust_base_emailtemplate_emailtemplate_edit_cust_component__WEBPACK_IMPORTED_MODULE_16__["EmailtemplateEditCustComponent"], _emailsettings_emailsettings_component__WEBPACK_IMPORTED_MODULE_17__["EmailsettingsComponent"], _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_18__["EmailsettingsListComponent"], _emailing_cust_base_emailsettings_emailsettings_list_cust_component__WEBPACK_IMPORTED_MODULE_19__["EmailsettingsListCustComponent"], _emailing_cust_base_emailsettings_emailsettings_detail_cust_component__WEBPACK_IMPORTED_MODULE_21__["EmailsettingsDetailCustComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_20__["EmailsettingsDetailComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailsettingsDetailFieldComponent"], _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_23__["EmailsettingsEditComponent"], _emailing_cust_base_emailsettings_emailsettings_edit_cust_component__WEBPACK_IMPORTED_MODULE_24__["EmailsettingsEditCustComponent"], _emailqueue_emailqueue_component__WEBPACK_IMPORTED_MODULE_25__["EmailqueueComponent"], _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_26__["EmailqueueListComponent"], _emailing_cust_base_emailqueue_emailqueue_list_cust_component__WEBPACK_IMPORTED_MODULE_27__["EmailqueueListCustComponent"], _emailing_cust_base_emailqueue_emailqueue_detail_cust_component__WEBPACK_IMPORTED_MODULE_29__["EmailqueueDetailCustComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_28__["EmailqueueDetailComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_field_component__WEBPACK_IMPORTED_MODULE_30__["EmailqueueDetailFieldComponent"], _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_31__["EmailqueueEditComponent"], _emailing_cust_base_emailqueue_emailqueue_edit_cust_component__WEBPACK_IMPORTED_MODULE_32__["EmailqueueEditCustComponent"]],
          exports: [_emailing_component__WEBPACK_IMPORTED_MODULE_8__["EmailingComponent"], _emailtemplate_emailtemplate_list_emailtemplate_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailtemplateListComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_component__WEBPACK_IMPORTED_MODULE_12__["EmailtemplateDetailComponent"], _emailtemplate_emailtemplate_detail_emailtemplate_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["EmailtemplateDetailFieldComponent"], _emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmailtemplateEditComponent"], _emailsettings_emailsettings_list_emailsettings_list_component__WEBPACK_IMPORTED_MODULE_18__["EmailsettingsListComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_component__WEBPACK_IMPORTED_MODULE_20__["EmailsettingsDetailComponent"], _emailsettings_emailsettings_detail_emailsettings_detail_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailsettingsDetailFieldComponent"], _emailsettings_emailsettings_edit_emailsettings_edit_component__WEBPACK_IMPORTED_MODULE_23__["EmailsettingsEditComponent"], _emailqueue_emailqueue_list_emailqueue_list_component__WEBPACK_IMPORTED_MODULE_26__["EmailqueueListComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_component__WEBPACK_IMPORTED_MODULE_28__["EmailqueueDetailComponent"], _emailqueue_emailqueue_detail_emailqueue_detail_field_component__WEBPACK_IMPORTED_MODULE_30__["EmailqueueDetailFieldComponent"], _emailqueue_emailqueue_edit_emailqueue_edit_component__WEBPACK_IMPORTED_MODULE_31__["EmailqueueEditComponent"]],
          providers: [{
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
            useClass: _emailing_directive__WEBPACK_IMPORTED_MODULE_4__["MraNgbDateFormatterService"]
          }],
          entryComponents: [_emailtemplate_emailtemplate_edit_emailtemplate_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmailtemplateEditComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/emailing/emailing.directive.ts ***!
    \************************************************/

  /*! exports provided: MraNgbDateFormatterService */

  /***/
  function srcAppEmailingEmailingDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MraNgbDateFormatterService", function () {
      return MraNgbDateFormatterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var MraNgbDateFormatterService = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(MraNgbDateFormatterService, _ng_bootstrap_ng_boot);

      var _super10 = _createSuper(MraNgbDateFormatterService);

      function MraNgbDateFormatterService() {
        var _this;

        _classCallCheck(this, MraNgbDateFormatterService);

        _this = _super10.apply(this, arguments);
        _this.dateFormat = 'MM-DD-YYYY';
        _this.timeFormat = 'hh:mm:ss';
        return _this;
      } // from input -> internal model


      _createClass(MraNgbDateFormatterService, [{
        key: "parse",
        value: function parse(value) {
          return Object(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__["stringToDateStructure"])(value, this.dateFormat);
        } // from internal model -> string

      }, {
        key: "format",
        value: function format(date) {
          return Object(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_2__["dateStructureToString"])(date, this.dateFormat);
        }
      }]);

      return MraNgbDateFormatterService;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    MraNgbDateFormatterService.ɵfac = function MraNgbDateFormatterService_Factory(t) {
      return ɵMraNgbDateFormatterService_BaseFactory(t || MraNgbDateFormatterService);
    };

    MraNgbDateFormatterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MraNgbDateFormatterService,
      factory: MraNgbDateFormatterService.ɵfac
    });

    var ɵMraNgbDateFormatterService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MraNgbDateFormatterService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MraNgbDateFormatterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/emailing/emailing.module.ts ***!
    \*********************************************/

  /*! exports provided: EmailingModule */

  /***/
  function srcAppEmailingEmailingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailingModule", function () {
      return EmailingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./emailing-routing.module */
    "./src/app/emailing/emailing-routing.module.ts");
    /* harmony import */


    var _emailing_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailing.core.module */
    "./src/app/emailing/emailing.core.module.ts");
    /* harmony import */


    var _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailing-cust/emailing.cust.module */
    "./src/app/emailing-cust/emailing.cust.module.ts");

    var EmailingModule = function EmailingModule() {
      _classCallCheck(this, EmailingModule);
    };

    EmailingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmailingModule
    });
    EmailingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmailingModule_Factory(t) {
        return new (t || EmailingModule)();
      },
      providers: [],
      imports: [[_emailing_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmailingRoutingModule"], _emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]], _emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailingModule, {
        imports: [_emailing_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmailingRoutingModule"], _emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]],
        exports: [_emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_emailing_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmailingRoutingModule"], _emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]],
          declarations: [],
          exports: [_emailing_core_module__WEBPACK_IMPORTED_MODULE_2__["EmailingCoreModule"], _emailing_cust_emailing_cust_module__WEBPACK_IMPORTED_MODULE_3__["EmailingCustModule"]],
          providers: [],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailing.tokens.ts":
  /*!*********************************************!*\
    !*** ./src/app/emailing/emailing.tokens.ts ***!
    \*********************************************/

  /*! exports provided: Emailing_SERVER_ROOT_URI */

  /***/
  function srcAppEmailingEmailingTokensTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Emailing_SERVER_ROOT_URI", function () {
      return Emailing_SERVER_ROOT_URI;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_emailing_tokens_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../emailing-cust/emailing.tokens.value */
    "./src/app/emailing-cust/emailing.tokens.value.ts");

    var Emailing_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Emailing_SERVER_ROOT_URI', {
      factory: function factory() {
        return _emailing_cust_emailing_tokens_value__WEBPACK_IMPORTED_MODULE_1__["emailing_server_root_uri"];
      },
      providedIn: 'root'
    });
    /***/
  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail-field.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail-field.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: EmailqueueDetailFieldComponent */

  /***/
  function srcAppEmailingEmailqueueEmailqueueDetailEmailqueueDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueDetailFieldComponent", function () {
      return EmailqueueDetailFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailqueue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");
    /* harmony import */


    var _emailqueue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailqueue.service */
    "./src/app/emailing/emailqueue/emailqueue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailqueueDetailFieldComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["subject"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["from"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.detail["to"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.detail["processed"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.detail["number"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.detail["sent"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.detail["result"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r7.detail["createdAt"]["originalValue"], "medium") : "", "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.detail["updatedAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r8.detail["updatedAt"]["originalValue"], "medium") : "", "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r9.detail["content"]);
      }
    }

    function EmailqueueDetailFieldComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.detail["replacements"], "\n");
      }
    }

    function EmailqueueDetailFieldComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.detail["defaultReplacement"], "\n");
      }
    }

    var EmailqueueDetailFieldComponent = /*#__PURE__*/function (_emailqueue_component) {
      _inherits(EmailqueueDetailFieldComponent, _emailqueue_component);

      var _super11 = _createSuper(EmailqueueDetailFieldComponent);

      function EmailqueueDetailFieldComponent(emailqueueService, injector, router, route, location) {
        var _this2;

        _classCallCheck(this, EmailqueueDetailFieldComponent);

        _this2 = _super11.call(this, emailqueueService, injector, router, route, location);
        _this2.emailqueueService = emailqueueService;
        _this2.injector = injector;
        _this2.router = router;
        _this2.route = route;
        _this2.location = location;
        _this2.view = _emailqueue_component__WEBPACK_IMPORTED_MODULE_1__["ViewType"].DETAIL;
        _this2.fieldDisplayNames = {
          'subject': 'Subject',
          'from': 'From',
          'to': 'To',
          'processed': 'Processed',
          'number': 'Number',
          'sent': 'Sent',
          'result': 'Result',
          'createdAt': 'Created at',
          'updatedAt': 'Updated at',
          'content': 'Content',
          'replacements': 'Replacements',
          'defaultReplacement': 'Default Replacement'
        };

        _this2.stringFields.push('subject');

        _this2.stringFields.push('from');

        _this2.stringFields.push('to');

        _this2.stringFields.push('result');

        _this2.stringFields.push('content');

        _this2.stringFields.push('replacements');

        _this2.stringFields.push('defaultReplacement');

        _this2.dateFields = ['createdAt', 'updatedAt'];
        _this2.numberFields = ['number', 'sent'];
        return _this2;
      }

      _createClass(EmailqueueDetailFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.showFieldsStr) {
            console.error("A field has to be given to show it.");
            return;
          }

          this.showFields = this.showFieldsStr.match(/\S+/g);

          if (this.detailObj) {
            this.onDetailReturned(this.detailObj, null);
          } else {
            if (!this.id) this.id = this.id;
            if (this.id) this.populateDetail(this.id);else {
              console.error("No id provided to show info");
              return;
            }
          }
        }
      }]);

      return EmailqueueDetailFieldComponent;
    }(_emailqueue_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueComponent"]);

    EmailqueueDetailFieldComponent.ɵfac = function EmailqueueDetailFieldComponent_Factory(t) {
      return new (t || EmailqueueDetailFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailqueue_service__WEBPACK_IMPORTED_MODULE_2__["EmailqueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailqueueDetailFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueDetailFieldComponent,
      selectors: [["app-emailqueue-detail-field"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 12,
      consts: [[4, "ngIf"], ["libMddsRichtextShow", "emailqueueDetailContent", 3, "content"]],
      template: function EmailqueueDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueDetailFieldComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueDetailFieldComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueDetailFieldComponent_div_2_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueDetailFieldComponent_div_3_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueDetailFieldComponent_div_4_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueDetailFieldComponent_div_5_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueDetailFieldComponent_div_6_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailqueueDetailFieldComponent_div_7_Template, 3, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueDetailFieldComponent_div_8_Template, 3, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueDetailFieldComponent_div_9_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueDetailFieldComponent_div_10_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmailqueueDetailFieldComponent_div_11_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("subject"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("from"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("to"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("processed"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("number"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("sent"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("result"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("createdAt"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("updatedAt"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("content"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("replacements"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("defaultReplacement"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__["MddsRichTextShowDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxxdWV1ZS9lbWFpbHF1ZXVlLWRldGFpbC9lbWFpbHF1ZXVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlscXVldWUvZW1haWxxdWV1ZS1kZXRhaWwvZW1haWxxdWV1ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueDetailFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailqueue-detail-field',
          templateUrl: './emailqueue-detail-field.component.html',
          styleUrls: ['./emailqueue-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailqueue_service__WEBPACK_IMPORTED_MODULE_2__["EmailqueueService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue-detail/emailqueue-detail.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: EmailqueueDetailComponent */

  /***/
  function srcAppEmailingEmailqueueEmailqueueDetailEmailqueueDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueDetailComponent", function () {
      return EmailqueueDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailqueue/emailqueue-detail.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-detail.cust.component.ts");
    /* harmony import */


    var _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");
    /* harmony import */


    var _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailqueue.service */
    "./src/app/emailing/emailqueue/emailqueue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailqueueDetailComponent_div_0_div_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../../edit", a1];
    };

    function EmailqueueDetailComponent_div_0_div_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.detail["_id"]))("skipLocationChange", false);
      }
    }

    function EmailqueueDetailComponent_div_0_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueDetailComponent_div_0_div_1_div_1_a_1_Template, 2, 0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueDetailComponent_div_0_div_1_div_1_a_2_Template, 2, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionList"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionEdit"]);
      }
    }

    function EmailqueueDetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueDetailComponent_div_0_div_1_div_1_Template, 3, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disableActionButtions && !ctx_r1.options["disableActionButtions"]);
      }
    }

    function EmailqueueDetailComponent_div_0_div_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailqueueDetailComponent_div_0_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailqueueDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueDetailComponent_div_0_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "From:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "To:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Processed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sent:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Result:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Updated at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Content:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Replacements:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Default Replacement:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, EmailqueueDetailComponent_div_0_div_89_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, EmailqueueDetailComponent_div_0_div_90_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["subject"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["from"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["to"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.detail["processed"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["number"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["sent"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["result"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 15, ctx_r0.detail["createdAt"]["originalValue"], "medium") : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["updatedAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 18, ctx_r0.detail["updatedAt"]["originalValue"], "medium") : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.detail["content"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["replacements"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["defaultReplacement"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disablePipeline"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableRefLink"]);
      }
    }

    var EmailqueueDetailComponent = /*#__PURE__*/function (_emailing_cust_base_e) {
      _inherits(EmailqueueDetailComponent, _emailing_cust_base_e);

      var _super12 = _createSuper(EmailqueueDetailComponent);

      // @Input() 
      // public id:string;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public disableActionButtions:boolean;
      // @Output()
      // public eventEmitter: EventEmitter<any> = new EventEmitter();
      function EmailqueueDetailComponent(emailqueueService, injector, router, route, location) {
        var _this3;

        _classCallCheck(this, EmailqueueDetailComponent);

        _this3 = _super12.call(this, emailqueueService, injector, router, route, location);
        _this3.emailqueueService = emailqueueService;
        _this3.injector = injector;
        _this3.router = router;
        _this3.route = route;
        _this3.location = location;
        _this3.view = _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].DETAIL;
        _this3.fieldDisplayNames = {
          'subject': 'Subject',
          'from': 'From',
          'to': 'To',
          'processed': 'Processed',
          'number': 'Number',
          'sent': 'Sent',
          'result': 'Result',
          'createdAt': 'Created at',
          'updatedAt': 'Updated at',
          'content': 'Content',
          'replacements': 'Replacements',
          'defaultReplacement': 'Default Replacement'
        };

        _this3.stringFields.push('subject');

        _this3.stringFields.push('from');

        _this3.stringFields.push('to');

        _this3.stringFields.push('result');

        _this3.stringFields.push('content');

        _this3.stringFields.push('replacements');

        _this3.stringFields.push('defaultReplacement');

        _this3.dateFields = ['createdAt', 'updatedAt'];
        _this3.numberFields = ['number', 'sent'];
        return _this3;
      }

      _createClass(EmailqueueDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailqueueDetailComponent.prototype), "ngOnInit", this).call(this);

          if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

          if (this.id) {
            this.populateDetail(this.id);
          } else if (this.searchObj) {
            // search item based on the unique value
            this.populateDetailByFields(this.searchObj);
          } else {
            console.error("Routing error for detail view... no id...");
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return EmailqueueDetailComponent;
    }(_emailing_cust_base_emailqueue_emailqueue_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueDetailCustComponent"]);

    EmailqueueDetailComponent.ɵfac = function EmailqueueDetailComponent_Factory(t) {
      return new (t || EmailqueueDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailqueueDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueDetailComponent,
      selectors: [["app-emailqueue-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngIf"], [1, "card", "text-left", "transparent-border"], [1, "grid-fields"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "card-body"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"], ["libMddsRichtextShow", "emailqueueDetailContent", 3, "content"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "../../list", "class", "action-go-list", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "skipLocationChange", 4, "ngIf"], ["routerLink", "../../list", 1, "action-go-list"], ["title", "List", 1, "fas", "fa-list"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"]],
      template: function EmailqueueDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueDetailComponent_div_0_Template, 91, 21, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_6__["MddsRichTextShowDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxxdWV1ZS9lbWFpbHF1ZXVlLWRldGFpbC9lbWFpbHF1ZXVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlscXVldWUvZW1haWxxdWV1ZS1kZXRhaWwvZW1haWxxdWV1ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailqueue-detail',
          templateUrl: './emailqueue-detail.component.html',
          styleUrls: ['./emailqueue-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue-edit/emailqueue-edit.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue-edit/emailqueue-edit.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: EmailqueueEditComponent */

  /***/
  function srcAppEmailingEmailqueueEmailqueueEditEmailqueueEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueEditComponent", function () {
      return EmailqueueEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailqueue/emailqueue-edit.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-edit.cust.component.ts");
    /* harmony import */


    var _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");
    /* harmony import */


    var _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailqueue.service */
    "./src/app/emailing/emailqueue/emailqueue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailqueueEditComponent_div_0_h4_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.action, " Email Queue");
      }
    }

    function EmailqueueEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.style["card-title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.options["title"], " ");
      }
    }

    function EmailqueueEditComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.style["card-subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.options["subtitle"], " ");
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r20.clearValueFromDetail("subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r22.detail["subject"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r18.valid || _r18.pristine || _r18.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r26.clearValueFromDetail("from");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r28.detail["from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.detail["from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.detail["from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r24.valid || _r24.pristine || _r24.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r32.clearValueFromDetail("to");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r34.detail["to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.detail["to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.detail["to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r30.valid || _r30.pristine || _r30.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r39.clearValueFromDetail("processed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        "ng-valid": true
      };
    };

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Processed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r41.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 37, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r43.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_div_14_Template, 2, 0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx_r11.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx_r11.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.detail["processed"] == true || ctx_r11.detail["processed"] == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r36.valid || _r36.pristine);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_4_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r45.detail["number"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.detail["number"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r44.valid || _r44.pristine || _r44.errors.libMddsMinNumber);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 44, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r48.detail["sent"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.detail["sent"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r47.valid || _r47.pristine || _r47.errors.libMddsMinNumber);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r52.clearValueFromDetail("result");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Result");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r54.detail["result"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.detail["result"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.detail["result"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r50.valid || _r50.pristine || _r50.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-richtext-editor", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_7_Template_lib_richtext_editor_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r57.detail["content"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.detail["content"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r56.valid);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r61.clearValueFromDetail("replacements");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replacements");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 53, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r63.detail["replacements"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.detail["replacements"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.detail["replacements"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r59.valid || _r59.pristine || _r59.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r67.clearValueFromDetail("defaultReplacement");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default Replacement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 56, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r69.detail["defaultReplacement"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.detail["defaultReplacement"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.detail["defaultReplacement"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r65.valid || _r65.pristine || _r65.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueEditComponent_div_0_ng_template_8_ng_template_0_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueEditComponent_div_0_ng_template_8_ng_template_1_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueEditComponent_div_0_ng_template_8_ng_template_2_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueEditComponent_div_0_ng_template_8_ng_template_3_Template, 16, 8, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueEditComponent_div_0_ng_template_8_ng_template_4_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueEditComponent_div_0_ng_template_8_ng_template_5_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_8_ng_template_6_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailqueueEditComponent_div_0_ng_template_8_ng_template_7_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueEditComponent_div_0_ng_template_8_ng_template_8_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueEditComponent_div_0_ng_template_8_ng_template_9_Template, 8, 3, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("subject"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("from"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("to"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("processed"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("sent"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("result"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("content"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("replacements"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("defaultReplacement"));
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r84.clearValueFromDetail("subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r86.detail["subject"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r71.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r82.valid || _r82.pristine || _r82.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r90.clearValueFromDetail("from");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r92.detail["from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r72.detail["from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.detail["from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r88.valid || _r88.pristine || _r88.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r96.clearValueFromDetail("to");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r98.detail["to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r73.detail["to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.detail["to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r94.valid || _r94.pristine || _r94.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r102.clearValueFromDetail("subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r104.detail["subject"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r74.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r100.valid || _r100.pristine || _r100.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r109.clearValueFromDetail("processed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Processed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r111.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 37, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r113.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_div_14_Template, 2, 0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx_r75.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx_r75.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.detail["processed"] == true || ctx_r75.detail["processed"] == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r106.valid || _r106.pristine);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r115.detail["number"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r76.detail["number"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r114.valid || _r114.pristine || _r114.errors.libMddsMinNumber);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 44, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_6_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r118.detail["sent"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r77.detail["sent"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r117.valid || _r117.pristine || _r117.errors.libMddsMinNumber);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r122.clearValueFromDetail("result");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Result");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r124.detail["result"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r78.detail["result"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.detail["result"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r120.valid || _r120.pristine || _r120.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-richtext-editor", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_8_Template_lib_richtext_editor_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r127.detail["content"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r79.detail["content"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r126.valid);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r131.clearValueFromDetail("replacements");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replacements");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 53, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r133.detail["replacements"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r80.detail["replacements"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.detail["replacements"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r129.valid || _r129.pristine || _r129.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r137.clearValueFromDetail("defaultReplacement");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default Replacement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 56, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r139.detail["defaultReplacement"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r81.detail["defaultReplacement"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.detail["defaultReplacement"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r135.valid || _r135.pristine || _r135.errors.minlength);
      }
    }

    function EmailqueueEditComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueEditComponent_div_0_ng_template_9_ng_template_0_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueEditComponent_div_0_ng_template_9_ng_template_1_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueEditComponent_div_0_ng_template_9_ng_template_2_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueEditComponent_div_0_ng_template_9_ng_template_3_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueEditComponent_div_0_ng_template_9_ng_template_4_Template, 16, 8, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueEditComponent_div_0_ng_template_9_ng_template_5_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueEditComponent_div_0_ng_template_9_ng_template_6_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailqueueEditComponent_div_0_ng_template_9_ng_template_7_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueEditComponent_div_0_ng_template_9_ng_template_8_Template, 6, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueEditComponent_div_0_ng_template_9_ng_template_9_Template, 8, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueEditComponent_div_0_ng_template_9_ng_template_10_Template, 8, 3, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("subject"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("from"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("to"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("subject"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("processed"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("sent"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("result"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("content"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("replacements"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("defaultReplacement"));
      }
    }

    function EmailqueueEditComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueEditComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r141.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueEditComponent_div_0_h4_3_Template, 2, 1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueEditComponent_div_0_h4_4_Template, 2, 2, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueEditComponent_div_0_p_5_Template, 2, 2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailqueueEditComponent_div_0_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueEditComponent_div_0_ng_template_8_Template, 10, 10, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueEditComponent_div_0_ng_template_9_Template, 11, 11, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailqueueEditComponent_div_0_button_13_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView && !ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableCancel"]);
      }
    }

    var EmailqueueEditComponent = /*#__PURE__*/function (_emailing_cust_base_e2) {
      _inherits(EmailqueueEditComponent, _emailing_cust_base_e2);

      var _super13 = _createSuper(EmailqueueEditComponent);

      function EmailqueueEditComponent(emailqueueService, injector, router, route, location) {
        var _this4;

        _classCallCheck(this, EmailqueueEditComponent);

        _this4 = _super13.call(this, emailqueueService, injector, router, route, location);
        _this4.emailqueueService = emailqueueService;
        _this4.injector = injector;
        _this4.router = router;
        _this4.route = route;
        _this4.location = location;
        _this4.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this4.view = _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].EDIT;
        _this4.fieldDisplayNames = {
          'subject': 'Subject',
          'from': 'From',
          'to': 'To',
          'processed': 'Processed',
          'number': 'Number',
          'sent': 'Sent',
          'result': 'Result',
          'content': 'Content',
          'replacements': 'Replacements',
          'defaultReplacement': 'Default Replacement'
        };

        _this4.stringFields.push('subject');

        _this4.stringFields.push('from');

        _this4.stringFields.push('to');

        _this4.stringFields.push('result');

        _this4.stringFields.push('content');

        _this4.stringFields.push('replacements');

        _this4.stringFields.push('defaultReplacement');

        _this4.numberFields = ['number', 'sent'];
        var detail = {};
        _this4.detail = _this4.formatDetail(detail);
        return _this4;
      }

      _createClass(EmailqueueEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailqueueEditComponent.prototype), "ngOnInit", this).call(this);

          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
            } else {
              this.action = 'Create';
              if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          } // get editHintFields


          this.searchHintFieldValues();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Initialize all tooltips
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {
              processed: false,
              sent: 0
            };

            for (var _i = 0, _Object$keys = Object.keys(this.initData); _i < _Object$keys.length; _i++) {
              var prop = _Object$keys[_i];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail = {
              processed: false,
              sent: 0
            };
            this.detail = this.formatDetail(_detail);
          }
        }
      }]);

      return EmailqueueEditComponent;
    }(_emailing_cust_base_emailqueue_emailqueue_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueEditCustComponent"]);

    EmailqueueEditComponent.ɵfac = function EmailqueueEditComponent_Factory(t) {
      return new (t || EmailqueueEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailqueueEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueEditComponent,
      selectors: [["app-emailqueue-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], [1, "edit"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-title", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [3, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-outline-success", "type", "button", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "card-title", 3, "ngStyle"], [3, "ngStyle"], [1, "form-group"], ["for", "EditSubject"], [1, "input-group"], ["type", "text", "id", "EditSubject", "name", "EditSubject", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditSubject", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], ["for", "EditFrom"], ["type", "text", "id", "EditFrom", "name", "EditFrom", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditFrom", "ngModel"], ["for", "EditTo"], ["type", "text", "id", "EditTo", "name", "EditTo", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditTo", "ngModel"], ["for", "EditProcessed"], [1, "form-check", 3, "ngClass"], [1, "form-check-inline"], ["type", "radio", "name", "EditProcessed", "id", "EditProcessedYes", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["EditProcessed", "ngModel"], [1, "form-check-label"], ["type", "radio", "name", "EditProcessed", "id", "EditProcessedNo", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["class", "form-check-inline", 3, "click", 4, "ngIf"], [1, "form-check-inline", 3, "click"], ["for", "EditNumber"], ["type", "number", "id", "EditNumber", "name", "EditNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EditNumber", "ngModel"], ["for", "EditSent"], ["type", "number", "id", "EditSent", "name", "EditSent", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EditSent", "ngModel"], ["for", "EditResult"], ["type", "text", "id", "EditResult", "name", "EditResult", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditResult", "ngModel"], ["for", "EditContent"], ["name", "EditContent", 3, "ngModel", "ngModelChange"], ["EditContent", "ngModel"], ["for", "EditReplacements"], ["type", "text", "id", "EditReplacements", "name", "EditReplacements", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditReplacements", "ngModel"], ["for", "EditDefaultReplacement"], ["type", "text", "id", "EditDefaultReplacement", "name", "EditDefaultReplacement", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditDefaultReplacement", "ngModel"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]],
      template: function EmailqueueEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueEditComponent_div_0_Template, 14, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_7__["MddsRichtextEditorComponent"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n\nfieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%] {\n  width: 90%\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-buttons-center[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n\n\n\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-clear[_ngcontent-%COMP%] {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.icon-clear-inside[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.icon-clear-inside-sm[_ngcontent-%COMP%] {\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  right: 1.5rem;\n  height: 1.5rem;\n}\n\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.important-tip[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.new-area[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxxdWV1ZS9lbWFpbHF1ZXVlLWVkaXQvZW1haWxxdWV1ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1haWxpbmcvZW1haWxxdWV1ZS9lbWFpbHF1ZXVlLWVkaXQvZW1haWxxdWV1ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldD4uZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLFxuLmZvcm0tY2hlY2ssXG4uYWxlcnQge1xuICB3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXA+bGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsXG4uaWNvbi1jbGVhciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwPnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICB6LWluZGV4OiAzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Utb250b3Age1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZS1vbnRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbXBvcnRhbnQtdGlwIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ldy1tb2RhbCB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5ldy1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggbGlnaHRncmF5O1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailqueue-edit',
          templateUrl: './emailqueue-edit.component.html',
          styleUrls: ['./emailqueue-edit.component.css']
        }]
      }], function () {
        return [{
          type: _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue-list/emailqueue-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue-list/emailqueue-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: EmailqueueListComponent */

  /***/
  function srcAppEmailingEmailqueueEmailqueueListEmailqueueListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueListComponent", function () {
      return EmailqueueListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailqueue_emailqueue_list_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailqueue/emailqueue-list.cust.component */
    "./src/app/emailing-cust/base/emailqueue/emailqueue-list.cust.component.ts");
    /* harmony import */


    var _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailqueue.component */
    "./src/app/emailing/emailqueue/emailqueue.component.ts");
    /* harmony import */


    var _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailqueue.service */
    "./src/app/emailing/emailqueue/emailqueue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function EmailqueueListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
      }
    }

    function EmailqueueListComponent_ul_1_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r10.categoriesCounts[idx_r8], ")");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var _c1 = function _c1() {
      return ["."];
    };

    function EmailqueueListComponent_ul_1_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_ul_1_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.categorySelected(idx_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_ul_1_li_1_a_1_span_2_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r8 = ctx_r15.index;
        var ele_r7 = ctx_r15.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, idx_r8 === ctx_r9.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r7, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.listCategory1.showCategoryCounts);
      }
    }

    function EmailqueueListComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_ul_1_li_1_a_1_Template, 3, 7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.listCategory1.showEmptyCategory || !ctx_r6.listCategory1.showEmptyCategory && ctx_r6.categoriesCounts[idx_r8] > 0);
      }
    }

    function EmailqueueListComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_ul_1_li_1_Template, 2, 1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_1_i_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
      }
    }

    function EmailqueueListComponent_div_3_div_1_i_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_div_21_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r40.clearValueFromDetail("processed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_div_36_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r42.clearValueFromDetail("number");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_div_51_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r44.clearValueFromDetail("sent");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_75_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function EmailqueueListComponent_div_3_div_1_div_16_div_75_ng_template_3_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var emailqueueEditCreatedAtDate_r49 = ctx.date;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r51.hoveredDate = emailqueueEditCreatedAtDate_r49;
        })("mouseleave", function EmailqueueListComponent_div_3_div_1_div_16_div_75_ng_template_3_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r53.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emailqueueEditCreatedAtDate_r49 = ctx.date;
        var emailqueueEditCreatedAtFocused_r50 = ctx.focused;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", emailqueueEditCreatedAtFocused_r50)("range", ctx_r48.isRange("createdAt", emailqueueEditCreatedAtDate_r49))("faded", ctx_r48.isHovered("createdAt", emailqueueEditCreatedAtDate_r49) || ctx_r48.isInside("createdAt", emailqueueEditCreatedAtDate_r49));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", emailqueueEditCreatedAtDate_r49.day, " ");
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_75_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-datepicker", 73, 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function EmailqueueListComponent_div_3_div_1_div_16_div_75_Template_ngb_datepicker_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r54.onDateSelection("createdAt", $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueListComponent_div_3_div_1_div_16_div_75_ng_template_3_Template, 2, 7, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx_r38.minDate)("displayMonths", ctx_r38.datePickerDisplayMonths)("dayTemplate", _r47);
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_div_77_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_div_77_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r56.clearValueFromDetail("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Processed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 44, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r58.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 47, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.detail["processed"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EmailqueueListComponent_div_3_div_1_div_16_div_21_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r61.detail["__mra_number_from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0 ~ \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r62.detail["__mra_number_to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EmailqueueListComponent_div_3_div_1_div_16_div_36_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sent ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 55, 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r63.detail["__mra_sent_from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xA0 ~ \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 55, 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r64.detail["__mra_sent_to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EmailqueueListComponent_div_3_div_1_div_16_div_51_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Created at ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 63, 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r65.detail["createdAt"]["from"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_Template_button_click_65_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r66.onDateSelectionToggle("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 66, 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_div_16_Template_input_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r67.detail["createdAt"]["to"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_Template_button_click_73_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r68.onDateSelectionToggle("createdAt");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, EmailqueueListComponent_div_3_div_1_div_16_div_75_Template, 5, 3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, EmailqueueListComponent_div_3_div_1_div_16_div_77_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_Template_button_click_79_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r69.onSearchClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_16_Template_button_click_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r70.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx_r23.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx_r23.detail["processed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.checkValueDefinedFromDetail("processed"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["__mra_number_from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["__mra_number_to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.checkValueDefinedFromDetail("number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["__mra_sent_from"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["__mra_sent_to"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.checkValueDefinedFromDetail("sent"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r23.dateFormat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["createdAt"]["from"])("minDate", ctx_r23.minDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r23.dateFormat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["createdAt"]["to"])("minDate", ctx_r23.minDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.detail["createdAt"]["pop"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.checkValueDefinedFromDetail("createdAt"));
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_17_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_17_span_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r73.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_div_17_span_1_Template_i_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var value_r72 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r75.clearValueFromDetailAndSearchList(value_r72[2]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", value_r72[0], ": ", value_r72[1], "");
      }
    }

    function EmailqueueListComponent_div_3_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_3_div_1_div_17_span_1_Template, 4, 2, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.searchMoreDetail);
      }
    }

    function EmailqueueListComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailqueueListComponent_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.searchText = $event;
        })("search", function EmailqueueListComponent_div_3_div_1_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          $event.target.blur();
          return ctx_r78.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueListComponent_div_3_div_1_div_5_Template, 3, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r79.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_1_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Refine Search \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailqueueListComponent_div_3_div_1_i_14_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailqueueListComponent_div_3_div_1_i_15_Template, 1, 0, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmailqueueListComponent_div_3_div_1_div_16_Template, 83, 19, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmailqueueListComponent_div_3_div_1_div_17_Template, 2, 1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.moreSearchOpened);
      }
    }

    function EmailqueueListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_2_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 94);
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_2_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 95);
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_3_div_4_div_2_span_4_i_2_Template, 1, 0, "i", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueListComponent_div_3_div_4_div_2_span_4_i_3_Template, 1, 0, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r86.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.listSortOrder === "desc");
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueListComponent_div_3_div_4_div_2_span_4_Template, 4, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r89.setListSortAndRefresh("subject", "Subject", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r91.setListSortAndRefresh("subject", "Subject", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r92.setListSortAndRefresh("processed", "Processed", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Processed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r93.setListSortAndRefresh("processed", "Processed", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Processed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r94.setListSortAndRefresh("number", "Number", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r95.setListSortAndRefresh("number", "Number", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r96.setListSortAndRefresh("sent", "Sent", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r97.setListSortAndRefresh("sent", "Sent", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r98.setListSortAndRefresh("createdAt", "Created at", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Created at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_2_Template_a_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r99.setListSortAndRefresh("createdAt", "Created at", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Created at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.listSortField && !ctx_r81.viewHiddenFields.includes(ctx_r81.listSortField));
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_5_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r100.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_5_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r102.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_5_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r103.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r82.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r82.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r82.isShowListView("table"));
      }
    }

    function EmailqueueListComponent_div_3_div_4_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.totalCount);
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_12_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_12_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var p_r107 = ctx.$implicit;

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r109.onGotoPage(p_r107);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r107 = ctx.$implicit;

        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r107 == ctx_r105.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r107);
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_12_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function EmailqueueListComponent_div_3_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r111.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueListComponent_div_3_div_4_div_12_li_8_Template, 3, 0, "li", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueListComponent_div_3_div_4_div_12_li_9_Template, 3, 4, "li", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueListComponent_div_3_div_4_div_12_li_10_Template, 3, 0, "li", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_div_12_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r113.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r84.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r84.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r84.page >= ctx_r84.totalPages));
      }
    }

    function EmailqueueListComponent_div_3_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailqueueListComponent_div_3_div_4_div_13_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r114.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r85.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r85.totalPages, " ");
      }
    }

    function EmailqueueListComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_3_div_4_div_2_Template, 36, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueListComponent_div_3_div_4_div_5_Template, 10, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueListComponent_div_3_div_4_span_8_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_3_div_4_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r116.onRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailqueueListComponent_div_3_div_4_div_12_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailqueueListComponent_div_3_div_4_div_13_Template, 6, 2, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);
      }
    }

    function EmailqueueListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_3_div_1_Template, 18, 6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_3_div_2_Template, 3, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueListComponent_div_3_div_4_Template, 14, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableListSearch"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disablePagination"]);
      }
    }

    function EmailqueueListComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_4_span_1_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_4_span_2_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loaded);
      }
    }

    function EmailqueueListComponent_div_5_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 137);
      }
    }

    function EmailqueueListComponent_div_5_div_1_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Processed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r124["processed"], " ");
      }
    }

    function EmailqueueListComponent_div_5_div_1_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r124["number"], " ");
      }
    }

    function EmailqueueListComponent_div_5_div_1_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sent:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r124["sent"], " ");
      }
    }

    function EmailqueueListComponent_div_5_div_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r124["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, detail_r124["createdAt"]["originalValue"], "medium") : "", " ");
      }
    }

    var _c3 = function _c3(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c4 = function _c4(a0) {
      return {
        pointer: a0
      };
    };

    var _c5 = function _c5(a1) {
      return ["../edit", a1];
    };

    function EmailqueueListComponent_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_div_1_div_1_hr_1_Template, 1, 0, "hr", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

          var i_r125 = ctx.index;

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r136.clickOneItem(i_r125);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueListComponent_div_5_div_1_div_1_div_9_Template, 6, 1, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueListComponent_div_5_div_1_div_1_div_10_Template, 6, 1, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmailqueueListComponent_div_5_div_1_div_1_div_11_Template, 6, 1, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailqueueListComponent_div_5_div_1_div_1_div_12_Template, 7, 4, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r124 = ctx.$implicit;
        var i_r125 = ctx.index;

        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r125 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c3, ctx_r123.clickedId == detail_r124["_id"], ctx_r123.clickItemAction === "select" && ctx_r123.checkedItem[i_r125], ctx_r123.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx_r123.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r124["subject"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.fieldHasValue(detail_r124["processed"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.fieldHasValue(detail_r124["number"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.fieldHasValue(detail_r124["sent"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.fieldHasValue(detail_r124["createdAt"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c5, detail_r124["_id"]))("skipLocationChange", false);
      }
    }

    function EmailqueueListComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_div_1_div_1_Template, 18, 18, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r120.list);
      }
    }

    function EmailqueueListComponent_div_5_div_2_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Processed:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r139["processed"], " ");
      }
    }

    function EmailqueueListComponent_div_5_div_2_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["number"], "");
      }
    }

    function EmailqueueListComponent_div_5_div_2_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sent:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["sent"], "");
      }
    }

    function EmailqueueListComponent_div_5_div_2_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created at:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, detail_r139["createdAt"]["originalValue"], "medium") : "", "");
      }
    }

    function EmailqueueListComponent_div_5_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var i_r140 = ctx.index;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r150.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueListComponent_div_5_div_2_div_1_div_9_Template, 6, 1, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueListComponent_div_5_div_2_div_1_div_10_Template, 6, 1, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmailqueueListComponent_div_5_div_2_div_1_div_11_Template, 6, 1, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailqueueListComponent_div_5_div_2_div_1_div_12_Template, 7, 4, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = ctx.$implicit;
        var i_r140 = ctx.index;

        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c3, ctx_r138.clickedId == detail_r139["_id"], ctx_r138.clickItemAction === "select" && ctx_r138.checkedItem[i_r140], ctx_r138.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, ctx_r138.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["subject"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.fieldHasValue(detail_r139["processed"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.fieldHasValue(detail_r139["number"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.fieldHasValue(detail_r139["sent"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.fieldHasValue(detail_r139["createdAt"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, detail_r139["_id"]))("skipLocationChange", false);
      }
    }

    function EmailqueueListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_div_2_div_1_Template, 16, 17, "div", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r121.list);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 156);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 157);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_table_3_span_7_i_1_Template, 1, 0, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_table_3_span_7_i_2_Template, 1, 0, "i", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r152.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r152.listSortOrder === "desc");
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_10_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 156);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_10_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 157);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_table_3_span_10_i_1_Template, 1, 0, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_table_3_span_10_i_2_Template, 1, 0, "i", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.listSortOrder === "desc");
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_13_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 156);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_13_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 157);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_table_3_span_13_i_1_Template, 1, 0, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_table_3_span_13_i_2_Template, 1, 0, "i", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r154.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r154.listSortOrder === "desc");
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_16_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 156);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_16_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 157);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_table_3_span_16_i_1_Template, 1, 0, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_table_3_span_16_i_2_Template, 1, 0, "i", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r155.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r155.listSortOrder === "desc");
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_19_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 156);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_19_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 157);
      }
    }

    function EmailqueueListComponent_div_5_table_3_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_table_3_span_19_i_1_Template, 1, 0, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_table_3_span_19_i_2_Template, 1, 0, "i", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.listSortOrder === "desc");
      }
    }

    var _c6 = function _c6(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    var _c7 = function _c7(a0) {
      return {
        "pointer": a0
      };
    };

    function EmailqueueListComponent_div_5_table_3_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r170.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r172.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r173.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r174.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r175.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_ng_template_22_Template_td_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var i_r169 = ctx.index;

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r176.clickOneItem(i_r169);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r168 = ctx.$implicit;
        var i_r169 = ctx.index;

        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c6, ctx_r157.clickedId == detail_r168["_id"], ctx_r157.clickItemAction === "select" && ctx_r157.checkedItem[i_r169]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r157.page - 1) * ctx_r157.perPage + i_r169 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c7, ctx_r157.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r168["subject"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c7, ctx_r157.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r168["processed"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c7, ctx_r157.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r168["number"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c7, ctx_r157.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r168["sent"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c7, ctx_r157.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r168["createdAt"] ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 14, detail_r168["createdAt"]["originalValue"], "medium") : "", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c5, detail_r168["_id"]))("skipLocationChange", false);
      }
    }

    function EmailqueueListComponent_div_5_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r177.toggleListSort("subject", "Subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Subject ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailqueueListComponent_div_5_table_3_span_7_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_Template_th_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r179.toggleListSort("processed", "Processed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Processed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueListComponent_div_5_table_3_span_10_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_Template_th_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r180.toggleListSort("number", "Number");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailqueueListComponent_div_5_table_3_span_13_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_Template_th_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r181.toggleListSort("sent", "Sent");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sent ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmailqueueListComponent_div_5_table_3_span_16_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_5_table_3_Template_th_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r182.toggleListSort("createdAt", "Created at");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Created at ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailqueueListComponent_div_5_table_3_span_19_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EmailqueueListComponent_div_5_table_3_ng_template_22_Template, 17, 32, "ng-template", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.listSortField === "subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.listSortField === "processed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.listSortField === "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.listSortField === "sent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.listSortField === "createdAt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r122.list);
      }
    }

    function EmailqueueListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_div_5_div_1_Template, 2, 1, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailqueueListComponent_div_5_div_2_Template, 2, 1, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueListComponent_div_5_table_3_Template, 23, 6, "table", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function EmailqueueListComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r183.totalCount);
      }
    }

    function EmailqueueListComponent_div_7_div_8_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_7_div_8_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_7_div_8_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192);

          var p_r189 = ctx.$implicit;

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r191.onGotoPage(p_r189);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r189 = ctx.$implicit;

        var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r189 == ctx_r187.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r189);
      }
    }

    function EmailqueueListComponent_div_7_div_8_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailqueueListComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_7_div_8_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r193.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueListComponent_div_7_div_8_li_8_Template, 3, 0, "li", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueListComponent_div_7_div_8_li_9_Template, 3, 4, "li", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailqueueListComponent_div_7_div_8_li_10_Template, 3, 0, "li", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailqueueListComponent_div_7_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r195.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r184.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r184.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r184.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r184.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r184.page >= ctx_r184.totalPages));
      }
    }

    function EmailqueueListComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailqueueListComponent_div_7_div_9_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197);

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r196.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r185.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r185.totalPages, " ");
      }
    }

    function EmailqueueListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailqueueListComponent_div_7_span_6_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailqueueListComponent_div_7_div_8_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailqueueListComponent_div_7_div_9_Template, 6, 2, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);
      }
    }

    var EmailqueueListComponent = /*#__PURE__*/function (_emailing_cust_base_e3) {
      _inherits(EmailqueueListComponent, _emailing_cust_base_e3);

      var _super14 = _createSuper(EmailqueueListComponent);

      // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
      //                        disableListSearch: false, disableTitle: false, disableRefs: false
      //                        disableListHead: false, disableTitleRow: false}
      // @Input()
      // public inputData:any;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
      // @Input()
      // public categoryBy:string; //field name whose value is used as category
      function EmailqueueListComponent(emailqueueService, injector, router, route, location) {
        var _this5;

        _classCallCheck(this, EmailqueueListComponent);

        _this5 = _super14.call(this, emailqueueService, injector, router, route, location);
        _this5.emailqueueService = emailqueueService;
        _this5.injector = injector;
        _this5.router = router;
        _this5.route = route;
        _this5.location = location;
        _this5.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this5.view = _emailqueue_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].LIST;
        _this5.fieldDisplayNames = {
          'subject': 'Subject',
          'processed': 'Processed',
          'number': 'Number',
          'sent': 'Sent',
          'createdAt': 'Created at'
        };

        _this5.stringFields.push('subject');

        _this5.dateFields = ['createdAt'];
        _this5.numberFields = ['number', 'sent'];
        _this5.listViewFilter = 'list';

        _this5.setListSort('createdAt', 'Created at', 'desc');

        var listCategories = [];
        _this5.listCategory1 = listCategories[0] || {};
        _this5.listCategory2 = listCategories[1] || {};
        _this5.clickItemAction = 'detail';
        _this5.itemMultiSelect = true; // initialize detail structure for search

        var detail = {};
        _this5.detail = _this5.formatDetail(detail);
        return _this5;
      }

      _createClass(EmailqueueListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailqueueListComponent.prototype), "ngOnInit", this).call(this);

          this.adjustListViewForWindowSize();
          this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
          this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;

          if (!this.options) {
            this.options = {};
          }

          if (this.options.disableCatetory) {
            this.listCategory1 = {}; // no do query based on category for home view;

            this.listCategory2 = {}; // no do query based on category for home view;
          } // this is to initialize the detail that will be used for search condition selection


          var detail = {};

          if (this.searchObj) {
            this.searchDetailReady = true; // search provided from "detail", not from search bar.

            detail = this.searchObj;
          }

          if (this.queryParams) {
            this.listSortField = this.queryParams.listSortField;
            this.listSortOrder = this.queryParams.listSortOrder;

            if (this.queryParams.perPage) {
              this.perPage = this.queryParams.perPage;
            }
          }

          this.detail = this.formatDetail(detail);
          this.searchList(); // get editHintFields

          this.searchHintFieldValues();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          //used by others to call some common functions
          return new EmailqueueListComponent(null, null, null, null, null);
        }
      }]);

      return EmailqueueListComponent;
    }(_emailing_cust_base_emailqueue_emailqueue_list_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailqueueListCustComponent"]);

    EmailqueueListComponent.ɵfac = function EmailqueueListComponent_Factory(t) {
      return new (t || EmailqueueListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailqueueListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailqueueListComponent,
      selectors: [["app-emailqueue-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 6,
      consts: [["class", "mt-4 mb-4 d-flex", 4, "ngIf"], ["class", "nav nav-pills category-nav", 4, "ngIf"], ["class", "container search", 4, "ngIf"], ["class", "no-records", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "mt-4", "mb-4", "d-flex"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "emailqueueTextSearch", "placeholder", "Search for subject", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["emailqueueTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "text-center"], [1, "pointer", 3, "click"], [1, "refine-search-text"], ["class", "fas fa-plus-circle", "title", "More", 4, "ngIf"], ["class", "fas fa-minus-circle", "title", "Less", 4, "ngIf"], ["class", "shadow", 4, "ngIf"], ["style", "text-align: left;", 4, "ngIf"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], ["title", "More", 1, "fas", "fa-plus-circle"], ["title", "Less", 1, "fas", "fa-minus-circle"], [1, "shadow"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "container", "two-column-search", "small"], [1, "row", "col-gutter", "align-items-center"], [1, "col-12", "col-sm-3"], ["for", "emailqueueEditProcessed"], [1, "col-11", "col-sm-8"], [1, "form-check-inline"], ["type", "radio", "name", "emailqueueEditProcessed", "id", "emailqueueEditProcessedYes", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["emailqueueEditProcessed", "ngModel"], [1, "form-check-label"], ["type", "radio", "name", "emailqueueEditProcessed", "id", "emailqueueEditProcessedNo", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], [1, "col-1"], ["class", "pointer", 3, "click", 4, "ngIf"], ["for", "emailqueueEditNumber"], [1, "input-group", "input-group-sm", "align-items-center"], ["type", "number", "id", "emailqueueEditNumber", "name", "emailqueueEditNumber", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["emailqueueEditNumber", "ngModel"], ["for", "emailqueueEditSent"], ["type", "number", "id", "emailqueueEditSent", "name", "emailqueueEditSent", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["emailqueueEditSent", "ngModel"], [1, "container", "one-column-search", "small"], [1, "col-12", "col-lg-3"], ["for", "emailqueueEditCreatedAt"], [1, "col-11", "col-lg-8"], [1, "input-group", "input-group-sm", "col-12", "col-md-6", "align-items-center"], [1, "small", "mx-1", 2, "width", "2rem"], ["id", "emailqueueEditCreatedAtFrom", "name", "emailqueueEditCreatedAt", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "minDate", "ngModelChange"], ["emailqueueEditCreatedAt", "ngModel"], [1, "fas", "fa-calendar-alt"], ["id", "emailqueueEditCreatedAtTo", "name", "emailqueueEditCreatedAt", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "minDate", "ngModelChange"], ["class", "date-selection-pop", 4, "ngIf"], [1, "action-buttons"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], [1, "date-selection-pop"], [3, "minDate", "displayMonths", "dayTemplate", "select"], ["dp", ""], ["emailqueueEditCreatedAtT", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], [2, "text-align", "left"], ["class", "badge badge-pill badge-info", 4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-info"], ["title", "Clear", 1, "fas", "fa-times-circle", "icon-clear-badge", 3, "click"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], ["class", "mr-3 d-inline-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-row", "mt-1"], [1, "card-action-icons"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [1, "list-devider"], [1, "mr-3", "d-inline-flex", "flex-wrap"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "ngClass", "click"], [1, "card-header", "grid-head"], ["class", "d-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-wrap"], [1, ""], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "3.8rem"], ["ngFor", "", 3, "ngForOf"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"]],
      template: function EmailqueueListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailqueueListComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailqueueListComponent_ul_1_Template, 2, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailqueueListComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailqueueListComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailqueueListComponent_div_5_Template, 4, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailqueueListComponent_div_7_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableTitleRow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListHead"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disablePagination"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepicker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n.icon-clear-badge[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.refine-search-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  \n  color: #868181;\n}\n.vitrual-card[_ngcontent-%COMP%] {}\n.virtual-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.one-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%], .one-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n@media (min-width: 992px) {\n  .two-column-search[_ngcontent-%COMP%] {\n    flex-basis: 40%;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.date-selection-pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  \n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxxdWV1ZS9lbWFpbHF1ZXVlLWxpc3QvZW1haWxxdWV1ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSxlQUFlO0FBRWY7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakIsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUEsK0JBQStCO0FBQy9COzs7O0VBSUUsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBLGdDQUFnQztBQUNoQztFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlscXVldWUvZW1haWxxdWV1ZS1saXN0L2VtYWlscXVldWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgcm93cywgY2FyZHMsIGFuZCBpY29ucyBpbiBsaXN0IHZpZXcgYW5kIGNhcmQgdmlld1xuKi9cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTsgKi9cbn1cblxuLnNlbGVjdGVkLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY3LCAyMjQsIDE2OSwgMC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzQ0QjU0OTtcbn1cblxudHIgdGg6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogOCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5saW5lLWJyZWFrZXIge1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG59XG5cbi5ncmlkdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5ncmlkLWJsb2NrIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmdyaWQtZmllbGRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uZ3JpZC1oZWFkLXBpY3R1cmUsXG4ubGlzdC1oZWFkLXBpY3R1cmUge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubGlzdC1oZWFkLXBpY3R1cmUge1xuICAgIGZsZXgtYmFzaXM6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG59XG5cbi5saXN0dmlldyB7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmxpc3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtOyovXG59XG5cbi5saXN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmxpc3QtZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogODUlO1xufVxuXG4ubGlzdC1ib2R5LWZpZWxkcyB7fVxuXG4ubGlzdC1kZXZpZGVyLWdyYWRpZW50IHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzA5NTQ4NDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjMDk1NDg0LCAjY2NjKTtcbn1cblxuLmxpc3QtZGV2aWRlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5jbGlja2FibGUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4uY2FyZCBsYWJlbCxcbi5saXN0LWJvZHktZmllbGRzIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWFjdGlvbi1pY29ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxudGQgaW5wdXQsXG4uY2FyZC1hY3Rpb24taWNvbnMgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxudGQgYSBpLFxuLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiByZ2IoMTk2LCAxOTEsIDE5MSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4vKmNoYW5nZSB0aGUgaWNvbiBjb2xvciB3aGVuIGNhcmQgaXMgaG92ZXJyZWQqL1xudHI6aG92ZXIgdGQgYSBpLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOmhvdmVyIHRkIGkuZmEtZWRpdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS1lZGl0OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbnRyOmhvdmVyIHRkIGkuZmEtdHJhc2gtYWx0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIGFjdGlvbiBidXR0b25zIGFuZCBwYWdpbmF0aW9uc1xuKi9cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufVxuXG4udG90YWxfY291bnRzIHtcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYWdlLWxpbmsge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnBhZ2UtY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xufVxuXG4vKiBzZWFyY2ggYXJlYVxuKi9cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzO1xuICAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi8qIHBvcC11cCBtb2RlbHNcbiovXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgLyptYXJnaW46IGF1dG87Ki9cbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDkwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmFkZC1hcmVhIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5iYWRnZS1jbGljayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogR3JpZC9MaXN0IHZpZXcgZmlsdGVyXG4qL1xuLnZpZXctcmFkaW8rbGFiZWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNiYmJkYmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xufVxuXG4udmlldy1yYWRpbzpjaGVja2VkK2xhYmVsIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi52aWV3LXJhZGlvK2xhYmVsOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi52aWV3LXJhZGlvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpc3QtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc29ydC1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2F0ZWdvcnkyLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zb3J0LXNlbGVjdGlvbiBpIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50aC1zb3J0LWFycm93IHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucmVhZC1tb3JlIHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgY29sb3I6ICMzMDdiZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlYWQtbW9yZTpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvbnQtc2l6ZS03NSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLm5vLXJlY29yZHMge1xuICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XG4gIC8qY2VudGVyaW5nKi9cbiAgd2lkdGg6IDIwcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5saXN0LXNlbGVjdGlvbiB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5tb2RhbC1iYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtZnJvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmNhdGVnb3J5LW5hdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDEpIDAlLFxuICAgICAgcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjIpIDgwJSk7XG4gIHBhZGRpbmc6IDFyZW0gMjBweCAxcmVtIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hc3NvLWxpbmsge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubGlzdC1jaGVjay1ib3gge1xuICB6b29tOiAxLjE7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbC1ndXR0ZXIge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbC1ndXR0ZXI+W2NsYXNzKj1cImNvbC1cIl0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnJlZmluZS1zZWFyY2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGNvbG9yOiAjODY4MTgxO1xufVxuXG4udml0cnVhbC1jYXJkIHt9XG5cbi52aXJ0dWFsLWNhcmQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9uZS1jb2x1bW4tc2VhcmNoIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiA4MCU7XG59XG5cbi50d28tY29sdW1uLXNlYXJjaCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogODAlO1xufVxuXG4udHdvLWNvbHVtbi1zZWFyY2g+LnJvdyxcbi5vbmUtY29sdW1uLXNlYXJjaD4ucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50d28tY29sdW1uLXNlYXJjaCB7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4uZGF0ZS1zZWxlY3Rpb24tcG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgLypwYWRkaW5nOi41cmVtIDA7Ki9cbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailqueue-list',
          templateUrl: './emailqueue-list.component.html',
          styleUrls: ['./emailqueue-list.component.css']
        }]
      }], function () {
        return [{
          type: _emailqueue_service__WEBPACK_IMPORTED_MODULE_3__["EmailqueueService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue.base.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue.base.service.ts ***!
    \****************************************************************/

  /*! exports provided: EmailqueueBaseService */

  /***/
  function srcAppEmailingEmailqueueEmailqueueBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueBaseService", function () {
      return EmailqueueBaseService;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var servicePath = '/emailqueue/';

    var EmailqueueBaseService = /*#__PURE__*/function (_hicoder_angular_core) {
      _inherits(EmailqueueBaseService, _hicoder_angular_core);

      var _super15 = _createSuper(EmailqueueBaseService);

      function EmailqueueBaseService(http, serverRootUrl) {
        _classCallCheck(this, EmailqueueBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super15.call(this, http, serviceUrl);
      }

      return EmailqueueBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue.component.ts ***!
    \*************************************************************/

  /*! exports provided: ViewType, EmailqueueComponent */

  /***/
  function srcAppEmailingEmailqueueEmailqueueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueComponent", function () {
      return EmailqueueComponent;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailqueue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailqueue.service */
    "./src/app/emailing/emailqueue/emailqueue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var itemCamelName = 'email Queue';

    var EmailqueueComponent = /*#__PURE__*/function (_hicoder_angular_core2) {
      _inherits(EmailqueueComponent, _hicoder_angular_core2);

      var _super16 = _createSuper(EmailqueueComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function EmailqueueComponent(emailqueueService, injector, router, route, location) {
        var _this6;

        _classCallCheck(this, EmailqueueComponent);

        _this6 = _super16.call(this, emailqueueService, injector, router, route, location);
        _this6.emailqueueService = emailqueueService;
        _this6.injector = injector;
        _this6.router = router;
        _this6.route = route;
        _this6.location = location;
        _this6.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this6.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this6.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this6.setItemNames(itemCamelName);

        _this6.briefFieldsInfo = [];

        _this6.briefFieldsInfo.push(['subject', 'Subject']);

        _this6.briefFieldsInfo.push(['processed', 'Processed']);

        _this6.briefFieldsInfo.push(['number', 'Number']);

        _this6.briefFieldsInfo.push(['sent', 'Sent']);

        _this6.briefFieldsInfo.push(['createdAt', 'Created at']);

        _this6.schemaName = 'emailqueue';
        _this6.dateFormat = 'MM-DD-YYYY';
        _this6.timeFormat = 'hh:mm:ss';
        _this6.modulePath = 'emailing';
        _this6.indexFields = ['subject'];
        return _this6;
      }

      _createClass(EmailqueueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return EmailqueueComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseComponent"]);

    EmailqueueComponent.ɵfac = function EmailqueueComponent_Factory(t) {
      return new (t || EmailqueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_emailqueue_service__WEBPACK_IMPORTED_MODULE_2__["EmailqueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailqueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailqueueComponent,
      selectors: [["ng-component"]],
      inputs: {
        style: "style",
        options: "options",
        searchObj: "searchObj",
        inputData: "inputData",
        queryParams: "queryParams",
        categoryBy: "categoryBy",
        associationField: ["asso", "associationField"],
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode",
        disableActionButtions: "disableActionButtions",
        detailObj: "detailObj",
        showFieldsStr: "showFieldsStr"
      },
      outputs: {
        outputData: "outputData",
        doneData: "doneData",
        done: "done",
        eventEmitter: "eventEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailqueueComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailqueueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _emailqueue_service__WEBPACK_IMPORTED_MODULE_2__["EmailqueueService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        associationField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['asso']
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disableActionButtions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFieldsStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailqueue/emailqueue.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/emailing/emailqueue/emailqueue.service.ts ***!
    \***********************************************************/

  /*! exports provided: EmailqueueService */

  /***/
  function srcAppEmailingEmailqueueEmailqueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailqueueService", function () {
      return EmailqueueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailqueue_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./emailqueue.base.service */
    "./src/app/emailing/emailqueue/emailqueue.base.service.ts");
    /* harmony import */


    var _emailing_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailing.tokens */
    "./src/app/emailing/emailing.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmailqueueService = /*#__PURE__*/function (_emailqueue_base_serv) {
      _inherits(EmailqueueService, _emailqueue_base_serv);

      var _super17 = _createSuper(EmailqueueService);

      function EmailqueueService(http, emailingServerRootUri) {
        var _this7;

        _classCallCheck(this, EmailqueueService);

        _this7 = _super17.call(this, http, emailingServerRootUri);
        _this7.emailingServerRootUri = emailingServerRootUri;
        return _this7;
      }

      _createClass(EmailqueueService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return EmailqueueService;
    }(_emailqueue_base_service__WEBPACK_IMPORTED_MODULE_1__["EmailqueueBaseService"]);

    EmailqueueService.ɵfac = function EmailqueueService_Factory(t) {
      return new (t || EmailqueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]));
    };

    EmailqueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmailqueueService,
      factory: EmailqueueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailqueueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail-field.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail-field.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: EmailsettingsDetailFieldComponent */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsDetailEmailsettingsDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsDetailFieldComponent", function () {
      return EmailsettingsDetailFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailsettings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");
    /* harmony import */


    var _emailsettings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailsettings.service */
    "./src/app/emailing/emailsettings/emailsettings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmailsettingsDetailFieldComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["settingName"], "\n");
      }
    }

    function EmailsettingsDetailFieldComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["defaultSender"], "\n");
      }
    }

    var EmailsettingsDetailFieldComponent = /*#__PURE__*/function (_emailsettings_compon) {
      _inherits(EmailsettingsDetailFieldComponent, _emailsettings_compon);

      var _super18 = _createSuper(EmailsettingsDetailFieldComponent);

      function EmailsettingsDetailFieldComponent(emailsettingsService, injector, router, route, location) {
        var _this8;

        _classCallCheck(this, EmailsettingsDetailFieldComponent);

        _this8 = _super18.call(this, emailsettingsService, injector, router, route, location);
        _this8.emailsettingsService = emailsettingsService;
        _this8.injector = injector;
        _this8.router = router;
        _this8.route = route;
        _this8.location = location;
        _this8.view = _emailsettings_component__WEBPACK_IMPORTED_MODULE_1__["ViewType"].DETAIL;
        _this8.fieldDisplayNames = {
          'settingName': 'Setting Name',
          'defaultSender': 'Default Sender Email Address'
        };

        _this8.stringFields.push('settingName');

        _this8.stringFields.push('defaultSender');

        return _this8;
      }

      _createClass(EmailsettingsDetailFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.showFieldsStr) {
            console.error("A field has to be given to show it.");
            return;
          }

          this.showFields = this.showFieldsStr.match(/\S+/g);

          if (this.detailObj) {
            this.onDetailReturned(this.detailObj, null);
          } else {
            if (!this.id) this.id = this.id;
            if (this.id) this.populateDetail(this.id);else {
              console.error("No id provided to show info");
              return;
            }
          }
        }
      }]);

      return EmailsettingsDetailFieldComponent;
    }(_emailsettings_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsComponent"]);

    EmailsettingsDetailFieldComponent.ɵfac = function EmailsettingsDetailFieldComponent_Factory(t) {
      return new (t || EmailsettingsDetailFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailsettings_service__WEBPACK_IMPORTED_MODULE_2__["EmailsettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailsettingsDetailFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsDetailFieldComponent,
      selectors: [["app-emailsettings-detail-field"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function EmailsettingsDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsDetailFieldComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsDetailFieldComponent_div_1_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("settingName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("defaultSender"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWRldGFpbC9lbWFpbHNldHRpbmdzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlsc2V0dGluZ3MvZW1haWxzZXR0aW5ncy1kZXRhaWwvZW1haWxzZXR0aW5ncy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsDetailFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailsettings-detail-field',
          templateUrl: './emailsettings-detail-field.component.html',
          styleUrls: ['./emailsettings-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailsettings_service__WEBPACK_IMPORTED_MODULE_2__["EmailsettingsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings-detail/emailsettings-detail.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: EmailsettingsDetailComponent */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsDetailEmailsettingsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsDetailComponent", function () {
      return EmailsettingsDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailsettings/emailsettings-detail.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-detail.cust.component.ts");
    /* harmony import */


    var _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");
    /* harmony import */


    var _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailsettings.service */
    "./src/app/emailing/emailsettings/emailsettings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmailsettingsDetailComponent_div_0_div_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../../edit", a1];
    };

    function EmailsettingsDetailComponent_div_0_div_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.detail["_id"]))("skipLocationChange", false);
      }
    }

    function EmailsettingsDetailComponent_div_0_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsDetailComponent_div_0_div_1_div_1_a_1_Template, 2, 0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsDetailComponent_div_0_div_1_div_1_a_2_Template, 2, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionList"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionEdit"]);
      }
    }

    function EmailsettingsDetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsDetailComponent_div_0_div_1_div_1_Template, 3, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disableActionButtions && !ctx_r1.options["disableActionButtions"]);
      }
    }

    function EmailsettingsDetailComponent_div_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailsettingsDetailComponent_div_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailsettingsDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsDetailComponent_div_0_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Default Sender Email Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmailsettingsDetailComponent_div_0_div_17_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmailsettingsDetailComponent_div_0_div_18_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["settingName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["defaultSender"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disablePipeline"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableRefLink"]);
      }
    }

    var EmailsettingsDetailComponent = /*#__PURE__*/function (_emailing_cust_base_e4) {
      _inherits(EmailsettingsDetailComponent, _emailing_cust_base_e4);

      var _super19 = _createSuper(EmailsettingsDetailComponent);

      // @Input() 
      // public id:string;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public disableActionButtions:boolean;
      // @Output()
      // public eventEmitter: EventEmitter<any> = new EventEmitter();
      function EmailsettingsDetailComponent(emailsettingsService, injector, router, route, location) {
        var _this9;

        _classCallCheck(this, EmailsettingsDetailComponent);

        _this9 = _super19.call(this, emailsettingsService, injector, router, route, location);
        _this9.emailsettingsService = emailsettingsService;
        _this9.injector = injector;
        _this9.router = router;
        _this9.route = route;
        _this9.location = location;
        _this9.view = _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].DETAIL;
        _this9.fieldDisplayNames = {
          'settingName': 'Setting Name',
          'defaultSender': 'Default Sender Email Address'
        };

        _this9.stringFields.push('settingName');

        _this9.stringFields.push('defaultSender');

        return _this9;
      }

      _createClass(EmailsettingsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailsettingsDetailComponent.prototype), "ngOnInit", this).call(this);

          if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

          if (this.id) {
            this.populateDetail(this.id);
          } else if (this.searchObj) {
            // search item based on the unique value
            this.populateDetailByFields(this.searchObj);
          } else {
            console.error("Routing error for detail view... no id...");
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return EmailsettingsDetailComponent;
    }(_emailing_cust_base_emailsettings_emailsettings_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsDetailCustComponent"]);

    EmailsettingsDetailComponent.ɵfac = function EmailsettingsDetailComponent_Factory(t) {
      return new (t || EmailsettingsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailsettingsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsDetailComponent,
      selectors: [["app-emailsettings-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngIf"], [1, "card", "text-left", "transparent-border"], [1, "grid-fields"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "card-body"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "../../list", "class", "action-go-list", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "skipLocationChange", 4, "ngIf"], ["routerLink", "../../list", 1, "action-go-list"], ["title", "List", 1, "fas", "fa-list"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"]],
      template: function EmailsettingsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsDetailComponent_div_0_Template, 19, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWRldGFpbC9lbWFpbHNldHRpbmdzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlsc2V0dGluZ3MvZW1haWxzZXR0aW5ncy1kZXRhaWwvZW1haWxzZXR0aW5ncy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailsettings-detail',
          templateUrl: './emailsettings-detail.component.html',
          styleUrls: ['./emailsettings-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings-edit/emailsettings-edit.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings-edit/emailsettings-edit.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EmailsettingsEditComponent */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsEditEmailsettingsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsEditComponent", function () {
      return EmailsettingsEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailsettings/emailsettings-edit.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-edit.cust.component.ts");
    /* harmony import */


    var _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");
    /* harmony import */


    var _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailsettings.service */
    "./src/app/emailing/emailsettings/emailsettings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EmailsettingsEditComponent_div_0_h4_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.action, " Email Settings");
      }
    }

    function EmailsettingsEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.style["card-title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.options["title"], " ");
      }
    }

    function EmailsettingsEditComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.style["card-subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.options["subtitle"], " ");
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r12.clearValueFromDetail("defaultSender");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DefaultSender is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default Sender Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.detail["defaultSender"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_div_10_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.detail["defaultSender"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.detail["defaultSender"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r9.valid || _r9.pristine || _r9.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors && _r9.errors.required);
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsEditComponent_div_0_ng_template_8_ng_template_0_Template, 11, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("defaultSender"));
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r21.clearValueFromDetail("settingName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SettingName is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Setting Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.detail["settingName"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.detail["settingName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.detail["settingName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r18.valid || _r18.pristine || _r18.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.errors && _r18.errors.required);
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r28.clearValueFromDetail("defaultSender");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DefaultSender is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default Sender Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r30.detail["defaultSender"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_div_10_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.detail["defaultSender"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.detail["defaultSender"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r25.valid || _r25.pristine || _r25.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.errors && _r25.errors.required);
      }
    }

    function EmailsettingsEditComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_0_Template, 9, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsEditComponent_div_0_ng_template_9_ng_template_1_Template, 11, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("settingName"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("defaultSender"));
      }
    }

    function EmailsettingsEditComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsEditComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailsettingsEditComponent_div_0_h4_3_Template, 2, 1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailsettingsEditComponent_div_0_h4_4_Template, 2, 2, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailsettingsEditComponent_div_0_p_5_Template, 2, 2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailsettingsEditComponent_div_0_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsEditComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsEditComponent_div_0_ng_template_9_Template, 2, 2, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailsettingsEditComponent_div_0_button_13_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView && !ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableCancel"]);
      }
    }

    var EmailsettingsEditComponent = /*#__PURE__*/function (_emailing_cust_base_e5) {
      _inherits(EmailsettingsEditComponent, _emailing_cust_base_e5);

      var _super20 = _createSuper(EmailsettingsEditComponent);

      function EmailsettingsEditComponent(emailsettingsService, injector, router, route, location) {
        var _this10;

        _classCallCheck(this, EmailsettingsEditComponent);

        _this10 = _super20.call(this, emailsettingsService, injector, router, route, location);
        _this10.emailsettingsService = emailsettingsService;
        _this10.injector = injector;
        _this10.router = router;
        _this10.route = route;
        _this10.location = location;
        _this10.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this10.view = _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].EDIT;
        _this10.fieldDisplayNames = {
          'defaultSender': 'Default Sender Email Address'
        };

        _this10.stringFields.push('defaultSender');

        var detail = {};
        _this10.detail = _this10.formatDetail(detail);
        return _this10;
      }

      _createClass(EmailsettingsEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailsettingsEditComponent.prototype), "ngOnInit", this).call(this);

          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
            } else {
              this.action = 'Create';
              if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          } // get editHintFields


          this.searchHintFieldValues();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Initialize all tooltips
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {};

            for (var _i2 = 0, _Object$keys2 = Object.keys(this.initData); _i2 < _Object$keys2.length; _i2++) {
              var prop = _Object$keys2[_i2];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail2 = {};
            this.detail = this.formatDetail(_detail2);
          }
        }
      }]);

      return EmailsettingsEditComponent;
    }(_emailing_cust_base_emailsettings_emailsettings_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsEditCustComponent"]);

    EmailsettingsEditComponent.ɵfac = function EmailsettingsEditComponent_Factory(t) {
      return new (t || EmailsettingsEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailsettingsEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsEditComponent,
      selectors: [["app-emailsettings-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], [1, "edit"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-title", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [3, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-outline-success", "type", "button", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "card-title", 3, "ngStyle"], [3, "ngStyle"], [1, "form-group"], ["for", "EditDefaultSender"], ["data-toggle", "tooltip", "title", "Default sender email address. Must be validated by email service for it to take effect.", 1, "far", "fa-question-circle"], [1, "input-group"], ["type", "text", "id", "EditDefaultSender", "required", "", "name", "EditDefaultSender", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditDefaultSender", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], ["for", "EditSettingName"], ["type", "text", "id", "EditSettingName", "required", "", "name", "EditSettingName", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditSettingName", "ngModel"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]],
      template: function EmailsettingsEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsEditComponent_div_0_Template, 14, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n\nfieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%] {\n  width: 90%\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-buttons-center[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n\n\n\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-clear[_ngcontent-%COMP%] {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.icon-clear-inside[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.icon-clear-inside-sm[_ngcontent-%COMP%] {\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  right: 1.5rem;\n  height: 1.5rem;\n}\n\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.important-tip[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.new-area[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWVkaXQvZW1haWxzZXR0aW5ncy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWVkaXQvZW1haWxzZXR0aW5ncy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldD4uZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLFxuLmZvcm0tY2hlY2ssXG4uYWxlcnQge1xuICB3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXA+bGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsXG4uaWNvbi1jbGVhciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwPnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICB6LWluZGV4OiAzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Utb250b3Age1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZS1vbnRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbXBvcnRhbnQtdGlwIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ldy1tb2RhbCB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5ldy1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggbGlnaHRncmF5O1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailsettings-edit',
          templateUrl: './emailsettings-edit.component.html',
          styleUrls: ['./emailsettings-edit.component.css']
        }]
      }], function () {
        return [{
          type: _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings-list/emailsettings-list.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings-list/emailsettings-list.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EmailsettingsListComponent */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsListEmailsettingsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsListComponent", function () {
      return EmailsettingsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailsettings_emailsettings_list_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailsettings/emailsettings-list.cust.component */
    "./src/app/emailing-cust/base/emailsettings/emailsettings-list.cust.component.ts");
    /* harmony import */


    var _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailsettings.component */
    "./src/app/emailing/emailsettings/emailsettings.component.ts");
    /* harmony import */


    var _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailsettings.service */
    "./src/app/emailing/emailsettings/emailsettings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EmailsettingsListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
      }
    }

    function EmailsettingsListComponent_ul_1_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r10.categoriesCounts[idx_r8], ")");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var _c1 = function _c1() {
      return ["."];
    };

    function EmailsettingsListComponent_ul_1_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_ul_1_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.categorySelected(idx_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_ul_1_li_1_a_1_span_2_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r8 = ctx_r15.index;
        var ele_r7 = ctx_r15.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, idx_r8 === ctx_r9.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r7, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.listCategory1.showCategoryCounts);
      }
    }

    function EmailsettingsListComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_ul_1_li_1_a_1_Template, 3, 7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.listCategory1.showEmptyCategory || !ctx_r6.listCategory1.showEmptyCategory && ctx_r6.categoriesCounts[idx_r8] > 0);
      }
    }

    function EmailsettingsListComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_ul_1_li_1_Template, 2, 1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);
      }
    }

    function EmailsettingsListComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_1_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailsettingsListComponent_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.searchText = $event;
        })("search", function EmailsettingsListComponent_div_3_div_1_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          $event.target.blur();
          return ctx_r25.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailsettingsListComponent_div_3_div_1_div_5_Template, 3, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.searchText);
      }
    }

    function EmailsettingsListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_2_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_2_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_3_div_4_div_2_span_4_i_2_Template, 1, 0, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailsettingsListComponent_div_3_div_4_div_2_span_4_i_3_Template, 1, 0, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.listSortOrder === "desc");
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailsettingsListComponent_div_3_div_4_div_2_span_4_Template, 4, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_2_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.setListSortAndRefresh("settingName", "Setting Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Setting Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r37.setListSortAndRefresh("settingName", "Setting Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Setting Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_2_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r38.setListSortAndRefresh("defaultSender", "Default Sender Email Address", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Default Sender Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_2_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r39.setListSortAndRefresh("defaultSender", "Default Sender Email Address", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Default Sender Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.listSortField && !ctx_r27.viewHiddenFields.includes(ctx_r27.listSortField));
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_5_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r40.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_5_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r42.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_5_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r43.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.isShowListView("table"));
      }
    }

    function EmailsettingsListComponent_div_3_div_4_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.totalCount);
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_12_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_12_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_12_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var p_r47 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r49.onGotoPage(p_r47);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r47 = ctx.$implicit;

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r47 == ctx_r45.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r47);
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_12_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function EmailsettingsListComponent_div_3_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_12_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r51.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsListComponent_div_3_div_4_div_12_li_8_Template, 3, 0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsListComponent_div_3_div_4_div_12_li_9_Template, 3, 4, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailsettingsListComponent_div_3_div_4_div_12_li_10_Template, 3, 0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_div_12_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r53.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r30.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r30.page >= ctx_r30.totalPages));
      }
    }

    function EmailsettingsListComponent_div_3_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailsettingsListComponent_div_3_div_4_div_13_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r54.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r31.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r31.totalPages, " ");
      }
    }

    function EmailsettingsListComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_3_div_4_div_2_Template, 18, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailsettingsListComponent_div_3_div_4_div_5_Template, 10, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsListComponent_div_3_div_4_span_8_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_3_div_4_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.onRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailsettingsListComponent_div_3_div_4_div_12_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailsettingsListComponent_div_3_div_4_div_13_Template, 6, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);
      }
    }

    function EmailsettingsListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_3_div_1_Template, 9, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_3_div_2_Template, 3, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailsettingsListComponent_div_3_div_4_Template, 14, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableListSearch"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disablePagination"]);
      }
    }

    function EmailsettingsListComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_4_span_1_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_4_span_2_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loaded);
      }
    }

    function EmailsettingsListComponent_div_5_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 82);
      }
    }

    function EmailsettingsListComponent_div_5_div_1_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Default Sender Email Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r64["defaultSender"], " ");
      }
    }

    var _c3 = function _c3(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c4 = function _c4(a0) {
      return {
        pointer: a0
      };
    };

    var _c5 = function _c5(a1) {
      return ["../edit", a1];
    };

    function EmailsettingsListComponent_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_div_1_div_1_hr_1_Template, 1, 0, "hr", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var i_r65 = ctx.index;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r70.clickOneItem(i_r65);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsListComponent_div_5_div_1_div_1_div_9_Template, 6, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r64 = ctx.$implicit;
        var i_r65 = ctx.index;

        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c3, ctx_r63.clickedId == detail_r64["_id"], ctx_r63.clickItemAction === "select" && ctx_r63.checkedItem[i_r65], ctx_r63.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c4, ctx_r63.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r64["settingName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.fieldHasValue(detail_r64["defaultSender"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c5, detail_r64["_id"]))("skipLocationChange", false);
      }
    }

    function EmailsettingsListComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_div_1_div_1_Template, 15, 15, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.list);
      }
    }

    function EmailsettingsListComponent_div_5_div_2_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Default Sender Email Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r73["defaultSender"], "");
      }
    }

    function EmailsettingsListComponent_div_5_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var i_r74 = ctx.index;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r78.clickOneItem(i_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsListComponent_div_5_div_2_div_1_div_9_Template, 6, 1, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r73 = ctx.$implicit;
        var i_r74 = ctx.index;

        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r72.clickedId == detail_r73["_id"], ctx_r72.clickItemAction === "select" && ctx_r72.checkedItem[i_r74], ctx_r72.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r72.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r73["settingName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.fieldHasValue(detail_r73["defaultSender"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c5, detail_r73["_id"]))("skipLocationChange", false);
      }
    }

    function EmailsettingsListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_div_2_div_1_Template, 13, 14, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.list);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 102);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 103);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_table_3_span_7_i_1_Template, 1, 0, "i", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_5_table_3_span_7_i_2_Template, 1, 0, "i", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.listSortOrder === "desc");
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_10_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 102);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_10_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 103);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_table_3_span_10_i_1_Template, 1, 0, "i", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_5_table_3_span_10_i_2_Template, 1, 0, "i", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.listSortOrder === "desc");
      }
    }

    var _c6 = function _c6(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    var _c7 = function _c7(a0) {
      return {
        "pointer": a0
      };
    };

    function EmailsettingsListComponent_div_5_table_3_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_table_3_ng_template_13_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var i_r88 = ctx.index;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r89.clickOneItem(i_r88);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_table_3_ng_template_13_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var i_r88 = ctx.index;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r91.clickOneItem(i_r88);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_table_3_ng_template_13_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var i_r88 = ctx.index;

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r92.clickOneItem(i_r88);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r87 = ctx.$implicit;
        var i_r88 = ctx.index;

        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c6, ctx_r82.clickedId == detail_r87["_id"], ctx_r82.clickItemAction === "select" && ctx_r82.checkedItem[i_r88]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r82.page - 1) * ctx_r82.perPage + i_r88 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, ctx_r82.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r87["settingName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c7, ctx_r82.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r87["defaultSender"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, detail_r87["_id"]))("skipLocationChange", false);
      }
    }

    function EmailsettingsListComponent_div_5_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r93.toggleListSort("settingName", "Setting Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Setting Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailsettingsListComponent_div_5_table_3_span_7_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_5_table_3_Template_th_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r95.toggleListSort("defaultSender", "Default Sender Email Address");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Default Sender Email Address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailsettingsListComponent_div_5_table_3_span_10_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "th", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailsettingsListComponent_div_5_table_3_ng_template_13_Template, 10, 17, "ng-template", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.listSortField === "settingName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.listSortField === "defaultSender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.list);
      }
    }

    function EmailsettingsListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_div_5_div_1_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsettingsListComponent_div_5_div_2_Template, 2, 1, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailsettingsListComponent_div_5_table_3_Template, 14, 3, "table", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function EmailsettingsListComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r96.totalCount);
      }
    }

    function EmailsettingsListComponent_div_7_div_8_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_7_div_8_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_7_div_8_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var p_r102 = ctx.$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r104.onGotoPage(p_r102);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r102 = ctx.$implicit;

        var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r102 == ctx_r100.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r102);
      }
    }

    function EmailsettingsListComponent_div_7_div_8_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailsettingsListComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_7_div_8_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r106.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsListComponent_div_7_div_8_li_8_Template, 3, 0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsListComponent_div_7_div_8_li_9_Template, 3, 4, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailsettingsListComponent_div_7_div_8_li_10_Template, 3, 0, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailsettingsListComponent_div_7_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r108.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r97.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r97.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r97.page >= ctx_r97.totalPages));
      }
    }

    function EmailsettingsListComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailsettingsListComponent_div_7_div_9_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r109.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r98.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r98.totalPages, " ");
      }
    }

    function EmailsettingsListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailsettingsListComponent_div_7_span_6_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailsettingsListComponent_div_7_div_8_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailsettingsListComponent_div_7_div_9_Template, 6, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);
      }
    }

    var EmailsettingsListComponent = /*#__PURE__*/function (_emailing_cust_base_e6) {
      _inherits(EmailsettingsListComponent, _emailing_cust_base_e6);

      var _super21 = _createSuper(EmailsettingsListComponent);

      // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
      //                        disableListSearch: false, disableTitle: false, disableRefs: false
      //                        disableListHead: false, disableTitleRow: false}
      // @Input()
      // public inputData:any;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
      // @Input()
      // public categoryBy:string; //field name whose value is used as category
      function EmailsettingsListComponent(emailsettingsService, injector, router, route, location) {
        var _this11;

        _classCallCheck(this, EmailsettingsListComponent);

        _this11 = _super21.call(this, emailsettingsService, injector, router, route, location);
        _this11.emailsettingsService = emailsettingsService;
        _this11.injector = injector;
        _this11.router = router;
        _this11.route = route;
        _this11.location = location;
        _this11.view = _emailsettings_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].LIST;
        _this11.fieldDisplayNames = {
          'settingName': 'Setting Name',
          'defaultSender': 'Default Sender Email Address'
        };

        _this11.stringFields.push('settingName');

        _this11.stringFields.push('defaultSender');

        _this11.listViewFilter = 'list';
        var listCategories = [];
        _this11.listCategory1 = listCategories[0] || {};
        _this11.listCategory2 = listCategories[1] || {};
        _this11.clickItemAction = 'detail';
        _this11.itemMultiSelect = true; // initialize detail structure for search

        var detail = {};
        _this11.detail = _this11.formatDetail(detail);
        return _this11;
      }

      _createClass(EmailsettingsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailsettingsListComponent.prototype), "ngOnInit", this).call(this);

          this.adjustListViewForWindowSize();
          this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
          this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;

          if (!this.options) {
            this.options = {};
          }

          if (this.options.disableCatetory) {
            this.listCategory1 = {}; // no do query based on category for home view;

            this.listCategory2 = {}; // no do query based on category for home view;
          } // this is to initialize the detail that will be used for search condition selection


          var detail = {};

          if (this.searchObj) {
            this.searchDetailReady = true; // search provided from "detail", not from search bar.

            detail = this.searchObj;
          }

          if (this.queryParams) {
            this.listSortField = this.queryParams.listSortField;
            this.listSortOrder = this.queryParams.listSortOrder;

            if (this.queryParams.perPage) {
              this.perPage = this.queryParams.perPage;
            }
          }

          this.detail = this.formatDetail(detail);
          this.searchList(); // get editHintFields

          this.searchHintFieldValues();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          //used by others to call some common functions
          return new EmailsettingsListComponent(null, null, null, null, null);
        }
      }]);

      return EmailsettingsListComponent;
    }(_emailing_cust_base_emailsettings_emailsettings_list_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsListCustComponent"]);

    EmailsettingsListComponent.ɵfac = function EmailsettingsListComponent_Factory(t) {
      return new (t || EmailsettingsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailsettingsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsettingsListComponent,
      selectors: [["app-emailsettings-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 6,
      consts: [["class", "mt-4 mb-4 d-flex", 4, "ngIf"], ["class", "nav nav-pills category-nav", 4, "ngIf"], ["class", "container search", 4, "ngIf"], ["class", "no-records", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "mt-4", "mb-4", "d-flex"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "emailsettingsTextSearch", "placeholder", "Search for setting name, default sender email address", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["emailsettingsTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], [1, "action-buttons"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], ["class", "mr-3 d-inline-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-row", "mt-1"], [1, "card-action-icons"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [1, "list-devider"], [1, "mr-3", "d-inline-flex", "flex-wrap"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "ngClass", "click"], [1, "card-header", "grid-head"], [1, "card-body"], ["class", "d-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-wrap"], [1, ""], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "3.8rem"], ["ngFor", "", 3, "ngForOf"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"]],
      template: function EmailsettingsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailsettingsListComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsettingsListComponent_ul_1_Template, 2, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailsettingsListComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailsettingsListComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailsettingsListComponent_div_5_Template, 4, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailsettingsListComponent_div_7_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableTitleRow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListHead"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disablePagination"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWxpc3QvZW1haWxzZXR0aW5ncy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQiwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZW1haWxpbmcvZW1haWxzZXR0aW5ncy9lbWFpbHNldHRpbmdzLWxpc3QvZW1haWxzZXR0aW5ncy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0YWJsZSByb3dzLCBjYXJkcywgYW5kIGljb25zIGluIGxpc3QgdmlldyBhbmQgY2FyZCB2aWV3XG4qL1xudGFibGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmNsaWNrZWQtcm93IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpOyAqL1xufVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDIyNCwgMTY5LCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjNDRCNTQ5O1xufVxuXG50ciB0aDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA4JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpbmUtYnJlYWtlciB7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLmdyaWR2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmdyaWQtYmxvY2sge1xuICB3aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5ncmlkLWhlYWQtcGljdHVyZSxcbi5saXN0LWhlYWQtcGljdHVyZSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5saXN0LWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gIH1cbn1cblxuLmxpc3R2aWV3IHtcbiAgLypcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAqL1xufVxuXG4ubGlzdC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5saXN0LWJvZHktZmllbGRzIHt9XG5cbi5saXN0LWRldmlkZXItZ3JhZGllbnQge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMwOTU0ODQsICNjY2MpO1xufVxuXG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG50ZCBpbnB1dCxcbi5jYXJkLWFjdGlvbi1pY29ucyBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG50ZCBhIGksXG4uY2FyZC1hY3Rpb24taWNvbnMgYSBpIHtcbiAgY29sb3I6IHJnYigxOTYsIDE5MSwgMTkxKTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHI6aG92ZXIgdGQgaS5mYS1lZGl0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxudHI6aG92ZXIgdGQgaS5mYS10cmFzaC1hbHQ6aG92ZXIsXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGkuZmEtdHJhc2gtYWx0OmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogYWN0aW9uIGJ1dHRvbnMgYW5kIHBhZ2luYXRpb25zXG4qL1xuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5wYWdpbmF0aW9uIGxpIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG59XG5cbi50b3RhbF9jb3VudHMge1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGFnZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cbi8qIHNlYXJjaCBhcmVhXG4qL1xuOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7XG4gIC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLyogcG9wLXVwIG1vZGVsc1xuKi9cbi5zZWxlY3QtbW9kZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uc2VsZWN0LW1vZGVsLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbGVjdC1tb2RlbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBHcmlkL0xpc3QgdmlldyBmaWx0ZXJcbiovXG4udmlldy1yYWRpbytsYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2JiYmRiZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMXJlbSAwIDA7XG59XG5cbi52aWV3LXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8rbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnZpZXctcmFkaW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc29ydC1zZWxlY3Rpb24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zb3J0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXRlZ29yeTItZHJvcGRvd24ge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIGkge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRoLXNvcnQtYXJyb3cge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5yZWFkLW1vcmUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBjb2xvcjogIzMwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9udC1zaXplLTc1IHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ubm8tcmVjb3JkcyB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcbiAgLypjZW50ZXJpbmcqL1xuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMSkgMCUsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDAuMikgODAlKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5saXN0LWNoZWNrLWJveCB7XG4gIHpvb206IDEuMTtcbn1cblxuLmN1cnJlbmN5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29sLWd1dHRlciB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29sLWd1dHRlcj5bY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailsettings-list',
          templateUrl: './emailsettings-list.component.html',
          styleUrls: ['./emailsettings-list.component.css']
        }]
      }], function () {
        return [{
          type: _emailsettings_service__WEBPACK_IMPORTED_MODULE_3__["EmailsettingsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings.base.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings.base.service.ts ***!
    \**********************************************************************/

  /*! exports provided: EmailsettingsBaseService */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsBaseService", function () {
      return EmailsettingsBaseService;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var servicePath = '/emailsettings/';

    var EmailsettingsBaseService = /*#__PURE__*/function (_hicoder_angular_core3) {
      _inherits(EmailsettingsBaseService, _hicoder_angular_core3);

      var _super22 = _createSuper(EmailsettingsBaseService);

      function EmailsettingsBaseService(http, serverRootUrl) {
        _classCallCheck(this, EmailsettingsBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super22.call(this, http, serviceUrl);
      }

      return EmailsettingsBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ViewType, EmailsettingsComponent */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsComponent", function () {
      return EmailsettingsComponent;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailsettings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailsettings.service */
    "./src/app/emailing/emailsettings/emailsettings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var itemCamelName = 'email Settings';

    var EmailsettingsComponent = /*#__PURE__*/function (_hicoder_angular_core4) {
      _inherits(EmailsettingsComponent, _hicoder_angular_core4);

      var _super23 = _createSuper(EmailsettingsComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function EmailsettingsComponent(emailsettingsService, injector, router, route, location) {
        var _this12;

        _classCallCheck(this, EmailsettingsComponent);

        _this12 = _super23.call(this, emailsettingsService, injector, router, route, location);
        _this12.emailsettingsService = emailsettingsService;
        _this12.injector = injector;
        _this12.router = router;
        _this12.route = route;
        _this12.location = location;
        _this12.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this12.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this12.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this12.setItemNames(itemCamelName);

        _this12.briefFieldsInfo = [];

        _this12.briefFieldsInfo.push(['settingName', 'Setting Name']);

        _this12.briefFieldsInfo.push(['defaultSender', 'Default Sender Email Address']);

        _this12.requiredFields = ['defaultSender', 'settingName'];
        _this12.schemaName = 'emailsettings';
        _this12.modulePath = 'emailing';
        _this12.indexFields = ['settingName'];
        return _this12;
      }

      _createClass(EmailsettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return EmailsettingsComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseComponent"]);

    EmailsettingsComponent.ɵfac = function EmailsettingsComponent_Factory(t) {
      return new (t || EmailsettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_emailsettings_service__WEBPACK_IMPORTED_MODULE_2__["EmailsettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailsettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailsettingsComponent,
      selectors: [["ng-component"]],
      inputs: {
        style: "style",
        options: "options",
        searchObj: "searchObj",
        inputData: "inputData",
        queryParams: "queryParams",
        categoryBy: "categoryBy",
        associationField: ["asso", "associationField"],
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode",
        disableActionButtions: "disableActionButtions",
        detailObj: "detailObj",
        showFieldsStr: "showFieldsStr"
      },
      outputs: {
        outputData: "outputData",
        doneData: "doneData",
        done: "done",
        eventEmitter: "eventEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailsettingsComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailsettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _emailsettings_service__WEBPACK_IMPORTED_MODULE_2__["EmailsettingsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        associationField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['asso']
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disableActionButtions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFieldsStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailsettings/emailsettings.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/emailing/emailsettings/emailsettings.service.ts ***!
    \*****************************************************************/

  /*! exports provided: EmailsettingsService */

  /***/
  function srcAppEmailingEmailsettingsEmailsettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsettingsService", function () {
      return EmailsettingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailsettings_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./emailsettings.base.service */
    "./src/app/emailing/emailsettings/emailsettings.base.service.ts");
    /* harmony import */


    var _emailing_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailing.tokens */
    "./src/app/emailing/emailing.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmailsettingsService = /*#__PURE__*/function (_emailsettings_base_s) {
      _inherits(EmailsettingsService, _emailsettings_base_s);

      var _super24 = _createSuper(EmailsettingsService);

      function EmailsettingsService(http, emailingServerRootUri) {
        var _this13;

        _classCallCheck(this, EmailsettingsService);

        _this13 = _super24.call(this, http, emailingServerRootUri);
        _this13.emailingServerRootUri = emailingServerRootUri;
        return _this13;
      }

      _createClass(EmailsettingsService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return EmailsettingsService;
    }(_emailsettings_base_service__WEBPACK_IMPORTED_MODULE_1__["EmailsettingsBaseService"]);

    EmailsettingsService.ɵfac = function EmailsettingsService_Factory(t) {
      return new (t || EmailsettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]));
    };

    EmailsettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmailsettingsService,
      factory: EmailsettingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: EmailtemplateDetailFieldComponent */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateDetailEmailtemplateDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateDetailFieldComponent", function () {
      return EmailtemplateDetailFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");
    /* harmony import */


    var _emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailtemplate.service */
    "./src/app/emailing/emailtemplate/emailtemplate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailtemplateDetailFieldComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["templateName"], "\n");
      }
    }

    function EmailtemplateDetailFieldComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detail["fromEmail"], "\n");
      }
    }

    function EmailtemplateDetailFieldComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.detail["subject"], "\n");
      }
    }

    function EmailtemplateDetailFieldComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r3.detail["content"]);
      }
    }

    function EmailtemplateDetailFieldComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.detail["tag"], "\n");
      }
    }

    var EmailtemplateDetailFieldComponent = /*#__PURE__*/function (_emailtemplate_compon) {
      _inherits(EmailtemplateDetailFieldComponent, _emailtemplate_compon);

      var _super25 = _createSuper(EmailtemplateDetailFieldComponent);

      function EmailtemplateDetailFieldComponent(emailtemplateService, injector, router, route, location) {
        var _this14;

        _classCallCheck(this, EmailtemplateDetailFieldComponent);

        _this14 = _super25.call(this, emailtemplateService, injector, router, route, location);
        _this14.emailtemplateService = emailtemplateService;
        _this14.injector = injector;
        _this14.router = router;
        _this14.route = route;
        _this14.location = location;
        _this14.view = _emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__["ViewType"].DETAIL;
        _this14.fieldDisplayNames = {
          'templateName': 'Template Name',
          'fromEmail': 'From Email',
          'subject': 'Subject',
          'content': 'Content',
          'tag': 'Tag'
        };

        _this14.stringFields.push('templateName');

        _this14.stringFields.push('fromEmail');

        _this14.stringFields.push('subject');

        _this14.stringFields.push('content');

        _this14.stringFields.push('tag');

        return _this14;
      }

      _createClass(EmailtemplateDetailFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.showFieldsStr) {
            console.error("A field has to be given to show it.");
            return;
          }

          this.showFields = this.showFieldsStr.match(/\S+/g);

          if (this.detailObj) {
            this.onDetailReturned(this.detailObj, null);
          } else {
            if (!this.id) this.id = this.id;
            if (this.id) this.populateDetail(this.id);else {
              console.error("No id provided to show info");
              return;
            }
          }
        }
      }]);

      return EmailtemplateDetailFieldComponent;
    }(_emailtemplate_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateComponent"]);

    EmailtemplateDetailFieldComponent.ɵfac = function EmailtemplateDetailFieldComponent_Factory(t) {
      return new (t || EmailtemplateDetailFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailtemplateDetailFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateDetailFieldComponent,
      selectors: [["app-emailtemplate-detail-field"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 5,
      consts: [[4, "ngIf"], ["libMddsRichtextShow", "emailtemplateDetailContent", 3, "content"]],
      template: function EmailtemplateDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateDetailFieldComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateDetailFieldComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateDetailFieldComponent_div_2_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateDetailFieldComponent_div_3_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateDetailFieldComponent_div_4_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("templateName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("fromEmail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("subject"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("content"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail && ctx.showFields.includes("tag"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_5__["MddsRichTextShowDirective"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWx0ZW1wbGF0ZS9lbWFpbHRlbXBsYXRlLWRldGFpbC9lbWFpbHRlbXBsYXRlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlsdGVtcGxhdGUvZW1haWx0ZW1wbGF0ZS1kZXRhaWwvZW1haWx0ZW1wbGF0ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateDetailFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailtemplate-detail-field',
          templateUrl: './emailtemplate-detail-field.component.html',
          styleUrls: ['./emailtemplate-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate-detail/emailtemplate-detail.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: EmailtemplateDetailComponent */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateDetailEmailtemplateDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateDetailComponent", function () {
      return EmailtemplateDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component.ts");
    /* harmony import */


    var _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");
    /* harmony import */


    var _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailtemplate.service */
    "./src/app/emailing/emailtemplate/emailtemplate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["../../edit", a1];
    };

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.detail["_id"]))("skipLocationChange", false);
      }
    }

    var _c1 = function _c1() {
      return ["../../new"];
    };

    var _c2 = function _c2(a0) {
      return {
        cid: a0
      };
    };

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r7.detail["_id"]))("skipLocationChange", false);
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateDetailComponent_div_0_div_1_div_1_a_4_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r10.onDelete(ctx_r10.detail["_id"], null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Archive");
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Unarchive");
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r14.onArchive(ctx_r14.detail["_id"], null, ctx_r14.detail["archived"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_ng_template_1_Template, 1, 0, "ng-template", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_ng_template_2_Template, 1, 0, "ng-template", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.detail["archived"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.detail["archived"]);
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateDetailComponent_div_0_div_1_div_1_a_1_Template, 2, 0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateDetailComponent_div_0_div_1_div_1_a_2_Template, 2, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateDetailComponent_div_0_div_1_div_1_a_3_Template, 2, 6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateDetailComponent_div_0_div_1_div_1_a_4_Template, 2, 0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailtemplateDetailComponent_div_0_div_1_div_1_a_5_Template, 3, 2, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionList"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionEdit"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionNew"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionDelete"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.options["disableActionArchive"]);
      }
    }

    function EmailtemplateDetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateDetailComponent_div_0_div_1_div_1_Template, 6, 5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disableActionButtions && !ctx_r1.options["disableActionButtions"]);
      }
    }

    function EmailtemplateDetailComponent_div_0_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailtemplateDetailComponent_div_0_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function EmailtemplateDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateDetailComponent_div_0_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "From Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Subject:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Content:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tag:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EmailtemplateDetailComponent_div_0_div_38_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EmailtemplateDetailComponent_div_0_div_39_Template, 1, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["templateName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["fromEmail"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["subject"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.detail["content"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.detail["tag"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disablePipeline"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableRefLink"]);
      }
    }

    var EmailtemplateDetailComponent = /*#__PURE__*/function (_emailing_cust_base_e7) {
      _inherits(EmailtemplateDetailComponent, _emailing_cust_base_e7);

      var _super26 = _createSuper(EmailtemplateDetailComponent);

      // @Input() 
      // public id:string;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public disableActionButtions:boolean;
      // @Output()
      // public eventEmitter: EventEmitter<any> = new EventEmitter();
      function EmailtemplateDetailComponent(emailtemplateService, injector, router, route, location) {
        var _this15;

        _classCallCheck(this, EmailtemplateDetailComponent);

        _this15 = _super26.call(this, emailtemplateService, injector, router, route, location);
        _this15.emailtemplateService = emailtemplateService;
        _this15.injector = injector;
        _this15.router = router;
        _this15.route = route;
        _this15.location = location;
        _this15.view = _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].DETAIL;
        _this15.fieldDisplayNames = {
          'templateName': 'Template Name',
          'fromEmail': 'From Email',
          'subject': 'Subject',
          'content': 'Content',
          'tag': 'Tag'
        };

        _this15.stringFields.push('templateName');

        _this15.stringFields.push('fromEmail');

        _this15.stringFields.push('subject');

        _this15.stringFields.push('content');

        _this15.stringFields.push('tag');

        return _this15;
      }

      _createClass(EmailtemplateDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailtemplateDetailComponent.prototype), "ngOnInit", this).call(this);

          if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

          if (this.id) {
            this.populateDetail(this.id);
          } else if (this.searchObj) {
            // search item based on the unique value
            this.populateDetailByFields(this.searchObj);
          } else {
            console.error("Routing error for detail view... no id...");
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return EmailtemplateDetailComponent;
    }(_emailing_cust_base_emailtemplate_emailtemplate_detail_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateDetailCustComponent"]);

    EmailtemplateDetailComponent.ɵfac = function EmailtemplateDetailComponent_Factory(t) {
      return new (t || EmailtemplateDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailtemplateDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateDetailComponent,
      selectors: [["app-emailtemplate-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngIf"], [1, "card", "text-left", "transparent-border"], [1, "grid-fields"], [1, "card-header", "grid-head"], [1, "ml-1"], [1, "mr-1", "d-inline-block"], [1, "card-body"], [1, "d-inline-flex", "flex-wrap", "mr-5", 2, "min-width", "160px"], [1, "ml-3"], ["libMddsRichtextShow", "emailtemplateDetailContent", 3, "content"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "../../list", "class", "action-go-list", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "skipLocationChange", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "routerLink", "queryParams", "skipLocationChange", 4, "ngIf"], ["routerLink", ".", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["routerLink", "../../list", 1, "action-go-list"], ["title", "List", 1, "fas", "fa-list"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"], [1, "btn", "btn-outline-primary", 3, "routerLink", "queryParams", "skipLocationChange"], ["routerLink", ".", 1, "btn", "btn-outline-primary", 3, "click"], [3, "ngIf"]],
      template: function EmailtemplateDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateDetailComponent_div_0_Template, 40, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_6__["MddsRichTextShowDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-go-list[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n.referred-by-links[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.referred-by-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.grid-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check[_ngcontent-%COMP%] {\n  zoom: 2;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWx0ZW1wbGF0ZS9lbWFpbHRlbXBsYXRlLWRldGFpbC9lbWFpbHRlbXBsYXRlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt5Q0FDdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlsdGVtcGxhdGUvZW1haWx0ZW1wbGF0ZS1kZXRhaWwvZW1haWx0ZW1wbGF0ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi5hY3Rpb24tZ28tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4uY2FyZCBzcGFuIHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG4qL1xuLnJlZmVycmVkLWJ5LWxpbmtzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlZmVycmVkLWJ5LWxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlbGVjdC1tb2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWxlY3QtbW9kZWwuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LW1vZGVsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5iYWRnZS1jbGljazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ncmlkLWZpZWxkcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7Ki9cbn1cblxuLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdyaWQtaGVhZC1waWN0dXJlIHtcbiAgICBmbGV4LWJhc2lzOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4ucGljdHVyZS1zbWFsbC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMjVyZW07XG59XG5cbi50cmFuc3BhcmVudC1ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5pbmZvLXRlcm0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRlcm0tY2hlY2sge1xuICB6b29tOiAyO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailtemplate-detail',
          templateUrl: './emailtemplate-detail.component.html',
          styleUrls: ['./emailtemplate-detail.component.css']
        }]
      }], function () {
        return [{
          type: _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate-edit/emailtemplate-edit.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate-edit/emailtemplate-edit.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EmailtemplateEditComponent */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateEditEmailtemplateEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateEditComponent", function () {
      return EmailtemplateEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component.ts");
    /* harmony import */


    var _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");
    /* harmony import */


    var _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailtemplate.service */
    "./src/app/emailing/emailtemplate/emailtemplate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @hicoder/angular-richtext */
    "./node_modules/@hicoder/angular-richtext/__ivy_ngcc__/fesm2015/hicoder-angular-richtext.js");

    function EmailtemplateEditComponent_div_0_h4_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.action, " Email Template");
      }
    }

    function EmailtemplateEditComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.style["card-title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.options["title"], " ");
      }
    }

    function EmailtemplateEditComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.style["card-subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.options["subtitle"], " ");
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r16.clearValueFromDetail("templateName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TemplateName is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.detail["templateName"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.detail["templateName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.detail["templateName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r13.valid || _r13.pristine || _r13.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors && _r13.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r22.clearValueFromDetail("fromEmail");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r24.detail["fromEmail"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_div_8_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.detail["fromEmail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.detail["fromEmail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r20.valid || _r20.pristine || _r20.errors.minlength);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r29.clearValueFromDetail("subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r31.detail["subject"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r26.valid || _r26.pristine || _r26.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors && _r26.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Content is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-richtext-editor", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_3_Template_lib_richtext_editor_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.detail["content"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_3_div_6_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.detail["content"])("required", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r33.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r33.errors && _r33.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r40.clearValueFromDetail("tag");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tag is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r42.detail["tag"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.detail["tag"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.detail["tag"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r37.valid || _r37.pristine || _r37.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.errors && _r37.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_0_Template, 9, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_1_Template, 10, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_2_Template, 9, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_3_Template, 7, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateEditComponent_div_0_ng_template_8_ng_template_4_Template, 9, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("templateName"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("fromEmail"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("subject"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("content"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.hiddenFields.includes("tag"));
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r52.clearValueFromDetail("templateName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TemplateName is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r54.detail["templateName"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.detail["templateName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.detail["templateName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r49.valid || _r49.pristine || _r49.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors && _r49.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r58.clearValueFromDetail("fromEmail");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.detail["fromEmail"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_div_8_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.detail["fromEmail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.detail["fromEmail"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r56.valid || _r56.pristine || _r56.errors.minlength);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r65.clearValueFromDetail("subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r67.detail["subject"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.detail["subject"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r62.valid || _r62.pristine || _r62.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r62.errors && _r62.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Content is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-richtext-editor", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_3_Template_lib_richtext_editor_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r71.detail["content"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_3_div_6_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.detail["content"])("required", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r69.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r69.errors && _r69.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r76.clearValueFromDetail("tag");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tag is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r78.detail["tag"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_div_6_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_div_8_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.detail["tag"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.detail["tag"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r73.valid || _r73.pristine || _r73.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r73.errors && _r73.errors.required);
      }
    }

    function EmailtemplateEditComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_0_Template, 9, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_1_Template, 10, 3, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_2_Template, 9, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_3_Template, 7, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateEditComponent_div_0_ng_template_9_ng_template_4_Template, 9, 4, "ng-template", 9);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("templateName"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("fromEmail"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("subject"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("content"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.hiddenFields.includes("tag"));
      }
    }

    function EmailtemplateEditComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateEditComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.editCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateEditComponent_div_0_h4_3_Template, 2, 1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateEditComponent_div_0_h4_4_Template, 2, 2, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailtemplateEditComponent_div_0_p_5_Template, 2, 2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailtemplateEditComponent_div_0_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateEditComponent_div_0_ng_template_8_Template, 5, 5, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateEditComponent_div_0_ng_template_9_Template, 5, 5, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailtemplateEditComponent_div_0_button_13_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.embeddedView && !ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action == "Create" || ctx_r0.action == "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options["disableCancel"]);
      }
    }

    var EmailtemplateEditComponent = /*#__PURE__*/function (_emailing_cust_base_e8) {
      _inherits(EmailtemplateEditComponent, _emailing_cust_base_e8);

      var _super27 = _createSuper(EmailtemplateEditComponent);

      function EmailtemplateEditComponent(emailtemplateService, injector, router, route, location) {
        var _this16;

        _classCallCheck(this, EmailtemplateEditComponent);

        _this16 = _super27.call(this, emailtemplateService, injector, router, route, location);
        _this16.emailtemplateService = emailtemplateService;
        _this16.injector = injector;
        _this16.router = router;
        _this16.route = route;
        _this16.location = location;
        _this16.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this16.view = _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].EDIT;
        _this16.fieldDisplayNames = {
          'templateName': 'Template Name',
          'fromEmail': 'From Email',
          'subject': 'Subject',
          'content': 'Content',
          'tag': 'Tag'
        };

        _this16.stringFields.push('templateName');

        _this16.stringFields.push('fromEmail');

        _this16.stringFields.push('subject');

        _this16.stringFields.push('content');

        _this16.stringFields.push('tag');

        var detail = {};
        _this16.detail = _this16.formatDetail(detail);
        return _this16;
      }

      _createClass(EmailtemplateEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailtemplateEditComponent.prototype), "ngOnInit", this).call(this);

          if (this.embedMode == 'create') {
            // parent ask to create
            this.action = 'Create';
            this.getDetailData();
          } else {
            if (!this.id) this.id = this.route.snapshot.paramMap.get('id');

            if (this.id) {
              this.action = 'Edit';
              this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
            } else {
              this.action = 'Create';
              if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');

              if (this.cid) {
                this.populateDetailFromCopy(this.cid);
              } else {
                this.getDetailData();
              }
            }
          } // get editHintFields


          this.searchHintFieldValues();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Initialize all tooltips
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "getDetailData",
        value: function getDetailData() {
          if (this.initData) {
            this.action = 'Add';
            var detail = {};

            for (var _i3 = 0, _Object$keys3 = Object.keys(this.initData); _i3 < _Object$keys3.length; _i3++) {
              var prop = _Object$keys3[_i3];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail3 = {};
            this.detail = this.formatDetail(_detail3);
          }
        }
      }]);

      return EmailtemplateEditComponent;
    }(_emailing_cust_base_emailtemplate_emailtemplate_edit_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateEditCustComponent"]);

    EmailtemplateEditComponent.ɵfac = function EmailtemplateEditComponent_Factory(t) {
      return new (t || EmailtemplateEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailtemplateEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateEditComponent,
      selectors: [["app-emailtemplate-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "edit", 4, "ngIf"], [1, "edit"], [1, "card", 2, "text-align", "left"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-title", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["editForm", "ngForm"], [3, "ngIf"], [1, "action-buttons-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-outline-success", "type", "button", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "card-title", 3, "ngStyle"], [3, "ngStyle"], [1, "form-group"], ["for", "EditTemplateName"], [1, "input-group"], ["type", "text", "id", "EditTemplateName", "required", "", "name", "EditTemplateName", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditTemplateName", "ngModel"], ["class", "input-group-append icon-clear-inside ", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], [1, "input-group-append", "icon-clear-inside", 3, "click"], ["title", "Clear", 1, "fas", "fa-times-circle"], ["for", "EditFromEmail"], ["data-toggle", "tooltip", "title", "Leave it blank if default sender email address in email settings is used", 1, "far", "fa-question-circle"], ["type", "text", "id", "EditFromEmail", "name", "EditFromEmail", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditFromEmail", "ngModel"], ["for", "EditSubject"], ["type", "text", "id", "EditSubject", "required", "", "name", "EditSubject", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditSubject", "ngModel"], ["for", "EditContent"], ["name", "EditContent", 3, "ngModel", "required", "ngModelChange"], ["EditContent", "ngModel"], ["for", "EditTag"], ["type", "text", "id", "EditTag", "required", "", "name", "EditTag", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange"], ["EditTag", "ngModel"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]],
      template: function EmailtemplateEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateEditComponent_div_0_Template, 14, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _hicoder_angular_richtext__WEBPACK_IMPORTED_MODULE_7__["MddsRichtextEditorComponent"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n\nfieldset[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%], .form-check[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%] {\n  width: 90%\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.action-buttons-center[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.action-buttons-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n\n\n\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.input-group-append[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-clear[_ngcontent-%COMP%] {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.icon-clear-inside[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n.icon-clear-inside-sm[_ngcontent-%COMP%] {\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  right: 1.5rem;\n  height: 1.5rem;\n}\n\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.important-tip[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.new-modal[_ngcontent-%COMP%] {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card[_ngcontent-%COMP%] {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  border: dashed 1px lightgray;\n}\n\n.available-hints[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.new-area[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWx0ZW1wbGF0ZS9lbWFpbHRlbXBsYXRlLWVkaXQvZW1haWx0ZW1wbGF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUNEOzs7O0NBSUM7O0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1haWxpbmcvZW1haWx0ZW1wbGF0ZS9lbWFpbHRlbXBsYXRlLWVkaXQvZW1haWx0ZW1wbGF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5maWVsZHNldD4uZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLFxuLmZvcm0tY2hlY2ssXG4uYWxlcnQge1xuICB3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXA+bGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMztcbiAgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsXG4uaWNvbi1jbGVhciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwPnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICB6LWluZGV4OiAzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICB6LWluZGV4OiAzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Utb250b3Age1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZS1vbnRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbXBvcnRhbnQtdGlwIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ldy1tb2RhbCB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5ldy1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggbGlnaHRncmF5O1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailtemplate-edit',
          templateUrl: './emailtemplate-edit.component.html',
          styleUrls: ['./emailtemplate-edit.component.css']
        }]
      }], function () {
        return [{
          type: _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate-list/emailtemplate-list.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate-list/emailtemplate-list.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EmailtemplateListComponent */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateListEmailtemplateListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateListComponent", function () {
      return EmailtemplateListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailing_cust_base_emailtemplate_emailtemplate_list_cust_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../emailing-cust/base/emailtemplate/emailtemplate-list.cust.component */
    "./src/app/emailing-cust/base/emailtemplate/emailtemplate-list.cust.component.ts");
    /* harmony import */


    var _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailtemplate.component */
    "./src/app/emailing/emailtemplate/emailtemplate.component.ts");
    /* harmony import */


    var _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emailtemplate.service */
    "./src/app/emailing/emailtemplate/emailtemplate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EmailtemplateListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
      }
    }

    function EmailtemplateListComponent_ul_1_li_1_a_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r10.categoriesCounts[idx_r8], ")");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var _c1 = function _c1() {
      return ["."];
    };

    function EmailtemplateListComponent_ul_1_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_ul_1_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.categorySelected(idx_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_ul_1_li_1_a_1_span_2_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r8 = ctx_r15.index;
        var ele_r7 = ctx_r15.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, idx_r8 === ctx_r9.selectedCategory))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r7, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.listCategory1.showCategoryCounts);
      }
    }

    function EmailtemplateListComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_ul_1_li_1_a_1_Template, 3, 7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idx_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.listCategory1.showEmptyCategory || !ctx_r6.listCategory1.showEmptyCategory && ctx_r6.categoriesCounts[idx_r8] > 0);
      }
    }

    function EmailtemplateListComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_ul_1_li_1_Template, 2, 1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoryDisplays);
      }
    }

    function EmailtemplateListComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_div_5_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.onSearchTextClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_3_div_1_i_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
      }
    }

    function EmailtemplateListComponent_div_3_div_1_i_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
      }
    }

    function EmailtemplateListComponent_div_3_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Archived");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 45, 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateListComponent_div_3_div_1_div_16_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r28.detail["archived"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_div_16_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r30.onSearchClear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_div_16_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r31.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.detail["archived"]);
      }
    }

    function EmailtemplateListComponent_div_3_div_1_div_17_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_div_17_span_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r34.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_div_17_span_1_Template_i_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var value_r33 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r36.clearValueFromDetailAndSearchList(value_r33[2]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", value_r33[0], ": ", value_r33[1], "");
      }
    }

    function EmailtemplateListComponent_div_3_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_3_div_1_div_17_span_1_Template, 4, 2, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.searchMoreDetail);
      }
    }

    function EmailtemplateListComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateListComponent_div_3_div_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.searchText = $event;
        })("search", function EmailtemplateListComponent_div_3_div_1_Template_input_search_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          $event.target.blur();
          return ctx_r39.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailtemplateListComponent_div_3_div_1_div_5_Template, 3, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.searchList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_1_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.toggleMoreSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Refine Search \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailtemplateListComponent_div_3_div_1_i_14_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailtemplateListComponent_div_3_div_1_i_15_Template, 1, 0, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmailtemplateListComponent_div_3_div_1_div_16_Template, 25, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmailtemplateListComponent_div_3_div_1_div_17_Template, 2, 1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.searchText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.moreSearchOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.moreSearchOpened);
      }
    }

    function EmailtemplateListComponent_div_3_div_2_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Archive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_3_div_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unarchive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["../new"];
    };

    var _c3 = function _c3(a0) {
      return {
        "disabled": a0
      };
    };

    function EmailtemplateListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_2_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.onDeleteSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_2_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.onArchiveSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateListComponent_div_3_div_2_span_8_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_3_div_2_span_9_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2))("skipLocationChange", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, !ctx_r17.isItemSelected()));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, !ctx_r17.isItemSelected()));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.archivedSearch);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_2_span_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 71);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_2_span_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_3_div_4_div_2_span_4_i_2_Template, 1, 0, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateListComponent_div_3_div_4_div_2_span_4_i_3_Template, 1, 0, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r53.listSortFieldDisplay, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.listSortOrder === "desc");
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sort: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateListComponent_div_3_div_4_div_2_span_4_Template, 4, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r56.setListSortAndRefresh("templateName", "Template Name", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Template Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r58.setListSortAndRefresh("templateName", "Template Name", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Template Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r59.setListSortAndRefresh("fromEmail", "From Email", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.setListSortAndRefresh("fromEmail", "From Email", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r61.setListSortAndRefresh("subject", "Subject", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r62.setListSortAndRefresh("subject", "Subject", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r63.setListSortAndRefresh("tag", "Tag", "asc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_2_Template_a_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r64.setListSortAndRefresh("tag", "Tag", "desc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.listSortField && !ctx_r47.viewHiddenFields.includes(ctx_r47.listSortField));
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_5_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r65.setListViewFilter("list");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_5_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r67.setListViewFilter("grid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_5_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r68.setListViewFilter("table");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r48.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r48.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r48.isShowListView("table"));
      }
    }

    function EmailtemplateListComponent_div_3_div_4_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r49.totalCount);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_span_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailtemplateListComponent_div_3_div_4_span_9_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r69.checkAll = $event;
        })("change", function EmailtemplateListComponent_div_3_div_4_span_9_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r71.onCheckAllChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.checkAll);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_13_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_13_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_13_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var p_r75 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r77.onGotoPage(p_r75);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r75 = ctx.$implicit;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r75 == ctx_r73.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r75);
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_13_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_13_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r79.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateListComponent_div_3_div_4_div_13_li_8_Template, 3, 0, "li", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_3_div_4_div_13_li_9_Template, 3, 4, "li", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailtemplateListComponent_div_3_div_4_div_13_li_10_Template, 3, 0, "li", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_div_13_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r81.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r51.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r51.page >= ctx_r51.totalPages));
      }
    }

    function EmailtemplateListComponent_div_3_div_4_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailtemplateListComponent_div_3_div_4_div_14_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r82.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r52.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r52.totalPages, " ");
      }
    }

    function EmailtemplateListComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_3_div_4_div_2_Template, 30, 1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailtemplateListComponent_div_3_div_4_div_5_Template, 10, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateListComponent_div_3_div_4_span_8_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_3_div_4_span_9_Template, 3, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_3_div_4_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r84.onRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailtemplateListComponent_div_3_div_4_div_13_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailtemplateListComponent_div_3_div_4_div_14_Template, 6, 2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.list.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.totalPages > 1);
      }
    }

    function EmailtemplateListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_3_div_1_Template, 18, 6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_3_div_2_Template, 10, 11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateListComponent_div_3_div_4_Template, 15, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableListSearch"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disableActionButtions"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.options["disablePagination"]);
      }
    }

    function EmailtemplateListComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No records found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_4_span_1_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_4_span_2_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loaded);
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_hr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 120);
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "From Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r92["fromEmail"], " ");
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subject:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r92["subject"], " ");
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tag:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r92["tag"], " ");
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_i_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 122);
      }
    }

    function EmailtemplateListComponent_div_5_div_1_div_1_i_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 123);
      }
    }

    var _c4 = function _c4(a0, a1, a2) {
      return {
        "clicked-row": a0,
        "selected-row": a1,
        "clickable-card": a2
      };
    };

    var _c5 = function _c5(a0) {
      return {
        pointer: a0
      };
    };

    var _c6 = function _c6(a1) {
      return ["../edit", a1];
    };

    function EmailtemplateListComponent_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_div_1_div_1_hr_1_Template, 1, 0, "hr", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_1_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var i_r93 = ctx.index;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r104.clickOneItem(i_r93);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_5_div_1_div_1_div_9_Template, 6, 1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailtemplateListComponent_div_5_div_1_div_1_div_10_Template, 6, 1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmailtemplateListComponent_div_5_div_1_div_1_div_11_Template, 6, 1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_1_div_1_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var detail_r92 = ctx.$implicit;
          var i_r93 = ctx.index;

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r106.onDelete(detail_r92["_id"], i_r93);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_1_div_1_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var detail_r92 = ctx.$implicit;
          var i_r93 = ctx.index;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r107.onArchive(detail_r92["_id"], i_r93, ctx_r107.archivedSearch);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailtemplateListComponent_div_5_div_1_div_1_i_19_Template, 1, 0, "i", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EmailtemplateListComponent_div_5_div_1_div_1_i_20_Template, 1, 0, "i", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_1_div_1_Template_input_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var i_r93 = ctx.index;

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r108.selectOneItem(i_r93);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r92 = ctx.$implicit;
        var i_r93 = ctx.index;

        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r93 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c4, ctx_r91.clickedId == detail_r92["_id"], ctx_r91.clickItemAction === "select" && ctx_r91.checkedItem[i_r93], ctx_r91.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c5, ctx_r91.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r92["templateName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.fieldHasValue(detail_r92["fromEmail"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.fieldHasValue(detail_r92["subject"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.fieldHasValue(detail_r92["tag"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c6, detail_r92["_id"]))("skipLocationChange", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r91.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r91.checkedItem[i_r93]);
      }
    }

    function EmailtemplateListComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_div_1_div_1_Template, 23, 24, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r88.list);
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "From Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r110["fromEmail"], "");
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subject:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r110["subject"], "");
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tag:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r110["tag"], "");
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_i_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 122);
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_i_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 123);
      }
    }

    function EmailtemplateListComponent_div_5_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_2_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var i_r111 = ctx.index;

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r121.clickOneItem(i_r111);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_5_div_2_div_1_div_9_Template, 6, 1, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailtemplateListComponent_div_5_div_2_div_1_div_10_Template, 6, 1, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmailtemplateListComponent_div_5_div_2_div_1_div_11_Template, 6, 1, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_2_div_1_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var detail_r110 = ctx.$implicit;
          var i_r111 = ctx.index;

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r123.onDelete(detail_r110["_id"], i_r111);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_2_div_1_Template_a_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var detail_r110 = ctx.$implicit;
          var i_r111 = ctx.index;

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r124.onArchive(detail_r110["_id"], i_r111, ctx_r124.archivedSearch);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmailtemplateListComponent_div_5_div_2_div_1_i_18_Template, 1, 0, "i", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailtemplateListComponent_div_5_div_2_div_1_i_19_Template, 1, 0, "i", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_div_2_div_1_Template_input_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var i_r111 = ctx.index;

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r125.selectOneItem(i_r111);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r110 = ctx.$implicit;
        var i_r111 = ctx.index;

        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c4, ctx_r109.clickedId == detail_r110["_id"], ctx_r109.clickItemAction === "select" && ctx_r109.checkedItem[i_r111], ctx_r109.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, ctx_r109.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r110["templateName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.fieldHasValue(detail_r110["fromEmail"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.fieldHasValue(detail_r110["subject"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.fieldHasValue(detail_r110["tag"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c6, detail_r110["_id"]))("skipLocationChange", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r109.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r109.checkedItem[i_r111]);
      }
    }

    function EmailtemplateListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_div_2_div_1_Template, 21, 19, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r89.list);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_7_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 142);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 143);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_table_3_span_7_i_1_Template, 1, 0, "i", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_5_table_3_span_7_i_2_Template, 1, 0, "i", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.listSortOrder === "desc");
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_10_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 142);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_10_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 143);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_table_3_span_10_i_1_Template, 1, 0, "i", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_5_table_3_span_10_i_2_Template, 1, 0, "i", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.listSortOrder === "desc");
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_13_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 142);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_13_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 143);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_table_3_span_13_i_1_Template, 1, 0, "i", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_5_table_3_span_13_i_2_Template, 1, 0, "i", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.listSortOrder === "desc");
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_16_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 142);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_16_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 143);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_table_3_span_16_i_1_Template, 1, 0, "i", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_5_table_3_span_16_i_2_Template, 1, 0, "i", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r129.listSortOrder === "asc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r129.listSortOrder === "desc");
      }
    }

    function EmailtemplateListComponent_div_5_table_3_ng_template_19_i_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 122);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_ng_template_19_i_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 123);
      }
    }

    var _c7 = function _c7(a0, a1) {
      return {
        "clicked-row": a0,
        "selected-row": a1
      };
    };

    var _c8 = function _c8(a0) {
      return {
        "pointer": a0
      };
    };

    function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r143.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r145.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r146.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_td_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r147.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_td_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r148.clickOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var detail_r139 = ctx.$implicit;
          var i_r140 = ctx.index;

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r149.onDelete(detail_r139["_id"], i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var detail_r139 = ctx.$implicit;
          var i_r140 = ctx.index;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r150.onArchive(detail_r139["_id"], i_r140, ctx_r150.archivedSearch);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmailtemplateListComponent_div_5_table_3_ng_template_19_i_17_Template, 1, 0, "i", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmailtemplateListComponent_div_5_table_3_ng_template_19_i_18_Template, 1, 0, "i", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_ng_template_19_Template_input_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var i_r140 = ctx.index;

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r151.selectOneItem(i_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r139 = ctx.$implicit;
        var i_r140 = ctx.index;

        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c7, ctx_r130.clickedId == detail_r139["_id"], ctx_r130.clickItemAction === "select" && ctx_r130.checkedItem[i_r140]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r130.page - 1) * ctx_r130.perPage + i_r140 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c8, ctx_r130.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["templateName"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c8, ctx_r130.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["fromEmail"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c8, ctx_r130.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["subject"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c8, ctx_r130.clickItemAction));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r139["tag"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c6, detail_r139["_id"]))("skipLocationChange", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r130.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.archivedSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.checkedItem[i_r140]);
      }
    }

    function EmailtemplateListComponent_div_5_table_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_Template_th_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r152.toggleListSort("templateName", "Template Name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Template Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailtemplateListComponent_div_5_table_3_span_7_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_Template_th_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r154.toggleListSort("fromEmail", "From Email");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " From Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailtemplateListComponent_div_5_table_3_span_10_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_Template_th_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r155.toggleListSort("subject", "Subject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Subject ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailtemplateListComponent_div_5_table_3_span_13_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_5_table_3_Template_th_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r156.toggleListSort("tag", "Tag");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Tag ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmailtemplateListComponent_div_5_table_3_span_16_Template, 3, 2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailtemplateListComponent_div_5_table_3_ng_template_19_Template, 20, 28, "ng-template", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.listSortField === "templateName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.listSortField === "fromEmail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.listSortField === "subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.listSortField === "tag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r90.list);
      }
    }

    function EmailtemplateListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_div_5_div_1_Template, 2, 1, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailtemplateListComponent_div_5_div_2_Template, 2, 1, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateListComponent_div_5_table_3_Template, 20, 5, "table", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("list"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("grid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowListView("table"));
      }
    }

    function EmailtemplateListComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r157.totalCount);
      }
    }

    function EmailtemplateListComponent_div_7_div_8_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_7_div_8_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_7_div_8_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166);

          var p_r163 = ctx.$implicit;

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r165.onGotoPage(p_r163);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r163 = ctx.$implicit;

        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r163 == ctx_r161.page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r163);
      }
    }

    function EmailtemplateListComponent_div_7_div_8_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmailtemplateListComponent_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_7_div_8_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r167.onPreviousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateListComponent_div_7_div_8_li_8_Template, 3, 0, "li", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_7_div_8_li_9_Template, 3, 4, "li", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailtemplateListComponent_div_7_div_8_li_10_Template, 3, 0, "li", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailtemplateListComponent_div_7_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r169.onNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r158.page <= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.leftMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r158.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.rightMore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r158.page >= ctx_r158.totalPages));
      }
    }

    function EmailtemplateListComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmailtemplateListComponent_div_7_div_9_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r170.onGotoPage($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r159.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0/\xA0", ctx_r159.totalPages, " ");
      }
    }

    function EmailtemplateListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailtemplateListComponent_div_7_span_6_Template, 4, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailtemplateListComponent_div_7_div_8_Template, 17, 9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailtemplateListComponent_div_7_div_9_Template, 6, 2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalCount > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.totalPages > 1);
      }
    }

    var EmailtemplateListComponent = /*#__PURE__*/function (_emailing_cust_base_e9) {
      _inherits(EmailtemplateListComponent, _emailing_cust_base_e9);

      var _super28 = _createSuper(EmailtemplateListComponent);

      // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
      //                        disableListSearch: false, disableTitle: false, disableRefs: false
      //                        disableListHead: false, disableTitleRow: false}
      // @Input()
      // public inputData:any;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
      // @Input()
      // public categoryBy:string; //field name whose value is used as category
      function EmailtemplateListComponent(emailtemplateService, injector, router, route, location) {
        var _this17;

        _classCallCheck(this, EmailtemplateListComponent);

        _this17 = _super28.call(this, emailtemplateService, injector, router, route, location);
        _this17.emailtemplateService = emailtemplateService;
        _this17.injector = injector;
        _this17.router = router;
        _this17.route = route;
        _this17.location = location;
        _this17.view = _emailtemplate_component__WEBPACK_IMPORTED_MODULE_2__["ViewType"].LIST;
        _this17.fieldDisplayNames = {
          'templateName': 'Template Name',
          'fromEmail': 'From Email',
          'subject': 'Subject',
          'tag': 'Tag'
        };

        _this17.stringFields.push('templateName');

        _this17.stringFields.push('fromEmail');

        _this17.stringFields.push('subject');

        _this17.stringFields.push('tag');

        _this17.listViewFilter = 'list';
        var listCategories = [];
        _this17.listCategory1 = listCategories[0] || {};
        _this17.listCategory2 = listCategories[1] || {};
        _this17.clickItemAction = 'detail';
        _this17.itemMultiSelect = true; // initialize detail structure for search

        var detail = {};
        _this17.detail = _this17.formatDetail(detail);
        return _this17;
      }

      _createClass(EmailtemplateListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(EmailtemplateListComponent.prototype), "ngOnInit", this).call(this);

          this.adjustListViewForWindowSize();
          this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
          this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;

          if (!this.options) {
            this.options = {};
          }

          if (this.options.disableCatetory) {
            this.listCategory1 = {}; // no do query based on category for home view;

            this.listCategory2 = {}; // no do query based on category for home view;
          } // this is to initialize the detail that will be used for search condition selection


          var detail = {};

          if (this.searchObj) {
            this.searchDetailReady = true; // search provided from "detail", not from search bar.

            detail = this.searchObj;
          }

          if (this.queryParams) {
            this.listSortField = this.queryParams.listSortField;
            this.listSortOrder = this.queryParams.listSortOrder;

            if (this.queryParams.perPage) {
              this.perPage = this.queryParams.perPage;
            }
          }

          this.detail = this.formatDetail(detail);
          this.searchList(); // get editHintFields

          this.searchHintFieldValues();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          //used by others to call some common functions
          return new EmailtemplateListComponent(null, null, null, null, null);
        }
      }]);

      return EmailtemplateListComponent;
    }(_emailing_cust_base_emailtemplate_emailtemplate_list_cust_component__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateListCustComponent"]);

    EmailtemplateListComponent.ɵfac = function EmailtemplateListComponent_Factory(t) {
      return new (t || EmailtemplateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    EmailtemplateListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailtemplateListComponent,
      selectors: [["app-emailtemplate-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 6,
      consts: [["class", "mt-4 mb-4 d-flex", 4, "ngIf"], ["class", "nav nav-pills category-nav", 4, "ngIf"], ["class", "container search", 4, "ngIf"], ["class", "no-records", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "mt-4", "mb-4", "d-flex"], [1, "nav", "nav-pills", "category-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-link", "queryParamsHandling", "preserve", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["queryParamsHandling", "preserve", 1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "container", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "input-group"], ["type", "search", "id", "emailtemplateTextSearch", "placeholder", "Search for template name, from email, subject, tag", 1, "form-control", "border", "border-secondary", 3, "ngModel", "ngModelChange", "search"], ["emailtemplateTextSearch", ""], ["class", "input-group-append icon-search-clear", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "text-center"], [1, "pointer", 3, "click"], [1, "refine-search-text"], ["class", "fas fa-plus-circle", "title", "More", 4, "ngIf"], ["class", "fas fa-minus-circle", "title", "Less", 4, "ngIf"], ["class", "shadow", 4, "ngIf"], ["style", "text-align: left;", 4, "ngIf"], [1, "input-group-append", "icon-search-clear"], ["title", "Clear", 1, "fas", "fa-times-circle", 3, "click"], ["title", "More", 1, "fas", "fa-plus-circle"], ["title", "Less", 1, "fas", "fa-minus-circle"], [1, "shadow"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "container", "one-column-search", "mt-3", "small"], [1, "row", "col-gutter"], [1, "col-4", "col-sm-3"], ["for", "Archived"], [1, "col-8", "col-sm-8"], [1, "mr-1"], [1, "switch"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["EditArchived", "ngModel"], [1, "slider", "round"], [1, "ml-1"], [1, "action-buttons"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [2, "text-align", "left"], ["class", "badge badge-pill badge-info", 4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-info"], ["title", "Clear", 1, "fas", "fa-times-circle", "icon-clear-badge", 3, "click"], [1, "btn", "btn-outline-primary", 3, "routerLink", "skipLocationChange"], ["routerLink", ".", 1, "btn", "btn-outline-primary", 3, "ngClass", "click"], [1, "row", "justify-content-end", "mt-3"], ["class", "sort-selection mr-5", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "total_counts"], ["routerLink", ".", 1, "ml-3", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "d-flex", "justify-content-center", "flex-wrap", "mt-2"], ["class", "ml-3", 4, "ngIf"], [1, "sort-selection", "mr-5"], [1, "dropdown", 2, "width", "100%"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sort-dropdown", "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", "pointer", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], ["type", "radio", "name", "view-filter", "id", "list-view", 1, "view-radio", 3, "checked", "click"], ["for", "list-view"], [1, "fa", "fa-th-list"], ["type", "radio", "name", "view-filter", "id", "grid-view", 1, "view-radio", 3, "checked", "click"], ["for", "grid-view"], [1, "fa", "fa-th"], ["type", "radio", "name", "view-filter", "id", "table-view", 1, "view-radio", 3, "checked", "click"], ["for", "table-view"], [1, "fa", "fa-list-alt"], ["type", "checkbox", 1, "ml-3", "mr-1", 3, "ngModel", "ngModelChange", "change"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["routerLink", ".", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLink", ".", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "page-item"], [1, "page-link"], ["routerLink", ".", 1, "page-link", 3, "click"], [1, "ml-3"], ["type", "number", 1, "page-control", "form-control", 3, "value", "input"], [1, "no-records"], ["class", "listview", 4, "ngIf"], ["class", "gridview", 4, "ngIf"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "listview"], ["class", "list-block", 4, "ngFor", "ngForOf"], [1, "list-block"], ["class", "list-devider", 4, "ngIf"], [1, "list-card", "text-left", 3, "ngClass"], [1, "list-fields", 3, "ngClass", "click"], [1, "list-body-fields"], [1, "mr-1", "d-inline-block"], ["class", "mr-3 d-inline-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-row", "mt-1"], [1, "card-action-icons"], [3, "routerLink", "skipLocationChange"], ["title", "Edit", 1, "fas", "fa-edit"], [3, "routerLink", "click"], ["title", "Delete", 1, "fas", "fa-trash-alt"], ["class", "fa fa-archive", "title", "Archive", 4, "ngIf"], ["class", "fas fa-trash-restore", "title", "Unarchive", 4, "ngIf"], ["type", "checkbox", 1, "list-check-box", 3, "ngModel", "click"], [1, "list-devider"], [1, "mr-3", "d-inline-flex", "flex-wrap"], ["title", "Archive", 1, "fa", "fa-archive"], ["title", "Unarchive", 1, "fas", "fa-trash-restore"], [1, "gridview"], ["class", "grid-block", 4, "ngFor", "ngForOf"], [1, "grid-block"], [1, "card", "text-left", "h-100", 3, "ngClass"], [1, "grid-fields", 3, "ngClass", "click"], [1, "card-header", "grid-head"], ["class", "d-flex flex-wrap", 4, "ngIf"], ["routerLink", ".", 3, "click"], [1, "d-flex", "flex-wrap"], [1, ""], [1, "table", "table-bordered", "table-hover"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 1, "pointer", 3, "click"], ["scope", "col", 2, "width", "9.8rem"], ["ngFor", "", 3, "ngForOf"], ["class", "fas fa-arrow-up th-sort-arrow", 4, "ngIf"], ["class", "fas fa-arrow-down th-sort-arrow", 4, "ngIf"], [1, "fas", "fa-arrow-up", "th-sort-arrow"], [1, "fas", "fa-arrow-down", "th-sort-arrow"], [3, "ngClass"], ["scope", "row", 1, "pointer", "read-more", "mt-3", 3, "click"], [3, "ngClass", "click"]],
      template: function EmailtemplateListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailtemplateListComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailtemplateListComponent_ul_1_Template, 2, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailtemplateListComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailtemplateListComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailtemplateListComponent_div_5_Template, 4, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailtemplateListComponent_div_7_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableTitleRow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listCategory1.listCategoryField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disableListHead"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options["disablePagination"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]],
      styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n.clicked-row[_ngcontent-%COMP%] {\n  \n}\n.selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n.line-breaker[_ngcontent-%COMP%] {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n.gridview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  \n}\n.grid-block[_ngcontent-%COMP%] {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.grid-fields[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.grid-head-picture[_ngcontent-%COMP%], .list-head-picture[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n@media screen and (min-width: 500px) {\n  .list-head-picture[_ngcontent-%COMP%] {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n.listview[_ngcontent-%COMP%] {\n  \n}\n.list-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  \n}\n.list-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n.list-fields[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-width: 300px;\n  max-width: 85%;\n}\n.list-body-fields[_ngcontent-%COMP%] {}\n.list-devider-gradient[_ngcontent-%COMP%] {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n.list-devider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .list-body-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .field-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-action-icons[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n  width: 10rem;\n  margin-left: auto;\n}\ntd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover, .clickable-card[_ngcontent-%COMP%]:hover   .card-action-icons[_ngcontent-%COMP%]   i.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n.total_counts[_ngcontent-%COMP%] {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n.page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.page-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  border: 1px solid #eceff3;\n  \n  background-color: #eceff3;\n}\n\n.select-model[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.select-model.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-model-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fefefe;\n  \n  padding: 0;\n  border: 1px solid #888;\n  width: 90%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.add-area[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n.badge-click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.badge-click[_ngcontent-%COMP%]:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n.view-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.view-radio[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sort-selection[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.category2-dropdown[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n.sort-selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n.th-sort-arrow[_ngcontent-%COMP%] {\n  color: #007bff;\n  margin-left: 1rem;\n}\n.read-more[_ngcontent-%COMP%] {\n  \n  color: #307bff;\n  cursor: pointer;\n}\n.read-more[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.font-size-75[_ngcontent-%COMP%] {\n  \n  font-size: 0.75rem;\n}\n.no-records[_ngcontent-%COMP%] {\n  margin: 1rem auto 1rem auto;\n  \n  width: 20rem;\n  font-size: 1rem;\n}\n.list-selection[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n}\n.modal-back[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-front[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 500px;\n  width: 50%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg,\n      rgba(233, 236, 239, 1) 0%,\n      rgba(233, 236, 239, 0.2) 80%);\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n.asso-link[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.list-check-box[_ngcontent-%COMP%] {\n  zoom: 1.1;\n}\n.currency[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.col-gutter[_ngcontent-%COMP%] {}\n@media screen and (max-width: 500px) {\n  .col-gutter[_ngcontent-%COMP%] > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.icon-clear-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n.icon-clear-badge[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.refine-search-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  \n  color: #868181;\n}\n.vitrual-card[_ngcontent-%COMP%] {}\n.virtual-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.one-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 80%;\n}\n.two-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%], .one-column-search[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n@media (min-width: 992px) {\n  .two-column-search[_ngcontent-%COMP%] {\n    flex-basis: 40%;\n  }\n}\n\n\ninput[type=search][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.icon-search-clear[_ngcontent-%COMP%] {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem;\n  \n  border: 0;\n  height: 2rem;\n}\n\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 24px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: '';\n  height: 16px;\n  width: 16px;\n  left: 10px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\ninput[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196f3;\n}\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 24px;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxpbmcvZW1haWx0ZW1wbGF0ZS9lbWFpbHRlbXBsYXRlLWxpc3QvZW1haWx0ZW1wbGF0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO3VDQUNxQztBQUN2QztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjs7O0dBR0M7QUFDSDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFDQUFxQztBQUN2QztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7QUFDYjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0NBQ0M7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Q0FDQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxhQUFhO0FBRWI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSxlQUFlO0FBRWY7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakIsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUEsK0JBQStCO0FBQy9COzs7O0VBSUUsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBLHVCQUF1QjtBQUN2QiwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFHRSwyQkFBMkI7QUFDN0I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHFCQUFxQiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsaW5nL2VtYWlsdGVtcGxhdGUvZW1haWx0ZW1wbGF0ZS1saXN0L2VtYWlsdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgcm93cywgY2FyZHMsIGFuZCBpY29ucyBpbiBsaXN0IHZpZXcgYW5kIGNhcmQgdmlld1xuKi9cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTsgKi9cbn1cblxuLnNlbGVjdGVkLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY3LCAyMjQsIDE2OSwgMC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzQ0QjU0OTtcbn1cblxudHIgdGg6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogOCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5saW5lLWJyZWFrZXIge1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG59XG5cbi5ncmlkdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5ncmlkLWJsb2NrIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmdyaWQtZmllbGRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uZ3JpZC1oZWFkLXBpY3R1cmUsXG4ubGlzdC1oZWFkLXBpY3R1cmUge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubGlzdC1oZWFkLXBpY3R1cmUge1xuICAgIGZsZXgtYmFzaXM6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG59XG5cbi5saXN0dmlldyB7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmxpc3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtOyovXG59XG5cbi5saXN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmxpc3QtZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogODUlO1xufVxuXG4ubGlzdC1ib2R5LWZpZWxkcyB7fVxuXG4ubGlzdC1kZXZpZGVyLWdyYWRpZW50IHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzA5NTQ4NDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjMDk1NDg0LCAjY2NjKTtcbn1cblxuLmxpc3QtZGV2aWRlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5jbGlja2FibGUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4uY2FyZCBsYWJlbCxcbi5saXN0LWJvZHktZmllbGRzIGxhYmVsLFxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWFjdGlvbi1pY29ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxudGQgaW5wdXQsXG4uY2FyZC1hY3Rpb24taWNvbnMgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxudGQgYSBpLFxuLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiByZ2IoMTk2LCAxOTEsIDE5MSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4vKmNoYW5nZSB0aGUgaWNvbiBjb2xvciB3aGVuIGNhcmQgaXMgaG92ZXJyZWQqL1xudHI6aG92ZXIgdGQgYSBpLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOmhvdmVyIHRkIGkuZmEtZWRpdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS1lZGl0OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbnRyOmhvdmVyIHRkIGkuZmEtdHJhc2gtYWx0OmhvdmVyLFxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIC5jYXJkLWFjdGlvbi1pY29ucyBpLmZhLXRyYXNoLWFsdDpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIGFjdGlvbiBidXR0b25zIGFuZCBwYWdpbmF0aW9uc1xuKi9cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufVxuXG4udG90YWxfY291bnRzIHtcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYWdlLWxpbmsge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnBhZ2UtY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xufVxuXG4vKiBzZWFyY2ggYXJlYVxuKi9cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWYtYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmYzO1xuICAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjM7XG59XG5cbi8qIHBvcC11cCBtb2RlbHNcbiovXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgLyptYXJnaW46IGF1dG87Ki9cbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDkwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmFkZC1hcmVhIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5iYWRnZS1jbGljayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogR3JpZC9MaXN0IHZpZXcgZmlsdGVyXG4qL1xuLnZpZXctcmFkaW8rbGFiZWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNiYmJkYmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xufVxuXG4udmlldy1yYWRpbzpjaGVja2VkK2xhYmVsIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi52aWV3LXJhZGlvK2xhYmVsOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi52aWV3LXJhZGlvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpc3QtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNvcnQtc2VsZWN0aW9uIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc29ydC1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2F0ZWdvcnkyLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zb3J0LXNlbGVjdGlvbiBpIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50aC1zb3J0LWFycm93IHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucmVhZC1tb3JlIHtcbiAgLypmb250LWZhbWlseTogXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWY7Ki9cbiAgY29sb3I6ICMzMDdiZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlYWQtbW9yZTpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvbnQtc2l6ZS03NSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLm5vLXJlY29yZHMge1xuICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XG4gIC8qY2VudGVyaW5nKi9cbiAgd2lkdGg6IDIwcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5saXN0LXNlbGVjdGlvbiB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5tb2RhbC1iYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtZnJvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmNhdGVnb3J5LW5hdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gICAgICByZ2JhKDIzMywgMjM2LCAyMzksIDEpIDAlLFxuICAgICAgcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjIpIDgwJSk7XG4gIHBhZGRpbmc6IDFyZW0gMjBweCAxcmVtIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hc3NvLWxpbmsge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubGlzdC1jaGVjay1ib3gge1xuICB6b29tOiAxLjE7XG59XG5cbi5jdXJyZW5jeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbC1ndXR0ZXIge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbC1ndXR0ZXI+W2NsYXNzKj1cImNvbC1cIl0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnJlZmluZS1zZWFyY2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGNvbG9yOiAjODY4MTgxO1xufVxuXG4udml0cnVhbC1jYXJkIHt9XG5cbi52aXJ0dWFsLWNhcmQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9uZS1jb2x1bW4tc2VhcmNoIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiA4MCU7XG59XG5cbi50d28tY29sdW1uLXNlYXJjaCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogODAlO1xufVxuXG4udHdvLWNvbHVtbi1zZWFyY2g+LnJvdyxcbi5vbmUtY29sdW1uLXNlYXJjaD4ucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50d28tY29sdW1uLXNlYXJjaCB7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICB9XG59XG5cbi8qICBTZWFyY2ggcGFydCAqL1xuLyogY2xlYXJzIHRoZSAnWCcgZnJvbSBJbnRlcm5ldCBFeHBsb3JlciAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1yZXZlYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBjbGVhcnMgdGhlICdYJyBmcm9tIENocm9tZSAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uLXNlYXJjaC1jbGVhciB7XG4gIHotaW5kZXg6IDM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIC8qIHRleHQgMSArIGxlZnQgMC41ICsgcmlnaHQgMC41ID0gMiByZW0qL1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLypTdGFydCBBcmNoaXZlIFNsaWRlciovXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlucHV0OmZvY3VzKy5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypFbmQgQXJjaGl2ZSBTbGlkZXIqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emailtemplate-list',
          templateUrl: './emailtemplate-list.component.html',
          styleUrls: ['./emailtemplate-list.component.css']
        }]
      }], function () {
        return [{
          type: _emailtemplate_service__WEBPACK_IMPORTED_MODULE_3__["EmailtemplateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate.base.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate.base.service.ts ***!
    \**********************************************************************/

  /*! exports provided: EmailtemplateBaseService */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateBaseService", function () {
      return EmailtemplateBaseService;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");

    var servicePath = '/emailtemplate/';

    var EmailtemplateBaseService = /*#__PURE__*/function (_hicoder_angular_core5) {
      _inherits(EmailtemplateBaseService, _hicoder_angular_core5);

      var _super29 = _createSuper(EmailtemplateBaseService);

      function EmailtemplateBaseService(http, serverRootUrl) {
        _classCallCheck(this, EmailtemplateBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super29.call(this, http, serviceUrl);
      }

      return EmailtemplateBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ViewType, EmailtemplateComponent */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateComponent", function () {
      return EmailtemplateComponent;
    });
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/__ivy_ngcc__/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emailtemplate.service */
    "./src/app/emailing/emailtemplate/emailtemplate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var itemCamelName = 'email Template';

    var EmailtemplateComponent = /*#__PURE__*/function (_hicoder_angular_core6) {
      _inherits(EmailtemplateComponent, _hicoder_angular_core6);

      var _super30 = _createSuper(EmailtemplateComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function EmailtemplateComponent(emailtemplateService, injector, router, route, location) {
        var _this18;

        _classCallCheck(this, EmailtemplateComponent);

        _this18 = _super30.call(this, emailtemplateService, injector, router, route, location);
        _this18.emailtemplateService = emailtemplateService;
        _this18.injector = injector;
        _this18.router = router;
        _this18.route = route;
        _this18.location = location;
        _this18.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this18.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this18.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this18.setItemNames(itemCamelName);

        _this18.briefFieldsInfo = [];

        _this18.briefFieldsInfo.push(['templateName', 'Template Name']);

        _this18.briefFieldsInfo.push(['fromEmail', 'From Email']);

        _this18.briefFieldsInfo.push(['subject', 'Subject']);

        _this18.briefFieldsInfo.push(['tag', 'Tag']);

        _this18.requiredFields = ['templateName', 'subject', 'content', 'tag'];
        _this18.schemaName = 'emailtemplate';
        _this18.modulePath = 'emailing';
        _this18.indexFields = ['templateName'];
        return _this18;
      }

      _createClass(EmailtemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return EmailtemplateComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_0__["MddsBaseComponent"]);

    EmailtemplateComponent.ɵfac = function EmailtemplateComponent_Factory(t) {
      return new (t || EmailtemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    EmailtemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailtemplateComponent,
      selectors: [["ng-component"]],
      inputs: {
        style: "style",
        options: "options",
        searchObj: "searchObj",
        inputData: "inputData",
        queryParams: "queryParams",
        categoryBy: "categoryBy",
        associationField: ["asso", "associationField"],
        id: "id",
        cid: "cid",
        initData: "initData",
        embeddedView: "embeddedView",
        embedMode: "embedMode",
        disableActionButtions: "disableActionButtions",
        detailObj: "detailObj",
        showFieldsStr: "showFieldsStr"
      },
      outputs: {
        outputData: "outputData",
        doneData: "doneData",
        done: "done",
        eventEmitter: "eventEmitter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function EmailtemplateComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailtemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _emailtemplate_service__WEBPACK_IMPORTED_MODULE_2__["EmailtemplateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        searchObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        categoryBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        associationField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['asso']
        }],
        outputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        initData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embeddedView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        embedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        doneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        disableActionButtions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFieldsStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/emailing/emailtemplate/emailtemplate.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/emailing/emailtemplate/emailtemplate.service.ts ***!
    \*****************************************************************/

  /*! exports provided: EmailtemplateService */

  /***/
  function srcAppEmailingEmailtemplateEmailtemplateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailtemplateService", function () {
      return EmailtemplateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emailtemplate_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./emailtemplate.base.service */
    "./src/app/emailing/emailtemplate/emailtemplate.base.service.ts");
    /* harmony import */


    var _emailing_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../emailing.tokens */
    "./src/app/emailing/emailing.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmailtemplateService = /*#__PURE__*/function (_emailtemplate_base_s) {
      _inherits(EmailtemplateService, _emailtemplate_base_s);

      var _super31 = _createSuper(EmailtemplateService);

      function EmailtemplateService(http, emailingServerRootUri) {
        var _this19;

        _classCallCheck(this, EmailtemplateService);

        _this19 = _super31.call(this, http, emailingServerRootUri);
        _this19.emailingServerRootUri = emailingServerRootUri;
        return _this19;
      }

      _createClass(EmailtemplateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return EmailtemplateService;
    }(_emailtemplate_base_service__WEBPACK_IMPORTED_MODULE_1__["EmailtemplateBaseService"]);

    EmailtemplateService.ɵfac = function EmailtemplateService_Factory(t) {
      return new (t || EmailtemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]));
    };

    EmailtemplateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmailtemplateService,
      factory: EmailtemplateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailtemplateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_emailing_tokens__WEBPACK_IMPORTED_MODULE_2__["Emailing_SERVER_ROOT_URI"]]
          }]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=emailing-emailing-module-es5.js.map