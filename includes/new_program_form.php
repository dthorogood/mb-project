<form id="new-program-form">
    <h2>New Program</h2>
    <label for="program-type">Program Type</label>
    <select id="program-type" name="program-type">
        <option value="count_series">Count Series</option>
        <option value="time_series">Time Series</option>
        <option value="membership">Membership</option>
    </select>

    <label for="program-name">Program Name</label>
    <input id="program-name" name="program-name" type="text">

    <label for="allow-online-scheduling">Allow online scheduling</label>
    <input id="allow-online-scheduling" name="allow-online-scheduling" type="checkbox">

    <label for="default-capacity">Default capacity</label>
    <input id="default-capacity" name="default-capacity" type="text">

    <select id="tabs" name="tabs" multiple>
        <option value="classes">Classes</option>
        <option value="appointments">Appointments</option>
        <option value="workshops">Workshops</option>
        <option value="outside">Outside</option>
        <option value="inside">Inside</option>
        <option value="gym">Gym</option>
    </select>
    <input type="submit" class="button" value="Create Program">
</form>