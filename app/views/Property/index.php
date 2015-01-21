<!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
<div class="sidebar left sidebar-size-1 sidebar-mini-reveal sidebar-offset-0 sidebar-skin-dark sidebar-visible-desktop" id=sidebar-menu data-type=collapse>
    <div data-scrollable>
        <ul class="sidebar-menu sm-bordered sm-icons-block sm-icons-right">
            <li class="hasSubmenu">
                <a href="#discover"><i class="fa fa-star"></i><span>Discover</span></a>
                <ul id="discover">
                    <li><a href="index.html"><i class="fa fa-map-marker"></i><span>Full screen Map</span></a>
                    </li>
                    <li><a href="map-listing-list.html"><i class="fa fa-list"></i><span>Map Listing - List</span></a>
                    </li>
                    <li><a href="map-listing-grid.html"><i class="fa fa-th"></i><span>Map Listing - Grid</span></a>
                    </li>
                    <li><a href="listing.html"><i class="fa fa-list"></i><span>Listing - List</span></a>
                    </li>
                    <li><a href="listing-grid.html"><i class="fa fa-th"></i><span>Listing - Grid</span></a>
                    </li>
                    <li><a href="listing-map.html"><i class="fa fa-map-marker"></i><span>Listing - Map</span></a>
                    </li>
                </ul>
            </li>
            <li class="hasSubmenu open active">
                <a href="#property"><i class="fa fa-home"></i><span>Property</span></a>
                <ul id="property" class="in">
                    <li><a href="map-property.html"><i class="fa fa-map-marker"></i><span>Map + Property</span></a>
                    </li>
                    <li class="active"><a href="property.html"><i class="fa fa-list"></i><span>Property details</span></a>
                    </li>
                </ul>
            </li>
            <li><a href="map-edit.html"><i class="fa fa-pencil"></i><span>Add property</span></a>
            </li>
        </ul>
        <h4 class="category">Website pages</h4>
        <div class="sidebar-block">
            <ul class="list-group list-group-menu">
                <li class="list-group-item"><a href="front-home-slider.html">Home + Slider</a>
                </li>
                <li class="list-group-item"><a href="front-home-map.html">Home + Map</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
<div class="sidebar right sidebar-size-xs-1 sidebar-size-lg-25pc sidebar-size-30pc sidebar-offset-0 sidebar-skin-white sidebar-visible-desktop" id=sidebar-property>
    <div class="split-vertical">
        <div class="sidebar-block equal-padding text-center">
            <p>
                <img src="images/people/110/woman-3.jpg" alt="woman" class="img-circle" width="80" />
            </p>
            <p><a href="#" class="h5">Michelle D.</a>
            </p>
            <a href="#sidebar-agent" class="btn btn-primary" data-toggle="sidebar-menu">Contact Agent</a>
        </div>
        <div class="split-vertical-body">
            <div class="split-vertical-cell">
                <div data-scrollable>
                    <div id="google-fs-realestate" data-file="js/data/google_maps/markers-property-single.json" data-center="57.79727612430726,12.051176295245341" data-zoom="17" class="maps-google-fs"></div>
                    <script id="real-estate-map-pop-1" type="text/x-handlebars-template">
                        <div>
                            <h4>{{ title }}</h4>
                            <p>{{ description }}</p>
                            <div class="full">
                                <div class="cover overlay cover-image-full margin-none">
                                    <div class="ribbon-mark">
                                        <span class="caret {{ ribbon_mark_class }}"></span>
                                        <span class="text">{{ ribbon_mark_text }}</span>
                                    </div>
                                    <a href="{{ details_url }}" class="thumb" data-height="150px">
                                        <img src="{{ image }}" alt="image" class="img-responsive">
                                    </a>
                                </div>
                                <div class="list-group margin-none">
                                    <div class="list-group-item">
                                        <a href="{{ details_url }}" class="btn btn-primary btn-circle pull-right">
                                            <i class="fa fa-shopping-cart"></i>
                                        </a>
                                        <h5 class="text-uppercase margin-bottom-none">Lorem ipsum dolor</h5>
                                        <strong class="text-primary">&euro;{{ price }}</strong>
                                    </div>
                                    <div class="list-group-item bg-grey-100">
                                        <i class="fa fa-fw icon-home-fill-1"></i> Agency
                                    </div>
                                </div>
                            </div>
                        </div>
                    </script>
                    <script id="real-estate-map-pop_home" type="text/x-handlebars-template">
                        <div>
                            <div class="full">
                                <div class="cover cover-image-full margin-none">
                                    <div class="ribbon-mark">
                                        <span class="caret {{ ribbon_mark_class }}"></span>
                                        <span class="text">{{ ribbon_mark_text }}</span>
                                    </div>
                                    <a href="{{ details_url }}" class="thumb" data-height="150px">
                                        <img src="{{ image }}" alt="image" class="img-responsive">
                                    </a>
                                </div>
                            </div>
                            <div class="text-center">
                                <h4 class="text-primary margin-bottom-none">{{ title }}</h4>
                                <p class="h5 text-muted">{{ location }}</p>
                            </div>
                        </div>
                    </script>
                    <script id="real-estate-map-pop_profile" type="text/x-handlebars-template">
                        <div class="text-center">
                            <p>
                                <img src="{{ image }}" alt="" class="img-circle" />
                            </p>
                            <h4><a href="{{ details_url }}" class="text-grey-700">{{ name }}</a>
                            </h4>
                            <a href="mailto:{{ email }}">{{ email }}</a>
                            <br/>
                            <p class="text-muted"><i class="fa fa-user fa-fw"></i>Agent <i class="fa fa-home fa-fw"></i>{{ no_properties }} Properties</p>
                        </div>
                    </script>
                    <script id="real-estate-map-pop_icon" type="text/x-handlebars-template">
                        <div>
                            <div class="text-center">
                                <div class="h1 text-grey-300">
                                    <i class="{{ inner_icon }}"></i>
                                </div>
                                <p><a href="{{ details_url }}" class="h4 text-primary">{{ name }}</a>
                                </p>
                                <p>{{ location }}</p>
                            </div>
                        </div>
                    </script>
                    <script id="tpl-edit" type="text/x-handlebars-template">
                        <div>
                            <div class="form-group">
                                <label for="state">State:</label>
                                <input id="state" disabled class="form-control" type="text" value="{{ state }}" />
                            </div>
                            <div class="form-group">
                                <label for="country">Country:</label>
                                <input id="country" disabled class="form-control" type="text" value="{{ country }}" />
                            </div>
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input id="address" disabled class="form-control" type="text" value="{{ address }}" />
                            </div>
                            <div class="form-group">
                                <button type="button" id="map-delete-marker" data-id="{{ id }}" class="btn btn-danger btn-circle"><i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Sidebar component with st-effect-1 (set on the toggle button within the navbar) -->
<div class="sidebar right sidebar-size-xs-1 sidebar-size-lg-48pc sidebar-size-40pc sidebar-offset-0 sidebar-skin-white" id=sidebar-agent data-overlay=true>
    <div data-scrollable>
        <h3 class="category">Contact Agent</h3>
        <div class="sidebar-block">
            <div class="row">
                <div class="col-lg-8">
                    <form action="">
                        <div class="form-group form-control-default required">
                            <label for="fullname">Full Name</label>
                            <input type="text" placeholder="Your Full Name" class="form-control" id="fullname" />
                        </div>
                        <div class="form-group form-control-default required">
                            <label for="phone">Phone</label>
                            <input type="text" placeholder="Contact Phone" class="form-control" id="phone" />
                        </div>
                        <div class="form-group form-control-default required">
                            <label for="email">Email Address</label>
                            <input type="text" placeholder="Enter your Email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="action">I would like to:</label>
                            <select name="enquiry_type" id="action" class="selectpicker">
                                <option value="1">Rent</option>
                                <option value="2">Buy</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <a data-toggle="sidebar-menu" class="btn btn-default" href="#sidebar-agent"><i class="fa fa-times fa-fw"></i>Cancel</a>
                    </form>
                </div>
                <div class="col-md-4 visible-lg text-center">
                    <div class="profile">
                        <img src="images/people/110/woman-3.jpg" alt="people" class="img-circle" />
                        <h4 class="sidebar-heading">Michelle D.</h4>
                    </div>
                    <ul>
                        <li>+1 301 38214</li>
                        <li><a href="#" class="sidebar-link">contact@mosaicpro.biz</a>
                        </li>
                        <li><a href="#" class="sidebar-link">Visit website</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- sidebar effects OUTSIDE of st-pusher: -->

<!-- st-effect-1, st-effect-2, st-effect-4, st-effect-5, st-effect-9, st-effect-10, st-effect-11, st-effect-12, st-effect-13 -->
<!-- content push wrapper --><div class="st-pusher">

<!-- sidebar effects INSIDE of st-pusher: -->

<!-- st-effect-3, st-effect-6, st-effect-7, st-effect-8, st-effect-14 -->
<!-- this is the wrapper for the content --><div class="st-content">

<!-- extra div for emulating position:fixed of the menu -->
<div class="st-content-inner padding-top-none" id="content">
<div id="carousel-example-generic" class="carousel slide cover overlay overflow-hidden margin-bottom-none max-height-500" data-ride="carousel">
    <div class="ribbon-mark large">
        <span class="caret caret-primary"></span>
        <span class="text">&dollar;<?php echo number_format($prop['price'],2); ?></span>
    </div>
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="images/photodune-3979102-superb-backyard-xs.jpg" alt="First slide" width="100%">
        </div>
        <div class="item">
            <img src="images/photodune-3979102-superb-backyard-xs.jpg" alt="Second slide" width="100%">
        </div>
        <div class="item">
            <img src="images/photodune-3979102-superb-backyard-xs.jpg" alt="Third slide" width="100%">
        </div>
    </div>
    <div class="overlay overlay-bg-black">
        <div class="v-bottom">
            <div class="jumbotron bg-transparent margin-none">
                <h1 class="text-h1 margin-none"><?php echo $prop['name']; ?></h1>
                <p class="lead">Frana Supila 12, Ploce, 20000 Dubrovnik, Croatia</p>
            </div>
        </div>
        <div class="v-bottom">
            <div class="pull-left text-h5">
                <span class="fa fa-fw fa-star text-yellow-800"></span>
                <span class="fa fa-fw fa-star text-yellow-800"></span>
                <span class="fa fa-fw fa-star text-yellow-800"></span>
                <span class="fa fa-fw fa-star text-yellow-800"></span>
                <span class="fa fa-fw fa-star-o"></span>
            </div>
            <div class="pull-right text-h5">
                <i class="fa fa-fw fa-heart text-pink-500"></i> <span class="text-white">35 loved this</span>
            </div>
        </div>
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
<div class="property-meta">
    <ul>
        <li class="property-meta-item"><i class="fa fa-fw icon icon-home-2"></i> House</li>
        <li class="property-meta-item"><i class="fa fa-fw icon icon-bed"></i> 3 Bedrooms</li>
        <li class="property-meta-item"><i class="fa fa-fw icon icon-toilet"></i> 1 Bathrooms</li>
    </ul>
</div>
<div class="container-fluid">
<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Description</h4>
    </div>
    <div class="panel-body">
        <?php echo $prop['description'] ?>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Facilities</h4>
    </div>
    <div class="panel-body">
        <div class="row">
            <div class="col-sm-4 col-xs-6">
                <ul class="property-facilities">
                    <li><i class="icon icon-wifi-2 primary"></i> Internet</li>
                    <li><i class="icon icon-shovel"></i> Garden</li>
                    <li><i class="md md-directions-car"></i> Garage</li>
                    <li><i class="md md-directions-bus"></i> Bus</li>
                </ul>
            </div>
            <div class="col-sm-4 col-xs-6">
                <ul class="property-facilities">
                    <li><i class="md md-local-mall"></i> Mall</li>
                    <li><i class="md md-local-bar"></i> Restaurant</li>
                    <li><i class="md md-local-laundry-service"></i> Washing</li>
                    <li><i class="icon icon-no-smoking"></i> No Smoking</li>
                </ul>
            </div>
            <div class="col-sm-4 hidden-xs">
                <ul class="property-facilities">
                    <li><i class="icon icon-shovel"></i> Garden</li>
                    <li><i class="icon icon-wifi-2"></i> Internet</li>
                    <li><i class="md md-directions-car"></i> Garage</li>
                    <li><i class="md md-directions-bus"></i> Bus</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<h4>Comments</h4>
<form>
    <div class="form-group input-group">
        <input type="text" class="form-control" placeholder="Your comment ..">
                                <span class="input-group-btn">
                <button class="btn btn-primary" type="button"><i class="fa fa-plus"></i></button>
            </span>
    </div>
</form>
<div class="panel panel-default">
    <div class="panel-body">
        <div class="media">
            <a class="pull-left" href="">
                <img class="media-object" src="images/people/50/guy-2.jpg" alt="people" />
            </a>
            <div class="media-body">
                <small class="text-grey-300 pull-right">2 minutes ago</small>
                <h5 class="media-heading">Andrew B.</h5>
                <p class="margin-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores doloremque nulla omnis perspiciatis repudiandae sit suscipit temporibus vitae voluptates?</p>
            </div>
        </div>
    </div>
</div>
<div class="comment-reply">
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="media">
                <a class="pull-left" href="">
                    <img class="media-object" src="images/people/50/woman-5.jpg" alt="people" />
                </a>
                <div class="media-body">
                    <small class="text-grey-300 pull-right">2 hours ago</small>
                    <h5 class="media-heading">Jane D.</h5>
                    <p class="margin-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere laborum nam numquam quia tempora.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-body">
        <div class="media">
            <a class="pull-left" href="">
                <img class="media-object" src="images/people/50/guy-1.jpg" alt="people" />
            </a>
            <div class="media-body">
                <small class="text-grey-300 pull-right">1 hour ago</small>
                <h5 class="media-heading">Dave P.</h5>
                <p class="margin-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos quidem quis! Alias et hic nemo reprehenderit, repudiandae totam ut.</p>
            </div>
        </div>
    </div>
</div>
<h4>Related properties</h4>
<div class="owl-basic" data-items="4" data-items-desktop="3" data-items-desktop-small="2">
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-primary"></span>
                <span class="text">Sale</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                        <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-378874-real-estate-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Property for sale</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;277,028.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-home-fill-1"></i> Agency
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i>
                    Details</a>
            </div>
        </div>
    </div>
</div>
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-default"></span>
                <span class="text">Sale</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                        <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-195203-houses-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Property for sale</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;82,331.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-home-fill-1"></i> Agency
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i>
                    Details</a>
            </div>
        </div>
    </div>
</div>
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-default"></span>
                <span class="text">Sale</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                        <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-196089-house-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Property for sale</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;81,662.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-user-1"></i> Individual
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i>
                    Details</a>
            </div>
        </div>
    </div>
</div>
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-primary"></span>
                <span class="text">Rent</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                    <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-197173-residential-home-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Residential Home</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;132,021.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-user-1"></i> Individual
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i> Details</a>
            </div>
        </div>
    </div>
</div>
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-default"></span>
                <span class="text">Sale</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                    <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-2238345-apartments-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Appartments</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;187,285.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-user-1"></i> Individual
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i> Details</a>
            </div>
        </div>
    </div>
</div>
<div class="item">
    <div class="panel panel-default">
        <div class="cover hover overlay margin-none">
            <div class="ribbon-mark">
                <span class="caret caret-primary"></span>
                <span class="text">Rent</span>
            </div>
            <a href="property.html" class="overlay overlay-full overlay-bg-black overlay-hover">
                                            <span class="v-center">
                    <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                            </span>
            </a>
            <a href="property.html">
                <img src="images/photodune-3979102-superb-backyard-xs.jpg" alt="location" class="img-responsive" />
            </a>
        </div>
        <div class="list-group">
            <div class="list-group-item">
                <h5 class="text-uppercase">Superb Backyard</h5>
                <p>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
                <strong class="text-primary">&euro;175,654.00</strong>
            </div>
            <div class="list-group-item">
                <i class="fa fa-fw icon-home-fill-1"></i> Agency
            </div>
            <div class="list-group-item text-center">
                <a href="property.html" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i> Details</a>
            </div>
        </div>
    </div>
</div>
</div>

<!-- // END .owl-basic -->
</div>
</div>

<!-- /st-content-inner -->
</div>

<!-- /st-content -->
</div>

<!-- /st-pusher -->
