<template>
    <ul class="menu">
    <li class="menu-item">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-clock-o" aria-hidden="true"></i></span></div><a href="!#">Real-Time</a></li>
    <li class="menu-item selected">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-user" aria-hidden="true"></i></span></div><a href="!#">Audience</a>
        <ul class="menu">
            <li class="menu-item"><a href="!#">Overview</a></li>
            <li class="menu-item"><a href="!#">Active Users</a></li>
            <li class="menu-item"><a href="!#">Lifetime Value <sup>BETA</sup></a></li>
            <li class="menu-item"><a href="!#">Cohort Analytics <sup>BETA</sup></a></li>
        </ul>
    </li>
    <li class="menu-item">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-share-alt" aria-hidden="true"></i></span></div><a href="!#">Acquisition</a></li>
</ul>
</template>

<script>

export default {
  name: 'SidebarComponent'
}
</script>
