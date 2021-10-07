<?php

function JwR_Alea_dependencies()
{
    if (!function_exists('validate_JwR_Theme'))
        echo '<div class="error"><p>' . __('Atención: El tema Alea requiere del plugin JwR-Alea-CRM', 'JwR-Alea') . '</p></div>';
}
add_action('admin_notices', 'JwR_Alea_dependencies');

// function jwr_alea_theme_enqueue_styles() {

//     $parent_style = 'parent-style';
//     $parent_style = 'parent-style-add';
   
//     wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
//     wp_enqueue_style( $parent_style, get_template_directory_uri() . '/assets/css/style.css' );
//     wp_enqueue_style( 'child-style',
//     get_stylesheet_directory_uri() . '/style.css',
//     array( $parent_style ),
//     wp_get_theme()->get('Version')
//     );
//     wp_enqueue_style( 'child-style-add',
//     get_stylesheet_directory_uri() . '/assets/css/style.css',
//     array( $parent_style ),
//     wp_get_theme()->get('Version')
//     );
//    }
//    add_action( 'wp_enqueue_scripts', 'jwr_alea_theme_enqueue_styles' );

function jwr_alea_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style-add',
    get_stylesheet_directory_uri() . '/assets/css/style.css',
    array( 'page-style-css' ),
    wp_get_theme()->get('Version')
    );
}
   add_action( 'wp_enqueue_scripts', 'jwr_alea_theme_enqueue_styles' );


    function add_jwr_alea_theme_scripts()
{
    wp_enqueue_script('child-script', get_stylesheet_directory_uri() . '/assets/js/scripts.js');
}
add_action('wp_enqueue_scripts', 'add_jwr_alea_theme_scripts');


function alea_register_sidebar()
{
    register_sidebar(
        array(
            'id'            => 'lateral',
            'name'          => __('Sidebar Principal de la barra lateral'),
            'description'   => __('Un sidebar pensado para agregar un menu especifico.'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        )
    );
}
add_action('widgets_init', 'alea_register_sidebar');


function register_alea_menu()
{
    register_nav_menus(
        array(
            'lateral-menu' => __('Menu lateral'),
        )
    );
}
add_action('init', 'register_alea_menu');

wp_register_style( 'Tailwindcss', 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' );
wp_enqueue_style('Tailwindcss');
