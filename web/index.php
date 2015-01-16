<!DOCTYPE html>
<html class="hide-sidebar ls-bottom-footer" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Simply5 - Real Estate</title>

    <!-- Compressed App Style Bundle
    Includes core vendor styling such as the customized Bootstrap and other 3rd party libraries used for the current theme/module
    Note: The bundle was tweaked for the current theme/module and does NOT include ALL of the standalone modules below
    The bundle was generated using modern frontend development tools that are provided with the package
    To learn more about the development process, please refer to the documentation. -->
    <link href="css/default.min.css" rel="stylesheet">

    <!-- Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules were not used with the current theme/module but ALL are 100% compatible -->
    <!--
    <link href="css/module-essentials.min.css" rel="stylesheet" />
    <link href="css/module-layout.min.css" rel="stylesheet" />
    <link href="css/module-sidebar.min.css" rel="stylesheet" />
    <link href="css/module-sidebar-skins.min.css" rel="stylesheet" />
    <link href="css/module-navbar.min.css" rel="stylesheet" />
    <link href="css/module-media.min.css" rel="stylesheet" />
    <link href="css/module-timeline.min.css" rel="stylesheet" />
    <link href="css/module-cover.min.css" rel="stylesheet" />
    <link href="css/module-chat.min.css" rel="stylesheet" />
    <link href="css/module-charts.min.css" rel="stylesheet" />
    <link href="css/module-maps.min.css" rel="stylesheet" />
    <link href="css/module-colors-alerts.min.css" rel="stylesheet" />
    <link href="css/module-colors-background.min.css" rel="stylesheet" />
    <link href="css/module-colors-buttons.min.css" rel="stylesheet" />
    <link href="css/module-colors-calendar.min.css" rel="stylesheet" />
    <link href="css/module-colors-progress-bars.min.css" rel="stylesheet" />
    <link href="css/module-colors-text.min.css" rel="stylesheet" />
    -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
    WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>


    <?php include __DIR__.'/../app/views/layouts/header.php'; ?>

    <?php include __DIR__.'/../app/views/home/header.php'; ?>

    <div id="content">
        <div class="bg-white">
            <div class="container">
                <div class="page-section">
                    <div class="text-center">
                        <i class="fa fa-home fa-5x text-grey-300"></i>
                        <h1 class="text-h2">Looking for a new house in the new year?</h1>
                        <hr/>
                        <p class="lead">Check out the local architecture, meet your would be neighbors, find real estate, homes for sale, properties for rent, school and neighborhood information and much more.</p>
                    </div>
                    <br/>
                    <?php include __DIR__.'/../app/views/home/propertyList.php'; ?>

                    <!-- // END .owl-basic -->
                    </div>
                <div class="page-section">
                    <?php include __DIR__.'/../app/views/home/propertyThumbs.php'; ?>
                    <br/>
                    <?php include __DIR__.'/../app/views/home/testimonials.php'; ?>
                </div>
            </div>

            <!-- // END .container -->
            </div>

        <!-- // END .bg-white -->
        <?php include __DIR__.'/../app/views/home/footer.php'; ?>

    </div>

    <!-- // END #content -->

    <?php include __DIR__.'/../app/views/layouts/footer.php'; ?>

<!-- Inline Script for colors and config objects; used by various external scripts; --><script>
    var colors = {
        "danger-color": "#e74c3c",
        "success-color": "#81b53e",
        "warning-color": "#f0ad4e",
        "inverse-color": "#2c3e50",
        "info-color": "#2d7cb5",
        "default-color": "#6e7882",
        "default-light-color": "#cfd9db",
        "purple-color": "#9D8AC7",
        "mustard-color": "#d4d171",
        "lightred-color": "#e15258",
        "body-bg": "#f6f6f6"
    };
    var config = {
        debug: true,
        theme: "real-estate",
        skins: {
            "default": {
                "primary-color": "#3498db"
            }
        }
    };
    </script>

    <!-- Compressed Vendor Scripts Bundle
    Includes 3rd party JavaScript libraries used for the current theme/module
    Note: The bundle was tweaked for the current theme/module and it includes only libraries used with the theme/module
    The bundle was generated using modern frontend development tools that are provided with the package
    To learn more about the development process, please refer to the documentation. -->
    <script src="js/vendor-bundle-all.min.js"></script>

    <!-- Compressed App Scripts Bundle
    Includes Custom Application JavaScript used for the current theme/module -->
    <script src="js/module-bundle-main.min.js"></script>

    <!-- Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules were not used with the current theme/module but ALL are 100% compatible -->
    <!--
    <script src="js/module-essentials.min.js"></script>
    <script src="js/module-layout.min.js"></script>
    <script src="js/module-sidebar.min.js"></script>
    <script src="js/module-navbar.min.js"></script>
    <script src="js/module-media.min.js"></script>
    <script src="js/module-timeline.min.js"></script>
    <script src="js/module-chat.min.js"></script>
    <script src="js/module-maps.min.js"></script>
    -->
</body>
</html>