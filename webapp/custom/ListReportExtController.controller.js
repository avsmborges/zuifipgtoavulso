sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
    function (JSONModel) {
        "use strict";
        return {

            onPageReady: function (oParam) {
                debugger;
                this._innerTable = this.getView().byId(this.getView().getId() + "--fe::table::PagamentoAvulso::LineItem-innerTable");
                this._table = this.getView().byId(this.getView().getId() + "--fe::table::PagamentoAvulso::LineItem");

                this.getOwnerComponent().getModel().attachEvent("messageChange", function (oEvent) {

                    if (oEvent.mParameters.newMessages.length > 0 && oEvent.mParameters.newMessages[0].type === "Success") {
                        this._innerTable.refreshRows();
                        this._table.rebindTable();
                        this._table.rebind();

                    }
                }.bind(this))

            }
        };
    });
