<?php

function JwR_Alea_dependencies()
{
    if (!function_exists('validate_JwR_Theme'))
        echo '<div class="error"><p>' . __('Atención: El tema Alea requiere del plugin JwR-Alea-CRM', 'JwR-Alea') . '</p></div>';
}
add_action('admin_notices', 'JwR_Alea_dependencies');


function add_jwr_alea_theme_styles()
{
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('page-style', get_template_directory_uri() . '/assets/css/style.css');
}
add_action('wp_enqueue_scripts', 'add_jwr_alea_theme_styles');

function add_jwr_alea_theme_scripts()
{
    wp_enqueue_script('page-scripts', get_template_directory_uri() . '/assets/js/scripts.js');
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
// $term = get_term_by('name', 'CRM Pages', 'nav_menu');
// $menu_id = $term->term_id;
// if($menu_id != 0){
//     $locations = get_theme_mod('nav_menu_locations');
//     $locations['lateral-menu'] = $menu_id;
//     set_theme_mod('nav_menu_locations', $locations);
// }
