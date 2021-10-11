<?php
/**
 * Template Name: CRM Page
 */

get_header();
get_sidebar();

?>
<main class="flex justify-center w-10/12 p-5 bg-white">
    <section class="main-content w-full">
        <?php get_template_part('./template-parts/page-content') ?>
    </section>
</main>

<?php get_footer(); ?>