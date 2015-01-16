<div class="owl-basic" data-items="5" data-items-desktop="3" data-items-desktop-small="2">
<?php foreach($data as $prop) :?>
    <div class="item">
        <div class="panel panel-default">
            <div class="cover hover overlay margin-none">
                <div class="ribbon-mark">
                    <span class="caret caret-primary"></span>
                    <span class="text">Sale</span>
                </div>
                <a href="property.php?id=<?php echo $prop['id'];?>" class="overlay overlay-full overlay-bg-black overlay-hover">
                                        <span class="v-center">
                        <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>
                                        </span>
                </a>
                <a href="property.php?id=<?php echo $prop['id'];?>">
                    <img src="images/photodune-378874-real-estate-xs.jpg" alt="location" class="img-responsive" />
                </a>
            </div>
            <div class="list-group">
                <div class="list-group-item">
                    <h5 class="text-uppercase"><?php echo $prop['name'] ?></h5>
                    <p>
                        <span class="fa fa-fw fa-star text-yellow-800"></span>
                        <span class="fa fa-fw fa-star text-yellow-800"></span>
                        <span class="fa fa-fw fa-star text-yellow-800"></span>
                        <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                        <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    </p>
                    <strong class="text-primary">&dollar;<?php echo number_format($prop['price'],2) ?></strong>
                </div>
                <div class="list-group-item">
                    <i class="fa fa-fw icon-home-fill-1"></i> Agency
                </div>
                <div class="list-group-item text-center">
                    <a href="property.php?id=<?php echo $prop['id'];?>" class="btn btn-primary"><i class="fa fa-fw fa-shopping-cart"></i>
                        Details</a>
                </div>
            </div>
        </div>
    </div>
<?php endforeach; ?>
</div>
