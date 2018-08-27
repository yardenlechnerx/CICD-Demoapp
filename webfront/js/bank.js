window._config = {
    api: {                         
        invokeUrl: 'https://y4wh2rwm8j.execute-api.us-east-1.amazonaws.com/default' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};

function getMOD() {
    $.ajax({
        method: 'POST',                     
        url: _config.api.invokeUrl + "/MOD",           
        //"https://nwbvegibdf.execute-api.us-east-1.amazonaws.com/prod/MOD",
        headers: {
        },
        contentType: 'text/plain; charset=utf-8',
        success: successGetMOD,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error getting MOD: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when req message of the day ' + jqXHR.responseText);
        }
    });
}

function successGetMOD(result) {
    alert("MOD is: " + result);
}