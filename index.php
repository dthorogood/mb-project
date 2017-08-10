<?php
include 'includes/head.php';
include 'includes/header.php';

?>
<main>
    <aside>
        <div class="new-program">
            <a href="#" class="icon" onclick="showNewProgramForm();">+</a>
            New Program
        </div>
        <div class="cancel">
            <a href="#" class="icon" onclick="cancelNewProgramForm();"><?php echo file_get_contents("images/ban.svg"); ?></a>
            Cancel
        </div>
    </aside>
    <section id="main-content">
        <div id="charts"><?php include 'includes/spinner.php';?></div>
        <div id="all-programs">
            <table>
                <thead>
                <tr>
                    <th>All Programs</th>
                    <th>Monthly Sales</th>
                    <th>Monthly Attendance</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </section>
    <section id="injected-content"></section>
</main>



<?php
include 'includes/footer.php';
?>