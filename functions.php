<?php

    require_once locate_template('/functions/admin.php');
    require_once locate_template('/functions/extras.php');
    require_once locate_template('/functions/cleanup.php');
/*  ==========================================================================
     SCRIPTS, STYLESHEETS, AND FAVICONS
    ========================================================================== */

/*   Frontend Enqueuer
    --------------------------------------------------------------------------  */

    function frontend_enqueuer() {

        wp_enqueue_style( 'style', get_stylesheet_uri(), null, '1.0', 'all' );
        wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/scripts/libraries/modernizr.js', null, '2.8.3', true );
        wp_enqueue_script( 'global', get_template_directory_uri() . '/scripts/site/global.js', array('jquery'), '1.0', true );

        /**
         * Localize site URLs for use in JavaScripts
         * Usage: SiteInfo.theme_directory + '/scripts/widget.js'
         */
        $site_info = array(
            'homeUrl'        => get_home_url(),
            'themeDirectory' => get_template_directory_uri(),
            'theTitle'       => get_the_title()
        );
        wp_localize_script( 'global', 'SiteInfo', $site_info );
    }
    add_action( 'wp_enqueue_scripts', 'frontend_enqueuer' );
?>
