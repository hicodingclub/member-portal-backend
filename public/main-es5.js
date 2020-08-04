function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header fixed-top\">\n    <nav class=\"navbar navbar-light navbar-expand-lg\">\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"assets/logo.png\" align=\"left\" class=\"logo\">\n            <div class=\"logo-text mt-2\">HCC Member Portal</div>\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarItems\" aria-controls=\"navbarItems\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\n        <div class=\"collapse navbar-collapse ml-auto mr-auto\" id=\"navbarItems\">\n            <ul class=\"navbar-nav\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{'active': currentUrl === '' || currentUrl === '/' }\" routerLink=\"/\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n\n    </nav>\n\n    <div class=\"auth-icon\">\n        <lib-auth-icon></lib-auth-icon>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div>\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"content-min-height\"></div>\n</div>\n\n<nav class=\"footer footer-font navbar navbar-light\">\n    <div class=\"mx-auto mb-2 pt-2\">\n        <div>© 2020 Hicoding Club, Inc. All rights reserved.</div>\n        <div class=\"contact-info\">\n            <div class=\"ml-3 mr-5\">\n                <i class=\"fas fa-phone\"></i> (408) 718-3455\n            </div>\n            <div>\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 1645 Natalie Ct., San Jose, CA, 95118\n            </div>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership-cust/cust/membership-checking.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership-cust/cust/membership-checking.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipCustCustMembershipCheckingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='centered' *ngIf=\"loading\">\n    <div class=\"loader\"></div>\n</div>\n\n<div *ngIf=\"missingInfo\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">You are missing some additional registration information</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>You will be redirected to the additional information registration page in <span style=\"color: red; font-weight: bold;\">{{leftSeconds}}</span> seconds</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"goNow()\">Go Now</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipAdditionalinfoAdditionalinfoDetailAdditionalinfoDetailFieldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\t\t<div *ngIf=\"detail && showFields.includes('grade')\">\n                    {{detail['grade']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('team')\">\n                    {{detail['team']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('guardianEmail')\">\n                    {{detail['guardianEmail']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('programmingSkill')\">\n                    {{detail['programmingSkill']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('designingSkill')\">\n                    {{detail['designingSkill']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('githubExp')\">\n                    {{detail['githubExp']}}\n\t\t</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipAdditionalinfoAdditionalinfoDetailAdditionalinfoDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"mt-4 mb-4\" *ngIf=\"!options['disableTitle']\">\n\t<h3>Additional Member Information</h3>\n</div>\n<div class=\"detail\" *ngIf=\"detail\">\n\t<div *ngIf=\"!options['disableActionButtions']\"><div *ngIf=\"!disableActionButtions\" class=\"action-buttons my-3\">\n    <a routerLink=\"../../list\"><i class=\"fas fa-list\" title=\"List\"></i><!--  span>&nbsp;&nbsp;{{ItemCamelName}} List</span--></a>\n    <a [routerLink]=\"['../../edit', detail['_id'] ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Edit</a>\n    <a [routerLink]=\"['../../new']\" [queryParams]=\"{cid: detail['_id']}\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">New</a>\n    \n    \n</div>\n</div>\n\t<div class=\"card text-left transparent-border \">\n\t\t<div class=\"grid-fields\">\n\n      <div class=\"card-header grid-head\">\n        <div class=\"ml-1\">\n          <h5>\n            <div class=\"mr-1 d-inline-block\">\n              \n                    {{detail['grade']}}\n            </div>\n          </h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n          <div>\n            <div class=\"d-inline-flex flex-wrap mr-5\" style=\"min-width: 200px;\">\n                <div><label>Desired Team:</label></div>\n                <div class=\"ml-3\">\n                    {{detail['team']}}</div>\n            </div>\n          </div>\n          <div>\n            <div class=\"d-inline-flex flex-wrap mr-5\" style=\"min-width: 200px;\">\n                <div><label>Guardian Email:</label></div>\n                <div class=\"ml-3\">\n                    {{detail['guardianEmail']}}</div>\n            </div>\n          </div>\n          <div>\n            <div class=\"d-inline-flex flex-wrap mr-5\" style=\"min-width: 200px;\">\n                <div><label>Programming Skill:</label></div>\n                <div class=\"ml-3\">\n                    {{detail['programmingSkill']}}</div>\n            </div>\n          </div>\n          <div>\n            <div class=\"d-inline-flex flex-wrap mr-5\" style=\"min-width: 200px;\">\n                <div><label>Designing Skill:</label></div>\n                <div class=\"ml-3\">\n                    {{detail['designingSkill']}}</div>\n            </div>\n          </div>\n          <div>\n            <div class=\"d-inline-flex flex-wrap mr-5\" style=\"min-width: 200px;\">\n                <div><label>Github Experience:</label></div>\n                <div class=\"ml-3\">\n                    {{detail['githubExp']}}</div>\n            </div>\n          </div>\n      </div>\n\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"!options['disablePipeline']\">\n</div>\n\t<div *ngIf=\"!options['disableRefLink']\">\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipAdditionalinfoAdditionalinfoEditAdditionalinfoEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit\" *ngIf=\"detail\">\n\t<div *ngIf=\"!embeddedView\" class=\"action-buttons my-3\">\n\t</div>\n\n\t<div class=\"card\" style=\"text-align: left;\">\n\t\t<div class=\"card-body\">\n\t\t\t<h4 class=\"card-title\" *ngIf=\"!embeddedView && !options['title']\">{{action}} Additional Member Information</h4>\n\t\t\t<h4 class=\"card-title\" *ngIf=\"options['title']\" [ngStyle]=\"style['card-title']\">\n\t\t\t\t{{options['title']}}\n\t\t\t</h4>\n\t\t\t<p\t*ngIf=\"options['subtitle']\" [ngStyle]=\"style['card-subtitle']\">\n\t\t\t\t{{options['subtitle']}}\n\t\t\t</p>\n\t\t\t<form (ngSubmit)=\"onSubmit()\" #editForm=\"ngForm\">\n\t\t\t\t<ng-template [ngIf]=\"action == 'Edit'\">\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('grade')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGrade\">Grade</label>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['grade'].includes(detail['grade']),\n                          'ng-invalid': !enums['grade'].includes(detail['grade'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade8\" [value]=\"'8'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">8</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade9\" [value]=\"'9'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">9</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade10\" [value]=\"'10'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">10</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade11\" [value]=\"'11'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">11</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade12\" [value]=\"'12'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">12</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGradeother\" [value]=\"'other'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">other</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditGrade.valid || EditGrade.pristine || EditGrade.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGrade.errors && EditGrade.errors.required\">\n              Grade is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('guardianEmail')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGuardianEmail\">Guardian Email</label>\n\t\t\t\t\t\t\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control rounded\" id=\"EditGuardianEmail\" \n                    maxlength=\"100\"\n                    [(ngModel)]=\"detail['guardianEmail']\" name=\"EditGuardianEmail\"\n                    #EditGuardianEmail=\"ngModel\">\n            <div *ngIf=\"detail['guardianEmail']\"\n                  class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('guardianEmail')\">\n                  <i class=\"fas fa-times-circle\" title=\"Clear\"></i>\n            </div>\n          </div>\n          <div [hidden]=\"EditGuardianEmail.valid || EditGuardianEmail.pristine || EditGuardianEmail.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGuardianEmail.errors && EditGuardianEmail.errors.maxlength\">\n                GuardianEmail must be at most 100 characters long.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('programmingSkill')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditProgrammingSkill\">Programming Skill</label><span><i data-toggle=\"tooltip\" title=\"How much do you know about programming? (1 is the lowest, 5 is the highest)\" class=\"far fa-question-circle\"></i></span>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['programmingSkill'].includes(detail['programmingSkill']),\n                          'ng-invalid': !enums['programmingSkill'].includes(detail['programmingSkill'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill1\" [value]=\"'1'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">1</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill2\" [value]=\"'2'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">2</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill3\" [value]=\"'3'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">3</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill4\" [value]=\"'4'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">4</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill5\" [value]=\"'5'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">5</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditProgrammingSkill.valid || EditProgrammingSkill.pristine || EditProgrammingSkill.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditProgrammingSkill.errors && EditProgrammingSkill.errors.required\">\n              ProgrammingSkill is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('designingSkill')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditDesigningSkill\">Designing Skill</label><span><i data-toggle=\"tooltip\" title=\"How much do you know about designing? (1 is the lowest, 5 is the highest)\" class=\"far fa-question-circle\"></i></span>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['designingSkill'].includes(detail['designingSkill']),\n                          'ng-invalid': !enums['designingSkill'].includes(detail['designingSkill'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill1\" [value]=\"'1'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">1</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill2\" [value]=\"'2'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">2</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill3\" [value]=\"'3'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">3</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill4\" [value]=\"'4'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">4</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill5\" [value]=\"'5'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">5</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditDesigningSkill.valid || EditDesigningSkill.pristine || EditDesigningSkill.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditDesigningSkill.errors && EditDesigningSkill.errors.required\">\n              DesigningSkill is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('githubExp')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGithubExp\">Github Experience</label>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['githubExp'].includes(detail['githubExp']),\n                          'ng-invalid': !enums['githubExp'].includes(detail['githubExp'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpNo\" [value]=\"'No'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">No</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpYes, web access only\" [value]=\"'Yes, web access only'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">Yes, web access only</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpYes, web and git access\" [value]=\"'Yes, web and git access'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">Yes, web and git access</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditGithubExp.valid || EditGithubExp.pristine || EditGithubExp.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGithubExp.errors && EditGithubExp.errors.required\">\n              GithubExp is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template [ngIf]=\"action == 'Create' || action == 'Add' \">\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('grade')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGrade\">Grade</label>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['grade'].includes(detail['grade']),\n                          'ng-invalid': !enums['grade'].includes(detail['grade'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade8\" [value]=\"'8'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">8</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade9\" [value]=\"'9'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">9</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade10\" [value]=\"'10'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">10</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade11\" [value]=\"'11'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">11</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGrade12\" [value]=\"'12'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">12</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGrade\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGradeother\" [value]=\"'other'\"\n                [(ngModel)]=\"detail['grade']\"\n                #EditGrade=\"ngModel\">\n              <label class=\"form-check-label\">other</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditGrade.valid || EditGrade.pristine || EditGrade.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGrade.errors && EditGrade.errors.required\">\n              Grade is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('team')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditTeam\">Desired Team</label>\n\t\t\t\t\t<span><i data-toggle=\"tooltip\" title=\"which team do you want to join first?\" class=\"far fa-question-circle\"></i></span>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['team'].includes(detail['team']),\n                          'ng-invalid': !enums['team'].includes(detail['team'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditTeam\"\n                class=\"form-check-input\"\n                required\n                id=\"EditTeamWeb Development\" [value]=\"'Web Development'\"\n                [(ngModel)]=\"detail['team']\"\n                #EditTeam=\"ngModel\">\n              <label class=\"form-check-label\">Web Development</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditTeam\"\n                class=\"form-check-input\"\n                required\n                id=\"EditTeamUI Design\" [value]=\"'UI Design'\"\n                [(ngModel)]=\"detail['team']\"\n                #EditTeam=\"ngModel\">\n              <label class=\"form-check-label\">UI Design</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditTeam.valid || EditTeam.pristine || EditTeam.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditTeam.errors && EditTeam.errors.required\">\n              Team is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('guardianEmail')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGuardianEmail\">Guardian Email</label>\n\t\t\t\t\t\t\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control rounded\" id=\"EditGuardianEmail\" \n                    maxlength=\"100\"\n                    [(ngModel)]=\"detail['guardianEmail']\" name=\"EditGuardianEmail\"\n                    #EditGuardianEmail=\"ngModel\">\n            <div *ngIf=\"detail['guardianEmail']\"\n                  class=\"input-group-append icon-clear-inside \" (click)=\"clearValueFromDetail('guardianEmail')\">\n                  <i class=\"fas fa-times-circle\" title=\"Clear\"></i>\n            </div>\n          </div>\n          <div [hidden]=\"EditGuardianEmail.valid || EditGuardianEmail.pristine || EditGuardianEmail.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGuardianEmail.errors && EditGuardianEmail.errors.maxlength\">\n                GuardianEmail must be at most 100 characters long.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('programmingSkill')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditProgrammingSkill\">Programming Skill</label>\n\t\t\t\t\t<span><i data-toggle=\"tooltip\" title=\"How much do you know about programming? (1 is the lowest, 5 is the highest)\" class=\"far fa-question-circle\"></i></span>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['programmingSkill'].includes(detail['programmingSkill']),\n                          'ng-invalid': !enums['programmingSkill'].includes(detail['programmingSkill'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill1\" [value]=\"'1'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">1</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill2\" [value]=\"'2'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">2</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill3\" [value]=\"'3'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">3</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill4\" [value]=\"'4'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">4</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditProgrammingSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditProgrammingSkill5\" [value]=\"'5'\"\n                [(ngModel)]=\"detail['programmingSkill']\"\n                #EditProgrammingSkill=\"ngModel\">\n              <label class=\"form-check-label\">5</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditProgrammingSkill.valid || EditProgrammingSkill.pristine || EditProgrammingSkill.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditProgrammingSkill.errors && EditProgrammingSkill.errors.required\">\n              ProgrammingSkill is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('designingSkill')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditDesigningSkill\">Designing Skill</label>\n\t\t\t\t\t<span><i data-toggle=\"tooltip\" title=\"How much do you know about designing? (1 is the lowest, 5 is the highest)\" class=\"far fa-question-circle\"></i></span>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['designingSkill'].includes(detail['designingSkill']),\n                          'ng-invalid': !enums['designingSkill'].includes(detail['designingSkill'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill1\" [value]=\"'1'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">1</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill2\" [value]=\"'2'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">2</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill3\" [value]=\"'3'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">3</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill4\" [value]=\"'4'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">4</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditDesigningSkill\"\n                class=\"form-check-input\"\n                required\n                id=\"EditDesigningSkill5\" [value]=\"'5'\"\n                [(ngModel)]=\"detail['designingSkill']\"\n                #EditDesigningSkill=\"ngModel\">\n              <label class=\"form-check-label\">5</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditDesigningSkill.valid || EditDesigningSkill.pristine || EditDesigningSkill.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditDesigningSkill.errors && EditDesigningSkill.errors.required\">\n              DesigningSkill is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template [ngIf]=\"!hiddenFields.includes('githubExp')\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"EditGithubExp\">Github Experience</label>\n\t\t\t\t\t\t\n          <div class=\"form-check\"\n              [ngClass]=\"{'ng-valid': enums['githubExp'].includes(detail['githubExp']),\n                          'ng-invalid': !enums['githubExp'].includes(detail['githubExp'])}\"\n            >\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpNo\" [value]=\"'No'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">No</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpYes, web access only\" [value]=\"'Yes, web access only'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">Yes, web access only</label>\n            </div>\n\n            <div class=\"form-check-inline\">\n              <input type=\"radio\" name=\"EditGithubExp\"\n                class=\"form-check-input\"\n                required\n                id=\"EditGithubExpYes, web and git access\" [value]=\"'Yes, web and git access'\"\n                [(ngModel)]=\"detail['githubExp']\"\n                #EditGithubExp=\"ngModel\">\n              <label class=\"form-check-label\">Yes, web and git access</label>\n            </div>\n\n          </div>\n          <div [hidden]=\"EditGithubExp.valid || EditGithubExp.pristine || EditGithubExp.errors.minlength\"\n           class=\"alert alert-danger\">\n            <div *ngIf=\"EditGithubExp.errors && EditGithubExp.errors.required\">\n              GithubExp is required.\n            </div>\n          </div>\n\n\t\t\t\t</fieldset>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-template>\n\t\t\t\t<div class=\"action-buttons-center my-3\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editForm.form.valid\">Submit</button>\n\t\t\t\t\t<button class=\"btn btn-outline-success\" type=\"button\" (click)=\"editCancel()\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipAdditionalinfoAdditionalinfoListAdditionalinfoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"mt-4 mb-4 d-flex\" *ngIf=\"!options['disableTitleRow']\">\n\n\n</div>\n\n\n<ul *ngIf=\"listCategory1.listCategoryField\" class=\"nav nav-pills category-nav\">\n\t<li *ngFor=\"let ele of categoryDisplays; let idx = index;\" class=\"nav-item\" >\n\t\t<a *ngIf=\" listCategory1.showEmptyCategory || (!listCategory1.showEmptyCategory && categoriesCounts[idx] > 0)\"\n\t\t\tclass=\"nav-link\" [ngClass]=\"{'active': idx === selectedCategory }\" [routerLink]=\"['.']\" queryParamsHandling=\"preserve\" (click)=\"categorySelected(idx)\">\n\t\t\t\t{{ele}} <span *ngIf=\"listCategory1.showCategoryCounts\">({{categoriesCounts[idx]}})</span>\n\t\t</a>\n\t</li>\n</ul>\n\n\n<div>\n\t<div *ngIf=\"!options['disableListHead']\" class=\"container search\">\n\t\t<div class=\"row\" *ngIf=\"!options['disableListSearch']\">\n\t\t\t<div class=\"col\">\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"additionalinfoTextSearch\" \n\t\t\t\t\t\t#additionalinfoTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keydown.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for grade, team\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"!options['disableActionButtions']\">\n\t\t\t<div class=\"col\">\n\t\t        <div class=\"action-buttons my-3\">\n\t\t\t\t\t\n\n\t\t\t\t\t<a [routerLink]=\"['../new' ]\" [skipLocationChange]=\"false\" class=\"btn btn-outline-primary\">Create</a>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t<div *ngIf=\"list.length > 2\" class=\"sort-selection mr-5\">\n\t\t\t\t\t<div class=\"dropdown\" style=\"width: 100%;\">\n\t\t\t\t\t\t<button class=\"sort-dropdown btn btn-light btn-sm dropdown-toggle\"\n\t\t\t\t\t\t\ttype=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort: <span *ngIf=\"listSortField && !viewHiddenFields.includes(listSortField)\">{{listSortFieldDisplay}}\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up\"></i>\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('grade', 'Grade', 'asc')\">Grade<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('grade', 'Grade', 'desc')\">Grade<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('team', 'Team', 'asc')\">Team<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('team', 'Team', 'desc')\">Team<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t\t<div *ngIf=\"list.length > 0\">\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"list-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('list')\" [checked]=\"isShowListView('list')\">\n\t\t\t\t\t<label for=\"list-view\"><i class=\"fa fa-th-list\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"grid-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('grid')\" [checked]=\"isShowListView('grid')\">\n\t\t\t\t\t\t<label for=\"grid-view\"><i class=\"fa fa-th\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"table-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('table')\" [checked]=\"isShowListView('table')\">\n\t\t\t\t\t\t<label for=\"table-view\"><i class=\"fa fa-list-alt\"></i></label>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t\t<a class=\"ml-3\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<div class=\"no-records\" *ngIf=\"list.length === 0\">\n\t\t<span *ngIf=\"loaded\">No records found.</span>\n\t\t<span *ngIf=\"!loaded\">Loading...</span>\n\t</div>\n\t<div *ngIf=\"list.length > 0\">\n\t<div class=\"listview\" *ngIf=\"isShowListView('list')\">\n\t\t<div class=\"list-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<hr *ngIf=\"i==0\" class=\"list-devider\">\n\t\t\t<div class=\"list-card text-left\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"list-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\">\n\n      <div class=\"list-body-fields\">\n        <h5>\n          <div class=\"mr-1 d-inline-block\">\n            \n                    {{detail['grade']}}\n          </div>\n        </h5>\n        <div *ngIf=\"detail['team']\" class=\"mr-3 d-inline-flex flex-wrap\">\n          <div><label>Team:</label></div>\n          <div class=\"ml-3\">\n                    {{detail['team']}}\n          </div>\n        </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-action-icons\">\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"list-devider\">\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"gridview\" *ngIf=\"isShowListView('grid')\">\n\t\t<div class=\"grid-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<div class=\"card text-left h-100\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"grid-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\" >\n\n      <div class=\"card-header grid-head\">\n        <div>\n          <h5>\n            <div class=\"mr-1 d-inline-block\">\n              \n                    {{detail['grade']}}\n            </div>\n          </h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n          <div *ngIf=\"detail['team']\" class=\"d-flex flex-wrap\">\n            <div class=\"\"><label>Team:</label></div>\n            <div class=\"ml-3\">\n                    {{detail['team']}}</div>\n          </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-action-icons\">\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<table *ngIf=\"isShowListView('table')\" class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('grade', 'Grade')\">\n\t\t\t\t\tGrade\n\t\t\t\t\t<span *ngIf=\"listSortField === 'grade'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('team', 'Team')\">\n\t\t\t\t\tTeam\n\t\t\t\t\t<span *ngIf=\"listSortField === 'team'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th><th scope=\"col\" style=\"width:3.8rem;\"></th>\n\t    \t</tr>\n\t    </thead>\n\t    <tbody>\n\t\t\t<tr *ngFor=\"let detail of list;  let i = index; let list_index = index;\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i]}\">\n\t            <td scope=\"row\" (click)=\"clickOneItem(i)\"  class=\"pointer read-more mt-3\">\n\t            \t{{(page-1)*perPage+i+1}}\n\t            </td>\n\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['grade']}}\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['team']}}\n\t            </td>\n\t            <td>\n\t\t\t\t\t\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', detail['_id'] ]\" [skipLocationChange]=\"false\"><i class=\"fas fa-edit\" title=\"Edit\"></i></a>\n\t\t\t\t\t\n\t            \t\n\t            \t\n\t\t\t\t\t\n\t\t\t\t\t\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\n\n\t</div>\n\t<div class=\"container\">\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-detail/board-detail-field.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-detail/board-detail-field.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipBoardBoardDetailBoardDetailFieldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\t\t<div *ngIf=\"detail && showFields.includes('name')\">\n                    {{detail['name']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('title')\">\n                    {{detail['title']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('photo')\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('email')\">\n                    {{detail['email']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('order')\">\n                    {{detail['order']}}\n\t\t</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-list/board-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-list/board-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipBoardBoardListBoardListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"mt-4 mb-4 d-flex\" *ngIf=\"!options['disableTitleRow']\">\n\n\t<div class=\"list-title\" *ngIf=\"!options['disableTitle']\">Board Members</div>\n\n</div>\n\n\n<ul *ngIf=\"listCategory1.listCategoryField\" class=\"nav nav-pills category-nav\">\n\t<li *ngFor=\"let ele of categoryDisplays; let idx = index;\" class=\"nav-item\" >\n\t\t<a *ngIf=\" listCategory1.showEmptyCategory || (!listCategory1.showEmptyCategory && categoriesCounts[idx] > 0)\"\n\t\t\tclass=\"nav-link\" [ngClass]=\"{'active': idx === selectedCategory }\" [routerLink]=\"['.']\" queryParamsHandling=\"preserve\" (click)=\"categorySelected(idx)\">\n\t\t\t\t{{ele}} <span *ngIf=\"listCategory1.showCategoryCounts\">({{categoriesCounts[idx]}})</span>\n\t\t</a>\n\t</li>\n</ul>\n\n\n<div>\n\t<div *ngIf=\"!options['disableListHead']\" class=\"container search\">\n\t\t<div class=\"row\" *ngIf=\"!options['disableListSearch']\">\n\t\t\t<div class=\"col\">\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"boardTextSearch\" \n\t\t\t\t\t\t#boardTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keydown.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for name, title, email\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"!options['disableActionButtions']\">\n\t\t\t<div class=\"col\">\n\t\t        <div class=\"action-buttons my-3\">\n\t\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t<div *ngIf=\"list.length > 2\" class=\"sort-selection mr-5\">\n\t\t\t\t\t<div class=\"dropdown\" style=\"width: 100%;\">\n\t\t\t\t\t\t<button class=\"sort-dropdown btn btn-light btn-sm dropdown-toggle\"\n\t\t\t\t\t\t\ttype=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort: <span *ngIf=\"listSortField && !viewHiddenFields.includes(listSortField)\">{{listSortFieldDisplay}}\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up\"></i>\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'asc')\">Name<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'desc')\">Name<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('title', 'Title', 'asc')\">Title<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('title', 'Title', 'desc')\">Title<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('email', 'Email', 'asc')\">Email<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('email', 'Email', 'desc')\">Email<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t\t<div *ngIf=\"list.length > 0\">\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"grid-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('grid')\" [checked]=\"isShowListView('grid')\">\n\t\t\t\t\t\t<label for=\"grid-view\"><i class=\"fa fa-th\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"list-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('list')\" [checked]=\"isShowListView('list')\">\n\t\t\t\t\t<label for=\"list-view\"><i class=\"fa fa-th-list\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"table-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('table')\" [checked]=\"isShowListView('table')\">\n\t\t\t\t\t\t<label for=\"table-view\"><i class=\"fa fa-list-alt\"></i></label>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t\t<a class=\"ml-3\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<div class=\"no-records\" *ngIf=\"list.length === 0\">\n\t\t<span *ngIf=\"loaded\">No records found.</span>\n\t\t<span *ngIf=\"!loaded\">Loading...</span>\n\t</div>\n\t<div *ngIf=\"list.length > 0\">\n\n\t<div class=\"gridview\" *ngIf=\"isShowListView('grid')\">\n\t\t<div class=\"grid-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<div class=\"card text-left h-100\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"grid-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\" >\n\n      <div class=\"card-header grid-head\">\n        <div class=\"grid-head-picture\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n        </div>\n        <div>\n          <h5>\n            <div class=\"mr-1 d-inline-block\">\n              \n                    {{detail['name']}}\n            </div>\n          </h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n          <div *ngIf=\"detail['title']\" class=\"d-flex flex-wrap\">\n            <div class=\"\"><label>Title:</label></div>\n            <div class=\"ml-3\">\n                    {{detail['title']}}</div>\n          </div>\n          <div *ngIf=\"detail['email']\" class=\"d-flex flex-wrap\">\n            <div class=\"\"><label>Email:</label></div>\n            <div class=\"ml-3\">\n                    {{detail['email']}}</div>\n          </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"listview\" *ngIf=\"isShowListView('list')\">\n\t\t<div class=\"list-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<hr *ngIf=\"i==0\" class=\"list-devider\">\n\t\t\t<div class=\"list-card text-left\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"list-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\">\n\n      <div class=\"list-head-picture\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n      </div>\n    \n      <div class=\"list-body-fields\">\n        <h5>\n          <div class=\"mr-1 d-inline-block\">\n            \n                    {{detail['name']}}\n          </div>\n        </h5>\n        <div *ngIf=\"detail['title']\" class=\"mr-3 d-inline-flex flex-wrap\">\n          <div><label>Title:</label></div>\n          <div class=\"ml-3\">\n                    {{detail['title']}}\n          </div>\n        </div>\n        <div *ngIf=\"detail['email']\" class=\"mr-3 d-inline-flex flex-wrap\">\n          <div><label>Email:</label></div>\n          <div class=\"ml-3\">\n                    {{detail['email']}}\n          </div>\n        </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"list-devider\">\n\t\t</div>\n\t</div>\n\n\n\t<table *ngIf=\"isShowListView('table')\" class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('name', 'Name')\">\n\t\t\t\t\tName\n\t\t\t\t\t<span *ngIf=\"listSortField === 'name'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('title', 'Title')\">\n\t\t\t\t\tTitle\n\t\t\t\t\t<span *ngIf=\"listSortField === 'title'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th scope=\"col\">Photo</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('email', 'Email')\">\n\t\t\t\t\tEmail\n\t\t\t\t\t<span *ngIf=\"listSortField === 'email'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t    \t</tr>\n\t    </thead>\n\t    <tbody>\n\t\t\t<tr *ngFor=\"let detail of list;  let i = index; let list_index = index;\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i]}\">\n\t            <td scope=\"row\" (click)=\"clickOneItem(i)\"  class=\"pointer read-more mt-3\">\n\t            \t{{(page-1)*perPage+i+1}}\n\t            </td>\n\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['name']}}\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['title']}}\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['email']}}\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\n\n\t</div>\n\t<div class=\"container\">\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-detail/lead-detail-field.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-detail/lead-detail-field.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipLeadLeadDetailLeadDetailFieldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\t\t<div *ngIf=\"detail && showFields.includes('name')\">\n                    {{detail['name']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('title')\">\n                    {{detail['title']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('photo')\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('email')\">\n                    {{detail['email']}}\n\t\t</div>\n\t\t<div *ngIf=\"detail && showFields.includes('order')\">\n                    {{detail['order']}}\n\t\t</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-list/lead-list.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-list/lead-list.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipLeadLeadListLeadListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"mt-4 mb-4 d-flex\" *ngIf=\"!options['disableTitleRow']\">\n\n\t<div class=\"list-title\" *ngIf=\"!options['disableTitle']\">Team Leads</div>\n\n</div>\n\n\n<ul *ngIf=\"listCategory1.listCategoryField\" class=\"nav nav-pills category-nav\">\n\t<li *ngFor=\"let ele of categoryDisplays; let idx = index;\" class=\"nav-item\" >\n\t\t<a *ngIf=\" listCategory1.showEmptyCategory || (!listCategory1.showEmptyCategory && categoriesCounts[idx] > 0)\"\n\t\t\tclass=\"nav-link\" [ngClass]=\"{'active': idx === selectedCategory }\" [routerLink]=\"['.']\" queryParamsHandling=\"preserve\" (click)=\"categorySelected(idx)\">\n\t\t\t\t{{ele}} <span *ngIf=\"listCategory1.showCategoryCounts\">({{categoriesCounts[idx]}})</span>\n\t\t</a>\n\t</li>\n</ul>\n\n\n<div>\n\t<div *ngIf=\"!options['disableListHead']\" class=\"container search\">\n\t\t<div class=\"row\" *ngIf=\"!options['disableListSearch']\">\n\t\t\t<div class=\"col\">\n\n\t\t\t    <div class=\"input-group\">\n\t              <input type=\"search\" class=\"form-control border border-secondary\" id=\"leadTextSearch\" \n\t\t\t\t\t\t#leadTextSearch [(ngModel)]=\"searchText\"\n\t\t\t\t\t\t(keydown.enter)=\"$event.target.blur();searchList();false\"\n\t\t\t\t\t    placeholder=\"Search for name, title, email\"> \n\t\t\t\t  <div *ngIf=\"searchText\" class=\"input-group-append icon-clear-inside\">\n\t\t\t\t\t<span >\n\t\t\t\t\t    <i class=\"fas fa-times-circle\" (click)=\"onSearchTextClear()\" title=\"Clear\"></i>\n\t\t\t\t    </span>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"searchList()\"><i class=\"fas fa-search\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"!options['disableActionButtions']\">\n\t\t\t<div class=\"col\">\n\t\t        <div class=\"action-buttons my-3\">\n\t\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr/>\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t<div *ngIf=\"list.length > 2\" class=\"sort-selection mr-5\">\n\t\t\t\t\t<div class=\"dropdown\" style=\"width: 100%;\">\n\t\t\t\t\t\t<button class=\"sort-dropdown btn btn-light btn-sm dropdown-toggle\"\n\t\t\t\t\t\t\ttype=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tSort: <span *ngIf=\"listSortField && !viewHiddenFields.includes(listSortField)\">{{listSortFieldDisplay}}\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up\"></i>\n\t\t\t\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'asc')\">Name<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('name', 'Name', 'desc')\">Name<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('title', 'Title', 'asc')\">Title<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('title', 'Title', 'desc')\">Title<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('email', 'Email', 'asc')\">Email<i class=\"fas fa-arrow-up\"></i></a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"setListSortAndRefresh('email', 'Email', 'desc')\">Email<i class=\"fas fa-arrow-down\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t\t<div *ngIf=\"list.length > 0\">\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"grid-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('grid')\" [checked]=\"isShowListView('grid')\">\n\t\t\t\t\t\t<label for=\"grid-view\"><i class=\"fa fa-th\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"list-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('list')\" [checked]=\"isShowListView('list')\">\n\t\t\t\t\t<label for=\"list-view\"><i class=\"fa fa-th-list\"></i></label>\n\n\t\t\t\t\t<input type=\"radio\" name=\"view-filter\" id=\"table-view\" class=\"view-radio\"\n\t\t\t\t\t\t(click)=\"setListViewFilter('table')\" [checked]=\"isShowListView('table')\">\n\t\t\t\t\t\t<label for=\"table-view\"><i class=\"fa fa-list-alt\"></i></label>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t\t<a class=\"ml-3\" routerLink=\".\" (click)=\"onRefresh()\"><i class=\"fa fa-sync-alt\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<div class=\"no-records\" *ngIf=\"list.length === 0\">\n\t\t<span *ngIf=\"loaded\">No records found.</span>\n\t\t<span *ngIf=\"!loaded\">Loading...</span>\n\t</div>\n\t<div *ngIf=\"list.length > 0\">\n\n\t<div class=\"gridview\" *ngIf=\"isShowListView('grid')\">\n\t\t<div class=\"grid-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<div class=\"card text-left h-100\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"grid-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\" >\n\n      <div class=\"card-header grid-head\">\n        <div class=\"grid-head-picture\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n        </div>\n        <div>\n          <h5>\n            <div class=\"mr-1 d-inline-block\">\n              \n                    {{detail['name']}}\n            </div>\n          </h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n          <div *ngIf=\"detail['title']\" class=\"d-flex flex-wrap\">\n            <div class=\"\"><label>Title:</label></div>\n            <div class=\"ml-3\">\n                    {{detail['title']}}</div>\n          </div>\n          <div *ngIf=\"detail['email']\" class=\"d-flex flex-wrap\">\n            <div class=\"\"><label>Email:</label></div>\n            <div class=\"ml-3\">\n                    {{detail['email']}}</div>\n          </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"listview\" *ngIf=\"isShowListView('list')\">\n\t\t<div class=\"list-block\" *ngFor=\"let detail of list;  let i = index; let list_index = index;\">\n\t\t\t<hr *ngIf=\"i==0\" class=\"list-devider\">\n\t\t\t<div class=\"list-card text-left\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i],\n\t\t\t\t\t\t\t'clickable-card': clickItemAction}\" >\n\t\t\t\t<div class=\"list-fields\" [ngClass]=\"{pointer: clickItemAction}\" (click)=\"clickOneItem(i)\">\n\n      <div class=\"list-head-picture\">\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n      </div>\n    \n      <div class=\"list-body-fields\">\n        <h5>\n          <div class=\"mr-1 d-inline-block\">\n            \n                    {{detail['name']}}\n          </div>\n        </h5>\n        <div *ngIf=\"detail['title']\" class=\"mr-3 d-inline-flex flex-wrap\">\n          <div><label>Title:</label></div>\n          <div class=\"ml-3\">\n                    {{detail['title']}}\n          </div>\n        </div>\n        <div *ngIf=\"detail['email']\" class=\"mr-3 d-inline-flex flex-wrap\">\n          <div><label>Email:</label></div>\n          <div class=\"ml-3\">\n                    {{detail['email']}}\n          </div>\n        </div>\n      </div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"list-devider\">\n\t\t</div>\n\t</div>\n\n\n\t<table *ngIf=\"isShowListView('table')\" class=\"table table-bordered table-hover\">\n\t    <thead class=\"thead-light\">\n\t    \t<tr>\n\t\t        <th scope=\"col\">#</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('name', 'Name')\">\n\t\t\t\t\tName\n\t\t\t\t\t<span *ngIf=\"listSortField === 'name'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('title', 'Title')\">\n\t\t\t\t\tTitle\n\t\t\t\t\t<span *ngIf=\"listSortField === 'title'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t\t\t\t<th scope=\"col\">Photo</th>\n\n\t\t\t\t<th class=\"pointer\" scope=\"col\" (click)=\"toggleListSort('email', 'Email')\">\n\t\t\t\t\tEmail\n\t\t\t\t\t<span *ngIf=\"listSortField === 'email'\">\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'asc'\" class=\"fas fa-arrow-up th-sort-arrow\"></i>\n\t\t\t\t\t\t<i *ngIf=\"listSortOrder === 'desc'\" class=\"fas fa-arrow-down th-sort-arrow\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</th>\n\t    \t</tr>\n\t    </thead>\n\t    <tbody>\n\t\t\t<tr *ngFor=\"let detail of list;  let i = index; let list_index = index;\"\n\t\t\t\t[ngClass]=\"{'clicked-row': clickedId==detail['_id'],\n\t\t\t\t\t\t\t'selected-row': clickItemAction === 'select' && checkedItem[i]}\">\n\t            <td scope=\"row\" (click)=\"clickOneItem(i)\"  class=\"pointer read-more mt-3\">\n\t            \t{{(page-1)*perPage+i+1}}\n\t            </td>\n\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['name']}}\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['title']}}\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    <lib-mdds-file-display [downloadUrl]=\"detail['photo']\" [isLarge]=\"false\" [aspectRatio]=\"\"></lib-mdds-file-display>\n\t            </td>\n\t            <td (click)=\"clickOneItem(i)\"  [ngClass]=\"{'pointer': clickItemAction}\">\n\t            \t\n                    {{detail['email']}}\n\t            </td>\n\t        </tr>\n\t    </tbody>\n\t</table>\n\n\n\t</div>\n\t<div class=\"container\">\n\t\t<div *ngIf=\"!options['disablePagination']\">\n\t\t<div class=\"row justify-content-end mt-3\">\n\t\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"total_counts\">\n\t\t\t\t\t<span *ngIf=\"totalCount > 2\">Total: <b>{{totalCount}}</b></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-flex justify-content-center flex-wrap mt-2\">\n\t\t\t<div *ngIf=\"totalPages > 1\">\n\t\t\t\t<ul class=\"pagination justify-content-center\">\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page<=1}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onPreviousPage()\"\n\t\t\t\t\t\taria-label=\"Previous\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"leftMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\n\t\t\t\t\t<li *ngFor=\"let p of pages;  let i = index\" class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'active': p==page}\">\n\t\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onGotoPage(p)\">{{p}}</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"rightMore\" class=\"page-item\"><a class=\"page-link\">...</a></li>\n\t\t\t\t\t<li class=\"page-item\"\n\t\t\t\t\t\t\t[ngClass]=\"{'disabled': page>=totalPages}\">\n\t\t\t\t\t<a class=\"page-link\" routerLink=\".\" (click)=\"onNextPage()\"\n\t\t\t\t\t\taria-label=\"Next\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\" *ngIf=\"totalPages > 1\">\n\t\t\t\t<small>Page</small>&nbsp;<input type=\"number\" class=\"page-control form-control\" [value]=\"page\" (input)=\"onGotoPage($event.target.value)\" />&nbsp;/&nbsp;{{totalPages}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/membership.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership/membership.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipMembershipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\t\t<div class=\"card component-main-card\">\n\t\t  <div class=\"card-body\">\n\t\t\t<router-outlet></router-outlet>\n\t\t  </div>\n\t\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"mt-4 mb-4 d-flex\">\n\n        <div class=\"list-title\">General Information: hicodingclub@gmail.com</div>\n\n    </div>\n    <div>\n        <app-board-list></app-board-list>\n    </div>\n    <div>\n        <app-lead-list></app-lead-list>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    more functions comming soon\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/fesm2015/hicoder-angular-auth.js");
    /* harmony import */


    var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/homepage/homepage.component */
    "./src/app/pages/homepage/homepage.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'contact',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'membership',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./membership/membership.module */
        "./src/app/membership/membership.module.ts")).then(function (m) {
          return m.MembershipModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background-color: #00274C; /*#1975d2*/\n  height: 100px;\n  color: #e8f1fa;\n  display: flex;\n  width: 100%;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(255,255,255, 0.8);\n}\n\n.navbar-light .navbar-toggler {\n  background-color: white;\n  color: rgba(0,0,0,.5);\n  border-color: rgba(0,0,0,.1);\n}\n\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(255,255,255, 1)\n}\n\n.logo {\n    max-width:60px;\n}\n\n.logo-text {\n  margin-left: 70px; /*logo max-width + 10 */\n  color: white;\n\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  font-size: 2rem;\n}\n\n.logo-text span {\n  color: white;\n}\n\n.nav-item {\n  margin: 0 2px 0 2px;\n  font-size: 1rem;\n}\n\n.navbar-collapse {\n  background-color: #00274C;\n  justify-content: flex-end;\n}\n\n.navbar {\n  flex-grow: 1;\n  margin-right: 1.5rem;\n  padding-top: 0;\n}\n\n.auth-icon {\n  margin-left: auto;\n  margin-right: 2rem;\n  margin-top: 0.5rem;\n}\n\n.content {\n  position: relative;\n\tpadding-top: 100px; /*same height with .header*/\n\twidth: 100%;\n  min-height: calc(100vh - 70px);  /*viewport height substracts footer height*/\n  \n  display: flex;\n  flex-direction: column;\n\n  background-color: #F6F6F6;\n\n}\n\n.content-min-height {\n  flex-grow: 1; /* grow to the full height*/\n  background-color: #F6F6F6;;\n  /* box-sizing: border-box; */\n  background-clip: content-box;\n}\n\n.footer {\n  background-color: #00274C80;\n  color: white;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 70px;\n}\n\n.contact-info {\n  display: flex;\n\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 1200px) {\n  .logo-text {\n    font-size: 1.1rem;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .logo-text {\n    font-size: 1.1rem;\n    display: none;\n  }\n  .footer {\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSx1QkFBdUI7RUFDMUMsWUFBWTs7RUFFWixxRUFBcUU7RUFDckUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0NBQ25CLGtCQUFrQixFQUFFLDJCQUEyQjtDQUMvQyxXQUFXO0VBQ1YsOEJBQThCLEdBQUcsMkNBQTJDOztFQUU1RSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0Qix5QkFBeUI7O0FBRTNCOztBQUNBO0VBQ0UsWUFBWSxFQUFFLDJCQUEyQjtFQUN6Qyx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhOztFQUViLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0QzsgLyojMTk3NWQyKi9cbiAgaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICNlOGYxZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwuMSk7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAxKVxufVxuXG4ubG9nbyB7XG4gICAgbWF4LXdpZHRoOjYwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICBtYXJnaW4tbGVmdDogNzBweDsgLypsb2dvIG1heC13aWR0aCArIDEwICovXG4gIGNvbG9yOiB3aGl0ZTtcblxuICAvKmZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjsqL1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5sb2dvLXRleHQgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdi1pdGVtIHtcbiAgbWFyZ2luOiAwIDJweCAwIDJweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0QztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuXG4ubmF2YmFyIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uYXV0aC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy10b3A6IDEwMHB4OyAvKnNhbWUgaGVpZ2h0IHdpdGggLmhlYWRlciovXG5cdHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7ICAvKnZpZXdwb3J0IGhlaWdodCBzdWJzdHJhY3RzIGZvb3RlciBoZWlnaHQqL1xuICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xuXG59XG4uY29udGVudC1taW4taGVpZ2h0IHtcbiAgZmxleC1ncm93OiAxOyAvKiBncm93IHRvIHRoZSBmdWxsIGhlaWdodCovXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7O1xuICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0QzgwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmxvZ28tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent(router) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.router = router;
      this.title = 'app';
      this.currentUrl = '';
      router.events.subscribe(function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
          if (event.urlAfterRedirects) {
            _this.currentUrl = event.urlAfterRedirects;
          } else {
            _this.currentUrl = event.url;
          }

          if (window.gtag) {
            window.gtag('config', 'UA-145853353-1', {
              'page_path': _this.currentUrl
            });
          }
        }
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/fesm2015/hicoder-angular-auth.js");
    /* harmony import */


    var _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./injection-tokens/auth.conf */
    "./src/app/injection-tokens/auth.conf.ts");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/fesm2015/hicoder-angular-file.js");
    /* harmony import */


    var _injection_tokens_file_upload_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./injection-tokens/file-upload.config */
    "./src/app/injection-tokens/file-upload.config.ts");
    /* harmony import */


    var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/homepage/homepage.component */
    "./src/app/pages/homepage/homepage.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _membership_membership_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./membership/membership.module */
    "./src/app/membership/membership.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"], _membership_membership_module__WEBPACK_IMPORTED_MODULE_12__["MembershipModule"]],
      providers: [{
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_AUTH_PAGE_ROOT_URI"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_page_root_uri"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_SERVER_ROOT_URI"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_server_root_uri"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_INTERFACES"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_interfaces"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_DROPDOWN_ITEMS"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_dropdown_items"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_LOGIN_PIPELINE"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_login_pipeline"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_REGISTRATION_REQUIRED"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_reg_required"]
      }, {
        provide: _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATION_REGISTRATION_PIPELINE"],
        useValue: _injection_tokens_auth_conf__WEBPACK_IMPORTED_MODULE_7__["authentication_registration_pipeline"]
      }, {
        provide: _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_8__["FILE_UPLOAD_URI"],
        useValue: _injection_tokens_file_upload_config__WEBPACK_IMPORTED_MODULE_9__["file_upload_uri"]
      }, {
        provide: _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_8__["FILE_DOWNLOAD_URI"],
        useValue: _injection_tokens_file_upload_config__WEBPACK_IMPORTED_MODULE_9__["file_download_uri"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/injection-tokens/auth.conf.ts":
  /*!***********************************************!*\
    !*** ./src/app/injection-tokens/auth.conf.ts ***!
    \***********************************************/

  /*! exports provided: authentication_page_root_uri, authentication_server_root_uri, authentication_interfaces, authentication_login_pipeline, authentication_registration_pipeline, authentication_dropdown_items, authentication_reg_required */

  /***/
  function srcAppInjectionTokensAuthConfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_page_root_uri", function () {
      return authentication_page_root_uri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_server_root_uri", function () {
      return authentication_server_root_uri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_interfaces", function () {
      return authentication_interfaces;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_login_pipeline", function () {
      return authentication_login_pipeline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_registration_pipeline", function () {
      return authentication_registration_pipeline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_dropdown_items", function () {
      return authentication_dropdown_items;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authentication_reg_required", function () {
      return authentication_reg_required;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var authentication_page_root_uri = '/auth';
    var authentication_server_root_uri = '/api/auth';
    var authentication_interfaces = 'users';
    var authentication_login_pipeline = '/membership/cust/check';
    var authentication_registration_pipeline = '/membership/additionalinfo/new';
    var authentication_dropdown_items = [// {displayName: 'Student Profiles', routerLink: '/academics/student'},
      // {displayName: 'Class Enrollments', routerLink: '/academics/classenroll'},
    ];
    var authentication_reg_required = {
      firstName: true,
      lastName: true,
      phone: false
    };
    /***/
  },

  /***/
  "./src/app/injection-tokens/file-upload.config.ts":
  /*!********************************************************!*\
    !*** ./src/app/injection-tokens/file-upload.config.ts ***!
    \********************************************************/

  /*! exports provided: file_upload_uri, file_download_uri */

  /***/
  function srcAppInjectionTokensFileUploadConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "file_upload_uri", function () {
      return file_upload_uri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "file_download_uri", function () {
      return file_download_uri;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var file_upload_uri = '/api/files/upload';
    var file_download_uri = '/api/files/download';
    /***/
  },

  /***/
  "./src/app/membership-cust/base/additionalinfo/additionalinfo-detail.cust.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/membership-cust/base/additionalinfo/additionalinfo-detail.cust.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AdditionalinfoDetailCustComponent */

  /***/
  function srcAppMembershipCustBaseAdditionalinfoAdditionalinfoDetailCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoDetailCustComponent", function () {
      return AdditionalinfoDetailCustComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../membership/additionalinfo/additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");

    var AdditionalinfoDetailCustComponent = /*#__PURE__*/function (_membership_additiona) {
      _inherits(AdditionalinfoDetailCustComponent, _membership_additiona);

      var _super = _createSuper(AdditionalinfoDetailCustComponent);

      function AdditionalinfoDetailCustComponent() {
        _classCallCheck(this, AdditionalinfoDetailCustComponent);

        return _super.apply(this, arguments);
      }

      return AdditionalinfoDetailCustComponent;
    }(_membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__["AdditionalinfoComponent"]);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    
    import { Input } from '@angular/core';
    
    import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';
    
    export class AdditionalinfoDetailCustComponent extends AdditionalinfoComponent {
    }
    **** End of recent updates.<<<*/

    /***/

  },

  /***/
  "./src/app/membership-cust/base/additionalinfo/additionalinfo-edit.cust.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/membership-cust/base/additionalinfo/additionalinfo-edit.cust.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AdditionalinfoEditCustComponent */

  /***/
  function srcAppMembershipCustBaseAdditionalinfoAdditionalinfoEditCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoEditCustComponent", function () {
      return AdditionalinfoEditCustComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../membership/additionalinfo/additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/fesm2015/hicoder-angular-auth.js");

    var AdditionalinfoEditCustComponent = /*#__PURE__*/function (_membership_additiona2) {
      _inherits(AdditionalinfoEditCustComponent, _membership_additiona2);

      var _super2 = _createSuper(AdditionalinfoEditCustComponent);

      function AdditionalinfoEditCustComponent() {
        var _this2;

        _classCallCheck(this, AdditionalinfoEditCustComponent);

        _this2 = _super2.apply(this, arguments);
        _this2.options = {};
        _this2.style = {
          'card-title': {
            color: 'red'
          }
        };
        return _this2;
      }

      _createClass(AdditionalinfoEditCustComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var authService = this.injector.get(_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]);
          authService.allowTemporayToken();

          _get(_getPrototypeOf(AdditionalinfoEditCustComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return AdditionalinfoEditCustComponent;
    }(_membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__["AdditionalinfoComponent"]);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    import { Input } from '@angular/core';
    import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';
    export class AdditionalinfoEditCustComponent extends AdditionalinfoComponent {
    }
    **** End of recent updates.<<<*/

    /***/

  },

  /***/
  "./src/app/membership-cust/base/additionalinfo/additionalinfo-list.cust.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/membership-cust/base/additionalinfo/additionalinfo-list.cust.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AdditionalinfoListCustComponent */

  /***/
  function srcAppMembershipCustBaseAdditionalinfoAdditionalinfoListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoListCustComponent", function () {
      return AdditionalinfoListCustComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../membership/additionalinfo/additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");

    var AdditionalinfoListCustComponent = /*#__PURE__*/function (_membership_additiona3) {
      _inherits(AdditionalinfoListCustComponent, _membership_additiona3);

      var _super3 = _createSuper(AdditionalinfoListCustComponent);

      function AdditionalinfoListCustComponent() {
        _classCallCheck(this, AdditionalinfoListCustComponent);

        return _super3.apply(this, arguments);
      }

      return AdditionalinfoListCustComponent;
    }(_membership_additionalinfo_additionalinfo_component__WEBPACK_IMPORTED_MODULE_1__["AdditionalinfoComponent"]);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    
    import { Input } from '@angular/core';
    
    import { AdditionalinfoComponent } from '../../../membership/additionalinfo/additionalinfo.component';
    
    export class AdditionalinfoListCustComponent extends AdditionalinfoComponent {
    }
    
    **** End of recent updates.<<<*/

    /***/

  },

  /***/
  "./src/app/membership-cust/base/board/board-list.cust.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/membership-cust/base/board/board-list.cust.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BoardListCustComponent */

  /***/
  function srcAppMembershipCustBaseBoardBoardListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardListCustComponent", function () {
      return BoardListCustComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../membership/board/board.component */
    "./src/app/membership/board/board.component.ts");

    var BoardListCustComponent = /*#__PURE__*/function (_membership_board_boa) {
      _inherits(BoardListCustComponent, _membership_board_boa);

      var _super4 = _createSuper(BoardListCustComponent);

      function BoardListCustComponent() {
        var _this3;

        _classCallCheck(this, BoardListCustComponent);

        _this3 = _super4.apply(this, arguments);
        _this3.options = {
          'disableListHead': true,
          'disablePagination': true
        };
        return _this3;
      }

      return BoardListCustComponent;
    }(_membership_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:36 GMT-0700 (Pacific Daylight Time)
    
    import { Input } from '@angular/core';
    
    import { BoardComponent } from '../../../membership/board/board.component';
    
    export class BoardListCustComponent extends BoardComponent {
    }
    
    **** End of recent updates.<<<*/

    /***/

  },

  /***/
  "./src/app/membership-cust/base/lead/lead-list.cust.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/membership-cust/base/lead/lead-list.cust.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LeadListCustComponent */

  /***/
  function srcAppMembershipCustBaseLeadLeadListCustComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadListCustComponent", function () {
      return LeadListCustComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_lead_lead_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../membership/lead/lead.component */
    "./src/app/membership/lead/lead.component.ts");

    var LeadListCustComponent = /*#__PURE__*/function (_membership_lead_lead) {
      _inherits(LeadListCustComponent, _membership_lead_lead);

      var _super5 = _createSuper(LeadListCustComponent);

      function LeadListCustComponent() {
        var _this4;

        _classCallCheck(this, LeadListCustComponent);

        _this4 = _super5.apply(this, arguments);
        _this4.options = {
          'disableListHead': true,
          'disablePagination': true
        };
        return _this4;
      }

      return LeadListCustComponent;
    }(_membership_lead_lead_component__WEBPACK_IMPORTED_MODULE_1__["LeadComponent"]);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:36 GMT-0700 (Pacific Daylight Time)
    
    import { Input } from '@angular/core';
    
    import { LeadComponent } from '../../../membership/lead/lead.component';
    
    export class LeadListCustComponent extends LeadComponent {
    }
    
    **** End of recent updates.<<<*/

    /***/

  },

  /***/
  "./src/app/membership-cust/cust/membership-checking.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/membership-cust/cust/membership-checking.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipCustCustMembershipCheckingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n    /* Safari */\n    animation: spin 2s linear infinite;\n}\n\n.centered {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    /* bring your own prefixes */\n    transform: translate(-50%, -50%);\n}\n\n.modal {\n    display: block;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC1jdXN0L2N1c3QvbWVtYmVyc2hpcC1jaGVja2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLFdBQVc7O0FBRVg7SUFDSTtRQUNJLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzaGlwLWN1c3QvY3VzdC9tZW1iZXJzaGlwLWNoZWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAvKiBTYWZhcmkgKi9cbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKiBTYWZhcmkgKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/membership-cust/cust/membership-checking.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/membership-cust/cust/membership-checking.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MembershipCheckingComponent */

  /***/
  function srcAppMembershipCustCustMembershipCheckingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipCheckingComponent", function () {
      return MembershipCheckingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_additionalinfo_additionalinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../membership/additionalinfo/additionalinfo.service */
    "./src/app/membership/additionalinfo/additionalinfo.service.ts");

    var MembershipCheckingComponent = /*#__PURE__*/function () {
      function MembershipCheckingComponent(additionalinfoService, router, route, location) {
        var _this5 = this;

        _classCallCheck(this, MembershipCheckingComponent);

        this.additionalinfoService = additionalinfoService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.loading = true;
        this.missingInfo = false;
        this.leftSeconds = 10;
        this.additionalinfoService.getListWithCondition(1, 1).subscribe(function (result) {
          _this5.loading = false;

          if (result.items.length > 0) {
            _this5.router.navigate(['/']);
          } else {
            _this5.missingInfo = true;
            setTimeout(function () {
              _this5.router.navigateByUrl('/membership/additionalinfo/new');
            }, 10000);
            setInterval(function () {
              _this5.leftSeconds -= 1;
            }, 1000);
          }
        }, function (error) {
          _this5.loading = false;
          console.log(error);

          _this5.router.navigate(['/']);
        });
      }

      _createClass(MembershipCheckingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "goNow",
        value: function goNow() {
          this.router.navigateByUrl('/membership/additionalinfo/new');
        }
      }]);

      return MembershipCheckingComponent;
    }();

    MembershipCheckingComponent.ctorParameters = function () {
      return [{
        type: _membership_additionalinfo_additionalinfo_service__WEBPACK_IMPORTED_MODULE_4__["AdditionalinfoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    MembershipCheckingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-membership-checking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./membership-checking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership-cust/cust/membership-checking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./membership-checking.component.css */
      "./src/app/membership-cust/cust/membership-checking.component.css"))["default"]]
    })], MembershipCheckingComponent);
    /***/
  },

  /***/
  "./src/app/membership-cust/membership-routing.cust.path.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/membership-cust/membership-routing.cust.path.ts ***!
    \*****************************************************************/

  /*! exports provided: MembershipRoutingCustPath */

  /***/
  function srcAppMembershipCustMembershipRoutingCustPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipRoutingCustPath", function () {
      return MembershipRoutingCustPath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _cust_membership_checking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cust/membership-checking.component */
    "./src/app/membership-cust/cust/membership-checking.component.ts"); // Path under membership/cust/


    var MembershipRoutingCustPath = [// your customization goes here
    {
      path: 'check',
      component: _cust_membership_checking_component__WEBPACK_IMPORTED_MODULE_1__["MembershipCheckingComponent"]
    }];
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    
    
    
    // Path under membership/cust/
    export const MembershipRoutingCustPath = [
      // your customization goes here
    ];
    **** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/membership-cust/membership.conf.ts":
  /*!****************************************************!*\
    !*** ./src/app/membership-cust/membership.conf.ts ***!
    \****************************************************/

  /*! exports provided: MembershipCoreRoutes, MembershipRoutes, membership_server_root_uri */

  /***/
  function srcAppMembershipCustMembershipConfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipCoreRoutes", function () {
      return MembershipCoreRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipRoutes", function () {
      return MembershipRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "membership_server_root_uri", function () {
      return membership_server_root_uri;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _membership_membership_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../membership/membership.component */
    "./src/app/membership/membership.component.ts");
    /* harmony import */


    var _membership_membership_routing_core_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../membership/membership-routing.core.path */
    "./src/app/membership/membership-routing.core.path.ts");
    /* harmony import */


    var _membership_routing_cust_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./membership-routing.cust.path */
    "./src/app/membership-cust/membership-routing.cust.path.ts"); //Import routing paths


    var MembershipCoreRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
      path: '',
      // non lazy load config. Include module in app module.
      // path: 'membership',
      component: _membership_membership_component__WEBPACK_IMPORTED_MODULE_1__["MembershipComponent"],
      children: [{
        path: '',
        redirectTo: 'additionalinfo',
        pathMatch: 'full'
      }, {
        path: 'additionalinfo',
        children: _membership_membership_routing_core_path__WEBPACK_IMPORTED_MODULE_2__["additionalinfoRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'additionalinfo'
        }
      }, {
        path: 'board',
        children: _membership_membership_routing_core_path__WEBPACK_IMPORTED_MODULE_2__["boardRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'board'
        }
      }, {
        path: 'lead',
        children: _membership_membership_routing_core_path__WEBPACK_IMPORTED_MODULE_2__["leadRoutingCorePath"],
        data: {
          mraLevel: 1,
          item: 'lead'
        }
      }]
    }];
    var MembershipRoutes = [{
      // Lazy Load: and add to app routing: 
      //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
      path: 'cust',
      // non lazy load config. Include module in app module.
      // path: 'membership/cust',
      children: _membership_routing_cust_path__WEBPACK_IMPORTED_MODULE_3__["MembershipRoutingCustPath"]
    }];
    var membership_server_root_uri = '/api/membership';
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    import { Routes } from '@angular/router';
    import { MembershipComponent } from '../membership/membership.component';
    //Import routing paths
    import {
    additionalinfoRoutingCorePath,
    boardRoutingCorePath,
    leadRoutingCorePath,
    } from '../membership/membership-routing.core.path';
    export const MembershipCoreRoutes: Routes = [
    {
    // Lazy Load: and add to app routing:
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'membership',
    component: MembershipComponent,
    children: [
    {path: '',  redirectTo: 'additionalinfo', pathMatch: 'full'},
    { path: 'additionalinfo',
    children: additionalinfoRoutingCorePath,
    data: {mraLevel: 1, item: 'additionalinfo'}
    },
    { path: 'board',
    children: boardRoutingCorePath,
    data: {mraLevel: 1, item: 'board'}
    },
    { path: 'lead',
    children: leadRoutingCorePath,
    data: {mraLevel: 1, item: 'lead'}
    },
    ]
    },
    ];
    import { MembershipRoutingCustPath } from './membership-routing.cust.path';
    export const MembershipRoutes: Routes = [
    {
    // Lazy Load: and add to app routing:
    //     { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'membership/cust',
    children: MembershipRoutingCustPath,
    },
    ];**** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/membership-cust/membership.cust.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/membership-cust/membership.cust.module.ts ***!
    \***********************************************************/

  /*! exports provided: MembershipCustModule */

  /***/
  function srcAppMembershipCustMembershipCustModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipCustModule", function () {
      return MembershipCustModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _membership_membership_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../membership/membership.core.module */
    "./src/app/membership/membership.core.module.ts");
    /* harmony import */


    var _cust_membership_checking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cust/membership-checking.component */
    "./src/app/membership-cust/cust/membership-checking.component.ts");

    var MembershipCustModule = function MembershipCustModule() {
      _classCallCheck(this, MembershipCustModule);
    };

    MembershipCustModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _membership_membership_core_module__WEBPACK_IMPORTED_MODULE_5__["MembershipCoreModule"]],
      declarations: [_cust_membership_checking_component__WEBPACK_IMPORTED_MODULE_6__["MembershipCheckingComponent"]],
      exports: [],
      providers: [],
      entryComponents: []
    })], MembershipCustModule);
    /*>>> Please check this recent updates and merge with existing ones***
    **Date: Sat Jun 20 2020 21:52:35 GMT-0700 (Pacific Daylight Time)
    
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';
    import { FormsModule } from '@angular/forms';
    
    import { MembershipCoreModule } from '../membership/membership.core.module';
    
    @NgModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    
        MembershipCoreModule,
      ],
      declarations: [
      ],
      exports: [
      ],
      providers: [
      ],
      entryComponents: [
      ],
    })
    export class MembershipCustModule { }
    **** End of recent updates.<<<*/

    /***/
  },

  /***/
  "./src/app/membership-cust/membership.tokens.value.ts":
  /*!************************************************************!*\
    !*** ./src/app/membership-cust/membership.tokens.value.ts ***!
    \************************************************************/

  /*! exports provided: membership_server_root_uri */

  /***/
  function srcAppMembershipCustMembershipTokensValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "membership_server_root_uri", function () {
      return membership_server_root_uri;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var membership_server_root_uri = '/api/membership';
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AdditionalinfoDetailFieldComponent */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoDetailAdditionalinfoDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoDetailFieldComponent", function () {
      return AdditionalinfoDetailFieldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _additionalinfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");
    /* harmony import */


    var _additionalinfo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../additionalinfo.service */
    "./src/app/membership/additionalinfo/additionalinfo.service.ts");

    var AdditionalinfoDetailFieldComponent = /*#__PURE__*/function (_additionalinfo_compo) {
      _inherits(AdditionalinfoDetailFieldComponent, _additionalinfo_compo);

      var _super6 = _createSuper(AdditionalinfoDetailFieldComponent);

      function AdditionalinfoDetailFieldComponent(additionalinfoService, injector, router, route, location) {
        var _this6;

        _classCallCheck(this, AdditionalinfoDetailFieldComponent);

        _this6 = _super6.call(this, additionalinfoService, injector, router, route, location, _additionalinfo_component__WEBPACK_IMPORTED_MODULE_4__["ViewType"].DETAIL);
        _this6.additionalinfoService = additionalinfoService;
        _this6.injector = injector;
        _this6.router = router;
        _this6.route = route;
        _this6.location = location;
        _this6.fieldDisplayNames = {
          'grade': 'Grade',
          'team': 'Desired Team',
          'guardianEmail': 'Guardian Email',
          'programmingSkill': 'Programming Skill',
          'designingSkill': 'Designing Skill',
          'githubExp': 'Github Experience'
        };
        _this6.enums['grade'] = ['8', '9', '10', '11', '12', 'other'];
        _this6.enums['team'] = ['Web Development', 'UI Design'];
        _this6.enums['programmingSkill'] = ['1', '2', '3', '4', '5'];
        _this6.enums['designingSkill'] = ['1', '2', '3', '4', '5'];
        _this6.enums['githubExp'] = ['No', 'Yes, web access only', 'Yes, web and git access'];

        _this6.stringFields.push('grade');

        _this6.stringFields.push('team');

        _this6.stringFields.push('guardianEmail');

        _this6.stringFields.push('programmingSkill');

        _this6.stringFields.push('designingSkill');

        _this6.stringFields.push('githubExp');

        return _this6;
      }

      _createClass(AdditionalinfoDetailFieldComponent, [{
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

      return AdditionalinfoDetailFieldComponent;
    }(_additionalinfo_component__WEBPACK_IMPORTED_MODULE_4__["AdditionalinfoComponent"]);

    AdditionalinfoDetailFieldComponent.ctorParameters = function () {
      return [{
        type: _additionalinfo_service__WEBPACK_IMPORTED_MODULE_5__["AdditionalinfoService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    AdditionalinfoDetailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-additionalinfo-detail-field',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./additionalinfo-detail-field.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./additionalinfo-detail.component.css */
      "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.css"))["default"]]
    })], AdditionalinfoDetailFieldComponent);
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.css":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.css ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoDetailAdditionalinfoDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n  margin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left,\n.fa-list {\n  float: left;\n  display: inline-block;\n  /*margin-left: 2.5rem;*/\n  margin-top: 0.75rem;\n}\n\n.action-buttons span {\n  float: left;\n  display: inline-block;\n  margin-left: 0rem;\n  margin-top: 0.5rem;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.card label, .field-label {\n  font-weight: bold;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n  text-align: left;\n}\n\n.referred-by-links a {\n  margin-left: 1rem;\n}\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: center;\n  /*width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);*/\n}\n\n.grid-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check {\n  zoom: 2;\n}\n\n.slide-image {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9hZGRpdGlvbmFsaW5mby9hZGRpdGlvbmFsaW5mby1kZXRhaWwvYWRkaXRpb25hbGluZm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTs7OztDQUlDOztBQUNEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7eUNBQ3VDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9hZGRpdGlvbmFsaW5mby9hZGRpdGlvbmFsaW5mby1kZXRhaWwvYWRkaXRpb25hbGluZm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCxcbi5mYS1saXN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyptYXJnaW4tbGVmdDogMi41cmVtOyovXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG5cbi5hY3Rpb24tYnV0dG9ucyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCBsYWJlbCwgLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyp3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsqL1xufVxuXG4uZ3JpZC1oZWFkLXBpY3R1cmUge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG5cbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5ncmlkLWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4udHJhbnNwYXJlbnQtYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uaW5mby10ZXJtLXRleHQge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi50ZXJtLWNoZWNrIHtcbiAgem9vbTogMjtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: AdditionalinfoDetailComponent */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoDetailAdditionalinfoDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoDetailComponent", function () {
      return AdditionalinfoDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_base_additionalinfo_additionalinfo_detail_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../membership-cust/base/additionalinfo/additionalinfo-detail.cust.component */
    "./src/app/membership-cust/base/additionalinfo/additionalinfo-detail.cust.component.ts");
    /* harmony import */


    var _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");
    /* harmony import */


    var _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../additionalinfo.service */
    "./src/app/membership/additionalinfo/additionalinfo.service.ts");

    var AdditionalinfoDetailComponent = /*#__PURE__*/function (_membership_cust_base) {
      _inherits(AdditionalinfoDetailComponent, _membership_cust_base);

      var _super7 = _createSuper(AdditionalinfoDetailComponent);

      // @Input() 
      // public id:string;
      // @Input()
      // public searchObj:any;
      // @Input()
      // public disableActionButtions:boolean;
      // @Output()
      // public eventEmitter: EventEmitter<any> = new EventEmitter();
      function AdditionalinfoDetailComponent(additionalinfoService, injector, router, route, location) {
        var _this7;

        _classCallCheck(this, AdditionalinfoDetailComponent);

        _this7 = _super7.call(this, additionalinfoService, injector, router, route, location, _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__["ViewType"].DETAIL);
        _this7.additionalinfoService = additionalinfoService;
        _this7.injector = injector;
        _this7.router = router;
        _this7.route = route;
        _this7.location = location;
        _this7.fieldDisplayNames = {
          'grade': 'Grade',
          'team': 'Desired Team',
          'guardianEmail': 'Guardian Email',
          'programmingSkill': 'Programming Skill',
          'designingSkill': 'Designing Skill',
          'githubExp': 'Github Experience'
        };
        _this7.enums['grade'] = ['8', '9', '10', '11', '12', 'other'];
        _this7.enums['team'] = ['Web Development', 'UI Design'];
        _this7.enums['programmingSkill'] = ['1', '2', '3', '4', '5'];
        _this7.enums['designingSkill'] = ['1', '2', '3', '4', '5'];
        _this7.enums['githubExp'] = ['No', 'Yes, web access only', 'Yes, web and git access'];

        _this7.stringFields.push('grade');

        _this7.stringFields.push('team');

        _this7.stringFields.push('guardianEmail');

        _this7.stringFields.push('programmingSkill');

        _this7.stringFields.push('designingSkill');

        _this7.stringFields.push('githubExp');

        return _this7;
      }

      _createClass(AdditionalinfoDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(AdditionalinfoDetailComponent.prototype), "ngOnInit", this).call(this);

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

      return AdditionalinfoDetailComponent;
    }(_membership_cust_base_additionalinfo_additionalinfo_detail_cust_component__WEBPACK_IMPORTED_MODULE_4__["AdditionalinfoDetailCustComponent"]);

    AdditionalinfoDetailComponent.ctorParameters = function () {
      return [{
        type: _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__["AdditionalinfoService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    AdditionalinfoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-additionalinfo-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./additionalinfo-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./additionalinfo-detail.component.css */
      "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.css"))["default"]]
    })], AdditionalinfoDetailComponent);
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoEditAdditionalinfoEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit {\n\twidth: 75%;\n\tmargin: 0 auto;\n}\n\nfieldset > .form-control, .input-group, .form-check, .alert {\n\twidth: 90%\n}\n\n.action-buttons {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: right;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n}\n\n.action-buttons .fa-angle-double-left {\n\tfloat: left;\n\tdisplay: inline-block;\n\tmargin-left: 2.5rem;\n\tmargin-top:  0.75rem\n}\n\n.action-buttons-center {\n\twidth: 100%;\n\tfloat:right; \n\ttext-align: center;\n\tmargin-bottom: 1.25rem;\n}\n\n.action-buttons-center .btn {\n\tdisplay: inline-block;\n  margin-left: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.card-title {\n\ttext-align: center;\n}\n\n.card span {\n\tmargin-left: 1rem;\n}\n\n.form-group > label {\n    font-weight: bold;\n\tfont-size: 1rem;\n}\n\n/*\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n/*\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948; /* green *\n}\n*/\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.input-group-append .btn-outline-secondary {\n\tborder: 1px solid #ced4da;\n    border-radius: .25rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.icon-search, .icon-clear {\n  z-index: 1;\n  pointer-events: auto;\n  cursor: pointer;\n  \n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.input-group > span {\nmargin-left: 0.5rem;\n}\n\n.icon-clear-inside {\n    z-index: 3;\n    vertical-align: middle;\n    padding: 0.75rem 0.5rem 0rem 0.5rem;\n    cursor: pointer;\n    position: relative;\n    margin-left: -2rem;   /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n    border: 0;\n    height: 2rem;\n}\n\n.icon-clear-inside-sm {\n    z-index: 3;\n    cursor: pointer;\n    position: absolute;\n    margin: auto;\n    bottom: 0;\n    top: 0;\n    right: 1.5rem;\n    height: 1.5rem;\n}\n\n.icon-clear-badge {\n\tcursor: pointer;\n\tmargin-left: 1rem;\n}\n\n.icon-clear-badge-ontop {\n  cursor: pointer;\n  position: absolute;\n  margin: 0.15rem;\n  right: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.7;\n}\n\n.icon-clear-badge-ontop:hover {\n  opacity: 1;\n}\n\n.important-tip {\n  color: #dc3545;\n}\n\n.currency {\n  margin-right: 10px;\n}\n\n.badge-group {\n  min-height: 1.5rem;\n}\n\n.new-modal {\n    z-index: 1100;\n    display: block;\n    padding-top: 0px;\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.2);\n}\n\n.new-card {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.new-area {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.picture-small-block {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9hZGRpdGlvbmFsaW5mby9hZGRpdGlvbmFsaW5mby1lZGl0L2FkZGl0aW9uYWxpbmZvLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxxQkFBcUI7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFHQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtDQUNwQixlQUFlO0FBQ2hCOztBQUVBOzs7O0NBSUM7O0FBQ0Q7Ozs7Q0FJQzs7QUFFRDtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUM7O0FBRUE7Q0FDQyx5QkFBeUI7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlOztFQUVmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQixJQUFJLHlDQUF5QztJQUMvRCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzaGlwL2FkZGl0aW9uYWxpbmZvL2FkZGl0aW9uYWxpbmZvLWVkaXQvYWRkaXRpb25hbGluZm8tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQge1xuXHR3aWR0aDogNzUlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuZmllbGRzZXQgPiAuZm9ybS1jb250cm9sLCAuaW5wdXQtZ3JvdXAsIC5mb3JtLWNoZWNrLCAuYWxlcnQge1xuXHR3aWR0aDogOTAlXG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogIDAuNzVyZW1cbn1cblxuLmFjdGlvbi1idXR0b25zLWNlbnRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbG9hdDpyaWdodDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnV0dG9ucy1jZW50ZXIgLmJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuXG4uY2FyZC10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4vKlxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKlxufVxuKi9cbi8qXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqXG59XG4qL1xuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ucmVmLWJhZGdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMzsgLypyZ2JhKDAsMCwwLC4xMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYzO1xufVxuXG4uaWNvbi1zZWFyY2gsIC5pY29uLWNsZWFyIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwID4gc3BhbiB7XG5tYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUge1xuICAgIHotaW5kZXg6IDM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTsgICAvKiB0ZXh0IDEgKyBsZWZ0IDAuNSArIHJpZ2h0IDAuNSA9IDIgcmVtKi9cbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaWNvbi1jbGVhci1pbnNpZGUtc20ge1xuICAgIHotaW5kZXg6IDM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4uaWNvbi1jbGVhci1iYWRnZSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5pY29uLWNsZWFyLWJhZGdlLW9udG9wIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMC4xNXJlbTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5pY29uLWNsZWFyLWJhZGdlLW9udG9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmltcG9ydGFudC10aXAge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmN1cnJlbmN5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmFkZ2UtZ3JvdXAge1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG59XG4ubmV3LW1vZGFsIHtcbiAgICB6LWluZGV4OiAxMTAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG59XG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm5ldy1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cbi5waWN0dXJlLXNtYWxsLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AdditionalinfoEditComponent */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoEditAdditionalinfoEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoEditComponent", function () {
      return AdditionalinfoEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_base_additionalinfo_additionalinfo_edit_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../membership-cust/base/additionalinfo/additionalinfo-edit.cust.component */
    "./src/app/membership-cust/base/additionalinfo/additionalinfo-edit.cust.component.ts");
    /* harmony import */


    var _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");
    /* harmony import */


    var _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../additionalinfo.service */
    "./src/app/membership/additionalinfo/additionalinfo.service.ts");

    var AdditionalinfoEditComponent = /*#__PURE__*/function (_membership_cust_base2) {
      _inherits(AdditionalinfoEditComponent, _membership_cust_base2);

      var _super8 = _createSuper(AdditionalinfoEditComponent);

      function AdditionalinfoEditComponent(additionalinfoService, injector, router, route, location) {
        var _this8;

        _classCallCheck(this, AdditionalinfoEditComponent);

        _this8 = _super8.call(this, additionalinfoService, injector, router, route, location, _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__["ViewType"].EDIT);
        _this8.additionalinfoService = additionalinfoService;
        _this8.injector = injector;
        _this8.router = router;
        _this8.route = route;
        _this8.location = location;
        _this8.minDate = {
          year: new Date().getFullYear() - 100,
          month: 1,
          day: 1
        };
        _this8.fieldDisplayNames = {
          'grade': 'Grade',
          'guardianEmail': 'Guardian Email',
          'programmingSkill': 'Programming Skill',
          'designingSkill': 'Designing Skill',
          'githubExp': 'Github Experience',
          'team': 'Desired Team'
        };
        _this8.enums['grade'] = ['8', '9', '10', '11', '12', 'other'];
        _this8.enums['programmingSkill'] = ['1', '2', '3', '4', '5'];
        _this8.enums['designingSkill'] = ['1', '2', '3', '4', '5'];
        _this8.enums['githubExp'] = ['No', 'Yes, web access only', 'Yes, web and git access'];
        _this8.enums['team'] = ['Web Development', 'UI Design'];

        _this8.stringFields.push('grade');

        _this8.stringFields.push('guardianEmail');

        _this8.stringFields.push('programmingSkill');

        _this8.stringFields.push('designingSkill');

        _this8.stringFields.push('githubExp');

        _this8.stringFields.push('team');

        var detail = {};
        _this8.detail = _this8.formatDetail(detail);
        return _this8;
      }

      _createClass(AdditionalinfoEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(AdditionalinfoEditComponent.prototype), "ngOnInit", this).call(this);

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

            for (var _i = 0, _Object$keys = Object.keys(this.initData); _i < _Object$keys.length; _i++) {
              var prop = _Object$keys[_i];
              detail[prop] = this.initData[prop];
              this.hiddenFields.push(prop);
            }

            this.detail = this.formatDetail(detail);
          } else {
            var _detail = {};
            this.detail = this.formatDetail(_detail);
          }
        }
      }]);

      return AdditionalinfoEditComponent;
    }(_membership_cust_base_additionalinfo_additionalinfo_edit_cust_component__WEBPACK_IMPORTED_MODULE_4__["AdditionalinfoEditCustComponent"]);

    AdditionalinfoEditComponent.ctorParameters = function () {
      return [{
        type: _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__["AdditionalinfoService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    AdditionalinfoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-additionalinfo-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./additionalinfo-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./additionalinfo-edit.component.css */
      "./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.css"))["default"]]
    })], AdditionalinfoEditComponent);
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoListAdditionalinfoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table rows, cards, and icons in list view and card view\n*/\n\ntable {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n\n.clicked-row {\n  /*background-color: #dcdfe0;\n  background-color: rgba(0,0,0,.075); */\n}\n\n.selected-row {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\n\ntr th:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n\n.line-breaker {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n\n.gridview {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.grid-block {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.grid-head-picture,\n.list-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .list-head-picture {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n\n.listview {\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.list-block {\n  width: 100%;\n  margin: 0.5rem;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.list-card {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.list-fields {\n  display: flex;\n  align-items: flex-start;\n\n  min-width: 300px;\n  max-width: 85%;\n}\n\n.list-body-fields {\n}\n\n.list-devider-gradient {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n\n.list-devider {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.clickable-card:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.card label,\n.list-body-fields label,\n.field-label {\n  font-weight: bold;\n}\n\n.card-action-icons {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n\n  width: 10rem;\n  margin-left: auto;\n}\n\ntd input,\n.card-action-icons input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntd a i,\n.card-action-icons a i {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n/*change the icon color when card is hoverred*/\n\ntr:hover td a i,\n.clickable-card:hover .card-action-icons a i {\n  color: black;\n}\n\ntr:hover td i.fa-edit:hover,\n.clickable-card:hover .card-action-icons i.fa-edit:hover {\n  color: blue;\n}\n\ntr:hover td i.fa-trash-alt:hover,\n.clickable-card:hover .card-action-icons i.fa-trash-alt:hover {\n  color: red;\n}\n\n/* action buttons and paginations\n*/\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.pagination li {\n  min-width: 2.5rem;\n}\n\n.total_counts {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n\n.page-link {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.page-control {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n/* earch area\n*/\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem; /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n  border: 0;\n}\n\n.icon-clear-badge {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n/* pop-up models\n*/\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.single-line-edit {\n}\n\n.single-line-edit > .row {\n  padding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.date-selection-pop {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  /*padding:.5rem 0;*/\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n\n.add-area {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n/* Grid/List view filter\n*/\n\n.view-radio + label {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n\n.view-radio:checked + label {\n  color: #212529;\n}\n\n.view-radio + label:hover {\n  color: #212529;\n}\n\n.view-radio {\n  display: none;\n}\n\n.list-title {\n  font-size: 1.5rem;\n}\n\n.sort-selection {\n  min-width: 200px;\n  position: relative;\n}\n\n.sort-dropdown {\n  width: 100%;\n  text-align: left;\n}\n\n.category2-dropdown {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n\n.sort-selection i {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n\n.th-sort-arrow {\n  color: #007bff;\n  margin-left: 1rem;\n}\n\n.read-more {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  color: #307bff;\n  cursor: pointer;\n}\n\n.read-more:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.font-size-75 {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  font-size: 0.75rem;\n}\n\n.no-records {\n  margin: 1rem auto 1rem auto; /*centering*/\n\n  width: 20rem;\n  font-size: 1.25rem;\n}\n\n.list-selection {\n  max-width: 500px;\n  width: 90%;\n}\n\n.modal-back {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-front {\n  position: relative;\n\n  min-width: 500px;\n  width: 50%;\n\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.category-nav {\n  background: linear-gradient(\n    180deg,\n    rgba(233, 236, 239, 1) 0%,\n    rgba(233, 236, 239, 0.2) 80%\n  );\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n\n.slide-image {\n  /*\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: relative;\n  */\n  width: 100%;\n}\n\n.asso-link {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n\n.nohref-link {\n  color: #007bff !important;\n  cursor: pointer;\n}\n\n.nohref-link:hover {\n  color: #0056b3 !important;\n}\n\n.nohref-link.active,\n.nohref-link.active:hover {\n  color: #fff !important;\n}\n\n.list-check-box {\n  zoom: 1.1;\n}\n\n.currency {\n  margin-right: 10px;\n}\n\n/*Start Archive Slider*/\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 24px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 16px;\n  width: 16px;\n  left: 10px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 24px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*End Archive Slider*/\n\n.badge-group {\n  min-height: 1.5rem;\n}\n\n.new-modal {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.available-hints {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.col-gutter {\n}\n\n@media screen and (max-width: 500px) {\n  .col-gutter > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9hZGRpdGlvbmFsaW5mby9hZGRpdGlvbmFsaW5mby1saXN0L2FkZGl0aW9uYWxpbmZvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTt1Q0FDcUM7QUFDdkM7O0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCOztFQUVyQjs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjOztFQUVkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0FBQ0E7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhOztFQUViLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFDQSw4Q0FBOEM7O0FBQzlDOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0NBQ0M7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0NBQ0M7O0FBRUQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRSx5Q0FBeUM7RUFDN0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViw0RUFBNEU7QUFDOUU7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtDQUNDOztBQUVEO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UscUVBQXFFO0VBQ3JFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQixFQUFFLFlBQVk7O0VBRXpDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkIsMkNBQTJDOztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EscUJBQXFCOztBQUVyQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9hZGRpdGlvbmFsaW5mby9hZGRpdGlvbmFsaW5mby1saXN0L2FkZGl0aW9uYWxpbmZvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJvd3MsIGNhcmRzLCBhbmQgaWNvbnMgaW4gbGlzdCB2aWV3IGFuZCBjYXJkIHZpZXdcbiovXG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTsgKi9cbn1cbi5zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMjI0LCAxNjksIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM0NEI1NDk7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDglO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1icmVha2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uZ3JpZHZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcblxuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5ncmlkLWJsb2NrIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmdyaWQtaGVhZC1waWN0dXJlLFxuLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubGlzdC1oZWFkLXBpY3R1cmUge1xuICAgIGZsZXgtYmFzaXM6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG59XG5cbi5saXN0dmlldyB7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmxpc3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW07XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmxpc3QtYm9keS1maWVsZHMge1xufVxuLmxpc3QtZGV2aWRlci1ncmFkaWVudCB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwOTU0ODQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzA5NTQ4NCwgI2NjYyk7XG59XG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuXG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbnRkIGlucHV0LFxuLmNhcmQtYWN0aW9uLWljb25zIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbnRkIGEgaSxcbi5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogcmdiKDE5NiwgMTkxLCAxOTEpO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbnRyOmhvdmVyIHRkIGkuZmEtZWRpdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS1lZGl0OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG50cjpob3ZlciB0ZCBpLmZhLXRyYXNoLWFsdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyBhbmQgcGFnaW5hdGlvbnNcbiovXG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cbi8qIGVhcmNoIGFyZWFcbiovXG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlIHtcbiAgei1pbmRleDogMztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTsgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLnJlZmluZS1zZWFyY2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGNvbG9yOiAjODY4MTgxO1xufVxuXG4vKiBwb3AtdXAgbW9kZWxzXG4qL1xuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4uZGF0ZS1zZWxlY3Rpb24tcG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgLypwYWRkaW5nOi41cmVtIDA7Ki9cbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkwqAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogR3JpZC9MaXN0IHZpZXcgZmlsdGVyXG4qL1xuXG4udmlldy1yYWRpbyArIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjYmJiZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcbn1cbi52aWV3LXJhZGlvOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLnZpZXctcmFkaW8gKyBsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0LXNlbGVjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnQtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5Mi1kcm9wZG93biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc29ydC1zZWxlY3Rpb24gaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udGgtc29ydC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlYWQtbW9yZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGNvbG9yOiAjMzA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvbnQtc2l6ZS03NSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLm5vLXJlY29yZHMge1xuICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87IC8qY2VudGVyaW5nKi9cblxuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWZyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG5cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDIzMywgMjM2LCAyMzksIDEpIDAlLFxuICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4yKSA4MCVcbiAgKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgLypcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ub2hyZWYtbGluayB7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub2hyZWYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzICFpbXBvcnRhbnQ7XG59XG5cbi5ub2hyZWYtbGluay5hY3RpdmUsXG4ubm9ocmVmLWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtY2hlY2stYm94IHtcbiAgem9vbTogMS4xO1xufVxuXG4uY3VycmVuY3kge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qU3RhcnQgQXJjaGl2ZSBTbGlkZXIqL1xuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vKkVuZCBBcmNoaXZlIFNsaWRlciovXG5cbi5iYWRnZS1ncm91cCB7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5uZXctbW9kYWwge1xuICB6LWluZGV4OiAxMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLmNvbC1ndXR0ZXIge1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbC1ndXR0ZXIgPiBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AdditionalinfoListComponent */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoListAdditionalinfoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoListComponent", function () {
      return AdditionalinfoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_base_additionalinfo_additionalinfo_list_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../membership-cust/base/additionalinfo/additionalinfo-list.cust.component */
    "./src/app/membership-cust/base/additionalinfo/additionalinfo-list.cust.component.ts");
    /* harmony import */


    var _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../additionalinfo.component */
    "./src/app/membership/additionalinfo/additionalinfo.component.ts");
    /* harmony import */


    var _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../additionalinfo.service */
    "./src/app/membership/additionalinfo/additionalinfo.service.ts");

    var AdditionalinfoListComponent_1;

    var AdditionalinfoListComponent = AdditionalinfoListComponent_1 = /*#__PURE__*/function (_membership_cust_base3) {
      _inherits(AdditionalinfoListComponent, _membership_cust_base3);

      var _super9 = _createSuper(AdditionalinfoListComponent);

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
      function AdditionalinfoListComponent(additionalinfoService, injector, router, route, location) {
        var _this9;

        _classCallCheck(this, AdditionalinfoListComponent);

        _this9 = _super9.call(this, additionalinfoService, injector, router, route, location, _additionalinfo_component__WEBPACK_IMPORTED_MODULE_5__["ViewType"].LIST);
        _this9.additionalinfoService = additionalinfoService;
        _this9.injector = injector;
        _this9.router = router;
        _this9.route = route;
        _this9.location = location;
        _this9.fieldDisplayNames = {
          'grade': 'Grade',
          'team': 'Team'
        };
        _this9.enums['grade'] = ['8', '9', '10', '11', '12', 'other'];
        _this9.enums['team'] = ['Web Development', 'UI Design'];

        _this9.stringFields.push('grade');

        _this9.stringFields.push('team');

        _this9.listViewFilter = 'list';
        var listCategories = [];
        _this9.listCategory1 = listCategories[0] || {};
        _this9.listCategory2 = listCategories[1] || {};
        _this9.clickItemAction = 'detail';
        _this9.itemMultiSelect = true;
        return _this9;
      }

      _createClass(AdditionalinfoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(AdditionalinfoListComponent.prototype), "ngOnInit", this).call(this);

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
          return new AdditionalinfoListComponent_1(null, null, null, null, null);
        }
      }]);

      return AdditionalinfoListComponent;
    }(_membership_cust_base_additionalinfo_additionalinfo_list_cust_component__WEBPACK_IMPORTED_MODULE_4__["AdditionalinfoListCustComponent"]);

    AdditionalinfoListComponent.ctorParameters = function () {
      return [{
        type: _additionalinfo_service__WEBPACK_IMPORTED_MODULE_6__["AdditionalinfoService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    AdditionalinfoListComponent = AdditionalinfoListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-additionalinfo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./additionalinfo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./additionalinfo-list.component.css */
      "./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.css"))["default"]]
    })], AdditionalinfoListComponent);
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo.base.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo.base.service.ts ***!
    \**************************************************************************/

  /*! exports provided: AdditionalinfoBaseService */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoBaseService", function () {
      return AdditionalinfoBaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");

    var servicePath = '/additionalinfo/';

    var AdditionalinfoBaseService = /*#__PURE__*/function (_hicoder_angular_core) {
      _inherits(AdditionalinfoBaseService, _hicoder_angular_core);

      var _super10 = _createSuper(AdditionalinfoBaseService);

      function AdditionalinfoBaseService(http, serverRootUrl) {
        _classCallCheck(this, AdditionalinfoBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super10.call(this, http, serviceUrl);
      }

      return AdditionalinfoBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ViewType, AdditionalinfoComponent */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoComponent", function () {
      return AdditionalinfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var itemCamelName = 'additional Member Information';

    var AdditionalinfoComponent = /*#__PURE__*/function (_hicoder_angular_core2) {
      _inherits(AdditionalinfoComponent, _hicoder_angular_core2);

      var _super11 = _createSuper(AdditionalinfoComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function AdditionalinfoComponent(additionalinfoService, injector, router, route, location, view) {
        var _this10;

        _classCallCheck(this, AdditionalinfoComponent);

        _this10 = _super11.call(this, additionalinfoService, injector, router, route, location, view, itemCamelName);
        _this10.additionalinfoService = additionalinfoService;
        _this10.injector = injector;
        _this10.router = router;
        _this10.route = route;
        _this10.location = location;
        _this10.view = view;
        _this10.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this10.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this10.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this10.briefFieldsInfo = [];

        _this10.briefFieldsInfo.push(['grade', 'Grade']);

        _this10.briefFieldsInfo.push(['team', 'Team']);

        _this10.emailFields = [['Guardian Email', 'guardianEmail']];
        _this10.requiredFields = ['grade', 'programmingSkill', 'designingSkill', 'githubExp', 'team'];
        _this10.schemaName = 'additionalinfo';
        _this10.modulePath = 'membership';
        _this10.indexFields = ['grade'];
        return _this10;
      }

      _createClass(AdditionalinfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return AdditionalinfoComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseComponent"]);

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "searchObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "inputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "queryParams", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "categoryBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('asso')], AdditionalinfoComponent.prototype, "associationField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AdditionalinfoComponent.prototype, "outputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "cid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "initData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "embeddedView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "embedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AdditionalinfoComponent.prototype, "doneData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AdditionalinfoComponent.prototype, "done", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "disableActionButtions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AdditionalinfoComponent.prototype, "eventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "detailObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AdditionalinfoComponent.prototype, "showFieldsStr", void 0);
    /***/
  },

  /***/
  "./src/app/membership/additionalinfo/additionalinfo.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/membership/additionalinfo/additionalinfo.service.ts ***!
    \*********************************************************************/

  /*! exports provided: AdditionalinfoService */

  /***/
  function srcAppMembershipAdditionalinfoAdditionalinfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalinfoService", function () {
      return AdditionalinfoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _additionalinfo_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./additionalinfo.base.service */
    "./src/app/membership/additionalinfo/additionalinfo.base.service.ts");
    /* harmony import */


    var _membership_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../membership.tokens */
    "./src/app/membership/membership.tokens.ts");

    var AdditionalinfoService = /*#__PURE__*/function (_additionalinfo_base_) {
      _inherits(AdditionalinfoService, _additionalinfo_base_);

      var _super12 = _createSuper(AdditionalinfoService);

      function AdditionalinfoService(http, membershipServerRootUri) {
        var _this11;

        _classCallCheck(this, AdditionalinfoService);

        _this11 = _super12.call(this, http, membershipServerRootUri);
        _this11.membershipServerRootUri = membershipServerRootUri;
        return _this11;
      }

      _createClass(AdditionalinfoService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AdditionalinfoService;
    }(_additionalinfo_base_service__WEBPACK_IMPORTED_MODULE_3__["AdditionalinfoBaseService"]);

    AdditionalinfoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]]
        }]
      }];
    };

    AdditionalinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]))], AdditionalinfoService);
    /***/
  },

  /***/
  "./src/app/membership/board/board-detail/board-detail-field.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/membership/board/board-detail/board-detail-field.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BoardDetailFieldComponent */

  /***/
  function srcAppMembershipBoardBoardDetailBoardDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardDetailFieldComponent", function () {
      return BoardDetailFieldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../board.component */
    "./src/app/membership/board/board.component.ts");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../board.service */
    "./src/app/membership/board/board.service.ts");

    var BoardDetailFieldComponent = /*#__PURE__*/function (_board_component__WEB) {
      _inherits(BoardDetailFieldComponent, _board_component__WEB);

      var _super13 = _createSuper(BoardDetailFieldComponent);

      function BoardDetailFieldComponent(boardService, injector, router, route, location) {
        var _this12;

        _classCallCheck(this, BoardDetailFieldComponent);

        _this12 = _super13.call(this, boardService, injector, router, route, location, _board_component__WEBPACK_IMPORTED_MODULE_4__["ViewType"].DETAIL);
        _this12.boardService = boardService;
        _this12.injector = injector;
        _this12.router = router;
        _this12.route = route;
        _this12.location = location;
        _this12.fieldDisplayNames = {
          'name': 'Name',
          'title': 'Title',
          'photo': 'Photo',
          'email': 'Email',
          'order': 'Order'
        };

        _this12.stringFields.push('name');

        _this12.stringFields.push('title');

        _this12.stringFields.push('photo');

        _this12.stringFields.push('email');

        _this12.numberFields = ['order'];
        return _this12;
      }

      _createClass(BoardDetailFieldComponent, [{
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

      return BoardDetailFieldComponent;
    }(_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"]);

    BoardDetailFieldComponent.ctorParameters = function () {
      return [{
        type: _board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    BoardDetailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-detail-field',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board-detail-field.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-detail/board-detail-field.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board-detail.component.css */
      "./src/app/membership/board/board-detail/board-detail.component.css"))["default"]]
    })], BoardDetailFieldComponent);
    /***/
  },

  /***/
  "./src/app/membership/board/board-detail/board-detail.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/membership/board/board-detail/board-detail.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipBoardBoardDetailBoardDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n  margin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left,\n.fa-list {\n  float: left;\n  display: inline-block;\n  /*margin-left: 2.5rem;*/\n  margin-top: 0.75rem;\n}\n\n.action-buttons span {\n  float: left;\n  display: inline-block;\n  margin-left: 0rem;\n  margin-top: 0.5rem;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.card label, .field-label {\n  font-weight: bold;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n  text-align: left;\n}\n\n.referred-by-links a {\n  margin-left: 1rem;\n}\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: center;\n  /*width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);*/\n}\n\n.grid-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check {\n  zoom: 2;\n}\n\n.slide-image {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9ib2FyZC9ib2FyZC1kZXRhaWwvYm9hcmQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTs7OztDQUlDOztBQUNEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7eUNBQ3VDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9ib2FyZC9ib2FyZC1kZXRhaWwvYm9hcmQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCxcbi5mYS1saXN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyptYXJnaW4tbGVmdDogMi41cmVtOyovXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG5cbi5hY3Rpb24tYnV0dG9ucyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCBsYWJlbCwgLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyp3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsqL1xufVxuXG4uZ3JpZC1oZWFkLXBpY3R1cmUge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG5cbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5ncmlkLWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4udHJhbnNwYXJlbnQtYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uaW5mby10ZXJtLXRleHQge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi50ZXJtLWNoZWNrIHtcbiAgem9vbTogMjtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/board/board-list/board-list.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/membership/board/board-list/board-list.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipBoardBoardListBoardListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table rows, cards, and icons in list view and card view\n*/\n\ntable {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n\n.clicked-row {\n  /*background-color: #dcdfe0;\n  background-color: rgba(0,0,0,.075); */\n}\n\n.selected-row {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\n\ntr th:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n\n.line-breaker {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n\n.gridview {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.grid-block {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.grid-head-picture,\n.list-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .list-head-picture {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n\n.listview {\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.list-block {\n  width: 100%;\n  margin: 0.5rem;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.list-card {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.list-fields {\n  display: flex;\n  align-items: flex-start;\n\n  min-width: 300px;\n  max-width: 85%;\n}\n\n.list-body-fields {\n}\n\n.list-devider-gradient {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n\n.list-devider {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.clickable-card:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.card label,\n.list-body-fields label,\n.field-label {\n  font-weight: bold;\n}\n\n.card-action-icons {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n\n  width: 10rem;\n  margin-left: auto;\n}\n\ntd input,\n.card-action-icons input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntd a i,\n.card-action-icons a i {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n/*change the icon color when card is hoverred*/\n\ntr:hover td a i,\n.clickable-card:hover .card-action-icons a i {\n  color: black;\n}\n\ntr:hover td i.fa-edit:hover,\n.clickable-card:hover .card-action-icons i.fa-edit:hover {\n  color: blue;\n}\n\ntr:hover td i.fa-trash-alt:hover,\n.clickable-card:hover .card-action-icons i.fa-trash-alt:hover {\n  color: red;\n}\n\n/* action buttons and paginations\n*/\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.pagination li {\n  min-width: 2.5rem;\n}\n\n.total_counts {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n\n.page-link {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.page-control {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n/* earch area\n*/\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem; /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n  border: 0;\n}\n\n.icon-clear-badge {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n/* pop-up models\n*/\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.single-line-edit {\n}\n\n.single-line-edit > .row {\n  padding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.date-selection-pop {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  /*padding:.5rem 0;*/\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n\n.add-area {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n/* Grid/List view filter\n*/\n\n.view-radio + label {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n\n.view-radio:checked + label {\n  color: #212529;\n}\n\n.view-radio + label:hover {\n  color: #212529;\n}\n\n.view-radio {\n  display: none;\n}\n\n.list-title {\n  font-size: 1.5rem;\n}\n\n.sort-selection {\n  min-width: 200px;\n  position: relative;\n}\n\n.sort-dropdown {\n  width: 100%;\n  text-align: left;\n}\n\n.category2-dropdown {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n\n.sort-selection i {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n\n.th-sort-arrow {\n  color: #007bff;\n  margin-left: 1rem;\n}\n\n.read-more {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  color: #307bff;\n  cursor: pointer;\n}\n\n.read-more:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.font-size-75 {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  font-size: 0.75rem;\n}\n\n.no-records {\n  margin: 1rem auto 1rem auto; /*centering*/\n\n  width: 20rem;\n  font-size: 1.25rem;\n}\n\n.list-selection {\n  max-width: 500px;\n  width: 90%;\n}\n\n.modal-back {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-front {\n  position: relative;\n\n  min-width: 500px;\n  width: 50%;\n\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.category-nav {\n  background: linear-gradient(\n    180deg,\n    rgba(233, 236, 239, 1) 0%,\n    rgba(233, 236, 239, 0.2) 80%\n  );\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n\n.slide-image {\n  /*\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: relative;\n  */\n  width: 100%;\n}\n\n.asso-link {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n\n.nohref-link {\n  color: #007bff !important;\n  cursor: pointer;\n}\n\n.nohref-link:hover {\n  color: #0056b3 !important;\n}\n\n.nohref-link.active,\n.nohref-link.active:hover {\n  color: #fff !important;\n}\n\n.list-check-box {\n  zoom: 1.1;\n}\n\n.currency {\n  margin-right: 10px;\n}\n\n/*Start Archive Slider*/\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 24px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 16px;\n  width: 16px;\n  left: 10px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 24px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*End Archive Slider*/\n\n.badge-group {\n  min-height: 1.5rem;\n}\n\n.new-modal {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.available-hints {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.col-gutter {\n}\n\n@media screen and (max-width: 500px) {\n  .col-gutter > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9ib2FyZC9ib2FyZC1saXN0L2JvYXJkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTt1Q0FDcUM7QUFDdkM7O0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCOztFQUVyQjs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjOztFQUVkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0FBQ0E7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhOztFQUViLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFDQSw4Q0FBOEM7O0FBQzlDOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0NBQ0M7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0NBQ0M7O0FBRUQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRSx5Q0FBeUM7RUFDN0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViw0RUFBNEU7QUFDOUU7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtDQUNDOztBQUVEO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UscUVBQXFFO0VBQ3JFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQixFQUFFLFlBQVk7O0VBRXpDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkIsMkNBQTJDOztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EscUJBQXFCOztBQUVyQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9ib2FyZC9ib2FyZC1saXN0L2JvYXJkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJvd3MsIGNhcmRzLCBhbmQgaWNvbnMgaW4gbGlzdCB2aWV3IGFuZCBjYXJkIHZpZXdcbiovXG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTsgKi9cbn1cbi5zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMjI0LCAxNjksIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM0NEI1NDk7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDglO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1icmVha2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uZ3JpZHZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcblxuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5ncmlkLWJsb2NrIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmdyaWQtaGVhZC1waWN0dXJlLFxuLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubGlzdC1oZWFkLXBpY3R1cmUge1xuICAgIGZsZXgtYmFzaXM6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG59XG5cbi5saXN0dmlldyB7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmxpc3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW07XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmxpc3QtYm9keS1maWVsZHMge1xufVxuLmxpc3QtZGV2aWRlci1ncmFkaWVudCB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwOTU0ODQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzA5NTQ4NCwgI2NjYyk7XG59XG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuXG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbnRkIGlucHV0LFxuLmNhcmQtYWN0aW9uLWljb25zIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbnRkIGEgaSxcbi5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogcmdiKDE5NiwgMTkxLCAxOTEpO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbnRyOmhvdmVyIHRkIGkuZmEtZWRpdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS1lZGl0OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG50cjpob3ZlciB0ZCBpLmZhLXRyYXNoLWFsdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyBhbmQgcGFnaW5hdGlvbnNcbiovXG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cbi8qIGVhcmNoIGFyZWFcbiovXG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlIHtcbiAgei1pbmRleDogMztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTsgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLnJlZmluZS1zZWFyY2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGNvbG9yOiAjODY4MTgxO1xufVxuXG4vKiBwb3AtdXAgbW9kZWxzXG4qL1xuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4uZGF0ZS1zZWxlY3Rpb24tcG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgLypwYWRkaW5nOi41cmVtIDA7Ki9cbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkwqAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogR3JpZC9MaXN0IHZpZXcgZmlsdGVyXG4qL1xuXG4udmlldy1yYWRpbyArIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjYmJiZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcbn1cbi52aWV3LXJhZGlvOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLnZpZXctcmFkaW8gKyBsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0LXNlbGVjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnQtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5Mi1kcm9wZG93biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc29ydC1zZWxlY3Rpb24gaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udGgtc29ydC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlYWQtbW9yZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGNvbG9yOiAjMzA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvbnQtc2l6ZS03NSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLm5vLXJlY29yZHMge1xuICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87IC8qY2VudGVyaW5nKi9cblxuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWZyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG5cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDIzMywgMjM2LCAyMzksIDEpIDAlLFxuICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4yKSA4MCVcbiAgKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgLypcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ub2hyZWYtbGluayB7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub2hyZWYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzICFpbXBvcnRhbnQ7XG59XG5cbi5ub2hyZWYtbGluay5hY3RpdmUsXG4ubm9ocmVmLWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtY2hlY2stYm94IHtcbiAgem9vbTogMS4xO1xufVxuXG4uY3VycmVuY3kge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qU3RhcnQgQXJjaGl2ZSBTbGlkZXIqL1xuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vKkVuZCBBcmNoaXZlIFNsaWRlciovXG5cbi5iYWRnZS1ncm91cCB7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5uZXctbW9kYWwge1xuICB6LWluZGV4OiAxMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLmNvbC1ndXR0ZXIge1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbC1ndXR0ZXIgPiBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/board/board-list/board-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/membership/board/board-list/board-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BoardListComponent */

  /***/
  function srcAppMembershipBoardBoardListBoardListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardListComponent", function () {
      return BoardListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_base_board_board_list_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../membership-cust/base/board/board-list.cust.component */
    "./src/app/membership-cust/base/board/board-list.cust.component.ts");
    /* harmony import */


    var _board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../board.component */
    "./src/app/membership/board/board.component.ts");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../board.service */
    "./src/app/membership/board/board.service.ts");

    var BoardListComponent_1;

    var BoardListComponent = BoardListComponent_1 = /*#__PURE__*/function (_membership_cust_base4) {
      _inherits(BoardListComponent, _membership_cust_base4);

      var _super14 = _createSuper(BoardListComponent);

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
      function BoardListComponent(boardService, injector, router, route, location) {
        var _this13;

        _classCallCheck(this, BoardListComponent);

        _this13 = _super14.call(this, boardService, injector, router, route, location, _board_component__WEBPACK_IMPORTED_MODULE_5__["ViewType"].LIST);
        _this13.boardService = boardService;
        _this13.injector = injector;
        _this13.router = router;
        _this13.route = route;
        _this13.location = location;
        _this13.fieldDisplayNames = {
          'name': 'Name',
          'title': 'Title',
          'photo': 'Photo',
          'email': 'Email'
        };

        _this13.stringFields.push('name');

        _this13.stringFields.push('title');

        _this13.stringFields.push('photo');

        _this13.stringFields.push('email');

        _this13.listViewFilter = 'grid';
        var listCategories = [];
        _this13.listCategory1 = listCategories[0] || {};
        _this13.listCategory2 = listCategories[1] || {};
        _this13.itemMultiSelect = true;
        return _this13;
      }

      _createClass(BoardListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(BoardListComponent.prototype), "ngOnInit", this).call(this);

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
          return new BoardListComponent_1(null, null, null, null, null);
        }
      }]);

      return BoardListComponent;
    }(_membership_cust_base_board_board_list_cust_component__WEBPACK_IMPORTED_MODULE_4__["BoardListCustComponent"]);

    BoardListComponent.ctorParameters = function () {
      return [{
        type: _board_service__WEBPACK_IMPORTED_MODULE_6__["BoardService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    BoardListComponent = BoardListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/board/board-list/board-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board-list.component.css */
      "./src/app/membership/board/board-list/board-list.component.css"))["default"]]
    })], BoardListComponent);
    /***/
  },

  /***/
  "./src/app/membership/board/board.base.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/membership/board/board.base.service.ts ***!
    \********************************************************/

  /*! exports provided: BoardBaseService */

  /***/
  function srcAppMembershipBoardBoardBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardBaseService", function () {
      return BoardBaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");

    var servicePath = '/board/';

    var BoardBaseService = /*#__PURE__*/function (_hicoder_angular_core3) {
      _inherits(BoardBaseService, _hicoder_angular_core3);

      var _super15 = _createSuper(BoardBaseService);

      function BoardBaseService(http, serverRootUrl) {
        _classCallCheck(this, BoardBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super15.call(this, http, serviceUrl);
      }

      return BoardBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/membership/board/board.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/membership/board/board.component.ts ***!
    \*****************************************************/

  /*! exports provided: ViewType, BoardComponent */

  /***/
  function srcAppMembershipBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var itemCamelName = 'board Members';

    var BoardComponent = /*#__PURE__*/function (_hicoder_angular_core4) {
      _inherits(BoardComponent, _hicoder_angular_core4);

      var _super16 = _createSuper(BoardComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function BoardComponent(boardService, injector, router, route, location, view) {
        var _this14;

        _classCallCheck(this, BoardComponent);

        _this14 = _super16.call(this, boardService, injector, router, route, location, view, itemCamelName);
        _this14.boardService = boardService;
        _this14.injector = injector;
        _this14.router = router;
        _this14.route = route;
        _this14.location = location;
        _this14.view = view;
        _this14.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this14.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this14.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this14.briefFieldsInfo = [];

        _this14.briefFieldsInfo.push(['name', 'Name']);

        _this14.briefFieldsInfo.push(['title', 'Title']);

        _this14.briefFieldsInfo.push(['photo', 'Photo']);

        _this14.briefFieldsInfo.push(['email', 'Email']);

        _this14.emailFields = [['Email', 'email']];
        _this14.requiredFields = ['name', 'title', 'photo', 'email'];
        _this14.schemaName = 'board';
        _this14.modulePath = 'membership';
        _this14.indexFields = ['name'];
        return _this14;
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return BoardComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseComponent"]);

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "searchObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "inputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "queryParams", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "categoryBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('asso')], BoardComponent.prototype, "associationField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], BoardComponent.prototype, "outputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "cid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "initData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "embeddedView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "embedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], BoardComponent.prototype, "doneData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], BoardComponent.prototype, "done", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "disableActionButtions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], BoardComponent.prototype, "eventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "detailObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], BoardComponent.prototype, "showFieldsStr", void 0);
    /***/
  },

  /***/
  "./src/app/membership/board/board.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/membership/board/board.service.ts ***!
    \***************************************************/

  /*! exports provided: BoardService */

  /***/
  function srcAppMembershipBoardBoardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardService", function () {
      return BoardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _board_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./board.base.service */
    "./src/app/membership/board/board.base.service.ts");
    /* harmony import */


    var _membership_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../membership.tokens */
    "./src/app/membership/membership.tokens.ts");

    var BoardService = /*#__PURE__*/function (_board_base_service__) {
      _inherits(BoardService, _board_base_service__);

      var _super17 = _createSuper(BoardService);

      function BoardService(http, membershipServerRootUri) {
        var _this15;

        _classCallCheck(this, BoardService);

        _this15 = _super17.call(this, http, membershipServerRootUri);
        _this15.membershipServerRootUri = membershipServerRootUri;
        return _this15;
      }

      _createClass(BoardService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return BoardService;
    }(_board_base_service__WEBPACK_IMPORTED_MODULE_3__["BoardBaseService"]);

    BoardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]]
        }]
      }];
    };

    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]))], BoardService);
    /***/
  },

  /***/
  "./src/app/membership/lead/lead-detail/lead-detail-field.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/membership/lead/lead-detail/lead-detail-field.component.ts ***!
    \****************************************************************************/

  /*! exports provided: LeadDetailFieldComponent */

  /***/
  function srcAppMembershipLeadLeadDetailLeadDetailFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadDetailFieldComponent", function () {
      return LeadDetailFieldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _lead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lead.component */
    "./src/app/membership/lead/lead.component.ts");
    /* harmony import */


    var _lead_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../lead.service */
    "./src/app/membership/lead/lead.service.ts");

    var LeadDetailFieldComponent = /*#__PURE__*/function (_lead_component__WEBP) {
      _inherits(LeadDetailFieldComponent, _lead_component__WEBP);

      var _super18 = _createSuper(LeadDetailFieldComponent);

      function LeadDetailFieldComponent(leadService, injector, router, route, location) {
        var _this16;

        _classCallCheck(this, LeadDetailFieldComponent);

        _this16 = _super18.call(this, leadService, injector, router, route, location, _lead_component__WEBPACK_IMPORTED_MODULE_4__["ViewType"].DETAIL);
        _this16.leadService = leadService;
        _this16.injector = injector;
        _this16.router = router;
        _this16.route = route;
        _this16.location = location;
        _this16.fieldDisplayNames = {
          'name': 'Name',
          'title': 'Title',
          'photo': 'Photo',
          'email': 'Email',
          'order': 'Order'
        };

        _this16.stringFields.push('name');

        _this16.stringFields.push('title');

        _this16.stringFields.push('photo');

        _this16.stringFields.push('email');

        _this16.numberFields = ['order'];
        return _this16;
      }

      _createClass(LeadDetailFieldComponent, [{
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

      return LeadDetailFieldComponent;
    }(_lead_component__WEBPACK_IMPORTED_MODULE_4__["LeadComponent"]);

    LeadDetailFieldComponent.ctorParameters = function () {
      return [{
        type: _lead_service__WEBPACK_IMPORTED_MODULE_5__["LeadService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    LeadDetailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lead-detail-field',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lead-detail-field.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-detail/lead-detail-field.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lead-detail.component.css */
      "./src/app/membership/lead/lead-detail/lead-detail.component.css"))["default"]]
    })], LeadDetailFieldComponent);
    /***/
  },

  /***/
  "./src/app/membership/lead/lead-detail/lead-detail.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/membership/lead/lead-detail/lead-detail.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipLeadLeadDetailLeadDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n  margin-bottom: 1.25rem;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.action-buttons .fa-angle-double-left,\n.fa-list {\n  float: left;\n  display: inline-block;\n  /*margin-left: 2.5rem;*/\n  margin-top: 0.75rem;\n}\n\n.action-buttons span {\n  float: left;\n  display: inline-block;\n  margin-left: 0rem;\n  margin-top: 0.5rem;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.card label, .field-label {\n  font-weight: bold;\n}\n\n/*\n.card span {\n\tmargin-left: 1rem;\n}\n*/\n\n.referred-by-links {\n  text-align: left;\n}\n\n.referred-by-links a {\n  margin-left: 1rem;\n}\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: center;\n  /*width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);*/\n}\n\n.grid-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .grid-head-picture {\n    flex-basis: 8rem;\n    height: 6rem;\n  }\n}\n\n.picture-small-block {\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  position: relative;\n  margin: 0.25rem;\n}\n\n.transparent-border {\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.info-term-text {\n  line-height: 2rem;\n  width: 70%;\n  margin-left: 1rem;\n}\n\n.term-check {\n  zoom: 2;\n}\n\n.slide-image {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9sZWFkL2xlYWQtZGV0YWlsL2xlYWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTs7OztDQUlDOztBQUNEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7eUNBQ3VDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9sZWFkL2xlYWQtZGV0YWlsL2xlYWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFjdGlvbi1idXR0b25zIC5mYS1hbmdsZS1kb3VibGUtbGVmdCxcbi5mYS1saXN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyptYXJnaW4tbGVmdDogMi41cmVtOyovXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG5cbi5hY3Rpb24tYnV0dG9ucyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCBsYWJlbCwgLmZpZWxkLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKlxuLmNhcmQgc3BhbiB7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuKi9cbi5yZWZlcnJlZC1ieS1saW5rcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVmZXJyZWQtYnktbGlua3MgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuYmFkZ2UtY2xpY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyp3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsqL1xufVxuXG4uZ3JpZC1oZWFkLXBpY3R1cmUge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG5cbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5ncmlkLWhlYWQtcGljdHVyZSB7XG4gICAgZmxleC1iYXNpczogOHJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cblxuLnBpY3R1cmUtc21hbGwtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xufVxuXG4udHJhbnNwYXJlbnQtYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uaW5mby10ZXJtLXRleHQge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi50ZXJtLWNoZWNrIHtcbiAgem9vbTogMjtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/lead/lead-list/lead-list.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/membership/lead/lead-list/lead-list.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipLeadLeadListLeadListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table rows, cards, and icons in list view and card view\n*/\n\ntable {\n  margin-top: 0.5rem;\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n\n.clicked-row {\n  /*background-color: #dcdfe0;\n  background-color: rgba(0,0,0,.075); */\n}\n\n.selected-row {\n  background-color: rgba(167, 224, 169, 0.175);\n  box-shadow: 0 0 0 2px #44B549;\n}\n\ntr th:first-child {\n  width: 8%;\n  white-space: nowrap;\n}\n\n.line-breaker {\n  height: 0px;\n  border-top: 1px solid #dee2e6;\n  width: 100%;\n  margin: 20px 0 20px 0;\n}\n\n.gridview {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.grid-block {\n  width: 18rem;\n  display: inline-block;\n  margin: 1rem;\n  align-self: stretch;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.grid-fields {\n  height: 100%;\n}\n\n.grid-head {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.grid-head-picture,\n.list-head-picture {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 6rem;\n  height: 6rem;\n\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n\n@media screen and (min-width: 500px) {\n  .list-head-picture {\n    flex-basis: 8rem;\n    height: 8rem;\n  }\n}\n\n.listview {\n  /*\n  border-top: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  */\n}\n\n.list-block {\n  width: 100%;\n  margin: 0.5rem;\n\n  word-break: break-word;\n  overflow-wrap: break-word;\n  /*border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;*/\n}\n\n.list-card {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.list-fields {\n  display: flex;\n  align-items: flex-start;\n\n  min-width: 300px;\n  max-width: 85%;\n}\n\n.list-body-fields {\n}\n\n.list-devider-gradient {\n  border: 0;\n  height: 2px;\n  background: #095484;\n  background-image: linear-gradient(to right, #ccc, #095484, #ccc);\n}\n\n.list-devider {\n  width: 80%;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.clickable-card:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.card label,\n.list-body-fields label,\n.field-label {\n  font-weight: bold;\n}\n\n.card-action-icons {\n  text-align: right;\n  bottom: 0px;\n  right: 0.5rem;\n\n  width: 10rem;\n  margin-left: auto;\n}\n\ntd input,\n.card-action-icons input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ntd a i,\n.card-action-icons a i {\n  color: rgb(196, 191, 191);\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n/*change the icon color when card is hoverred*/\n\ntr:hover td a i,\n.clickable-card:hover .card-action-icons a i {\n  color: black;\n}\n\ntr:hover td i.fa-edit:hover,\n.clickable-card:hover .card-action-icons i.fa-edit:hover {\n  color: blue;\n}\n\ntr:hover td i.fa-trash-alt:hover,\n.clickable-card:hover .card-action-icons i.fa-trash-alt:hover {\n  color: red;\n}\n\n/* action buttons and paginations\n*/\n\n.action-buttons {\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n\n.action-buttons .btn {\n  display: inline-block;\n  margin-left: 1rem;\n}\n\n.pagination li {\n  min-width: 2.5rem;\n}\n\n.total_counts {\n  padding-top: 0.8rem;\n  text-align: right;\n}\n\n.page-link {\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.page-control {\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  padding: 0 0.25rem;\n}\n\n/* earch area\n*/\n\n::-ms-clear {\n  display: none;\n}\n\n.icon-clear {\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\n.icon-clear-inside {\n  z-index: 3;\n  vertical-align: middle;\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  cursor: pointer;\n  position: relative;\n  margin-left: -2rem; /* text 1 + left 0.5 + right 0.5 = 2 rem*/\n  border: 0;\n}\n\n.icon-clear-badge {\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.ref-badge {\n  border: 1px solid #eceff3; /*rgba(0,0,0,.125); */\n  background-color: #eceff3;\n}\n\n.refine-search-text {\n  font-size: 0.8rem; /*rgba(0,0,0,.125); */\n  color: #868181;\n}\n\n/* pop-up models\n*/\n\n.select-model {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.select-model.show {\n  display: block;\n}\n\n.select-model-content {\n  position: relative;\n  float: right;\n  background-color: #fefefe;\n  /*margin: auto;*/\n  margin-right: 50px;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.single-line-edit {\n}\n\n.single-line-edit > .row {\n  padding-bottom: 2px;\n}\n\n/*NdbDatePicker Range Selector */\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.date-selection-pop {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: block;\n  float: left;\n  min-width: 10rem;\n  /*padding:.5rem 0;*/\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 0.25rem;\n}\n\n.add-area {\n  margin-left: 0.75rem;\n  margin-top: 1rem;\n}\n\n.badge-click {\n  cursor: pointer;\n}\n\ndiv.badge-click:hover {\n  background-color: #495057 !important;\n  text-decoration: underline;\n}\n\n/* Grid/List view filter\n*/\n\n.view-radio + label {\n  transition: all 0.2s ease-in-out;\n  color: #bbbdbf;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 1rem 0 0;\n}\n\n.view-radio:checked + label {\n  color: #212529;\n}\n\n.view-radio + label:hover {\n  color: #212529;\n}\n\n.view-radio {\n  display: none;\n}\n\n.list-title {\n  font-size: 1.5rem;\n}\n\n.sort-selection {\n  min-width: 200px;\n  position: relative;\n}\n\n.sort-dropdown {\n  width: 100%;\n  text-align: left;\n}\n\n.category2-dropdown {\n  width: 250px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #007bff;\n}\n\n.sort-selection i {\n  color: #007bff;\n  margin-left: 1rem;\n  margin-right: 2rem;\n}\n\n.th-sort-arrow {\n  color: #007bff;\n  margin-left: 1rem;\n}\n\n.read-more {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  color: #307bff;\n  cursor: pointer;\n}\n\n.read-more:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.font-size-75 {\n  /*font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;*/\n  font-size: 0.75rem;\n}\n\n.no-records {\n  margin: 1rem auto 1rem auto; /*centering*/\n\n  width: 20rem;\n  font-size: 1.25rem;\n}\n\n.list-selection {\n  max-width: 500px;\n  width: 90%;\n}\n\n.modal-back {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  height: 100%;\n  min-height: 100vh;\n\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-front {\n  position: relative;\n\n  min-width: 500px;\n  width: 50%;\n\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.category-nav {\n  background: linear-gradient(\n    180deg,\n    rgba(233, 236, 239, 1) 0%,\n    rgba(233, 236, 239, 0.2) 80%\n  );\n  padding: 1rem 20px 1rem 20px;\n  margin-bottom: 1rem;\n}\n\n.slide-image {\n  /*\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: relative;\n  */\n  width: 100%;\n}\n\n.asso-link {\n  font-style: italic;\n  font-size: 0.8rem;\n}\n\n.nohref-link {\n  color: #007bff !important;\n  cursor: pointer;\n}\n\n.nohref-link:hover {\n  color: #0056b3 !important;\n}\n\n.nohref-link.active,\n.nohref-link.active:hover {\n  color: #fff !important;\n}\n\n.list-check-box {\n  zoom: 1.1;\n}\n\n.currency {\n  margin-right: 10px;\n}\n\n/*Start Archive Slider*/\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 24px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 16px;\n  width: 16px;\n  left: 10px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 24px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*End Archive Slider*/\n\n.badge-group {\n  min-height: 1.5rem;\n}\n\n.new-modal {\n  z-index: 1100;\n  display: block;\n  padding-top: 0px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.new-card {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.available-hints {\n  padding: 5px 0 5px 20px;\n  background-color: #0000000d;\n}\n\n.col-gutter {\n}\n\n@media screen and (max-width: 500px) {\n  .col-gutter > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9sZWFkL2xlYWQtbGlzdC9sZWFkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTt1Q0FDcUM7QUFDdkM7O0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCOztFQUVyQjs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt5QkFDdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjOztFQUVkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0FBQ0E7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhOztFQUViLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFDQSw4Q0FBOEM7O0FBQzlDOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0NBQ0M7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0NBQ0M7O0FBRUQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRSx5Q0FBeUM7RUFDN0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViw0RUFBNEU7QUFDOUU7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtDQUNDOztBQUVEO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UscUVBQXFFO0VBQ3JFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQixFQUFFLFlBQVk7O0VBRXpDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkIsMkNBQTJDOztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EscUJBQXFCOztBQUVyQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyc2hpcC9sZWFkL2xlYWQtbGlzdC9sZWFkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJvd3MsIGNhcmRzLCBhbmQgaWNvbnMgaW4gbGlzdCB2aWV3IGFuZCBjYXJkIHZpZXdcbiovXG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jbGlja2VkLXJvdyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZGZlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTsgKi9cbn1cbi5zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMjI0LCAxNjksIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM0NEI1NDk7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDglO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1icmVha2VyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uZ3JpZHZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcblxuICAvKlxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG59XG5cbi5ncmlkLWJsb2NrIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xufVxuXG4uZ3JpZC1maWVsZHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmdyaWQtaGVhZC1waWN0dXJlLFxuLmxpc3QtaGVhZC1waWN0dXJlIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubGlzdC1oZWFkLXBpY3R1cmUge1xuICAgIGZsZXgtYmFzaXM6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICB9XG59XG5cbi5saXN0dmlldyB7XG4gIC8qXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgKi9cbn1cblxuLmxpc3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW07XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07Ki9cbn1cblxuLmxpc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubGlzdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmxpc3QtYm9keS1maWVsZHMge1xufVxuLmxpc3QtZGV2aWRlci1ncmFkaWVudCB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwOTU0ODQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzA5NTQ4NCwgI2NjYyk7XG59XG4ubGlzdC1kZXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkIGxhYmVsLFxuLmxpc3QtYm9keS1maWVsZHMgbGFiZWwsXG4uZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYWN0aW9uLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMC41cmVtO1xuXG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbnRkIGlucHV0LFxuLmNhcmQtYWN0aW9uLWljb25zIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbnRkIGEgaSxcbi5jYXJkLWFjdGlvbi1pY29ucyBhIGkge1xuICBjb2xvcjogcmdiKDE5NiwgMTkxLCAxOTEpO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi8qY2hhbmdlIHRoZSBpY29uIGNvbG9yIHdoZW4gY2FyZCBpcyBob3ZlcnJlZCovXG50cjpob3ZlciB0ZCBhIGksXG4uY2xpY2thYmxlLWNhcmQ6aG92ZXIgLmNhcmQtYWN0aW9uLWljb25zIGEgaSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbnRyOmhvdmVyIHRkIGkuZmEtZWRpdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS1lZGl0OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG50cjpob3ZlciB0ZCBpLmZhLXRyYXNoLWFsdDpob3Zlcixcbi5jbGlja2FibGUtY2FyZDpob3ZlciAuY2FyZC1hY3Rpb24taWNvbnMgaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyBhbmQgcGFnaW5hdGlvbnNcbiovXG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1pbi13aWR0aDogMi41cmVtO1xufVxuLnRvdGFsX2NvdW50cyB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cbi8qIGVhcmNoIGFyZWFcbiovXG5cbjo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24tY2xlYXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmljb24tY2xlYXItaW5zaWRlIHtcbiAgei1pbmRleDogMztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTsgLyogdGV4dCAxICsgbGVmdCAwLjUgKyByaWdodCAwLjUgPSAyIHJlbSovXG4gIGJvcmRlcjogMDtcbn1cblxuLmljb24tY2xlYXItYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZi1iYWRnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjM7IC8qcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMztcbn1cblxuLnJlZmluZS1zZWFyY2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyAvKnJnYmEoMCwwLDAsLjEyNSk7ICovXG4gIGNvbG9yOiAjODY4MTgxO1xufVxuXG4vKiBwb3AtdXAgbW9kZWxzXG4qL1xuXG4uc2VsZWN0LW1vZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnNlbGVjdC1tb2RlbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAvKm1hcmdpbjogYXV0bzsqL1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaW5nbGUtbGluZS1lZGl0IHtcbn1cblxuLnNpbmdsZS1saW5lLWVkaXQgPiAucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLypOZGJEYXRlUGlja2VyIFJhbmdlIFNlbGVjdG9yICovXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4uZGF0ZS1zZWxlY3Rpb24tcG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgLypwYWRkaW5nOi41cmVtIDA7Ki9cbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkwqAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWRkLWFyZWEge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJhZGdlLWNsaWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmJhZGdlLWNsaWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogR3JpZC9MaXN0IHZpZXcgZmlsdGVyXG4qL1xuXG4udmlldy1yYWRpbyArIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjYmJiZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcbn1cbi52aWV3LXJhZGlvOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLnZpZXctcmFkaW8gKyBsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udmlldy1yYWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zb3J0LXNlbGVjdGlvbiB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnQtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5Mi1kcm9wZG93biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc29ydC1zZWxlY3Rpb24gaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udGgtc29ydC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlYWQtbW9yZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGNvbG9yOiAjMzA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVhZC1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvbnQtc2l6ZS03NSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLm5vLXJlY29yZHMge1xuICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87IC8qY2VudGVyaW5nKi9cblxuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmxpc3Qtc2VsZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1vZGFsLWJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWZyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG5cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnktbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDIzMywgMjM2LCAyMzksIDEpIDAlLFxuICAgIHJnYmEoMjMzLCAyMzYsIDIzOSwgMC4yKSA4MCVcbiAgKTtcbiAgcGFkZGluZzogMXJlbSAyMHB4IDFyZW0gMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgLypcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFzc28tbGluayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ub2hyZWYtbGluayB7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub2hyZWYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzICFpbXBvcnRhbnQ7XG59XG5cbi5ub2hyZWYtbGluay5hY3RpdmUsXG4ubm9ocmVmLWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtY2hlY2stYm94IHtcbiAgem9vbTogMS4xO1xufVxuXG4uY3VycmVuY3kge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qU3RhcnQgQXJjaGl2ZSBTbGlkZXIqL1xuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vKkVuZCBBcmNoaXZlIFNsaWRlciovXG5cbi5iYWRnZS1ncm91cCB7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5uZXctbW9kYWwge1xuICB6LWluZGV4OiAxMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubmV3LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXZhaWxhYmxlLWhpbnRzIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwZDtcbn1cblxuLmNvbC1ndXR0ZXIge1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbC1ndXR0ZXIgPiBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/membership/lead/lead-list/lead-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/membership/lead/lead-list/lead-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: LeadListComponent */

  /***/
  function srcAppMembershipLeadLeadListLeadListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadListComponent", function () {
      return LeadListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_base_lead_lead_list_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../membership-cust/base/lead/lead-list.cust.component */
    "./src/app/membership-cust/base/lead/lead-list.cust.component.ts");
    /* harmony import */


    var _lead_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../lead.component */
    "./src/app/membership/lead/lead.component.ts");
    /* harmony import */


    var _lead_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../lead.service */
    "./src/app/membership/lead/lead.service.ts");

    var LeadListComponent_1;

    var LeadListComponent = LeadListComponent_1 = /*#__PURE__*/function (_membership_cust_base5) {
      _inherits(LeadListComponent, _membership_cust_base5);

      var _super19 = _createSuper(LeadListComponent);

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
      function LeadListComponent(leadService, injector, router, route, location) {
        var _this17;

        _classCallCheck(this, LeadListComponent);

        _this17 = _super19.call(this, leadService, injector, router, route, location, _lead_component__WEBPACK_IMPORTED_MODULE_5__["ViewType"].LIST);
        _this17.leadService = leadService;
        _this17.injector = injector;
        _this17.router = router;
        _this17.route = route;
        _this17.location = location;
        _this17.fieldDisplayNames = {
          'name': 'Name',
          'title': 'Title',
          'photo': 'Photo',
          'email': 'Email'
        };

        _this17.stringFields.push('name');

        _this17.stringFields.push('title');

        _this17.stringFields.push('photo');

        _this17.stringFields.push('email');

        _this17.listViewFilter = 'grid';
        var listCategories = [];
        _this17.listCategory1 = listCategories[0] || {};
        _this17.listCategory2 = listCategories[1] || {};
        _this17.itemMultiSelect = true;
        return _this17;
      }

      _createClass(LeadListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(LeadListComponent.prototype), "ngOnInit", this).call(this);

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
          return new LeadListComponent_1(null, null, null, null, null);
        }
      }]);

      return LeadListComponent;
    }(_membership_cust_base_lead_lead_list_cust_component__WEBPACK_IMPORTED_MODULE_4__["LeadListCustComponent"]);

    LeadListComponent.ctorParameters = function () {
      return [{
        type: _lead_service__WEBPACK_IMPORTED_MODULE_6__["LeadService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    LeadListComponent = LeadListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lead-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lead-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/lead/lead-list/lead-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lead-list.component.css */
      "./src/app/membership/lead/lead-list/lead-list.component.css"))["default"]]
    })], LeadListComponent);
    /***/
  },

  /***/
  "./src/app/membership/lead/lead.base.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/membership/lead/lead.base.service.ts ***!
    \******************************************************/

  /*! exports provided: LeadBaseService */

  /***/
  function srcAppMembershipLeadLeadBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadBaseService", function () {
      return LeadBaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");

    var servicePath = '/lead/';

    var LeadBaseService = /*#__PURE__*/function (_hicoder_angular_core5) {
      _inherits(LeadBaseService, _hicoder_angular_core5);

      var _super20 = _createSuper(LeadBaseService);

      function LeadBaseService(http, serverRootUrl) {
        _classCallCheck(this, LeadBaseService);

        var serviceUrl = serverRootUrl + servicePath;
        return _super20.call(this, http, serviceUrl);
      }

      return LeadBaseService;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseService"]);
    /***/

  },

  /***/
  "./src/app/membership/lead/lead.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/membership/lead/lead.component.ts ***!
    \***************************************************/

  /*! exports provided: ViewType, LeadComponent */

  /***/
  function srcAppMembershipLeadLeadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadComponent", function () {
      return LeadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewType", function () {
      return _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewType"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var itemCamelName = 'team Leads';

    var LeadComponent = /*#__PURE__*/function (_hicoder_angular_core6) {
      _inherits(LeadComponent, _hicoder_angular_core6);

      var _super21 = _createSuper(LeadComponent);

      // detail sel component
      //@Input() inputData;
      //@Output() outputData;
      // detail pop component
      // @Input() inputData;
      // @Output() outputData;
      function LeadComponent(leadService, injector, router, route, location, view) {
        var _this18;

        _classCallCheck(this, LeadComponent);

        _this18 = _super21.call(this, leadService, injector, router, route, location, view, itemCamelName);
        _this18.leadService = leadService;
        _this18.injector = injector;
        _this18.router = router;
        _this18.route = route;
        _this18.location = location;
        _this18.view = view;
        _this18.doneData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this18.done = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this18.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this18.briefFieldsInfo = [];

        _this18.briefFieldsInfo.push(['name', 'Name']);

        _this18.briefFieldsInfo.push(['title', 'Title']);

        _this18.briefFieldsInfo.push(['photo', 'Photo']);

        _this18.briefFieldsInfo.push(['email', 'Email']);

        _this18.emailFields = [['Email', 'email']];
        _this18.requiredFields = ['name', 'title', 'photo', 'email'];
        _this18.schemaName = 'lead';
        _this18.modulePath = 'membership';
        _this18.indexFields = ['name'];
        return _this18;
      }

      _createClass(LeadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = this.style || {};
          this.options = this.options || {};
        }
      }]);

      return LeadComponent;
    }(_hicoder_angular_core__WEBPACK_IMPORTED_MODULE_1__["MddsBaseComponent"]);

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "searchObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "inputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "queryParams", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "categoryBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('asso')], LeadComponent.prototype, "associationField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], LeadComponent.prototype, "outputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "cid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "initData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "embeddedView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "embedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], LeadComponent.prototype, "doneData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], LeadComponent.prototype, "done", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "disableActionButtions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], LeadComponent.prototype, "eventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "detailObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], LeadComponent.prototype, "showFieldsStr", void 0);
    /***/
  },

  /***/
  "./src/app/membership/lead/lead.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/membership/lead/lead.service.ts ***!
    \*************************************************/

  /*! exports provided: LeadService */

  /***/
  function srcAppMembershipLeadLeadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadService", function () {
      return LeadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _lead_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lead.base.service */
    "./src/app/membership/lead/lead.base.service.ts");
    /* harmony import */


    var _membership_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../membership.tokens */
    "./src/app/membership/membership.tokens.ts");

    var LeadService = /*#__PURE__*/function (_lead_base_service__W) {
      _inherits(LeadService, _lead_base_service__W);

      var _super22 = _createSuper(LeadService);

      function LeadService(http, membershipServerRootUri) {
        var _this19;

        _classCallCheck(this, LeadService);

        _this19 = _super22.call(this, http, membershipServerRootUri);
        _this19.membershipServerRootUri = membershipServerRootUri;
        return _this19;
      }

      _createClass(LeadService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return LeadService;
    }(_lead_base_service__WEBPACK_IMPORTED_MODULE_3__["LeadBaseService"]);

    LeadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]]
        }]
      }];
    };

    LeadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_membership_tokens__WEBPACK_IMPORTED_MODULE_4__["Membership_SERVER_ROOT_URI"]))], LeadService);
    /***/
  },

  /***/
  "./src/app/membership/membership-routing.core.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/membership/membership-routing.core.module.ts ***!
    \**************************************************************/

  /*! exports provided: MembershipRoutingCoreModule */

  /***/
  function srcAppMembershipMembershipRoutingCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipRoutingCoreModule", function () {
      return MembershipRoutingCoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_membership_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../membership-cust/membership.conf */
    "./src/app/membership-cust/membership.conf.ts");

    var MembershipRoutingCoreModule = function MembershipRoutingCoreModule() {
      _classCallCheck(this, MembershipRoutingCoreModule);
    };

    MembershipRoutingCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_membership_cust_membership_conf__WEBPACK_IMPORTED_MODULE_3__["MembershipCoreRoutes"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], MembershipRoutingCoreModule);
    /***/
  },

  /***/
  "./src/app/membership/membership-routing.core.path.ts":
  /*!************************************************************!*\
    !*** ./src/app/membership/membership-routing.core.path.ts ***!
    \************************************************************/

  /*! exports provided: additionalinfoRoutingCorePath, boardRoutingCorePath, leadRoutingCorePath */

  /***/
  function srcAppMembershipMembershipRoutingCorePathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "additionalinfoRoutingCorePath", function () {
      return additionalinfoRoutingCorePath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "boardRoutingCorePath", function () {
      return boardRoutingCorePath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "leadRoutingCorePath", function () {
      return leadRoutingCorePath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _additionalinfo_additionalinfo_list_additionalinfo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-list/additionalinfo-list.component */
    "./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_detail_additionalinfo_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-detail/additionalinfo-detail.component */
    "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-edit/additionalinfo-edit.component */
    "./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.ts");
    /* harmony import */


    var _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./board/board-list/board-list.component */
    "./src/app/membership/board/board-list/board-list.component.ts");
    /* harmony import */


    var _lead_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lead/lead-list/lead-list.component */
    "./src/app/membership/lead/lead-list/lead-list.component.ts");
    /* harmony import */


    var _hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-auth */
    "./node_modules/@hicoder/angular-auth/fesm2015/hicoder-angular-auth.js"); // Import components for each schema


    var additionalinfoRoutingCorePath = [{
      path: 'list',
      component: _additionalinfo_additionalinfo_list_additionalinfo_list_component__WEBPACK_IMPORTED_MODULE_1__["AdditionalinfoListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _additionalinfo_additionalinfo_detail_additionalinfo_detail_component__WEBPACK_IMPORTED_MODULE_2__["AdditionalinfoDetailComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'edit/:id',
      component: _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdditionalinfoEditComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'new',
      component: _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdditionalinfoEditComponent"]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    var boardRoutingCorePath = [{
      path: 'list',
      component: _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_4__["BoardListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    var leadRoutingCorePath = [{
      path: 'list',
      component: _lead_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_5__["LeadListComponent"],
      canActivate: [_hicoder_angular_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/membership/membership-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/membership/membership-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MembershipRoutingModule */

  /***/
  function srcAppMembershipMembershipRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipRoutingModule", function () {
      return MembershipRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _membership_cust_membership_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../membership-cust/membership.conf */
    "./src/app/membership-cust/membership.conf.ts");

    var MembershipRoutingModule = function MembershipRoutingModule() {
      _classCallCheck(this, MembershipRoutingModule);
    };

    MembershipRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_membership_cust_membership_conf__WEBPACK_IMPORTED_MODULE_3__["MembershipRoutes"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], MembershipRoutingModule);
    /***/
  },

  /***/
  "./src/app/membership/membership.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/membership/membership.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembershipMembershipComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".component-main-card {\n  border: 0rem;\n  border-radius: 0rem;\n\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1COztFQUVuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzaGlwL21lbWJlcnNoaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtbWFpbi1jYXJkIHtcbiAgYm9yZGVyOiAwcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/membership/membership.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/membership/membership.component.ts ***!
    \****************************************************/

  /*! exports provided: MembershipComponent */

  /***/
  function srcAppMembershipMembershipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipComponent", function () {
      return MembershipComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MembershipComponent = /*#__PURE__*/function () {
      function MembershipComponent() {
        _classCallCheck(this, MembershipComponent);
      }

      _createClass(MembershipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MembershipComponent;
    }();

    MembershipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-membership',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./membership.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/membership/membership.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./membership.component.css */
      "./src/app/membership/membership.component.css"))["default"]]
    })], MembershipComponent);
    /***/
  },

  /***/
  "./src/app/membership/membership.core.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/membership/membership.core.module.ts ***!
    \******************************************************/

  /*! exports provided: MembershipCoreModule */

  /***/
  function srcAppMembershipMembershipCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipCoreModule", function () {
      return MembershipCoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @hicoder/angular-file */
    "./node_modules/@hicoder/angular-file/fesm2015/hicoder-angular-file.js");
    /* harmony import */


    var _hicoder_angular_action_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @hicoder/angular-action-email */
    "./node_modules/@hicoder/angular-action-email/fesm2015/hicoder-angular-action-email.js");
    /* harmony import */


    var _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @hicoder/angular-core */
    "./node_modules/@hicoder/angular-core/fesm2015/hicoder-angular-core.js");
    /* harmony import */


    var _membership_routing_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./membership-routing.core.module */
    "./src/app/membership/membership-routing.core.module.ts");
    /* harmony import */


    var _membership_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./membership.component */
    "./src/app/membership/membership.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_list_additionalinfo_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-list/additionalinfo-list.component */
    "./src/app/membership/additionalinfo/additionalinfo-list/additionalinfo-list.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_detail_additionalinfo_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-detail/additionalinfo-detail.component */
    "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_detail_additionalinfo_detail_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component */
    "./src/app/membership/additionalinfo/additionalinfo-detail/additionalinfo-detail-field.component.ts");
    /* harmony import */


    var _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./additionalinfo/additionalinfo-edit/additionalinfo-edit.component */
    "./src/app/membership/additionalinfo/additionalinfo-edit/additionalinfo-edit.component.ts");
    /* harmony import */


    var _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./board/board-list/board-list.component */
    "./src/app/membership/board/board-list/board-list.component.ts");
    /* harmony import */


    var _board_board_detail_board_detail_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./board/board-detail/board-detail-field.component */
    "./src/app/membership/board/board-detail/board-detail-field.component.ts");
    /* harmony import */


    var _lead_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./lead/lead-list/lead-list.component */
    "./src/app/membership/lead/lead-list/lead-list.component.ts");
    /* harmony import */


    var _lead_lead_detail_lead_detail_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./lead/lead-detail/lead-detail-field.component */
    "./src/app/membership/lead/lead-detail/lead-detail-field.component.ts"); // Import components for each schema


    var MembershipCoreModule = function MembershipCoreModule() {
      _classCallCheck(this, MembershipCoreModule);
    };

    MembershipCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _hicoder_angular_core__WEBPACK_IMPORTED_MODULE_6__["MddsCoreModule"], _hicoder_angular_file__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _hicoder_angular_action_email__WEBPACK_IMPORTED_MODULE_5__["ActionEmailModule"], _membership_routing_core_module__WEBPACK_IMPORTED_MODULE_7__["MembershipRoutingCoreModule"]],
      declarations: [_membership_component__WEBPACK_IMPORTED_MODULE_8__["MembershipComponent"], _additionalinfo_additionalinfo_list_additionalinfo_list_component__WEBPACK_IMPORTED_MODULE_9__["AdditionalinfoListComponent"], _additionalinfo_additionalinfo_detail_additionalinfo_detail_component__WEBPACK_IMPORTED_MODULE_10__["AdditionalinfoDetailComponent"], _additionalinfo_additionalinfo_detail_additionalinfo_detail_field_component__WEBPACK_IMPORTED_MODULE_11__["AdditionalinfoDetailFieldComponent"], _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__["AdditionalinfoEditComponent"], _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_13__["BoardListComponent"], _board_board_detail_board_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["BoardDetailFieldComponent"], _lead_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_15__["LeadListComponent"], _lead_lead_detail_lead_detail_field_component__WEBPACK_IMPORTED_MODULE_16__["LeadDetailFieldComponent"]],
      exports: [_membership_component__WEBPACK_IMPORTED_MODULE_8__["MembershipComponent"], _additionalinfo_additionalinfo_list_additionalinfo_list_component__WEBPACK_IMPORTED_MODULE_9__["AdditionalinfoListComponent"], _additionalinfo_additionalinfo_detail_additionalinfo_detail_component__WEBPACK_IMPORTED_MODULE_10__["AdditionalinfoDetailComponent"], _additionalinfo_additionalinfo_detail_additionalinfo_detail_field_component__WEBPACK_IMPORTED_MODULE_11__["AdditionalinfoDetailFieldComponent"], _additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__["AdditionalinfoEditComponent"], _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_13__["BoardListComponent"], _board_board_detail_board_detail_field_component__WEBPACK_IMPORTED_MODULE_14__["BoardDetailFieldComponent"], _lead_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_15__["LeadListComponent"], _lead_lead_detail_lead_detail_field_component__WEBPACK_IMPORTED_MODULE_16__["LeadDetailFieldComponent"]],
      providers: [],
      entryComponents: [_additionalinfo_additionalinfo_edit_additionalinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__["AdditionalinfoEditComponent"]]
    })], MembershipCoreModule);
    /***/
  },

  /***/
  "./src/app/membership/membership.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/membership/membership.module.ts ***!
    \*************************************************/

  /*! exports provided: MembershipModule */

  /***/
  function srcAppMembershipMembershipModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipModule", function () {
      return MembershipModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _membership_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./membership-routing.module */
    "./src/app/membership/membership-routing.module.ts");
    /* harmony import */


    var _membership_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./membership.core.module */
    "./src/app/membership/membership.core.module.ts");
    /* harmony import */


    var _membership_cust_membership_cust_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../membership-cust/membership.cust.module */
    "./src/app/membership-cust/membership.cust.module.ts");

    var MembershipModule = function MembershipModule() {
      _classCallCheck(this, MembershipModule);
    };

    MembershipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_membership_routing_module__WEBPACK_IMPORTED_MODULE_2__["MembershipRoutingModule"], _membership_core_module__WEBPACK_IMPORTED_MODULE_3__["MembershipCoreModule"], _membership_cust_membership_cust_module__WEBPACK_IMPORTED_MODULE_4__["MembershipCustModule"]],
      declarations: [],
      exports: [_membership_core_module__WEBPACK_IMPORTED_MODULE_3__["MembershipCoreModule"], _membership_cust_membership_cust_module__WEBPACK_IMPORTED_MODULE_4__["MembershipCustModule"]],
      providers: [],
      entryComponents: []
    })], MembershipModule);
    /***/
  },

  /***/
  "./src/app/membership/membership.tokens.ts":
  /*!*************************************************!*\
    !*** ./src/app/membership/membership.tokens.ts ***!
    \*************************************************/

  /*! exports provided: Membership_SERVER_ROOT_URI */

  /***/
  function srcAppMembershipMembershipTokensTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Membership_SERVER_ROOT_URI", function () {
      return Membership_SERVER_ROOT_URI;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _membership_cust_membership_tokens_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../membership-cust/membership.tokens.value */
    "./src/app/membership-cust/membership.tokens.value.ts");

    var Membership_SERVER_ROOT_URI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Membership_SERVER_ROOT_URI', {
      factory: function factory() {
        return _membership_cust_membership_tokens_value__WEBPACK_IMPORTED_MODULE_2__["membership_server_root_uri"];
      },
      providedIn: 'root'
    });
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-title {\n    font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/pages/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/homepage/homepage.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomepageHomepageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".slides-session {\n\tpadding-top: 80px;\n\twidth: 100%;\n}\n\n.internal_link {\n    margin-top: 1rem;\n    color: #307bff;\n    cursor: pointer;\n}\n\n.carousel-caption {\n\tbottom: 300px;\n}\n\n.new-carousel-subcaption {\n\tfont-size: 2rem;\n}\n\n.carousel-inner img {\n\twidth: 100%;\n}\n\n.horizontal {\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\nsection {\n\tpadding: 20px 0 20px 0;\n\tmargin: 50px 0 50px 0;\n}\n\n.container {\n\tbackground-color: white;\n}\n\n.card {\n\tbackground-color: lightblue;\n}\n\n.col-large{\n\tflex-grow: 1;\n\tpadding-right: 15px;\n\tpadding-left: 15px;\n\tmax-width: 740px;\n}\n\n.col-small {\n\twidth: 370px;\n\tpadding-right: 15px;\n    padding-left: 15px;\n}\n\n.row-border {\n    border-left: solid 1px #00274C90;\t\n    border-right: solid 1px #00274C90;\t\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIscUJBQXFCO0FBQ3RCOztBQUdBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXMtc2Vzc2lvbiB7XG5cdHBhZGRpbmctdG9wOiA4MHB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmludGVybmFsX2xpbmsge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgY29sb3I6ICMzMDdiZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG5cdGJvdHRvbTogMzAwcHg7XG59XG5cbi5uZXctY2Fyb3VzZWwtc3ViY2FwdGlvbiB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNhcm91c2VsLWlubmVyIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uaG9yaXpvbnRhbCB7XG5cdHdpZHRoOiA4MCU7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnNlY3Rpb24ge1xuXHRwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuXHRtYXJnaW46IDUwcHggMCA1MHB4IDA7XG59XG5cblxuLmNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLmNvbC1sYXJnZXtcblx0ZmxleC1ncm93OiAxO1xuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdG1heC13aWR0aDogNzQwcHg7XG59XG5cbi5jb2wtc21hbGwge1xuXHR3aWR0aDogMzcwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucm93LWJvcmRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjMDAyNzRDOTA7XHRcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjMDAyNzRDOTA7XHRcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/homepage/homepage.component.ts ***!
    \******************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppPagesHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);

        this.imageObject = [{
          imageURL: 'assets/images/work.jpg',
          heading: 'We Work Together for a Better Tomorrow'
        }];
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.css */
      "./src/app/pages/homepage/homepage.component.css"))["default"]]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jackliu/Documents/Dev_Local/HCC/member-portal/frontend/front-pub/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map