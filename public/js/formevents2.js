$(document).ready(function() {

    var manif = document.forms["newform"]["manif"];
    var date = document.forms["newform"]["date"];
    var date_fin = document.forms["newform"]["date_fin"];
    var ou = document.forms["newform"]["ou"];
    var resume = document.forms["newform"]["resume"];

    
    $('#datePicker')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });

    $('#datePickers')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });


    $('#eventForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
        }
    });

});