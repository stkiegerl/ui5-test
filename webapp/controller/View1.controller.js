sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5test.controller.View1", {
            onInit: function () {

            },
            onButtonClick: function() {
                alert("Button clicked!");
            }
        });
    });
