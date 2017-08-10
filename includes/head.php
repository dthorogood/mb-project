<!doctype html>
<html>
    <head>
        <title>Dashboard | Urban Yoga</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/data.js"></script>
        <link rel="stylesheet" href="css/main.min.css">


        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['bar']});
            google.charts.load('current', {packages: ['corechart', 'line']})

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(getPrograms);


        </script>
    </head>
    <body>