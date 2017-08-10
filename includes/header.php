<header>
    <div class="logo">
        <img src="images/logo.png">
    </div>
    <nav class="primary">
        <div id="mobile-trigger"><a href="#" onclick="$(this).parent().siblings('ul').slideToggle(); console.log('test'); return false;">
                <?php include "images/hamburger.svg"?></a></div>
        <ul>
            <li class="active">
                <a href="#">Dashboard</a>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li class="active"><a href="#">Business Overview</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Reports</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Sign In</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Classes</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Workshops</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Appointments</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Client Home</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Retail</a>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div class="lower"></div>
</header>