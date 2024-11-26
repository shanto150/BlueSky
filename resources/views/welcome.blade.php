<!DOCTYPE html>

<html lang="en" data-bs-theme="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BlueSky | NDC</title>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta name="api-base-url" content="{{ url('') }}" />
    <link rel="icon" href="{{ url('/theme/appimages/blueskywings.png') }}">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">

    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script>
        let allValue = JSON.parse(localStorage.getItem('piniaUserAuth'));
        if (allValue.isDarkMode) {
            $("html").attr("data-bs-theme", 'dark')
        } else {
            $("html").attr("data-bs-theme", 'light')
        }


    </script>

</body>

</html>
