<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Google Fonts and main.css will be loaded via functions.php -->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> data-node-id="desktop:46-304, laptop:139-6238, mobile:139-7812">
    <?php wp_body_open(); ?>

    <!--
        HEADER SECTION
        Corresponds to Figma's "Header" frame (ID 60:3125).
        Contains the top promotional banner and the main navigation bar.
    -->
    <header class="page-header" data-node-id="desktop:60-3125, laptop:139-6239, mobile:139-7903">
        <!-- Top Promotional Banner (ID 60:3094) -->
        <div class="top-banner" data-node-id="desktop:60-3094, laptop:139-6240, mobile:139-7837">
            <p data-node-id="desktop:60-3084, laptop:139-6241, mobile:139-7838">✨Discover Your Dream Property with Estatein</p>
            <a href="#" class="text-button" data-node-id="desktop:60-3085, laptop:139-6241, mobile:139-7838">Learn More</a>
            <button class="icon-button close-banner-btn" aria-label="Close Banner" data-node-id="desktop:60-3099, laptop:139-6241, mobile:139-7838">
                <div class="icon-wrapper">
                    <!-- 'X' icon SVG would go here -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
            </button>
        </div>

        <!-- Main Navigation Bar (ID 60:3124) -->
        <div class="container">
            <nav class="main-navigation" data-node-id="desktop:60-3124, laptop:139-6306, mobile:139-7815">
                <!-- Site Logo / same as footer (ID 60:3100) -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" data-node-id="desktop:60-3100, laptop:139-6307, mobile:139-7822">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/svg/logo.svg" alt="<?php bloginfo('name'); ?> Logo" class="logo-image">
                </a>

                <!--
                    MOBILE NAVIGATION TOGGLE
                    This button is typically hidden on desktop/laptop and shown on mobile.
                    It controls the visibility of the 'nav-menu' list.
                -->
                <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" aria-label="Open Menu" data-node-id="mobile:139-7820">
                    <span class="sr-only">Menu</span>
                    <div class="icon-wrapper">
                        <!-- Hamburger icon SVG/image would go here -->
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66663 14H23.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66663 7H23.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66663 21H23.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </button>

                <!--
                    PRIMARY NAVIGATION MENU (ID 60:3115)
                    This list is typically shown on desktop/laptop and hidden by default on mobile,
                    to be revealed when the toggle is clicked.
                -->
                <div class="nav-menu-container" data-node-id="desktop:60-3115, laptop:139-6324">
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'nav-menu',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ) );
                    ?>
                </div>

                <!-- Contact Us Button (ID 60:3122) -->
                <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="button nav-contact-button" data-node-id="desktop:60-3122, laptop:139-6322">Contact Us</a>
            </nav>
        </div>
    </header>