<?php

function JwR_Alea_dependencies()
{
    if (!function_exists('validate_JwR_Theme'))
        echo '<div class="error"><p>' . __('Atención: El tema Alea requiere del plugin JwR-Alea-CRM', 'JwR-Alea') . '</p></div>';
}
add_action('admin_notices', 'JwR_Alea_dependencies');
