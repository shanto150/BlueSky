
class MyFunction {


    date_format(date) {
        var df = moment(date).format('DD-MMM-YYYY');
        return df;
    }
    time_format(time) {
        var readyToInsert = moment(time, 'HH:mm:ss').format('hh:mm a');
        return readyToInsert;
    }

    isValidmobile(mNum) {
        var pattern = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/);
        return pattern.test(mNum);
    }

    datetime_format(date) {
        var df = moment(date).format('DD/MMM/YYYY hh:mm a');
        return df;
    }


    initCap(value) {
        if (value) {
            return value
                .toLowerCase()
                .replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g, function (m) {
                    return m.toUpperCase();
                });
        }
    }

    isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        return pattern.test(emailAddress);
    }

    number_format(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1;
    }


    MobileCountValidate(thisval) {

        var tID = $(thisval).attr('id');

        $("#" + tID).val($("#" + tID).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));

        if ($("#" + tID).val().length == 11) {
            var pattern = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/);
            if (pattern.test($("#" + tID).val())) {
                $("#" + tID).css('color', 'green');
            }

        } else {
            $("#" + tID).css('color', 'red');
        }

    }


    NidChk(thisval) {

        var tID = $(thisval).attr('id');

        $("#" + tID).val($("#" + tID).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));

        if ($("#" + tID).val().length == 16) {
            $("#" + tID).css('color', 'green');
        } else {
            $("#" + tID).css('color', 'red');
        }

    }

    validEmailChk(thisval) {

        var tID = $(thisval).attr('id');
        var pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (pattern.test($("#" + tID).val())) {
            $("#" + tID).css('color', 'green');
            return true;
        } else {
            $("#" + tID).css('color', 'red');
            return false;
        }

    }


    EmptyValueFocus(params) {

        for (i = 0; i < params.length; i++) {

            var vName = $('#' + params[i]).val();
            if (vName == '') {
                message('Need ' + params[i] + ' Value', '#FF0000', 'white', 'error', 'Error');
                $('#' + params[i]).focus();
                return false;
            }
        }
        return true;
    }


    editValuePst(keysArray, valuesArray) {

        for (var i = 0; i < keysArray.length; i++) {
            $('#' + keysArray[i]).val(valuesArray[i] == "null" ? "" : valuesArray[i]);
        }

    }


    //Check value in json object
    _isContains(json, value) {
        let contains = false;
        Object.keys(json).some(key => {
            contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
            return contains;
        });
        return contains;
    }

    //number to k

    kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
    }


    nFormatter(num) {
        const format = [
            { value: 1e18, symbol: 'E' },
            { value: 1e15, symbol: 'P' },
            { value: 1e12, symbol: 'T' },
            { value: 1e9, symbol: 'G' },
            { value: 1e6, symbol: 'M' },
            { value: 1e3, symbol: 'k' },
            { value: 1, symbol: '' },
        ];
        const formatIndex = format.findIndex((data) => num >= data.value);
        console.log(formatIndex)
        return (num / format[formatIndex === -1 ? 6 : formatIndex].value).toFixed(2) + format[formatIndex === -1 ? 6 : formatIndex].symbol;
    }

    getLastWordUsingSplit(input = '') {
        const tokens = input.split(" ");
        return tokens[tokens.length - 1];
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }




}


export default MyFunction = new MyFunction()
