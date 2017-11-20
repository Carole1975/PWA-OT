$(document).ready(function() {

   

    
    $('#datePicker')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm1').formValidation('revalidateField', 'date');
        });

    $('#datePickers')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm1').formValidation('revalidateField', 'date');
        });


    $('#eventForm1').formValidation({
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

    $("input[name='myTime']").timeInput(); // use default or html5 attributes
    $("input[name='myTime2']").timeInput({min: "6:00", max: "15:00", step: 900});

    
});