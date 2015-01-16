<!-- Fixed navbar -->
<div class="navbar navbar-main navbar-skin-cover navbar-static-top navbar-absolute-top navbar-size-large" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">ThemeKit</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav">
                <li><a href="../../index.html">Themes</a>
                </li>
                <li class="dropdown active">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header">Website pages</li>
                        <li class="active"><a href="front-home-slider.html">Home + Slider</a>
                        </li>
                        <li><a href="front-home-map.html">Home + Map</a>
                        </li>
                        <li class="dropdown-header">Application pages</li>
                        <li><a href="index.html">Full Screen Map</a>
                        </li>
                        <li><a href="map-listing.html">Map + Listing</a>
                        </li>
                        <li><a href="map-property.html">Map + Property</a>
                        </li>
                        <li><a href="map-edit.html">Map + Edit</a>
                        </li>
                        <li><a href="listing.html">Listing Single</a>
                        </li>
                        <li><a href="property.html">Property Single</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left margin-none">
                <div class="search-1">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="icon-search"></i></span>
                        <input type="text" class="form-control form-control-w-150" placeholder="Search ..">
                    </div>
                </div>
            </form>
            <ul class="nav navbar-nav navbar-right">

                <!-- Login -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-fw fa-lock"></i> Login
                    </a>
                    <div class="dropdown-menu dropdown-size-280">
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-shield"></i></span>
                                    <input type="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon2">
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Login <i class="fa fa-sign-in"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </li>

                <!-- // END login -->

                <!-- Sign up --><li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-fw fa-plus"></i> Sign Up
                    </a>
                    <div class="dropdown-menu dropdown-size-280">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group form-control-default">
                                        <label for="exampleInputFirstName">First name</label>
                                        <input type="email" class="form-control" id="exampleInputFirstName" placeholder="Your first name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-control-default">
                                        <label for="exampleInputLastName">Last name</label>
                                        <input type="email" class="form-control" id="exampleInputLastName" placeholder="Your last name">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-control-default required">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                            </div>
                            <div class="form-group form-control-default required">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </li>

                <!-- // END sign up -->

                <!-- user --><li class="dropdown user">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="images/people/110/guy-6.jpg" alt="" class="img-circle" /> Bill<span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#"><i class="fa fa-user"></i>Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-wrench"></i>Settings</a>
                        </li>
                        <li><a href="#"><i class="fa fa-sign-out"></i>Logout</a>
                        </li>
                    </ul>
                </li>

                <!-- // END user -->
            </ul>
        </div>

        <!-- /.navbar-collapse -->
    </div>
</div>
