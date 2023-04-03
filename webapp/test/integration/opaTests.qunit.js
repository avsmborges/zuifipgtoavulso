sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dellavolpe/com/br/zuifipgtoavulso/test/integration/FirstJourney',
		'dellavolpe/com/br/zuifipgtoavulso/test/integration/pages/PagamentoAvulsoList',
		'dellavolpe/com/br/zuifipgtoavulso/test/integration/pages/PagamentoAvulsoObjectPage'
    ],
    function(JourneyRunner, opaJourney, PagamentoAvulsoList, PagamentoAvulsoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dellavolpe/com/br/zuifipgtoavulso') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePagamentoAvulsoList: PagamentoAvulsoList,
					onThePagamentoAvulsoObjectPage: PagamentoAvulsoObjectPage
                }
            },
            opaJourney.run
        );
    }
);