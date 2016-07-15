(function(){
    var app = angular.module( 'store', [] );

    app.controller( 'StoreController', function () {
        this.products = gem;
    });

    var gem  = [
        {
            name : 'Dodecahedron',
            price : 2.95,
            description : '...',
            canPurchase : true,
            soldOut : false
        }, {
            name : 'Pentagonal Gem',
            price : 5.95,
            description : '...',
            canPurchase : false,
            soldOut : false
        }
    ]

    app.controller( 'PanelController', function () {
        this.tab = 1;
        this.selectTab = function( setTab ) {
            this.tab = setTab;
        };
        this.isSelected = function( checkTab ) {
            return this.tab === checkTab;
        };
    });
})();
