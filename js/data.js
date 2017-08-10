// Set the number of charts to display (the rest will appear in a table)
var numCharts = 3;

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        getPrograms();
    }, 250);
});

// Inject the new program form
function showNewProgramForm() {
    var url = "includes/new_program_form.php";
    var contentContainer = $('#injected-content');
    $('#main-content').hide();
    getData(url, injectContent, contentContainer);
    contentContainer.fadeIn();
    $('aside div').hide();
    $('aside div.cancel').fadeIn().css("display","inline-block");
}

// Hide the new program form
function cancelNewProgramForm() {
    $('#injected-content').hide();
    $('#main-content').fadeIn();
    $('aside div').hide();
    $('aside div.new-program').fadeIn().css("display","inline-block");
}

// Generic function to inject content into a specified target container
function injectContent(content, target) {
    target.html(content);
}

// Get the pricing data
function getPricing(trigger) {
    var url = "https://api.myjson.com/bins/47axv";
    return getData(url, displayPricing, trigger);
}

// Get the program data
function getPrograms() {
    var url = "https://api.myjson.com/bins/5bdb3";
    return getData(url, displayGraphs);
}

// Generic function to get data and optionally fire a callback function
function getData(url, callback, trigger) {
    $.ajax({
        url: url,
        context: document.body
    }).done(function(data) {
        if (typeof callback == 'function') {
            callback(data, trigger);
        }
        else {
            return data;
        }
    });
}

// Output the HTML for a chart container, then populate it with google charts.
function displayGraphs(data) {
    $('#charts').html('');
    $('#all-programs tbody').html('');
    $.each(data, function(i, item) {
        if (i < numCharts) {
            $('#charts').append('<div class="chart-container" data-program-id="' + item.ProgramID + '"><div id="graph-' + item.ProgramID + '" class="chart"><h2>' + item.Name + '</h2><a href="#" onclick="toggleEditProgramName($(this)); return false;" class="edit-icon"></a><h3>Sales by month</h3><div id="chart-' + item.ProgramID + '"></div></div><div class="total-monthly">' +
                '<table><thead>' +
                '<tr><td>Total Monthly</td><td>Current</td><td>1-Year</td></tr>' +
                '</thead><tbody>' +
                '<tr><td>Sales</td><td>' + formatCurrency(item.TotalMonthlySales) + '</td><td id="line-' + item.ProgramID + '" class="line"></td></tr>' +
                '</tbody></table>' +
                '</div><a href="#" onclick="getPricing($(this)); return false;">more</a><div class="additional-data"></div></div>');
            buildChartData(item.Sales, "chart-" + item.ProgramID);
            buildLineData(item.Sales, "line-" + item.ProgramID);
        }
        else {
            var output = '<tr><td class="chart-container" data-program-id="' + item.ProgramID + '">' + item.Name + '<a href="#" onclick="getPricing($(this)); return false;">more</a><div class="additional-data"></div></td><td>' + formatCurrency(item.TotalMonthlySales) + '</td><td>' + item.MonthlyAttendance + ' <span class="unit">vists</span></td></tr>';
            $('#all-programs table').append(output);
        }
    });
}

// Build a Google bar chart
function buildChartData(items, target) {
    var chart = new google.charts.Bar(document.getElementById(target));
    var count = items.CurrentYear.length;
    var myData = ([
        ['Month', 'Current Year', 'Previous Year']
    ]);
    for(var i=0; i<count; i++) {
        myData.push([getMonth(i),items.CurrentYear[i], items.PreviousYear[i]]);
    }
    var data = google.visualization.arrayToDataTable(myData);
    var options = {
        title: '',
        legend: { position: 'none' },
        colors: ['#ccbcdd', '#bcd8b9'],
        axisFontSize : 0,
        axisTitlesPosition: 'none',
        vAxis: {
            gridlines: {
                color: 'transparent'
            },
            textStyle: {
                color: '#ffffff',
                fontSize:0
            }
        },
        hAxis: {
            title:""
        },
        height:95
    };
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

// Build a Google line graph
function buildLineData(items, target) {
    var data = new google.visualization.DataTable();
    data.addColumn('number', '');
    data.addColumn('number', '');

    $.each(items.CurrentYear, function(i, item) {
        data.addRows([[i,item]]);
    });

    var options = {
        title: '',
        legend: { position: 'none' },
        colors: ['#37444e'],
        axisFontSize : 0,
        axisTitlesPosition: 'none',
        vAxis: {
            gridlines: {
                color: 'transparent'
            },
            textStyle: {
                color: '#ffffff',
                fontSize:0
            },
            baselineColor: '#fbfbf6'
        },
        hAxis: {
            title:"",
            gridlines: {
                color: 'transparent'
            },
            baselineColor: '#fbfbf6'
        },
        tooltip :{
            trigger :'none'
        }
    };
    var chart = new google.visualization.LineChart(document.getElementById(target));

    chart.draw(data, options);
}

// Add the additional data from the API call
function displayPricing(data, trigger) {
    var target = trigger.siblings('.additional-data');
    var output = "<table><thead><tr><th>Price Name</th><th>Current</th><th>1-Year</th></tr></thead><tbody>";
    $.each(data, function(i, item) {
        if(trigger.closest('.chart-container').data('program-id') == item.ProgramID) {
            output += "<tr class='additional-data-row'><td>" + item.Name + "</td><td>" + formatCurrency(item.Sales) + "</td><td class='line'></td></tr>";
        }
    });
    output += "</thead></table><a href='#' onclick='$(this).closest(\".additional-data\").slideUp().siblings(\"a\").show(); return false;'>less</a>";
    trigger.hide();
    target.html(output).slideDown();
}

// UI for editing the program name. NOTE: doesn't actually edit the name, it just looks like it does.
function toggleEditProgramName(trigger) {
    var editable = trigger.siblings('h2');
    var currentValue = editable.text();
    if (editable.is(":visible")) {
        editable.hide().after('<form class="chart-form"><input type=\"text\" placeholder=\"' + currentValue +'\"></form>');
    }
    else {
        var form = editable.siblings('form');
        var newValue = form.find('input').val();
        if (newValue == "") {
            newValue = currentValue;
        }
        editable.text(newValue).show();
        form.remove();
    }

}

// Table matching month names to their index
function getMonth(i){
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    return month[i];
}

// Format for currency
function formatCurrency(value) {
    return '$' + value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}