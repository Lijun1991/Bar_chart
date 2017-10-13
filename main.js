localhost.currentHTML = '';
localhost.chg_percent = [];
localhost.currency = [];
localhost.chart1 = { yAxisMin : null, yAxisMax : null};

var url = 'https://data.marincounty.org/resource/mw3d-ud6d.json';

$.ajax({
    url: url,
    cache: false,
    dataType: 'jsonp',
    context: localhost,
    success: function(parsedData){
        for (i = 0; i < parsedData.length; i++){
            this.currencyObj = parsedData[i]["department"];
            this.currentHTML += '<br/><strong>' + this.currencyObj.name + '</strong><br/>';

            for (prop in this.currencyObj) {
                this.currentHTML += prop + ': ' + this.currencyObj[prop] + '<br/>';
            };
            this.chg_percent.push(parseFloat(parsedData[i]["department"].chg_percent));
            this.currency.push(parsedData[i]["department"].name);        
        }
    }
    
})
