<?php

function estatein_theme_setup() {
    // Enable automatic title tag management
    add_theme_support( 'title-tag' );

    // Register navigation menus
    register_nav_menus( array(
        'primary'      => __( 'Primary Menu', 'estatein' ),
        'footer_one'   => __( 'Footer Column 1', 'estatein' ),
        'footer_two'   => __( 'Footer Column 2', 'estatein' ),
        'footer_three' => __( 'Footer Column 3', 'estatein' ),
        'footer_four'  => __( 'Footer Column 4', 'estatein' ),
        'footer_five'  => __( 'Footer Column 5', 'estatein' ),
    ) );
}
add_action( 'after_setup_theme', 'estatein_theme_setup' );

function estatein_enqueue_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap', array(), null );

    // Enqueue your main stylesheet
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/ai_main.css', array(), '1.0' );

    // Enqueue your main javascript file
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/ai_main.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'estatein_enqueue_scripts' );